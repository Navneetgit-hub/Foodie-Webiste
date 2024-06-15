import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard, { Subscribed } from "./RestaurantCard";
import FilterDropdown from "./FilterDropdown";

const ResCardContainer = (props) => {

    const SubscribedRestaurant = Subscribed(RestaurantCard)
    const [filteredData, setFilteredData] = useState([])
    const handleFilterChange = (selectedFilters) => {
        if (selectedFilters.includes('Top Rated')) {
            const topRestro = props.resList.sort((a, b) => {
                return b.info.avgRating - a.info.avgRating
            })
            setFilteredData(topRestro.slice(0, 3));
        } else if (selectedFilters.includes('4.2⭐')) {
            const aboveFour = props.resList.filter((object) => {
                return object.info.avgRating > 4.2
            })
            setFilteredData(aboveFour);
        } else if (selectedFilters.length < 1) {
            setFilteredData(props.resList)
        }
    };

    useEffect(() => {
        setFilteredData(props.resList)
    }, [props.resList])

    useEffect(() => {
        handleFilterChange([])
    }, [props.resList])

    return (
        <div className="flex flex-col w-4/5">
            <div className="body-filter">
                <FilterDropdown data={props.resList} onFilterChange={handleFilterChange} />
            </div>
            <div className="grid grid-cols-4 pt-14 gap-6">
                {filteredData.map((object, index) => {
                    return <div className="transform transition-transform hover:scale-90">
                        <SubscribedRestaurant key={index} props={object} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ResCardContainer;