import React from "react";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return (
    <div className="card p-3">
      <h5>Friends List</h5>
      <ul className="list-group list-group-flush">
        {friends.map((f) => (
          <li className="list-group-item" key={f.id}>
            {f.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
export default FriendsList;
