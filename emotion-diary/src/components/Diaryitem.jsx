import Button from "./Button";
import "./DiaryItem.css";

const DirayItem = () => {

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_`}>
        <img alt="" />
      </div>
      <div
        className="info_section">
        <div className="created_date">
        </div>
        <div className="content">
        </div>
      </div>
      <div className="button_section">
        <Button
          text={"수정하기"} />
      </div>
    </div>
  );
}

export default DirayItem;