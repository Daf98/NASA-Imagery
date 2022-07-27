import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ name, data }) => (
  <>
    <h2>{name}</h2>
    <h3>
      Total hits:
      {data}
    </h3>
  </>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default Category;
