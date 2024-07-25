import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  return (
    <div>
      <Header
        title={`기록`}
        leftChild={<Button text={"< 뒤로 가기"} />}
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  );
}

export default Diary;