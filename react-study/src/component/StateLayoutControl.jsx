import { useState } from "react";
import UserInput from "./UserInput";

const StateLayoutControl = ({ onCreate, message }) => {
  console.log(message);
  const [layoutFlg, setLayoutFlg] = useState(false);
  const onClickLayoutControl = () => {
    setLayoutFlg(!layoutFlg);
  }
  return (
    <div>
      <h4>3.useState_layout_control</h4>
      <button onClick={onClickLayoutControl}>layout control</button>
      {layoutFlg ? <div>layoutTrue화면</div> : <div>layoutFalse화면</div>}
      <UserInput onCreate={onCreate} message={"UserInput"}></UserInput>
    </div>
  );
};

export default StateLayoutControl;