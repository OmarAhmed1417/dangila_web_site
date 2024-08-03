import { faDollarSign, faDroplet, faExplosion, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import './Proudct.css'
import gsap from 'gsap';
const Proudcts = () => {



    const sectionsRef = useRef([]);

    useEffect(() => {
      const sections = sectionsRef.current;
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, { opacity: 1, x: 0, duration: 1 });
            } else {
              gsap.to(entry.target, { opacity: 0, x: -10, duration: 1 });
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
  



    return ( 
        <>
        <div className="product bg-Product mt-6 p-9">
            <h2 className='text-brown_color text-4xl text-center'>OUR PRODUCTS</h2>
    <div className="icons flex justify-around items-center text-center mt-6 pt-11">
        <div className="first " ref={(el) => (sectionsRef.current[0] = el)}    style={{
            opacity: 0,
            transform: 'translateY(10px)',
          
          }}>
            <div className="icon">
            <FontAwesomeIcon icon={faExplosion} className='text-2xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Lotion</h3>
            </div>
        </div>

        <div className="second" ref={(el) => (sectionsRef.current[1] = el)}    style={{
            opacity: 0,
            transform: 'translateY(10px)',
          
          }}>
            <div className="icon">
            <FontAwesomeIcon icon={faDollarSign} className='text-3xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Cost</h3>
            </div>
        </div>

        <div className="third" ref={(el) => (sectionsRef.current[2] = el)}    style={{
            opacity: 0,
            transform: 'translateY(10px)',
          
          }}>
            <div className="icon">
            <FontAwesomeIcon icon={faLeaf} className='text-2xl text-brown_color' />
            </div>
            <div className="texticon">
                <h3 className='text-lg font-bold pt-3'>Quality</h3>
            </div>
        </div>

        <div className="Four" ref={(el) => (sectionsRef.current[3] = el)}    style={{
            opacity: 0,
            transform: 'translateY(10px)',
          
          }}>
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