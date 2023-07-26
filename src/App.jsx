import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/nav/navigation";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </>
  );
}

export default App;
