/* eslint-disable jsx-quotes, quotes, object-curly-newline */

import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { joinMission } from "../redux/reducers/MissionsReducer";

const Mission = ({ mission }) => {
  const { id, name, description, join } = mission;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMission(id));
  };
  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        <p className='status-placeholder'>
          {join ? "Active Member" : "NOT A MEMEBER"}
        </p>
      </td>
      <td>
        <button type='button' onClick={handleClick}>
          {join ? "Join Mission" : "Leave mission"}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    join: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
