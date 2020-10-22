import React from 'react'
import "./skeletonUser.css";

const SkeletonUser = () => {
  return (
    <div className="skeletonUsers">
      <div className="userinfo">
        <div className="name"></div>
        <div className="date"></div>
      </div>
      <div className="lockBtn"></div>
    </div>
  );
};

export default SkeletonUser;
