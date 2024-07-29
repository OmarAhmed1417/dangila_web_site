import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faMedal, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
const Why = () => {
    return (  
        <>
        <div className="why flex flex-col justify-center items-center text-center gap-6 p-5">
            <div className="title text-brown_color text-4xl font-bold">
                <h2>WHY DANGILA ?</h2>
            </div>
            <div className="text text-center">
                <p>Yourself requierd no at thoughts delicate landlord it be. Branched dashwood do  
                is whatever it . Farther be Chapter Father be chapter at visted maried in pressed</p>
            </div>
        </div>
        <div className="answer flex justify-center items-center text-center mt-5">
            <div className="natural  flex flex-col justify-center items-center text-center ">
                <div className="icon ">
                <FontAwesomeIcon icon={faHandHoldingHeart}  className='text-4xl text-brown_color'/>
                <h4 className='text-black font-bold  text-1xl '>Natural</h4>
                </div>
                <div className="text ">
                    <p>Yourself requierd no at thoughts delicate landlord it be.</p>
                </div>
            </div>

            <div className="natural flex flex-col justify-center items-center text-center  ">
                <div className="icon ">
                <FontAwesomeIcon icon={faSprayCanSparkles}  className='text-4xl text-brown_color'/>
                <h4 className='text-black font-bold  text-1xl '>Spring Smell</h4>

                </div>
                <div className="text">
                    <p>Yourself requierd no at thoughts delicate landlord it be.</p>
                </div>
            </div>


            <div className="natural flex flex-col justify-center items-center text-center  ">
                <div className="icon ">
                <FontAwesomeIcon icon={faMedal}  className='text-4xl text-brown_color'/>
                <h4 className='text-black font-bold  text-1xl '>Acheives</h4>
                
                </div>
                <div className="text">
                    <p>Yourself requierd no at thoughts delicate landlord it be.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Why;