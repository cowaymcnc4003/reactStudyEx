import { useState } from "react";
import LifeCycle from "./LifeCycle";

const StartComponent = ({ propData }) => {
  console.log(propData);
  const [LifeCycleComponentFlg, setLifeCycleComponentFlg] = useState(false);
  return (
    <div>StartComponent
      <button onClick={() => {
        setLifeCycleComponentFlg(!LifeCycleComponentFlg);
      }}>LifeCycle 컴포넌트 조절</button>
      {LifeCycleComponentFlg ? <div>LifeCycle 해체</div> : <LifeCycle message={"LifeCycle"}></LifeCycle>}
    </div>
  );
};

export default StartComponent;