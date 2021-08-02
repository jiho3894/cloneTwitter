import React, { useEffect, useState } from "react";
import RouterHandle from "components/Router";
import {authService} from "fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
    if(user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    } 
    setInit(true);
  });
  }, []);
  return (
    <>
    {init ? <RouterHandle isLoggedIn={isLoggedIn}/> : "로딩중..."}
    <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
