import { useState } from "react";

const UserInput = ({ message }) => {
  console.log(message);
  const [userInfo, setUserInfo] = useState({
    name: '이명한',
    birth: '1989-02-12',
    nation: 'kr',
    content: "안녕하세요",
  });
  // 계속 추가 어려움
  // const OnChangeHandlerName = (e) => {
  //   setUserInfo({
  //     ...userInfo, reference function 이용
  //     'name': e.target.value <-- 항목 추가
  //   });
  // }

  const OnChangeHandlerUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <h4>4.UserInput</h4>
      <div>
        <input name="name" onChange={OnChangeHandlerUserInfo} value={userInfo.name} type="text" />
      </div>
      <div>
        <input name="birth" onChange={OnChangeHandlerUserInfo} value={userInfo.birth} type="date" />
      </div>
      <div>
        <select name="nation" onChange={OnChangeHandlerUserInfo} value={userInfo.nation}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
        </select>
      </div>
      <div>
        <textarea name="content" onChange={OnChangeHandlerUserInfo} value={userInfo.content}></textarea>
      </div>
      <button onClick={() => {
        console.log(JSON.stringify(userInfo));
      }}>userInfo 확인</button>
    </div>
  );
};

export default UserInput;