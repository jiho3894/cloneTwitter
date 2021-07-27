import React, { useState } from "react";
import RouterHandle from "components/Router";
import {authService} from "fbase";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <RouterHandle isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
