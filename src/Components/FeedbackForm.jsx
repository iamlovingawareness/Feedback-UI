import React, { useState, useContext, useEffect } from "react";
import Button from "./Shared/Button";
import Card from "./Shared/Card";
import Ratingselect from "./Ratingselect";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = ({ handleAdd }) => {
  const [message, setMessage] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  // console.log(rating, text);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };
  const handleInputChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage("Review cannot be empty");
    } else if (text.trim().split(" ").length < 6) {
      setbtnDisabled(true);
      setMessage("Review should be longer than 6 words");
    } else {
      setbtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };

  // using useEffect hook
  useEffect(() => {
    if (feedbackEdit.edit !== false) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // console.log(text);
  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <Ratingselect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            name="review"
            id="review"
            onChange={handleInputChange}
            value={text}
          />
          <Button
            type={"submit"}
            text="Send"
            version="secondary"
            isDisabled={btnDisabled}
          />
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;
