import React from "react"
import DOMPurify from "dompurify"

const RestaurantNameDetails = (props) => {
    return (
        <div className="flex flex-col items-start w-3/5 m-auto mt-8">
            <div className="mb-4 w-full">
                <h1 className="font-bold text-black-600 text-2xl w-1/4 cursor-pointer">{props?.props?.name}</h1>
                <div className="pt-4 pl-4 m-0 w-1/4">
                    <h3 className="cursor-pointer">Order Online</h3>
                    <hr className="border-t-4 border-rose-600 rounded-t-lg"></hr>
                </div>
                <hr className="w-full m-0 border-gray-300"></hr>
            </div>
            <div className="p-4 rounded-3xl bg-gradient-to-t from-gray-300 to-white w-full shadow-md cursor-none">
                <div className="p-4 rounded-3xl border-gray-300 w-full flex flex-col items-start bg-white shadow-inner">
                    <div className="mb-2 flex items-center">
                        <span className="text-green-700 font-bold mr-2"> &#9733;</span>
                        <span className="text-gray-600 font-bold"> {props?.props?.avgRating}</span>
                        <span className="text-gray-600 font-bold">({props?.props?.totalRatingsString}) </span>
                        <span className="text-gray-500 px-2"> • </span>
                        <span className="text-gray-600 font-bold">{props?.props?.costForTwoMessage}</span>
                    </div>
                    <div className="mb-2 text-gray-600">
                        <span className="font-semibold">Cuisines:</span> {props?.props?.cuisines.join(", ")}
                    </div>
                    <div className="mb-2 flex items-center text-gray-600">
                        <i className="fas fa-clock mr-2"></i> {props?.props?.sla?.deliveryTime} min
                    </div>
                    <div className="mb-2 flex items-center text-gray-600">
                        <i className="fas fa-bicycle mr-2"></i>
                        <div className="text-gray-600 " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props?.props?.feeDetails?.message) }} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RestaurantNameDetails