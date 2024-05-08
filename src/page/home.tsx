/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import Header from "../components/header";
import FeedbackList from "../components/feedbacklist";
import FeedbackStat from "../components/feedbackstat";
import FeedbackForm from "../components/feedbackform";

const Home: FunctionComponent = () => {
  
  return (
    <>
      <Header bg="black" color="white" text="FeedBack UI" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStat />
        <FeedbackList />
      </div>
    </>
  );
};

export default Home;
