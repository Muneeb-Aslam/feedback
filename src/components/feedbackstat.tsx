interface props {
  list: Array<{ id: number; rating: number; text: string }>;
}
const FeedbackStat: React.FC<props> = ({ list }) => {
  const average =
    list.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / list.length;

    average.toFixed(1)
  return (
    <div className="feedback-stats">
      <h4>{list.length} Reviews</h4>
      <h4>Average Rating:{average}</h4>
    </div>
  );
};

export default FeedbackStat;
