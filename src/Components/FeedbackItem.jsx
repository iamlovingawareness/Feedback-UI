import React, { useContext } from "react";
import Card from "./Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item, reverse }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)}>
        <FaEdit className="edit" color={reverse ? "white" : "purple"} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
