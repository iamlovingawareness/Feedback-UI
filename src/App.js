import { useState } from "react";
import Header from "./Components/Header";
import Feedbacklist from "./Components/Feedbacklist";

import Feedbackstats from "./Components/Feedbackstats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPages from "./Pages/AboutPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Aboutlink from "./Components/Aboutlink";

function App() {
  const [feedback, setfeedback] = useState();

  const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4();
    setfeedback([newfeedback, ...feedback]);
  };
  const handleDelete = (id) => {
    setfeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <Feedbackstats feedback={feedback} />
                  <Feedbacklist handleDelete={handleDelete} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPages />} />
          </Routes>
          <Aboutlink />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
