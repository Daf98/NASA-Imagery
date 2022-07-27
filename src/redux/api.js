/* eslint-disable no-await-in-loop */
import { fetchData } from './configureStore';

const baseURL = 'https://images-api.nasa.gov/search?q=';
const bodies = [
  'Planets',
  'Black-holes',
  'Nebulas',
  'Suns',
  'Galaxies',
];
// fetch data from API and move it to store
const fetchDataFromAPI = () => async (dispatch) => {
  const responses = [];
  for (let i = 0; i < bodies.length; i += 1) {
    const data = await fetch(`${baseURL}${bodies[i]}`);
    responses.push(await data.json());
  }
  dispatch(fetchData(responses));
};
export default fetchDataFromAPI;
