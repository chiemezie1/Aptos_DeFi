// src/App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LayoutPage from "./LayoutPage";
import NotFound from "./pages/NotFound";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> 
  );
}

export default App;

