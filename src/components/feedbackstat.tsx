import { useContext } from "react";
import { FeedbackContext } from "../contexts/feedbackcontext";
import { FeedbackContextType } from "../types/feedback";

const FeedbackStat: React.FC = () => {
  const {feedback} = useContext(FeedbackContext) as FeedbackContextType;
  
  const average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

    const toFixed = (n:number, fixed:number) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
    const updatedaverage = toFixed(average,2)
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{updatedaverage}</h4>
    </div>
  );
};

export default FeedbackStat;
