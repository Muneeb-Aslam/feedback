import {
  faClose,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Feedback, FeedbackContextType } from "../types/feedback";
import { useContext } from "react";
import { FeedbackContext } from "../contexts/feedbackcontext";

interface props {
  item: Feedback;
}

const FeedbackItems:React.FC<props> = ({ item }) => {
  const {onDelete,editFeedback} = useContext(FeedbackContext) as FeedbackContextType;
  return (
    <div className="card">
      <button onClick={() => onDelete(item.id)} className="close">
        <FontAwesomeIcon icon={faClose} size="lg" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FontAwesomeIcon icon={faEdit} size="lg" />
      </button>
      <span className="num-display">{item.rating}</span>
      <span className="text-display">{item.text}</span>
    </div>
  );
};

export default FeedbackItems;
