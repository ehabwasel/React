import React from "react";

const FriendProfile = ({ friend }) => {
  return (
    <div className="card" className="card_container">
      <img src={friend.picture.large} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          Name : {friend.name.first} {friend.name.last}
        </h5>
        <p className="card-text">Email : {friend.email}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> country : {friend.location.country}</li>
        <li className="list-group-item">city : {friend.location.city}</li>
        <li className="list-group-item">phone : {friend.phone}</li>
      </ul>
    </div>
  );
};

export default FriendProfile;
