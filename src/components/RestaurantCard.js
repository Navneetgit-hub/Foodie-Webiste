import { Link } from 'react-router-dom';

import {restaurantImage} from '../../utils/constants'


const RestaurantCard = (props) => {
    return (
        <Link className='hyperlink flex flex-col items-center' to={"/restaurantDetails/" +props.props.info.id}>
            <div className='w-48 rounded-2xl'>
                <div className='card-image'>
                    <img className='w-48 h-40 rounded-2xl' src={restaurantImage+`${props.props.info.cloudinaryImageId}`} />
                </div>
                <div className='p-2 font-basisgrotesque'>
                    <h3 className='text-md pb-1 text-slate-700 overflow-hidden whitespace-nowrap overflow-ellipsis font-bold'>{props.props.info.name}</h3>
                    <div className='flex justify-between text-slate-700'>
                        <h3 className='text-xs pb-1 font-bold'>{props.props.info.avgRating}⭐</h3>
                        <h3 className='text-xs pb-1 font-bold'>{props.props.info.sla.deliveryTime}mins</h3>
                    </div>
                    <h4 className='text-sm pb-1 text-zinc-500 overflow-hidden whitespace-nowrap overflow-ellipsis'>{props.props.info.cuisines.slice(0, 4).join(", ")}</h4>
                    <p className='text-xs pb-1 text-zinc-500 overflow-hidden whitespace-nowrap overflow-ellipsis'>{props.props.info.locality}</p>
                </div>
            </div>
        </Link>
        
    )
}

export const Subscribed = (RestaurantCard) => {
    console.log("REndereddd")
    return (props) => {
        return (<div className=''>
            <label className='absolute bg-rose-500 text-white z-10 p-2 mt-4 rounded-lg pr-6'>
                Plus
            </label>
            <RestaurantCard { ...props }/>
        </div>)
    }
}

export default RestaurantCard;