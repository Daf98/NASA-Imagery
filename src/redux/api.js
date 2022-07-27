import { fetchData } from './configureStore';

const baseURL = 'https://images-api.nasa.gov/search?q=';
const bodies = [
  'Planet',
  'Galaxy',
  'Black-hole',
  'Nebula',
  'Moon',
  'Sun',
];
// fetch data from API and move it to store
const fetchDataFromAPI = () => async (dispatch) => {
  const responses = [];
  for (const body of bodies) {
    const data = await fetch(`${baseURL}${body}`);
    responses.push(await data.json());
  }
  dispatch(fetchData(responses));
};
export default fetchDataFromAPI;
