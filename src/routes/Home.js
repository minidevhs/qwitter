import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [qweet, setQweet] = useState("");
  const [qweets, setQweets] = useState([]);

  const getQweets = async () => {
    const dbQweets = await dbService.collection("qweets").get();
    dbQweets.forEach((document) => {
      const qweetObject = {
        ...document.data(),
        id: document.id,
      };
      setQweets((prev) => [qweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getQweets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("qweets").add({
      qweet,
      createdAt: Date.now(),
    });
    setQweet("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setQweet(value);
  };

  console.log(qweets);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type={qweet}
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Qweet" />
      </form>
      <div>
        {qweets.map((qweet) => (
          <div key={qweet.id}>
            <h4>{qweet.qweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
