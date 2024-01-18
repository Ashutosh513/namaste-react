import { CDN_URL } from '../utils/constants';

const RestaurantCards = (props) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = props;

  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} />
      <h3 className='res-title'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCards;
