import React, { useEffect, useRef } from 'react';
import './Customer.css'
import { gsap } from 'gsap/gsap-core';
const Customers = () => {
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
        <div className='customers bg-Customers flex justify-center space-x-48 text-center p-4'>
        <div className="cutomer"  ref={(el) => (sectionsRef.current[0] = el)}    style={{
            opacity: 0,
            transform: 'translateX(10px)',
          
          }}> 
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' > 22510 </p>
            </div>
            <div className="happy">
                <h3>Happy Customer</h3>
            </div>
        </div>
        {/* followers */}
        <div className="Followers"  ref={(el) => (sectionsRef.current[1] = el)}    style={{
            opacity: 0,
            transform: 'translateX(10px)',
          
          }}>
            <div className="number"  ref={(el) => (sectionsRef.current[2] = el)}    style={{
            opacity: 0,
            transform: 'translateX(10px)',
          
          }}>
                <p className='text-brown_color text-3xl font-bold' > 810</p>
            </div>
            <div className="happy">
                <h3>Followers</h3>
            </div>
        </div>
        {/* SHops */}
        <div className="Followers" ref={(el) => (sectionsRef.current[3] = el)}    style={{
            opacity: 0,
            transform: 'translateX(10px)',
          
          }} >
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' >2000</p>
            </div>
            <div className="happy">
                <h3>Shops</h3>
            </div>
        </div>

        {/* Percent */}

        <div className="Followers"  ref={(el) => (sectionsRef.current[4] = el)}    style={{
            opacity: 0,
            transform: 'translateX(10px)',
          
          }}>
            <div className="number">
                <p className='text-brown_color text-3xl font-bold' >97%</p>
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