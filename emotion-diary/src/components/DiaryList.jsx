import Button from "./Button";
import "./DiaryList.css"
import DirayItem from "./Diaryitem";
import { useNavigate } from "react-router-dom";

const DiaryList = () => {
  const nav = useNavigate();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option>최신 순</option>
          <option>오래된 순</option>
        </select>
        <Button
          onClick={() => nav(`/new`)}
          text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="list_wrapper">
        <DirayItem />
      </div>
    </div>
  );
}
export default DiaryList;