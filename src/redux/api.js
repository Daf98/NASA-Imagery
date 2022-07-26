import { fetchData } from "./configureStore";
const baseURL = "https://images-api.nasa.gov/search?q=";
// fetch data from API and move it to store
const fetchDataFromAPI = () => async (dispatch) => {
    const bodies = ["planet", "galaxy", "black-hole", "nebula", "moon", "sun"];
    // bodies.map((body) => data = await fetch(`${baseURL}${body}`))
    const response = [];
    const result = [];
    for(let i of bodies){
        const data = await fetch(`${baseURL}${i}`);
        const waited = await data.json();
        response.push(waited);
    }
  
//   const response = await data.json();
    // console.log(response[0].collection.href);
    response.map(i => {
        const hyperlink = i.collection.href;
        const bodyName = hyperlink.toString().slice(36);
        const bodyNumber = i.collection.metadata.total_hits;
        const info = { bodyName, bodyNumber };
        result.push(info)
    })
    console.log(result);
    dispatch(fetchData(result));
};
export default fetchDataFromAPI;
