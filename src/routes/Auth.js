import AuthForm from 'components/AuthForm';
import { authService, firebaseInstance } from 'fbase';
import React from 'react';

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
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">구글 아이디로 로그인</button>
        <button onClick={onSocialClick} name="github">깃허브 아이디로 로그인</button>
      </div>
    </div>
  );
}


export default Auth;