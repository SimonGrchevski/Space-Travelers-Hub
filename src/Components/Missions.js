/* eslint-disable jsx-a11y/control-has-associated-label, quotes */

import React from "react";
import Mission from "./Mission";
import "./Missions.css";

const Missions = () => {
  const missions = [
    {
      id: "5",
      name: "Thaicom",
      description:
        "KAJNFKASDVNAKSfcakCHBASKDCGVSAYV  JHGHJGH CH BMb fdsfjsnd,mfnhaslifhawnfhjafhbaskjf,szmbfasjcbnamszc bbbnb snmz v sk idka addak j adkljdlasjdoi;fH jkiah SKJF hdzsf dsjkfh iulF sKJDFh jgASH DaLS dajS adS ",
      status: {
        member: false,
        join: false,
      },
    },
    {
      id: "5",
      name: "Thaicom",
      description:
        "KAJNFKASDVNAKSfcakCHBASKDCGVSAYV  JHGHJGH CH BMb fdsfjsnd,mfnhaslifhawnfhjafhbaskjf,szmbfasjcbnamszc bbbnb snmz v sk idka addak j adkljdlasjdoi;fH jkiah SKJF hdzsf dsjkfh iulF sKJDFh jgASH DaLS dajS adS ",
      status: {
        member: false,
        join: false,
      },
    },
  ];

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
        {missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </table>
    </div>
  );
};

export default Missions;
