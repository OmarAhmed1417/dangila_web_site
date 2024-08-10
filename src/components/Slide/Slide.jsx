import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Install Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import person from'../../imges/man.webp'
import './Slide.css'
const Slides = () => {
    return (  
        <>
        <div className="collect mt-12">

        <h2 className='text-center text-brown_color text-4xl p-6'>TESTIMONILAS</h2>

    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
    //   spaceBetween={30}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,

      }}
      pagination={{ clickable: true  }}
    //   navigation={{}}
      modules={[EffectCoverflow, Pagination, Navigation]}
      loop={true}
      className="mySwiper mt-9"
    >

      <SwiperSlide>
      <div className="persone bg-brown_color text-white p-5">
        <div className="imgeper flex justify-center text-center items-center">
            <img src={person} alt="Person" loading='lazy' width={80} height={80} style={{borderRadius:'50%'}} className='p-2'/>
        </div>
        <div className="information text-center ">
            <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed. By distrusts
procuring be oh frankness existence believing instantly if. Doubtful on an juvenile
as of servants insisted.</p>
        </div>
       </div>
      </SwiperSlide>


      <SwiperSlide>
      <div className="persone bg-brown_color text-white p-5">
        <div className="imgeper flex justify-center text-center">
            <img src={person} alt="Person" loading='lazy' width={80} height={80} style={{borderRadius:'50%'}} className='p-2'/>
        </div>
        <div className="information text-center">
            <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed. By distrusts
procuring be oh frankness existence believing instantly if. Doubtful on an juvenile
as of servants insisted.</p>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="persone bg-brown_color text-white p-5">
        <div className="imgeper flex justify-center text-center">
            <img src={person} alt="Person" loading='lazy' width={80} height={80} style={{borderRadius:'50%'}} className='p-2'/>
        </div>
        <div className="information text-center">
            <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed. By distrusts
procuring be oh frankness existence believing instantly if. Doubtful on an juvenile
as of servants insisted.</p>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="persone bg-brown_color text-white p-5">
        <div className="imgeper flex justify-center text-center">
            <img src={person} alt="Person" loading='lazy' width={80} height={80} style={{borderRadius:'50%'}} className='p-2'/>
        </div>
        <div className="information text-center">
            <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed. By distrusts
procuring be oh frankness existence believing instantly if. Doubtful on an juvenile
as of servants insisted.</p>
        </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="persone bg-brown_color text-white p-5">
        <div className="imgeper flex justify-center text-center">
            <img src={person} alt="Person" loading='lazy' width={80} height={80} style={{borderRadius:'50%'}} className='p-2'/>
        </div>
        <div className="information text-center">
            <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed. By distrusts
procuring be oh frankness existence believing instantly if. Doubtful on an juvenile
as of servants insisted.</p>
        </div>
       </div>
      </SwiperSlide>
    </Swiper>

    </div>

            </>
    );
}
 
export default Slides;