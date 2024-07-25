import "./Viewer.css"

const Viewer = () => {
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wapper emotion_img_wapper_`}>
          <img alt="" />
          <div></div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Viewer;