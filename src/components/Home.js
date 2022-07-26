import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Category from "./Category";
import fetchDataFromAPI from "../redux/api";
import { useDispatch, useSelector } from "react-redux";

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
          <button type="button" key={body.bodyNumber}>
            <NavLink to={`/detail/${body.bodyName}`}>
              <Category name={body.bodyName} data={body.bodyNumber} />
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
