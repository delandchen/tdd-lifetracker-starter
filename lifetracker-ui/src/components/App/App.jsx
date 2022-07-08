import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar.jsx"
import Landing from "./Landing/Landing.jsx"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import LoginPage from "../LoginPage/LoginPage.jsx"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import AuthContext from "components/contexts/auth"
import {NutritionContextProvider} from "../../components/contexts/nutrition"
import { Route, Routes, Navigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import Loading from '../Loading/Loading'


export default function App() {
  // States
  const { userContext, processingContext, initializedContext, errorContext } = React.useContext(AuthContext);
  const [ user, setUser ] = userContext;
  const [ isProcessing, setIsProcessing] = processingContext;
  const [ initialized, setInitialized] = initializedContext;
  const [ error, setError ] = errorContext;
  // const [fieldError, setFieldError] = React.useState("");
  // const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      setIsProcessing(true)
      const { data, error } = await apiClient.fetchUserFromToken()
    
      if (data) {
        // setUser(data.user)
        setUser(data);
        setInitialized(true);
        }
      if (error) {
        console.error(error);
        }

        setIsProcessing(false);
    }

    const token = localStorage.getItem(apiClient.tokenName)
    apiClient.token = token;
    if (token) {
      fetchUser();
    }
  }, [])

  const handleSignOut = () => {
    apiClient.logoutUser()
    setInitialized(false);
  }

  return (
    <div className="app">
      <React.Fragment>
        <Navbar initialized={initialized} handleSignOut={handleSignOut}/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/nutrition/*" element={<NutritionPage />}/>
          <Route path="/register" element={< RegistrationPage />}/>
          <Route path="/login" element={(isProcessing) ? <Loading /> : <LoginPage/>} />
        </Routes>
      </React.Fragment>
    </div>
  )
}
