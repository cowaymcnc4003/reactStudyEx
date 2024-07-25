import Button from "./Button";
import "./Editor.css";

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emtion_list_wrapper">
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea name="content" placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"}></Button>
        <Button text={"작성완료"} type={"POSITIVE"}></Button>
      </section>
    </div>
  );
};

export default Editor;