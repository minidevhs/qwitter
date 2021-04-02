import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
    <div className="qweet">
      {edit ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit} className="container qweetEdit">
                <div className="username_box">
                  <h4 className="username">{qweetObj.creatorName}</h4>
                </div>
                <input
                  onChange={onChange}
                  type="text"
                  placeholder="Edit your qweet"
                  value={newQweet}
                  required
                  autoFocus
                  className="formInput"
                />
                <input type="submit" value="Update Qweet" className="formBtn" />
              </form>
              <span onClick={toggleEditting} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <div className="username_box">
            <h4 className="username">{qweetObj.creatorName}</h4>
          </div>
          <h4>{qweetObj.text}</h4>
          {qweetObj.attachmentUrl && (
            <img src={qweetObj.attachmentUrl} alt="attachment" />
          )}
          {isOwner && (
            <div className="qweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditting}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Qweet;
