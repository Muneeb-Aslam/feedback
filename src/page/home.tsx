/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useState } from "react";
import Header from "../components/header";
import FeedbackList from "../components/feedbacklist";
import FeedbackData from "../data/feedback";
import FeedbackStat from "../components/feedbackstat";
import FeedbackForm from "../components/feedbackform";
import { v4 as uuidv4 } from "uuid"

const Home: FunctionComponent = () => {
  const [list, setList] = useState(FeedbackData);
  const handleDelete = (id: string) => {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  };
  const addFeedback = (newFeedback:{rating:number,value:string})=>{
    const newItem = {
      id:uuidv4(),
      rating:newFeedback.rating,
      text:newFeedback.value,
    }
    setList([...list,newItem])
    
  }
  return (
    <>
      <Header bg="black" color="white" text="FeedBack UI" />
      <div className="container">
        <FeedbackForm add={addFeedback}/>
        <FeedbackStat list={list} />
        <FeedbackList list={list} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Home;
