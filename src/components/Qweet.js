import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Qweet = ({ qweetObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newQweet, setNewQweet] = useState(qweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this qweet?");
    if (ok) {
      await dbService.doc(`qweets/${qweetObj.id}`).delete();
      await storageService.refFromURL(qweetObj.attachmentUrl).delete();
    }
  };

  const toggleEditting = () => {
    setEdit((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`qweets/${qweetObj.id}`).update({
      text: newQweet,
    });
    setEdit(false);
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewQweet(value);
  };

  return (
    <div>
      {edit ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="Edit your qweet"
                  value={newQweet}
                  required
                />
                <input type="submit" value="Update Qweet" />
              </form>
              <button onClick={toggleEditting}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{qweetObj.text}</h4>
          {qweetObj.attachmentUrl && (
            <img
              src={qweetObj.attachmentUrl}
              width="50px"
              height="50px"
              alt="attachment"
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Qweet</button>
              <button onClick={toggleEditting}>Edit Qweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Qweet;
