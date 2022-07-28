/* eslint-disable no-param-reassign */

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

  const filterCategories = () => {
    const homeBtn = document.querySelectorAll('.home-btn');
    const searchBar = document.getElementById('search-bar');
    homeBtn.forEach((homeButton) => {
      const inputText = homeButton.childNodes[0].childNodes[0].textContent;
      const lowerCase = inputText.charAt(0).toLowerCase();
      if (lowerCase.match(searchBar.value[0])) {
        homeButton.style.display = 'block';
      } else {
        homeButton.style.display = 'none';
      }
    });
  };

  return (
    <>
      <Navbar />
      <div id="homepage">
        <h1 id="home-header">CELESTIAL BODIES</h1>
        <h2 id="home-sub">STATS BY CELESTIAL BODY</h2>
        <input type="search" id="search-bar" placeholder="Search..." onChange={filterCategories} />
        <div id="home-grid">
          {celestialBodies.map((body) => (
            <button
              id="home-btn"
              className="home-btn"
              type="button"
              key={body.collection.items[0].data[0].date_created}
            >
              <NavLink
                to={`/detail/${body.collection.href.toString().slice(36)}`}
              >
                <Category
                  name={body.collection.href
                    .toString()
                    .slice(36)
                    .replace(/-/g, ' ')}
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
