import { Link } from 'react-router-dom'

const About = () => {



    return (
        <div className="about-container">
            <div className="about">
                <span>24 HOUR FOOD DELIVERY</span>
                <h1>Order Food Anytime <br></br>& Anywhere</h1>
                <p>It is a food ordering platform. It offers food with a <br></br>discount facility for their users. We offers quickest <br></br>delivery and at most discounted rates.</p>
                <Link to="/" className='hyperlink'><button>Order Now</button></Link>
                
            </div>
            <div>
                <img src="https://wallpapers.com/images/hd/food-delivery-black-poster-jz09njn20q3pjxa9.jpg"></img>
            </div>
        </div>
    )
}

export default About