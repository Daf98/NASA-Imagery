import React from 'react';

const Category = (props) => {

  return(
  <>
    <h2>{props.name}</h2>
    <h3>
      Number of images:
      {props.data}
    </h3>
  </>
)
};

export default Category;
