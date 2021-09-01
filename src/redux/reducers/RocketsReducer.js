import axios from 'axios';

const LOAD = 'rockets/LOAD';
const RESERVE = 'rockets/RESERVE';

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload];
    case RESERVE:
      console.log(state);
      return state.map((r) => {
        if (r.id !== action.payload.id) return r;
        return { ...r, reserved: true };
      });
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

export const reserveRocketAC = (id) => (
  {
    type: RESERVE,
    payload: {
      id,
    },
  }
);

export const loadRockets = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets').then((res) => res.data);
  dispatch(loadRocketsAC(response.map((elem) => ({
    name: elem.rocket_name,
    id: elem.id,
    description: elem.description,
    image: elem.flickr_images[0],
    reserved: false,
  }))));
};
