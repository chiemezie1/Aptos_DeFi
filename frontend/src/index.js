import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletProvider } from './context/WalletProvider.tsx';
import { ThemeProvider }  from "./context/ThemeContext.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <WalletProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </WalletProvider>
  </ThemeProvider>
);

