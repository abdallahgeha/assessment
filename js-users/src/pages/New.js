import React from "react";

import NewUser from "../components/newUser/NewUser";

import "./pages.css";

const New = ({ update = false }) => {
  return (
    <div className="page new">
      <NewUser update={update} />
    </div>
  );
};

export default New;
