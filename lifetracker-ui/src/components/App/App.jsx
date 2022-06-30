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
import axios from "axios"


export default function App() {
  // States
  const { loggedIn, setLoggedIn } = React.useContext(AuthContext);
  const [fieldError, setFieldError] = React.useState("");
  const [user, setUser] = React.useState({});

  // API calls and Handlers
  const handleRegistrationPost = async (username, password, email, firstName, lastName) => {
    const user = await axios.post("http://localhost:3001/auth/register", 
    {username: username, password: password, email: email, first_name: firstName, last_name: lastName}).then((res) => {
      setLoggedIn(true);
      return res.data;
    }).catch((err) => {
      console.log(err);
      setFieldError(err.response.data.error.message);
    })

    console.log(user);
    return user;
  };

  const handleLoginPost = async (email, password) => {
    const user = await axios.post("http://localhost:3001/auth/login", 
    {email: email, password: password}).then((res) => {
      setLoggedIn(true);
      return res.data;
    }).catch((err) => {
      console.log(err);
      setFieldError(err.response.data.error.message);
    })
    
    console.log(user);
    return user;
  };

  const handleSignOut = () => {
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
          <Route path="/register" element={< RegistrationPage handleRegistrationPost={handleRegistrationPost} fieldError={fieldError} setFieldError={setFieldError}/>}/>
          <Route path="/login" element={<LoginPage handleLoginPost={handleLoginPost} fieldError={fieldError} setFieldError={setFieldError} />} />
        </Routes>
      </React.Fragment>
    </div>
  )
}
