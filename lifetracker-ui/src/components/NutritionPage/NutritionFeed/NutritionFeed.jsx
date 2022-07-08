import * as React from "react";
import './NutritionFeed.css';
import NutritionContext from "components/contexts/nutrition";
import NutritionCard from "../NutritionCard/NutritionCard";
import { Link } from 'react-router-dom'

export default function NutritionFeed() {
    const {nutritionContext} = React.useContext(NutritionContext);
    const [nutrition, setNutrition] = nutritionContext;

    return (
        <div className='nutrition-feed'>
            {nutrition ? nutrition.map((item) => (
                <Link to={`/nutrition/id/${item.id}`}>
                <NutritionCard nutrition={item} />
                </ Link>
                )) : <p className='empty-message'> Nothing Here Yet</p>}
        </div>
    )
}