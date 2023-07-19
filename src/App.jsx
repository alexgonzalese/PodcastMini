import { useState } from "react";
import "./App.css";
import React from "react";
import SearchCustom from "./components/search/SearchCustom.jsx";
import Card from "./components/podcast/Card";
import withResult from "./data/withResult.json";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/nav/navigation";

function App() {
  const podcasts = withResult.feed.entry;

  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
