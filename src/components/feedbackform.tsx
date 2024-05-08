/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import RatingSelect from "./ratingselect";
import { FeedbackContext } from "../contexts/feedbackcontext";
import { FeedbackContextType } from "../types/feedback";

const FeedbackForm: React.FC = () => {
  const { add, edit, updateFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  const [value, setValue] = useState<string>("");
  const [rating, setRating] = useState<number>(10);
  const [msg, setMsg] = useState<string>("");
  
  useEffect(() => {
    if (edit.edit) {
      setRating(edit.item.rating);
      setValue(edit.item.text);
    }
  }, [edit]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.trim().length > 10) {
      setMsg("");
      if (edit.edit) updateFeedback({ value, rating },edit.item.id);
      else add({ value, rating });
    } else setMsg("Review must has length of 10 chars.");
  };
  return (
    <div className="card">
      <form action="">
        <RatingSelect select={(num: any) => setRating(num)} />
        <h2>How Would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
        {msg.length > 0 && <span className="msg">{msg}</span>}
      </form>
    </div>
  );
};

export default FeedbackForm;
