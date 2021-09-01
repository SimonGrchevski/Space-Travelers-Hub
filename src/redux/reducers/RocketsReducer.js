import axios from 'axios';

const LOAD = 'rockets/LOAD';
const CHANGE_RESERVATION = 'rockets/CHANGE_RESERVATION';

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload];
    case CHANGE_RESERVATION:
      return state.map((r) => {
        if (r.id !== action.payload.id) return r;
        return { ...r, reserved: !r.reserved };
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

export const changeReservationAC = (id) => (
  {
    type: CHANGE_RESERVATION,
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
