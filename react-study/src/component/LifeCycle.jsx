import { useEffect, useRef, useState } from "react";

const LifeCycle = ({ message }) => {
  console.log(message);

  // add 값 사이드 이펙트 확인
  const [add, setAdd] = useState(0);
  useEffect(() => {
    console.log('add 의존성 주입 useEffect' + add);
  }, [add]);

  const isMount = useRef(false);

  //마운트
  useEffect(() => {
    console.log('마운트');
  }, []);
  //업데이트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    }
    console.log('update');
  }, []);
  //언마운트
  useEffect(() => {
    return () => {
      console.log('언마운트');
    }
  }, []);

  const onClickAdd = () => {
    setAdd(add + 1);
    console.log('클릭' + add);
  }
  return (
    <div>
      <h4>LifeCycle {add}</h4>
      <button onClick={onClickAdd} >+</button>
    </div>
  );
};

export default LifeCycle;