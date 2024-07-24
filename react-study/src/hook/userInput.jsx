import { useState } from "react";

function useInput(data) {
  const [userInfo, setUserInfo] = useState(data);

  const OnChangeHandlerUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }

  return [userInfo, OnChangeHandlerUserInfo];
}

export default useInput;