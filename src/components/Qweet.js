import React from "react";

const Qweet = ({ qweetObj, isOwner }) => (
  <div>
    <h4>{qweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete Qweet</button>
        <button>Edit Qweet</button>
      </>
    )}
  </div>
);

export default Qweet;
