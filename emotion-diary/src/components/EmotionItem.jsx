import "./EmotionItem.css";
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotioItem_on_${emotionId}` : ""}`}>
      <img className="emotion_img" alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem;