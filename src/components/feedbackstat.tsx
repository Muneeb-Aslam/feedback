interface props {
  list: Array<{ id: string; rating: number; text: string }>;
}
const FeedbackStat: React.FC<props> = ({ list }) => {
  const average =
    list.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / list.length;

    const toFixed = (n:number, fixed:number) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
    const updatedaverage = toFixed(average,2)
  return (
    <div className="feedback-stats">
      <h4>{list.length} Reviews</h4>
      <h4>Average Rating:{updatedaverage}</h4>
    </div>
  );
};

export default FeedbackStat;
