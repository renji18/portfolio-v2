import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import { ReduxProvider } from "./redux/Provider.tsx";
import "devicon/devicon.min.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
);
