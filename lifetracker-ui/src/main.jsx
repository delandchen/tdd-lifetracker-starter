import React from "react"
import ReactDOM from "react-dom"
import { App } from "components"
import "./globals.css"
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/contexts/auth"


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
