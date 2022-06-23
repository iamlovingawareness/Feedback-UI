import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Update (23-06-2022) , Inititally I had the callback functions written for the associated components in their scope. Now I will write these functions in the Global Context.

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 1,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 8,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
    {
      id: 4,
      text: "This is feedback item 4",
      rating: 10,
    },
    {
      id: 5,
      text: "This is feedback item 5",
      rating: 10,
    },
    {
      id: 6,
      text: "This is feedback item 6",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //   Add feedback Item to FeedBack List
  const addFeedback = (newfeedback) => {
    newfeedback.id = uuidv4();
    setfeedback([...feedback, newfeedback]);
  };

  //   Delete feedbackItem from feedbackList
  const deleteFeedback = (id) => {
    if (window.confirm(`Do you want to delete Item Number ${id} ?`)) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //   Edit selected feedback Item
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };
  //   Update Feedback
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  //   console.log(feedback);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setfeedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
