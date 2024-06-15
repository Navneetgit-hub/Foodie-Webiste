import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Menucategory from "./MenuCategory";

const CardDetails = () => {
    const param = useParams();    
    const details = useRestaurantMenu(param.id);
    const restaurantDetails = details?.data?.cards[2]?.card?.card?.info
    const menu = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredMenu = menu?.filter((object)=> object?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    return (
        <div className="text-center">
            <h1 className="font-bold">{restaurantDetails?.name.concat(" - ", restaurantDetails?.areaName)}</h1>
            <h1 className="">{restaurantDetails?.cuisines.join(', ')}</h1>
            {
                filteredMenu?.map((object, index) => {
                    return <Menucategory key={index} props={object}/>
                })
            }
        </div>
    )
}

export default CardDetails