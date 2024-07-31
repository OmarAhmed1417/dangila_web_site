import React from 'react';
import photo from '../../imges/About image .png'
import './About.css'
const About = () => {
    return ( 
        <>
        <div className="About flex justify-around  items-center text-center mt-14 pt-5 gap-7">
            <div className="text_about  flex flex-col gap-6 justify-center">
                <div className=' flex items-center justify-center text-center  pt-8'>
                <p className='about  flex items-center justify-center text-justify w-96'>
                And produce say the ten moments parties. Simple innate
                summer fat appear basket his desire joy. Outward clothes
                promise at gravity do excited. Sufficient particular impossible
                by reasonable oh expression is. Yet preference connection
                unpleasant yet melancholy but end appearance. And
                excellence partiality estimating terminated day everything.
                </p>
                </div>
                <div className="btns flex gap-3 justify-center ">
                    <div className="buy">
                        <button className='bg-brown_color text-white btn2'>Buy Now</button>
                    </div>
                     <div className="buy2">
                        <button className='bg-black text-white btn2'>View Details</button>
                    </div>
                </div>
            </div>
            <div className="about_img">
                <img src={photo} alt="Perfiom" loading='lazy' width={400} height={'auto'}  />
            </div>
        </div>
        </>
     );
}
 
export default About;