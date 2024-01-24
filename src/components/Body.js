import RestaurantCards from './RestaurantCards';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING#'
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // Online Status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you'r offline! Check you'r internet connection.</h1>;
  }
  if (listOfRestaurants.length === 0) {
    // Conditional Rendering
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search-container'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className='search-btn'
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              filtered.length === 0
                ? setFilteredRestaurants(filteredRestaurants)
                : setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className='filter-btn'
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => res?.info?.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((res) => (
          <RestaurantCards key={res?.info?.id} {...res?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
