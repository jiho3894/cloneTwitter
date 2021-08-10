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
      await authService.createUserWithEmailAndPassword(email, password);
    } catch(error) {
      setError(error.message);
    }
  };

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
        <input type="submit" value="계정생성"/>
        {error ? "잘못입력했어" : ""}
      </form>
    </>
  )
}
export default AuthForm;