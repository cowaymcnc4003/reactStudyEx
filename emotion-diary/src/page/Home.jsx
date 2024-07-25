import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header
        title={`? 년 ? 월`}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      ></Header>
      <DiaryList />
    </div >
  )
}

export default Home;