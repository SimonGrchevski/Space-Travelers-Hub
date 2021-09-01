import React from 'react';
import PropType from 'prop-types';
import RocketImage from './RocketImage';
import RocketDetails from './RocketDetails';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  return (

    <section className="rocket">
      <RocketImage imageUrl={image} />
      <RocketDetails id={id} name={name} description={description} reserved={reserved} />
    </section>
  );
};

Rocket.propTypes = {
  id: PropType.number.isRequired,
  name: PropType.string.isRequired,
  image: PropType.string.isRequired,
  description: PropType.string.isRequired,
  reserved: PropType.bool.isRequired,
};

export default Rocket;
