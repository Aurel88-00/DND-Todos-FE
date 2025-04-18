import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosContextProvider } from "./contexts/TodosCtx.context.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </BrowserRouter>
  </StrictMode>
);
