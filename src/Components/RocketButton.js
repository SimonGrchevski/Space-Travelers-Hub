import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocketAC } from '../redux/reducers/RocketsReducer';

const RocketButton = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(reserveRocketAC(id));
  };
  return (
    <button type="button" id={id} onClick={() => handleChange(id)}>Reserve Rocket</button>
  );
};

RocketButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default RocketButton;
