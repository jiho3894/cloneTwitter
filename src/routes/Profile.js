import { authService } from 'fbase';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({ refreshUser, userObj }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const { target : {value} } = event;
    setNewDisplayName(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  }

  return(
    <>
      <form onSubmit={onSubmit} >
        <input 
        onChange={onChange} value={newDisplayName} type="text" placeholder="Display name" />
        <input  type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>로그아웃</button>
    </>
  );
};

export default Profile;