import React, { useEffect, useRef } from 'react';
import photo from '../../imges/Header.png';
import './mainsection.css'
import { gsap } from 'gsap';
const Main = () => {

  const sectionsRef = useRef([]);
 

  useEffect(() => {
    const sections = sectionsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, { opacity: 1, x: 0, duration: 2 });
          } else {
            gsap.to(entry.target, { opacity: 0, x: -10, duration: 2 });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);




    return (  <>
      <div className="main bg-main_color w-full pt-9 flex space-x-80 items-center justify-center ">
      <div className="text" ref={(el) => (sectionsRef.current[0] = el)}    style={{
            opacity: 0,
            transform: 'translatX(-10px)',
          
          }}>

        {/* for first word logo */}
        <div className="title">
            <h1 className='text-9xl text-brown_color font-bold'>dangila</h1>
        </div>
        {/* for first word in paragraph */}
        <div className="mainline ">
          <h5 className='text-brown_color font-bold'>Natural Inner Beauty</h5>
        </div>

        {/* paragraph  */}

        <div className="paragraph">

          <h5>Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.</h5>
        </div>
        <div className="btn">
            <button className='bg-brown_color text-white text-1xl  p-3 '>Buy Now | $49.99</button>
        </div>
      </div>
 
      <div className="photo" >
        <img src={photo} alt="Logo" loading='lazy'  width={500} height={'auto'} ref={(el) => (sectionsRef.current[1] = el)}  style={{
            opacity: 0,
          transform: 'translatX(-10px)'
          }}/>
      </div>
    </div>
    
    </>);
}
 
export default Main;