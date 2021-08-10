import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/Home">자유토크</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}님의 프로필</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;