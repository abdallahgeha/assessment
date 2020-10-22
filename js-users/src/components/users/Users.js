import React, { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./users.css";

const Users = ({ id, firstName, lastName, date, status }) => {
  const lockStatus = status === "active" ? false : true;
  const [lock, setLock] = useState(lockStatus);
  const history = useHistory();

  const handleLock = async () => {
    setLock((lock) => !lock);
  };

  const handleNameClick = () => {
    history.push(`/users/${id}`);
  };

  const formatDate = (date) => {
    const formatedData = date.replace("T", " ").substring(0, date.length - 8);
    return formatedData;
  };

  return (
    <div className="users">
      <div className="userinfo">
        <h2
          onClick={handleNameClick}
          className={classNames({ crossedOut: lock })}
        >{`${firstName} ${lastName}`}</h2>
        <p>{formatDate(date)}</p>
      </div>
      <div
        onClick={handleLock}
        className={classNames("lockBtn", { locked: lock })}
      >
        {lock && (
          <FontAwesomeIcon size="lg" className="icon" icon={["fas", "lock"]} />
        )}
        {!lock && (
          <FontAwesomeIcon
            size="lg"
            className="icon"
            icon={["fas", "lock-open"]}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
