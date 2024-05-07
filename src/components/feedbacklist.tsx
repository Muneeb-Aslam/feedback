/* eslint-disable @typescript-eslint/no-explicit-any */
import FeedbackItems from "./feedbackitems";

interface props {
  list: Array<{ id: number; rating: number; text: string }>;
  onDelete: (id:number)=>void;
}
const FeedbackList = ({ list, onDelete }: props) => {
  return list.map((item, index) => (
    <FeedbackItems item={item} key={index} onDelete={onDelete} />
  ));
};

export default FeedbackList;
