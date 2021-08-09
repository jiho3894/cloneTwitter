import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from 'components/Nweet';
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweet").orderBy("createAt","desc").onSnapshot((snapshot) => {
    const nweetArray = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweet) => (
          <Nweet 
          key={nweet.id} 
          nweetObj={nweet} 
          isOwner={nweet.creatorId === userObj.uid}/>
        ))}
      </div>
    </div>
  );
};
export default Home;