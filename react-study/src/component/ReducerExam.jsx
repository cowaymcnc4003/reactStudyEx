import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + action.data;
    case "minus":
      return state - action.data;
  }
}

const ReducerExam = () => {
  const [number, dispath] = useReducer(reducer, 0);
  const onClickAdd = () => {
    dispath({
      type: "increase",
      data: 1,
    })
  }
  const onClickMinus = () => {
    dispath({
      type: "minus",
      data: 1,
    })
  }
  return (
    <div>
      <h4>ReduserExam</h4>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickMinus}>-</button>
      <div>
        {number}
      </div>
    </div>
  );
};

export default ReducerExam;