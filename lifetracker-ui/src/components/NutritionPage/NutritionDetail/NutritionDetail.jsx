import * as React from "react";
import './NutritionDetail.css'
import NutritionContext from "../../contexts/nutrition";
import apiClient from "../../../services/apiClient";
import Loading from "../../Loading/Loading";
import NutritionCard from "../NutritionCard/NutritionCard";
import { useParams } from 'react-router-dom'

export default function NutritionDetail() {
    const { errorContext, loadingContext } = React.useContext(NutritionContext);
    const [ error, setError ] = errorContext;
    const [ isLoading, setIsLoading ] = loadingContext;
    const { nutritionId } = useParams();
    const [nutritionItem, setNutritionItem] = React.useState({});

    React.useEffect(async () => {
        setIsLoading(true);
        const {data, error} = await apiClient.getNutritionById(nutritionId);

        if (error) {
            setError(error);
        }
        else {
            setNutritionItem(data.result);
        }
        setIsLoading(false);
    }, [])

    return (
        <div className='nutrition-detail'>
            {(!isLoading && nutritionItem) ? 
            <NutritionCard nutrition={nutritionItem}/>
             : <Loading />}
        </div>
    )
    }