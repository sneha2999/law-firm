import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonials } from '../../data';
import styles from "../Carousels/Carousels.module.css";
import { Navigation, Pagination } from 'swiper/modules';
import left from "../../assets/left.png";
import right from "../../assets/right.png"



const Carousels = () => {
  const swiperRef = useRef();
  const cards = testimonials.map(el => <><SwiperSlide key={el.img}>
    <div className={styles.card}>
    <img className={styles.clients_img} src={el.img} alt="pic of customer"/>
    <h4>{el.name}</h4>
    <h5>{el.sub}</h5>
    <p>{el.review}</p>
    </div>
  </SwiperSlide>
  </>
  )

  return (
    <div className={styles.testimonials_container}>
      <div className={styles.test_sub_container}>
      <div className={styles.heading}>
      <h1>What says our happy Clients?</h1>
      <div className={styles.swiper_btns}>
        <button className={styles.prev} onClick={()=>swiperRef.current.slidePrev()}>
          <img src={right} alt="left-swipe"/>
        </button>
        <button className={styles.next} onClick={()=>swiperRef.current.slideNext()}>
        <img src={left} alt="right-swipe"/>
        </button>
      </div>
      </div>
     <Swiper
       onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="mySwiper"
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Pagination]}
      breakpoints={{
        639: {
          slidesPerView: 2,
        },
        865:{
          slidesPerView: 3
        }
      }}
    >
       
      {cards}
    </Swiper>
      </div>
      </div>
  )
}

export default Carousels


