import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { loadRockets } from '../redux/reducers/RocketsReducer';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length)dispatch(loadRockets());
  }, []);

  const rocket = rockets.map((e) => (
    <Rocket
      key={e.id}
      name={e.name}
      id={e.id}
      description={e.description}
      image={e.image}
      reserved={e.reserved}
    />
  ));
  return (

    <section className="rockets-wrapper">
      {rocket}
    </section>
  );
};
export default Rockets;
