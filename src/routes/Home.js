import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [qweet, setQweet] = useState("");
  const [qweets, setQweets] = useState([]);

  useEffect(() => {
    dbService.collection("qweets").onSnapshot((snapshot) => {
      const qweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQweets(qweetArray);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await dbService.collection("qweets").add({
      text: qweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });

    setQweet("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setQweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={qweet}
          type="text"
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Qweet" />
      </form>
      <div>
        {qweets.map((qweet) => (
          <div key={qweet.id}>
            <h4>{qweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
