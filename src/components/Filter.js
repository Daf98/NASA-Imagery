// stateless component
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Filter = () => {
  let { userId } = useParams();
  const collections = useSelector((state) => state);
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
