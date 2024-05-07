import { FunctionComponent, useState } from "react";
import Header from "../components/header";
import FeedbackList from "../components/feedbacklist";
import FeedbackData from "../data/feedback"


const Home: FunctionComponent = () => {
  const [list,setList] = useState(FeedbackData)
  const handleDelete = (id:number)=>{
    const filterList = list.filter((item)=>item.id!==id)
    setList(filterList)
  }
  return (
    <>
      <Header bg="black" color="white" text="FeedBack UI" />
      <div className="container">
        <FeedbackList list={list} onDelete={handleDelete}/>
      </div>
    </>
  );
};

export default Home;
