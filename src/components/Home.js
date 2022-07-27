import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import fetchDataFromAPI from '../redux/api';
import '../styles/Home.css';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const celestialBodies = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchDataFromAPI());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div id="homepage">
        <h1 id="home-header">CELESTIAL BODIES</h1>
        <h2 id="home-sub">STATS BY CELESTIAL BODY</h2>
        <div id="home-grid">
          {celestialBodies.map((body) => (

            <button id="home-btn" type="button" key={body.collection.items[0].data[0].date_created}>
              <NavLink to={`/detail/${body.collection.href.toString().slice(36)}`}>
                <Category
                  name={body.collection.href.toString().slice(36).replace(/-/g, ' ')}
                  data={body.collection.metadata.total_hits}
                />
              </NavLink>
            </button>
          ))}
        </div>

      </div>
    </>
  );
};

export default Home;
