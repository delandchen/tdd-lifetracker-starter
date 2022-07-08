import * as React from "react";
import './NutritionForm.css'
import NutritionContext from "components/contexts/nutrition";


export default function NutritionForm({handleSubmit, field, handleOnChange}) {
    const { errorContext } = React.useContext(NutritionContext);
    const [ error, setError ] = errorContext;

    return (
    <div className='nutrition-form'>
        <h1> Create a new record </h1>
        <input type="text" name="name" placeholder='Enter a Name' value={field.name} onChange={handleOnChange}></input>
        <input type="text" name="category" placeholder='Enter a Category' value={field.category} onChange={handleOnChange}></input>
        <input type="number" name="calories" placeholder='Enter Calories' value={field.calories} onChange={handleOnChange}></input>
        <input type="image_url" name="imageUrl" placeholder='Add image url' value={field.imageUrl} onChange={handleOnChange}></input>
        <div className="error">
            {error ? <p className="error"> {error} </p> : null}
        </div>
        <button className="submit-nutrition" onClick={handleSubmit}> Save </button>
    </div>
    )
}