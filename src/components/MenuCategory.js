import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import React, { useState } from 'react';
import { restaurantImage } from "../../utils/constants";

const Menucategory = (props) => {

    const { title , itemCards } = props?.props?.card?.card;
    const [menuFlag, setMenuFlag] = useState(false);

    const handleMenuFlag = () => {
        setMenuFlag(!menuFlag);
    }

    return (
        <div>
            <div className="flex flex-col justify-center w-3/5 m-auto">
                <div className="flex cursor-pointer justify-between items-center w-full p-3 mt-10 bg-rose-400 rounded text-white" onClick={handleMenuFlag}>
                    <span>{title}</span>
                    <span>{!menuFlag ? <AiOutlineDown /> : <AiOutlineUp />}</span>
                    {console.log("During Render", menuFlag)}
                </div>
                {
                    menuFlag && (
                        <div className="bg-gray-200 text-black rounded-lg">
                            {
                                itemCards?.map((obj, index)=> 
                                    (
                                    <div className="flex justify-between text-left border-gray-300 border-b-2 p-8">
                                        <div className="w-8/12">
                                            <div className="flex ">
                                                <div className="text-lg">{obj?.card?.info?.name}</div>
                                                <div className="text-xs mt-2 ml-2">{obj?.card?.info?.isVeg ? ('🟢') : ('🔴')}</div>
                                            </div>
                                            <div className="text-xs">{obj?.card?.info?.description}</div>
                                        </div>    
                                        <div className="w-2/12 relative">
                                            <img className="h-28 w-32" alt="Food Image" src={`${restaurantImage}${obj?.card?.info?.imageId}`} />
                                            <button className="bg-white text-rose-400 p-2 rounded w-16 font-bold absolute top-0 mx-8 mt-[85px]">Add</button>
                                        </div>
                                    </div>    
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Menucategory;