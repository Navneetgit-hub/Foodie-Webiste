import {logo} from '../../utils/constants'
import {Link} from 'react-router-dom'
import React, { useContext } from 'react';
import UserContext from '../../utils/UserContext';


const Header = () => {
    const loggedInUser = useContext(UserContext)
    console.log("What is the value received from user context::", loggedInUser)
    return (
        <div className='flex h-24 justify-between bg-gradient-to-r from-rose-500 to-pink-500  text-white'>
            <div className='w-32 pt-7 pl-10'>
                <h1 className='font-custom text-3xl cursor-pointer'>FOODIE</h1>
            </div>
            <div className='nav-items'>
                <ul className='flex pt-12 pr-16'>
                    <li><Link to="/" className='hyperlink px-2'>Home</Link></li>
                    <li><Link to="/about" className='hyperlink px-2'>About Us</Link></li>
                    <li><Link to="/contact" className='hyperlink px-2'>Contact</Link></li>
                    <li><Link to="/cart" className='hyperlink px-2'>cart</Link></li>
                    <li className='cursor-pointer px-2'><i className="fa fa-user px-1" aria-hidden="true"></i>{loggedInUser.firstName}</li>
                </ul>
            </div>
        </div> 
    )
};

export default Header