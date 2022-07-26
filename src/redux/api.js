import { fetchData } from "./configureStore";
const baseURL = "https://images-api.nasa.gov/search?q=";
const bodies = [
    "Planet",
    "Galaxy",
    "Black-hole",
    "Nebula",
    "Moon",
    "Sun",
  ];
// fetch main data from API and move it to store
const fetchMainDataFromAPI = () => async (dispatch) => {
  const responses = [];
  const result = [];
  for (let body of bodies) {
    const data = await fetch(`${baseURL}${body}`);
    responses.push(await data.json());
  }
  responses.map((response) => {
    const hyperlink = response.collection.href;
    const hyphenedName = hyperlink.toString().slice(36);
    const underscoreName = hyphenedName.replace(/[^\w\']|_/g, " ");
    const bodyName =
      underscoreName.charAt(0).toUpperCase() + underscoreName.slice(1);
    const bodyNumber = response.collection.metadata.total_hits;
    const info = { bodyName, bodyNumber };
    result.push(info);
  });
  dispatch(fetchData(result));
};
//fetch detail data from API and move it to store
const fetchDetailDataFromAPI = () => async (dispatch) => {
    const responses = [];
    for (let body of bodies) {
      const data = await fetch(`${baseURL}${body}`);
      responses.push(await data.json());
    }
    dispatch(fetchData(responses));
}
export {fetchMainDataFromAPI, fetchDetailDataFromAPI};
