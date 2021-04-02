import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Qweet from "components/Qweet";
import QweetFactory from "components/QweetFactory";

const Home = ({ userObj }) => {
  const [qweets, setQweets] = useState([]);

  useEffect(() => {
    const getData = dbService.collection("qweets").onSnapshot((snapshot) => {
      const qweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQweets(qweetArray);
    });
    return () => getData();
  }, []);

  return (
    <div>
      <QweetFactory userObj={userObj} />
      <div>
        {qweets.map((qweet) => (
          <Qweet
            key={qweet.id}
            qweetObj={qweet}
            isOwner={qweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
