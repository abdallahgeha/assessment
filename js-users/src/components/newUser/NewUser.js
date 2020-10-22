import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./newUser.css";

const userURL = "http://js-assessment-backend.herokuapp.com/users";

const NewUser = ({ update = false }) => {
  const history = useHistory();
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);
  const [error, setError] = useState("");
  const handlefirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleCheckChange = () => setCheckStatus((checkStatus) => !checkStatus);
  const resetInput = () => {
    setFirstName("");
    setLastName("");
    setCheckStatus(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${userURL}/${id}.json`);
      const data = await res.json();
      return data;
    };

    if (update) {
      getUser().then((user) => {
        if (user) {
          setFirstName(user.first_name);
          setLastName(user.last_name);
          setCheckStatus(user.status === "locked" ? true : false);
        }
      });
    } else {
      setFirstName("");
      setLastName("");
      setCheckStatus(false);
    }
  }, [id, update]);

  const handleSubmit = () => {
    let data = {
      last_name: lastName,
      first_name: firstName,
      status: checkStatus ? "locked" : "active",
    };
    fetch(userURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        resetInput();
        return res.json();
      })
      .then((data) => history.push(`/users/${data.id}`))
      .catch((error) => setError(error.message));
  };

  const handleUpdate = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = JSON.stringify({
      id,
      last_name: lastName,
      first_name: firstName,
      status: checkStatus ? "locked" : "active",
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    fetch(
      `http://js-assessment-backend.herokuapp.com/users/${id}.json`,
      requestOptions
    )
      .then((response) => response.text())
      .then(() => history.push(`/users/${id}`))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="newUser">
      <h2>First Name</h2>
      <input
        onChange={handlefirstNameChange}
        type="text"
        id="firstName"
        value={firstName}
      />
      <h2>Last Name</h2>
      <input
        onChange={handleLastNameChange}
        type="text"
        id="lastName"
        value={lastName}
      />
      <span>
        <input
          name="isLocked"
          type="checkbox"
          checked={checkStatus}
          onChange={handleCheckChange}
        />
        <h4>Locked</h4>
      </span>
      {!update && <button onClick={handleSubmit}>Submit</button>}
      {update && <button onClick={handleUpdate}>Save</button>}
      {error && <p className="errorMsg">{error}</p>}
    </div>
  );
};

export default NewUser;
