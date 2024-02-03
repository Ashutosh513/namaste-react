import { CDN_URL } from '../utils/constants';

const RestaurantCards = (props) => {
  console.log(props);
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = props;

  return (
    <div className='res-card m-2 p-2 w-[250px] bg-gray-100 rounded-lg'>
      <img
        className='res-logo rounded-lg w-[100%] h-40 object-cover mb-2'
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className='res-title'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white p-1 rounded-lg'>
          Promoted
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
