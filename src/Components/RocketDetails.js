import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';

const RocketDetails = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  return (
    <article className="rocket-details">
      <h1>{name}</h1>

      <p className="rocket-brief-info">
        <span className="reserved">{reserved ? 'Reserved' : '' }</span>
        {description}
      </p>
      <RocketButton id={id} />
    </article>
  );
};

RocketDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketDetails;
