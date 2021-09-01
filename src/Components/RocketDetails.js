import React from 'react';
import PropTypes from 'prop-types';
import RocketButton from './RocketButton';

const getSpanAttr = (reserved) => ({
  class: reserved ? 'reserved-rocket' : 'not-reserved',
  text: reserved ? 'Reserved' : '',
});

const RocketDetails = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  const s = getSpanAttr(reserved);
  return (
    <article className="rocket-details">
      <h1>{name}</h1>

      <p className="rocket-brief-info">
        <span className={s.class}>{s.text}</span>
        {description}
      </p>
      <RocketButton id={id} reserved={reserved} />
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
