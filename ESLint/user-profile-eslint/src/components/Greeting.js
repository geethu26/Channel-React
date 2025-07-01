import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name }) => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  return (
    <div>
      <h2>
        {greeting}, {name}!
      </h2>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
export default Greeting;
