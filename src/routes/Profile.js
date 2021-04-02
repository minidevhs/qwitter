import { authService, dbService } from "fbase";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

export default ({ userObj }) => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyQweets = async () => {
    const qweets = await dbService
      .collection("qweets")
      .where("creatorId", "==", userObj.uid) // filtering
      .orderBy("createdAt")
      .get();
    console.log(qweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyQweets();
  }, []);

  return (
    <>
      <div>Profile</div>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
