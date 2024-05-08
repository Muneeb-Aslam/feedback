/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Feedback {
  id: string;
  rating: number;
  text: string;
}

export interface FeedbackContextType{
  feedback:Feedback[];
  add:(e:any)=>void;
  onDelete:(id:string)=>void;
  isLoading:boolean;
  edit:EditItemType;
  editFeedback:(e:Feedback)=>void;
  updateFeedback:(newFeedBack: { rating: number; value: string },id:string)=>void;
}

export interface EditItemType{
  item:Feedback;
  edit:boolean;
}