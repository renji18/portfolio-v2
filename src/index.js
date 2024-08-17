import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>
)
