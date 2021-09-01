import React, { useEffect } from 'react';
import Rocket from './Rocket';
// import './Rockets.css';
import { loadRockets } from '../redux/reducers/RocketsReducer';

const Rockets = () => {
  // const [rocets, getRocets] = useState([]);
  useEffect(() => {
    loadRockets();
  }, []);
  return (
    <section className="rockets-wrapper">
      <Rocket />
    </section>
  );
};

export default Rockets;
