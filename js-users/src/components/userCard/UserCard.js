import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './userCard.css';

const userURL = "http://js-assessment-backend.herokuapp.com/users";

const UserCard = () => {
  const history = useHistory();
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    const getUser = async (id) => {
      const res = await fetch(`${userURL}/${id}.json`);
      const data = await res.json();
      return data;
    };

    getUser(id).then((user) => {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setCheckStatus(user.status === "locked" ? true : false);
    });
  }, [id]);

  const handleDelete = () => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const url = `http://js-assessment-backend.herokuapp.com/users/${id}.json`;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then(() => history.push(`/`))
      .catch((error) => setError(error.message));
  };

  const handleEdit = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <div className="userCard">
        <div className="userInfo">
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <span>
            <input
              name="isLocked"
              type="checkbox"
              checked={checkStatus}
              disabled={true}
            />
            <h4>Locked</h4>
          </span>
        </div>
        <div className="modify">
          <div className="edit" onClick={handleEdit}>
            <FontAwesomeIcon
              size="2x"
              className="icon"
              icon={["fas", "edit"]}
            />
          </div>
          <div className="delete" onClick={handleDelete}>
            <FontAwesomeIcon
              size="2x"
              className="icon"
              icon={["fas", "trash"]}
            />
          </div>
        </div>
      </div>
      {error && <p className="errorMsg">{error}</p>}
    </>
  );
};

export default UserCard;
