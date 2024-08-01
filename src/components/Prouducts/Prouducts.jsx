import { faDollarSign, faDroplet, faExplosion, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Proudct.css'
const Proudcts = () => {
    return ( 
        <>
        <div className="product bg-Product mt-6 p-4">
            <h2 className='text-brown_color text-4xl text-center'>OUR PRODUCTS</h2>
    <div className="icons flex justify-around items-center text-center mt-6 pt-11">
        <div className="first ">
            <div className="icon">
            <FontAwesomeIcon icon={faExplosion} className='text-2xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Lotion</h3>
            </div>
        </div>

        <div className="second">
            <div className="icon">
            <FontAwesomeIcon icon={faDollarSign} className='text-3xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Cost</h3>
            </div>
        </div>

        <div className="third">
            <div className="icon">
            <FontAwesomeIcon icon={faLeaf} className='text-2xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Quality</h3>
            </div>
        </div>

        <div className="Four">
            <div className="icon">
            <FontAwesomeIcon icon={faDroplet} className='text-2xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Droplet</h3>
            </div>
        </div>

    </div>
        </div>
        </>
     );
}
 
export default Proudcts;