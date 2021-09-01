import axios from 'axios';

const LOAD = 'rockets/LOAD';

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload];
    default:
      return state;
  }
};

export const loadRocketsAC = (payload) => (
  {
    type: LOAD,
    payload,
  }
);

export const loadRockets = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets').then((res) => res.data);
  const rockets = response.map((elem) => ({
    name: elem.rocket_name,
    id: elem.id,
    description: elem.description,
    image: elem.flickr_images[0],
  }));
  dispatch(loadRocketsAC(rockets));
};
