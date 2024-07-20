import react from "react"
import { useSelector } from "react-redux"
import { restaurantImage } from "../../utils/constants"
import { clearCart } from "../../utils/cartSlice"
import { useDispatch } from "react-redux"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    console.log("What are added in cart Items:::", cartItems);   
    
    const handleCLeaar = () => {
        dispatch(clearCart())
    }

    return (
        <div className="mx-60 pt-8">
            <div className="flex justify-between">
                <h1 className="font-bold text-black-600 text-2xl w-1/4">Cart Items</h1>
                <button className="bg-rose-500 text-white p-2 m-2 rounded-2xl" onClick={handleCLeaar} >Clear Cart</button>
            </div>
            <div className=" text-black rounded-lg font-montserrat ">
                {
                    cartItems?.map((obj, index)=> 
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
                            </div>
                        </div>    
                    ))
                }
            </div>
        </div>
    )
}

export default Cart