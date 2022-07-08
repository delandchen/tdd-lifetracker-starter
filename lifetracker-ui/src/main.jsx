import React from "react"
import ReactDOM from "react-dom"
import { App } from "components"
import "./globals.css"
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/contexts/auth"
import {NutritionContextProvider} from "./components/contexts/nutrition"
import {ActivityContextProvider} from "./components/contexts/activity"


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <NutritionContextProvider> 
    <ActivityContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ActivityContextProvider>
    </ NutritionContextProvider> 
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
