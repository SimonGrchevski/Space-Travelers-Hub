import React from 'react';
import PropType from 'prop-types';

const RocketImage = (props) => {
  const { imageUrl } = props;
  return (
    <article className="rocket-img-wrapper">
      <img alt="" src={imageUrl} />
    </article>
  );
};

RocketImage.propTypes = {
  imageUrl: PropType.string.isRequired,
};

export default RocketImage;
