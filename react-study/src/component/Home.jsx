// import { useRef } from "react";

import { useState } from "react";

const Home = () => {
  const [increaseNumber, setIncreaseNumber] = useState(0);
  console.log(increaseNumber);
  const onClickEventHandler = () => {
    setIncreaseNumber(increaseNumber + 1);
    console.log('클릭됨');
  };
  const onChangeEventHandler = () => {
    console.log('변경됨');
  };

  return (
    <div>
      Home
      <div>
        <button onClick={onClickEventHandler}>+</button>
        <input onChange={onChangeEventHandler} type="text" />
      </div>
    </div>
  );
};

export default Home;