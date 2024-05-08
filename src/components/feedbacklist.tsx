/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import FeedbackItems from "./feedbackitems";
import { FeedbackContextType } from "../types/feedback";
import { useContext } from "react";
import { FeedbackContext } from "../contexts/feedbackcontext";
import Spinner from "./spinner";

const FeedbackList: React.FC = () => {
  const { feedback, isLoading } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItems item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
