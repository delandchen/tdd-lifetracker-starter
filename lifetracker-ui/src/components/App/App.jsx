import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar.jsx"
import Landing from "./Landing/Landing.jsx"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import LoginPage from "../LoginPage/LoginPage.jsx"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import AuthContext from "components/contexts/auth"
import { Route, Routes, Navigate } from "react-router-dom"
import apiClient from "../../services/apiClient"


export default function App() {
  // States
  const { loggedIn, setLoggedIn} = React.useContext(AuthContext);
  const [fieldError, setFieldError] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken()
    
      if (data) {
        // setUser(data.user)
        setLoggedIn(true);
        }
      if (error) {
        console.error(error);
        }
    }

    const token = localStorage.getItem(apiClient.tokenName)
    apiClient.token = token;
    if (token) {
      fetchUser();
    }
  }, [])

  const handleSignOut = () => {
    apiClient.logoutUser()
    setLoggedIn(false);
  }

  return (
    <div className="app">
      <React.Fragment>
        <Navbar loggedin={loggedIn} handleSignOut={handleSignOut}/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/register" element={< RegistrationPage fieldError={fieldError} setFieldError={setFieldError}/>}/>
          <Route path="/login" element={<LoginPage fieldError={fieldError} setFieldError={setFieldError} />} />
        </Routes>
      </React.Fragment>
    </div>
  )
}
