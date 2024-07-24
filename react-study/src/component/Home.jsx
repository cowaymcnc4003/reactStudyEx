// import { useRef } from "react";

import { useRef, useState } from "react";

const Home = () => {
  const [increaseNumber, setIncreaseNumber] = useState(0);
  const onClickEventHandler = () => {
    setIncreaseNumber(increaseNumber + 1);
    console.log('state 증가 클릭됨');
  };
  const onChangeEventHandler = () => {
    console.log('변경됨');
  };

  const onClickEventHandlerRefIncrease = () => {
    inputChkTest.current = inputChkTest.current + 1;
    console.log('ref 증가 클릭됨');
  };
  const inputChkTest = useRef(0);
  const inputRef = useRef();

  console.log('state값' + increaseNumber);
  console.log('ref값' + inputChkTest.current);
  return (
    <div>
      <h4>useState useRef</h4>
      <div>
        <button onClick={onClickEventHandler}>state값 +</button>
        <button onClick={onClickEventHandlerRefIncrease}>Ref값 +</button>
        <input ref={inputRef} onChange={onChangeEventHandler} type="text" />
        <button onClick={() => {
          if (inputChkTest.current >= 5) {
            console.log('포커스됨');
            inputRef.current.focus();
          }
        }}>눌렀을떄 state상태값이 5이상 이면 input 포커스</button>
        <div>{`useState상태 ${increaseNumber}`}</div>
        <div>{`useRef상태 ${inputChkTest.current}`}</div>
      </div>
    </div>
  );
};

export default Home;