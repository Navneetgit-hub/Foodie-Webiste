import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Menucategory from "./MenuCategory";
import RestaurantNameDetails from "./RestaurantNameDetails";

const CardDetails = () => {

    const [menuIndex, setMenuIndex] = useState()
    const param = useParams();    
    const details = useRestaurantMenu(param.id);
    const restaurantDetails = details?.data?.cards[2]?.card?.card?.info
    const menu = details?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredMenu = menu?.filter((object)=> object?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    
    return (
        <div className="text-center">
            <RestaurantNameDetails props={restaurantDetails}/>
            {
                filteredMenu?.map((object, index) => {
                    return <Menucategory key={index} props={object} showMenu={index === menuIndex ? true: false} menuIndex={index} handleMenuIndex={setMenuIndex}/>
                })
            }
        </div>
    )
}

export default CardDetails