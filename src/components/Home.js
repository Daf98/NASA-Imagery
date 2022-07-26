import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Category from "./Category";
import fetchDataFromAPI from "../redux/api";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const celestialBodies = useSelector((state) => state);
  // const arr = Array.from(celestialBodies);
  // console.log(typeof arr);
  useEffect(() => {
      dispatch(fetchDataFromAPI());
  }, []);
  // const bodyList = [...new Set(celestialBodies)];
  return (
    <>
      <h1>Categories</h1>
      {celestialBodies ? (
        celestialBodies.map((body) => (
          <button type="button">
            <NavLink to={`/detail/${body.bodyName}`}>
              <Category name={body.bodyName} data={body.bodyNumber} />
            </NavLink>
          </button>
        ))
      ) : (
        <h1>no</h1>
      )}
    </>
  );
};

export default Home;
