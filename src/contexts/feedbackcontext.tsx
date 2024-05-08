import { createContext, useEffect, useState } from "react";
import { EditItemType, Feedback, FeedbackContextType } from "../types/feedback";
import FeedbackData from "../data/feedback";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext<FeedbackContextType | null>(null);

const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedback, setFeedback] = useState<Feedback[]>(FeedbackData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<EditItemType>({
    item: { id: "", rating: 0, text: "" },
    edit: false,
  });

  const updateFeedback = async (
    newFeedBack: { rating: number; value: string },
    id: string
  ) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({rating:newFeedBack.rating,text:newFeedBack.value}),
    });
    const data = await response.json();
    const previousData = feedback.filter((itm)=>itm.id!==id)
    setFeedback([...previousData,data])
  };

  const editFeedback = (item: Feedback) => {
    setEdit({
      item,
      edit: true,
    });
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
    const filterList = feedback.filter((item) => item.id !== id);
    setFeedback(filterList);
  };

  const addFeedback = async (newFeedback: {
    rating: number;
    value: string;
  }) => {
    const newItem = {
      id: uuidv4(),
      rating: newFeedback.rating,
      text: newFeedback.value,
    };
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const data = await response.json();
    setFeedback([...feedback, data]);
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch("http://localhost:5000/feedback");
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    };
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        add: addFeedback,
        onDelete: handleDelete,
        isLoading,
        edit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackProvider;
