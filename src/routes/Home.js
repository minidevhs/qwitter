import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Qweet from "components/Qweet";
import QweetFactory from "components/QweetFactory";

const Home = ({ userObj }) => {
  const [qweets, setQweets] = useState([]);

  useEffect(() => {
    const getData = dbService
      .collection("qweets")
      .orderBy("createdAt", "desc") // qweets 내림차순 정렬
      .onSnapshot((snapshot) => {
        const qweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQweets(qweetArray);
      });
    return () => getData();
  }, []);

  return (
    <div className="container">
      <QweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
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
