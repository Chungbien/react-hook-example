import React, { useEffect, useState } from "react";
import { NAME_TRUMP, IMG_TRUMP, NAME_BIDEN, IMG_BIDEN } from "../common";

function Vote(props) {
  const [president, setPresident] = useState(NAME_TRUMP);
  const [imgPresident, setImgPresident] = useState(IMG_TRUMP);

  useEffect(() => {
    if (president === NAME_TRUMP) {
      setImgPresident(IMG_TRUMP);
    } else {
      setImgPresident(IMG_BIDEN);
    }
  }, [president]);

  const handleVote = (value) => {
    if (value === 1) {
      setPresident(NAME_TRUMP);
    } else {
      setPresident(NAME_BIDEN);
    }
  };

  return (
    <div className="col-6">
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={imgPresident} alt="President" />
        <div className="card-body">
          <p className="card-text">Your vote is:</p>
          <p className="card-text">{president}</p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-primary mr-2"
              onClick={() => handleVote(1)}
            >
              Trump
            </button>
            <button className="btn btn-danger" onClick={() => handleVote(2)}>
              Biden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
