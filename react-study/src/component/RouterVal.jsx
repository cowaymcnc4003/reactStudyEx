import { useParams } from "react-router-dom";

const RouterVal = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      RouterVal
    </div>
  );
};

export default RouterVal;