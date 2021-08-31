/* eslint-disable jsx-quotes, quotes */

import React from "react";
import PropTypes from "prop-types";

const Mission = ({ mission }) => {
  const { id, name, description } = mission;

  return (
    <tr key={id}>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        <button type='button'>NOT A MEMBER</button>
      </td>
      <td>
        <button type='button'>Join Mission</button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
