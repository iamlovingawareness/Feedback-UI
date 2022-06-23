import { useState, useContext } from "react";
import Header from "./Components/Header";
import Feedbacklist from "./Components/Feedbacklist";

import Feedbackstats from "./Components/Feedbackstats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPages from "./Pages/AboutPages";
import { Routes, Route } from "react-router-dom";

import { FeedbackProvider } from "./Context/FeedbackContext";
import Aboutlink from "./Components/Aboutlink";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <Feedbackstats />
                <Feedbacklist />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPages />} />
        </Routes>
        <Aboutlink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
