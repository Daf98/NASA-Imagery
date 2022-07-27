import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchDataFromAPI from '../redux/api';
import '../styles/Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const collections = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchDataFromAPI());
  }, [dispatch]);
  return (
    <>
      {collections

        && (collections.map(
          (collection) => collection.collection.href.includes(userId)
            && (
            <>
              <h1 id="celestial-header">{userId}</h1>
              <h2 id="filter-sub">
                {`List of ${userId}`}
              </h2>
              {collection.collection.items.map((item) => (
                <div key={item.data[0].nasa_id} id="celestial-container">
                  <h2 id="celestial-title">{item.data[0].title}</h2>
                  <div id="celestial-data">
                    <img src={item.links[0].href} alt="Space" />
                    <h3>

                      {`Date created: ${item.data[0].date_created.slice(0, 10)}`}
                    </h3>
                  </div>
                </div>
              ))}
            </>
            ),
        )
        )}
    </>
  );
};
export default Filter;
