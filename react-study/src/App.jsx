// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartComponent from './component/StartComponent'
import Home from './component/Home'
import Main from './component/Main'
import RouterVal from './component/RouterVal'
import NotPound from './component/NotPound'
import ListComponent from './component/ListComponent'
import { createContext, useEffect, useRef, useState } from 'react'

export const UserInfoStateContext = createContext();
export const UserInfoDispatchContext = createContext();

function App() {
  const [userListArr, setUserListArr] = useState([]);
  const refId = useRef(0);
  useEffect(() => {
    console.log(JSON.stringify(userListArr));
  }, [userListArr]);

  const onCreate = (userInfo) => {
    const newUserInfo =
    {
      id: refId.current++,
      name: userInfo.name,
      birth: userInfo.birth,
      nation: userInfo.nation,
      content: userInfo.content,
    };
    return setUserListArr([newUserInfo, ...userListArr]);
  };
  return (
    <>
      <UserInfoStateContext.Provider value={userListArr}>
        <UserInfoDispatchContext.Provider value={{ onCreate }}>
          <StartComponent propData={"testProp"} />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/main" element={<Main></Main>} />
            <Route path="/routerVal/:id" element={<RouterVal></RouterVal>} />
            <Route path="*" element={<NotPound></NotPound>} />
          </Routes>
          <ListComponent></ListComponent>
        </UserInfoDispatchContext.Provider>
      </UserInfoStateContext.Provider>
    </>
  )
}

export default App
