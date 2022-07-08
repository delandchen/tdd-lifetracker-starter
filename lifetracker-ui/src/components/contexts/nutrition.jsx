import { createContext, useState, useEffect, useContext} from "react";
import AuthContext from "./auth";
import apiClient from "../../services/apiClient";

const NutritionContext = createContext({});

export const NutritionContextProvider = ({children}) => {
    const { userContext } = useContext(AuthContext);
    const [ user, setUser ] = userContext;
    const [nutrition, setNutrition] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(async () => {
        if (user) {
            setIsLoading(true);
            try {
                const res = await apiClient.getNutrition()
                setNutrition(res?.data?.result)
            }
            catch(err) {
                setError(err);
            }
            setIsLoading(false);
        }   
    }, [])
    

    return (
        <NutritionContext.Provider value={{errorContext: [error, setError], nutritionContext: [nutrition, setNutrition], loadingContext: [isLoading, setIsLoading]}}>
            {children}
        </NutritionContext.Provider>
    )
}

export default NutritionContext;