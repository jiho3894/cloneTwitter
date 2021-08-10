import { authService } from 'fbase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AccountForm from './AccountForm';

const AuthForm = () => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {target: { name, value }} = event;
    if(name === "email") {
      setEmail(value);
    } else if(name === "password") {
      setPassword(value);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      /*data = await authService.createUserWithEmailAndPassword(email, password);*/
      await authService.signInWithEmailAndPassword(email, password);
    } catch(error) {
      setError(error.message);
    }
  };

  const onLogin = () => {
    history.push("/Home");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          name="email" 
          type="text" 
          placeholder="이메일" 
          required value={email} 
          onChange={onChange}
        />
        <input 
          name="password" 
          type="password" 
          placeholder="비밀번호" 
          required value={password} 
          onChange={onChange}
        />
          <input type="submit" value="로그인"></input>
        {error ? "잘못입력했어" : ""}
      </form>
      <Link to="/Account">계정생성</Link>
    </>
  )
}
export default AuthForm;