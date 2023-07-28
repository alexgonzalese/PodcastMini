import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/nav/navigation";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
