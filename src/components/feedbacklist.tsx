/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import FeedbackItems from "./feedbackitems";

interface props {
  list: Array<{ id: number; rating: number; text: string }>;
  onDelete: (id: number) => void;
}
const FeedbackList: React.FC<props> = ({ list, onDelete }) => {
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {list.map((item, index) => (
          <motion.div key={index} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItems item={item} onDelete={onDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
