import * as React from "react";
import './NutritionNew.css'
import NutritionForm from '../NutritionForm/NutritionForm'
import apiClient from "../../../services/apiClient";
import NutritionContext from "components/contexts/nutrition";
import { useNavigate } from "react-router-dom";

export default function NutritionNew() {
    const { errorContext, nutritionContext } = React.useContext(NutritionContext);
    const [ nutrition, setNutrition] = nutritionContext;
    const [ error, setError ] = errorContext;
    const [field, setField] = React.useState({name:"", category:"", calories:"", imageUrl:""})
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const res = await apiClient.createNutrition({name: field.name, category: field.category, calories: field.calories, image_url: field.imageUrl});
        console.log(res);
        if (res.error) {
            console.log(res);
            setError(res.error);

        }
        else {
            const res = await apiClient.getNutrition()
            setNutrition(res?.data?.result)
            setField({name:"", category:"", calories:"", imageUrl:""})
            setError("");
            navigate('/nutrition')
        }
    
    }

    const handleOnNutritionFormOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setField({...field, [name]: value});
    }

    return (
        <div className='nutrition-new'>
        <NutritionForm handleSubmit={handleSubmit} field={field} handleOnChange={handleOnNutritionFormOnChange}/>
        </div>
    )
}