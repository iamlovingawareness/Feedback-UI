import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const Feedbacklist = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item, idx) => (
          <motion.div
            key={uuidv4()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <FeedbackItem
              id={uuidv4()}
              item={item}
              reverse={(idx + 1) % 2 === 0 ? true : false}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* // {feedback.map((item, idx) => {
      //   return (
      //     <FeedbackItem
      //       item={item}
      //       reverse={(idx + 1) % 2 === 0 ? true : false}
      //       handleDelete={handleDelete}
      //     />
      //   );
  */}
    </div>
  );
};

export default Feedbacklist;
