import React from "react";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: "This feedback is coming from context",
      rating: 10,
    },
  ]);
  console.log(feedback);
  return (
    <FeedbackContext.Provider value={feedback}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
