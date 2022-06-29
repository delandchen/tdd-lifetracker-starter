import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar.jsx"
import Landing from "./Landing/Landing.jsx"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import LoginPage from "../LoginPage/LoginPage.jsx"
import { Route, Routes } from "react-router-dom"


export default function App() {
  // States
  const [loggedin, setLoggedin] = React.useState(false);

  // API calls and Handlers

  return (
    <div className="app">
      <React.Fragment>
        <Navbar loggedin={loggedin}/>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/register" element={< RegistrationPage />}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </React.Fragment>
    </div>
  )
}
