import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeReservationAC } from '../redux/reducers/RocketsReducer';

const getBtnAttr = (reserved) => ({
  class: reserved ? 'cancel-reservation-btn' : 'reservation-btn',
  text: reserved ? 'Cancel Reservation' : 'Reserve Rocket',
});

const RocketButton = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(changeReservationAC(id));
  };

  const btnAttr = getBtnAttr(reserved);
  return (
    <button type="button" className={btnAttr.class} id={id} onClick={() => handleChange(id)}>{btnAttr.text}</button>
  );
};

RocketButton.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketButton;
