import React from 'react';

const Mission = () => {
  return (
    <tr>
      <th>Taicom</th>
      <td className="description">That is just a name of series of communications</td>
      <td>
        <p className="status-placeholder">
          Active member
        </p>
      </td>
      <td>
        <button
          type="button">
          Leave Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission;