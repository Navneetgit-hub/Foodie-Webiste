import { useEffect, useState } from "react";
import { menuApi } from "./constants";

 const useRestaurantMenu = (resId) => {
    const [resDetails, setResDetails] = useState(null);
    
    const fetchData = async () => {
        const url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9640645&lng=80.2490749&restaurantId=';
        const data = await fetch(url+resId)
        const restaurantDetail = await data.json()
        console.log(restaurantDetail)
        setResDetails(restaurantDetail)
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return resDetails
 }

 export default useRestaurantMenu