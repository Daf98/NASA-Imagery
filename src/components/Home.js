import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import fetchDataFromAPI from '../redux/api';

const Home = () => {
  const dispatch = useDispatch();
  const celestialBodies = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchDataFromAPI());
  }, []);

  return (
    <>
      <h1>Categories</h1>
      {celestialBodies ? (
        celestialBodies.map((body) => (
          <button type="button" key={body.collection.items[0].data[0].date_created}>
            <NavLink to={`/detail/${body.collection.href.toString().slice(36)}`}>
              <Category
                name={body.collection.href.toString().slice(36).replace(/-/g, ' ')}
                data={body.collection.metadata.total_hits}
              />
            </NavLink>
          </button>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Home;
