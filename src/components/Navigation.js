import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Body = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UL = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const LI = styled.li`
  float: left;
  width: 400px;
  height: 400px;
`;

const Container = styled.div`
  width: 400px;
  height: 250px;
  background-image: url("https://www.pngkey.com/png/full/110-1103031_talking-png-download-face-to-face-talk-png.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container2 = styled.div`
width: 400px;
  height: 250px;
  background-image: url("https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-edit-profile-icon-png-image_4101361.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const SLink = styled(Link)`
  width: 100%;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Navigation = ({ userObj }) => {
  const nickName = userObj.email.split('@');
  return(
  <Body>
    <UL>
      <LI>
        <SLink to="/Home">
          <Container/>
        </SLink>
        <Text>Home</Text>
      </LI>
      <LI>
        <SLink to="/profile">
          <Container2/>
        </SLink>
        <span>{nickName[0]}님의 프로필</span>
      </LI>
    </UL>
  </Body>
)};

export default Navigation;