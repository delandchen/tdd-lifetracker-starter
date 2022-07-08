import * as React from 'react'
import { createContext, useState, useContext, useEffect} from "react";
import AuthContext from "./auth";
import NutritionContext from './nutrition';
import apiClient from '../../services/apiClient';

const ActivityContext = createContext({});

export const ActivityContextProvider = ({children}) => {
    const { userContext, initializedContext } = useContext(AuthContext);
    const { nutritionContext } = useContext(NutritionContext)
    const [ nutrition, setNutrition ] = nutritionContext;
    const [ user, setUser ] = userContext;
    const [initialized, setInitialized] = initializedContext;
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState("");
    const [avgCaloriesPerCategory, setAvgCaloriesPerCategory] = useState([]);
    const [totalCaloriesPerDay, setTotalCaloriesPerDay] = useState([])

    useEffect(async () => {
        if (apiClient.token) {
            setIsProcessing(true);
            try {
                const res = await apiClient.getAvgCaloriesPerCategory();
                setAvgCaloriesPerCategory(res?.data?.result);
                console.log("avg cals", avgCaloriesPerCategory);
                const resp = await apiClient.getTotalCaloriesPerDay();
                console.log("total cals", totalCaloriesPerDay);
                setTotalCaloriesPerDay(resp?.data?.result)


            }
            catch(err) {
                setError(err);
            }
            setIsProcessing(false);
        }   
    }, [initialized, user, nutrition])

    // if (isProcessing) {
    //     return (<h1> Is Loading </h1>)
    // }

    return (
        <ActivityContext.Provider value={{ processingContext: [isProcessing, setIsProcessing], errorContext: [error, setError], 
            avgCaloriesPerCategoryContext: [avgCaloriesPerCategory, setAvgCaloriesPerCategory], totalCaloriesPerDayContext: [totalCaloriesPerDay, setTotalCaloriesPerDay]}}>
            {children}
        </ActivityContext.Provider>
    )
}

export default ActivityContext;