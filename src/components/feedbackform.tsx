/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import RatingSelect from "./ratingselect";

interface props {
  add: (e: any) => void;
}

const FeedbackForm: React.FC<props> = ({ add }) => {
  const [value, setValue] = useState<string>("");
  const [rating, setRating] = useState<number>(10);
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (value.trim().length > 10) add({ value, rating });
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
      </form>
    </div>
  );
};

export default FeedbackForm;
