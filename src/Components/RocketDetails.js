import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';

const RocketDetails = (props) => {
  const { id, name, description } = props;
  return (
    <article className="rocket-details">
      <h1>{name}</h1>
      <p className="rocket-brief-info">{description}</p>
      <RocketButton id={id} />
    </article>
  );
};

RocketDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketDetails;
