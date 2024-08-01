import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faMedal, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
const Why = () => {
    return (  
        <>
        <div className="why flex flex-col justify-between items-center text-center gap-6 p-5 m-10">
            <div className="title text-brown_color text-4xl font-bold">
                <h2>WHY DANGILA ?</h2>
            </div>
            <div className="text text-center">
                <p>Yourself requierd no at thoughts delicate landlord it be. Branched dashwood do  
                is whatever it . Farther be Chapter Father be chapter at visted maried in pressed</p>
            </div>
        </div>
        <div className="answer flex gap-72  justify-center items-center text-center mt-7 ">
            <div className="natural  flex flex-col justify-center items-center text-center ">
                <div className="icon flex flex-col ">
                    <div>
                        <FontAwesomeIcon icon={faHandHoldingHeart}  className='text-4xl text-brown_color'/>
                    </div>
                    <div>
                <h4 className='text-black font-bold  text-1xl '>Natural</h4>
                    </div>
                </div>
                <div className="text text-base pt-2 text-center flex  items-center ">
                    <p className='w-64 '>Yourself requierd no at thoughts  delicate landlord it be.</p>
                </div>
            </div>

            <div className="natural flex flex-col justify-center items-center text-center  ">
                <div className="icon flex flex-col ">
                    <div>
                <FontAwesomeIcon icon={faSprayCanSparkles}  className='text-4xl text-brown_color'/>
                    </div>
                    <div className='w-44'>
                <h4 className='text-black font-bold  text-1xl  '>Spring Smell</h4>
                    </div>
                </div>
                <div className="text text-base pt-2  text-center flex  items-center">
                    <p className='w-64'>Yourself requierd no at thoughts delicate landlord it be.</p>
                </div>
            </div>


            <div className="natural flex flex-col justify-center items-center  ">
                <div className="icon flex flex-col ">
                <FontAwesomeIcon icon={faMedal}  className='text-4xl text-brown_color'/>
                <h4 className='text-black font-bold  text-1xl '>Acheives</h4>
                
                </div>
                <div className="text text-base pt-2 text-center flex  items-center">
                    <p className='w-64'>Yourself requierd no at thoughts delicate landlord it be.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Why;