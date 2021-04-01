import { dbService } from "fbase";
import React, { useState } from "react";

const Home = () => {
  const [qweet, setQweet] = useState("");

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
    </div>
  );
};

export default Home;
