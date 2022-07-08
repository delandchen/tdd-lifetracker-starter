import * as React from "react";
import './NutritionCard.css'

export default function NutritionCard({nutrition}) {
    return (
        <div className='nutrition-card' key={nutrition.id}>
            <h2 className="nutrition-name"> {nutrition.name} </h2>
            <h2 className="nutrition-calories"> {nutrition.calories} kcal </h2>
            <h2 className="nutrition-category"> {nutrition.category}</h2>
        </div>
    )
}