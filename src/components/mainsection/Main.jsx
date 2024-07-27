import React from 'react';
import photo from '../../imges/Header.png';
import './mainsection.css'
const Main = () => {
    return (  <>
      <div className="main bg-main_color w-full pt-9 flex space-x-80 items-center justify-center ">
      <div className="text">

        {/* for first word logo */}
        <div className="title">
            <h1 className='text-9xl text-brown_color font-bold'>dangila</h1>
        </div>
        {/* for first word in paragraph */}
        <div className="mainline ">
          <h5 className='text-brown_color'>Natural Inner Beauty</h5>
        </div>

        {/* paragraph  */}

        <div className="paragraph">

          <h5>Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.</h5>
        </div>
        <div className="btn">
            <button className='bg-brown_color text-white text-1xl  p-3 '>Buy Now | $49.99</button>
        </div>
      </div>
 
      <div className="photo">
        <img src={photo} alt="Logo" loading='lazy'  width={500} height={'auto'}/>
      </div>
    </div>
    
    </>);
}
 
export default Main;