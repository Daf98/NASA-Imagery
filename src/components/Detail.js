import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import { fetchDetailDataFromAPI } from '../redux/api';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Detail = () => {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchDetailDataFromAPI());
  }, []);
  return (
  <>
    <Navbar />
    {collections[0].collection ? <Filter /> : <h1>Loading...</h1>}
    
  </>
  )
};

export default Detail;