import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { BrowserRouter as Router } from 'react-router-dom';
const Footer = () => {
    return ( 
        <>
        <div className="footer w-full flex justify-center  p-9 mt-16 text-gray-800 font-medium">
            <div className="info flex flex-col gap-8">
                <div className="paragraph w-52">
                <p>Learn To Love Growth And Change
                And You Will Be A Success.</p>
            </div>
            <Router>
            <div className="iconsfooter flex gap-8">
            <div>
            <a href='https://www.facebook.com/profile.php?id=100028334143840&locale=ar_AR'>
            <FontAwesomeIcon icon={faFacebook} className='text-2xl text-orange-900' />
            </a>
            </div>
            <div>
            <a href='https://wa.me/201062610800'>
            
            <FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-orange-900'/>
            </a>
            </div>
            </div>
            </Router>
            </div>


            <div className="textfooter flex flex-col gap-4">
                <div><h4>Best Seller</h4></div>
                <div>
                    <h4>Skin Products</h4>
                </div>
                <div>
                    <h4>beauty products</h4>
                </div>
                <div>
                    <h4> 
                    Track your order
                    </h4>
                </div>
            </div>
            <div className="textfooter2 flex flex-col gap-4">
                <div><h4>11772 Tabrzi Street NW, Suite</h4></div>
                <div>
                    <h4>21389, Atlanta, GA 902344</h4>
                </div>
                <div>
                    <h4>+1789 123456</h4>
                </div>
                <div>
                    <h4> 
                    hello@dangla.co
                    </h4>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Footer;