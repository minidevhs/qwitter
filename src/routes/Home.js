import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid"; // 랜덤 id 부여 npm
import React, { useEffect, useState } from "react";
import Qweet from "components/Qweet";

const Home = ({ userObj }) => {
  const [qweet, setQweet] = useState("");
  const [qweets, setQweets] = useState([]);
  const [attachment, setAttachment] = useState();

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
    const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
    const response = await fileRef.putString(attachment, "data_url");
    console.log(response);

    // await dbService.collection("qweets").add({
    //   text: qweet,
    //   createdAt: Date.now(),
    //   creatorId: userObj.uid,
    // });

    // setQweet("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setQweet(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;

    const theFile = files[0];

    // FileReader API (MDN)
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(null);

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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Qweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="attachment" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
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
