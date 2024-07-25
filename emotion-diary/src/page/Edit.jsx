import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const nav = useNavigate();

  return (<div>
    <Header title={"일기 수정하기"}
      leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} />}
    />
    <Editor />
  </div>);
}

export default Edit;