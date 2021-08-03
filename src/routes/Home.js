import { dbService } from 'fbase';
import React, { useState } from 'react';

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nweet").add({
      nweet,
      liveTime : Date.now()
    });
    setNweet("");
  }
  const onChange = (event) => {
    const {target : {value}} = event;
    setNweet(value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={nweet} onChange={onChange} placeholder="당신의 상태를 적어주세요" maxLength={100}/>
        <input type="submit" value="Nweet"/>
      </form>
    </div>
  );
}
export default Home;