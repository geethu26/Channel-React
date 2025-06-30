import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
