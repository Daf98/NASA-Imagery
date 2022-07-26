// stateless component
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailDataFromAPI } from "../redux/api";

const Filter = () => {
    const dispatch = useDispatch();
  let { userId } = useParams();
  const collections = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchDetailDataFromAPI());
  }, []);
  return (
    <>
      {collections &&
        (collections.map(
          (collection) => 
            collection.collection.href.includes(userId) &&
            (
                <div key={userId}>Works</div>
            )
            )
    )}
    </>
)}
export default Filter;
