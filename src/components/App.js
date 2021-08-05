import React, { useEffect, useState } from "react";
import RouterHandle from "components/Router";
import {authService} from "fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
    if(user) {
      setUserObj(user);
    } else {
    } 
    setInit(true);
  });
  }, []);
  return (
    <>
    {init ? <RouterHandle isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "로딩중..."}
    </>
  );
}

export default App;
