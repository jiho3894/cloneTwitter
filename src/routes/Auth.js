import AuthForm from 'components/AuthForm';
import { authService, firebaseInstance } from 'fbase';
import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  font-size: 13px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width:500px;
  height: 500px;
  background-color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Google = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: white;
  border: 0;
  cursor: pointer;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const GitHub = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: white;
  border: 0;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png");
`;

const Auth = () => {
  const onSocialClick = async (event) => {
    const {target : {name} } = event;
    let provider;
    if(name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if(name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  
  return (
    <Body>
      <Container>
        <AuthForm />
        <div>
            <Google onClick={onSocialClick} name="google"></Google>
            <GitHub onClick={onSocialClick} name="github"></GitHub>
        </div>
      </Container>
    </Body>
  );
}


export default Auth;