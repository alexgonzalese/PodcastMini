import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import { usePodcast } from "./hooks/usePodcast";

function App() {
  const { podcasts } = usePodcast();

  return (
    <>
      <BrowserRouter>
        <Navigation podcastsList={podcasts} />
      </BrowserRouter>
    </>
  );
}

export default App;
