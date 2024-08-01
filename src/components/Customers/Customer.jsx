import React, { useEffect, useRef, useState } from 'react';
import './Customer.css'
const Customers = () => {

    let ref=useRef(null);
    let ref2=useRef(null);
    let ref3=useRef(null);
    let ref4=useRef(null);
    let [counter,setcounter]=useState(0);
    let [follower,setfollower]=useState(0);
    let [shop,setshop]=useState(0);
    let [percent,setpercent]=useState(0);

    useEffect(() => {
        // Function to increment the counter
        const incrementCounter = () => {
        
          setcounter(prevCounter => {
            if (prevCounter >= 25366) {
              clearInterval(intervalId); // Stop incrementing when max value is reached
              return prevCounter;
            }
            else{
                if (ref.current) {
                    ref.current.innerHTML = `${counter}`;
                  }
                return prevCounter + 75;
            }
          });
        };

        // Set up the interval
        const intervalId = setInterval(incrementCounter, 0.1); // Increment every 1ms for a smooth effect
    
        // Cleanup interval on component unmount
      
        return () => clearInterval(intervalId,);
      }, [counter]);


      useEffect(() => {
        // Function to increment the counter
        const incrementCounter2 = () => {
        
          setfollower(prevCounter => {
            if (prevCounter > 6000) {
              clearInterval(intervalId2); // Stop incrementing when max value is reached
              return prevCounter;
            }
            else{
                if (ref2.current) {
                    ref2.current.innerHTML = `${follower}`;
                  }
                return prevCounter + 50;
            }
          });
        };

        // Set up the interval
        const intervalId2 = setInterval(incrementCounter2, 1); // Increment every 1ms for a smooth effect
    
        // Cleanup interval on component unmount
      
        return () => clearInterval(intervalId2);
      }, [follower]);

      useEffect(() => {
        // Function to increment the counter
        const incrementCounter3 = () => {
        
          setshop(prevCounter => {
            if (prevCounter > 800) {
              clearInterval(intervalId3); // Stop incrementing when max value is reached
              return prevCounter;
            }
            else{
                if (ref3.current) {
                    ref3.current.innerHTML = `${shop}`;
                  }
                return prevCounter + 25;
            }
          });
        };

        // Set up the interval
        const intervalId3 = setInterval(incrementCounter3, 1); // Increment every 1ms for a smooth effect
    
        // Cleanup interval on component unmount
      
        return () => clearInterval(intervalId3);
      }, [shop]);



      useEffect(() => {
        // Function to increment the counter
        const incrementCounter4 = () => {
        
          setpercent(prevCounter => {
            if (prevCounter > 95) {
              clearInterval(intervalId4); // Stop incrementing when max value is reached
              return prevCounter;
            }
            else{
                if (ref4.current) {
                    ref4.current.innerHTML = `${percent}%`;
                  }
                return prevCounter + 1;
            }
          });
        };

        // Set up the interval
        const intervalId4 = setInterval(incrementCounter4, 1); // Increment every 1ms for a smooth effect
    
        // Cleanup interval on component unmount
      
        return () => clearInterval(intervalId4);
      }, [percent]);

    return ( 

        <>
        <div className='customers bg-Customers flex justify-center space-x-48 text-center p-4'>
        <div className="cutomer"> 
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' ref={ref}> 0 </p>
            </div>
            <div className="happy">
                <h3>Happy Customer</h3>
            </div>
        </div>
        {/* followers */}
        <div className="Followers">
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' ref={ref2}> 0</p>
            </div>
            <div className="happy">
                <h3>Followers</h3>
            </div>
        </div>
        {/* SHops */}
        <div className="Followers">
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' ref={ref3}>0</p>
            </div>
            <div className="happy">
                <h3>Shops</h3>
            </div>
        </div>

        {/* Percent */}

        <div className="Followers">
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' ref={ref4}>0%</p>
            </div>
            <div className="happy">
                <h3 className='text-1xl'>Percent Sucsess</h3>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Customers;