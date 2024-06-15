import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';

import ResCardContainer from './ResCardContainer'
import SearchBar from './SearchBar';
import Shimmmer from './Shimmer';

const AppLayout = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [initialRestaurants, setInitialRestaurants] = useState([]);
    useEffect(()=> {
        fetchdata()
    }, [])

    const getSearchedData = (data) => {
        console.log("after getting data",data)
        if(data.length>0){
            const searchedData = restaurants.filter((obj)=> {
                return obj?.info?.name?.toLowerCase().includes(data.toLowerCase())
            })
            searchedData.length>0?setRestaurants(searchedData):setRestaurants(initialRestaurants)
        } else {
            setRestaurants(initialRestaurants)
        }
        
        
    }

    const fetchdata = async () => {
        const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.973021&lng=80.2491054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(url)
        const apidata = await data.json()
        setRestaurants(apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setInitialRestaurants(apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    return (
        restaurants.length === 0 ? <Shimmmer /> :
        (<div className='flex flex-col items-center pt-14'>
            <SearchBar onSearch={getSearchedData}/>
            <ResCardContainer resList={restaurants}/>
        </div>)
    )
}
 
export default AppLayout