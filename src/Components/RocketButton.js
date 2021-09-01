import React from 'react';
import PropTypes from 'prop-types';

const RocketButton = (props) => {
  const { id } = props;
  return (
    <button type="button" id={id}>Reserve Rocket</button>
  );
};

RocketButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default RocketButton;
