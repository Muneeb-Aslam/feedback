import {
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  item: { id: number; rating: number; text: string };
  onDelete: (id: number) => void;
}

const FeedbackItems:React.FC<props> = ({ item, onDelete }) => {
  return (
    <div className="card">
      <button onClick={() => onDelete(item.id)} className="close">
        <FontAwesomeIcon icon={faClose} size="lg" />
      </button>
      <span className="num-display">{item.rating}</span>
      <span className="text-display">{item.text}</span>
    </div>
  );
};

export default FeedbackItems;
