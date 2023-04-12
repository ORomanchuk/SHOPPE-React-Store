import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";


const Slider = () => {
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div><h2>Gold big hoops </h2><p>$ 68,00</p><button>View Product</button></div></SwiperSlide>
                <SwiperSlide><div><h2>Gold big hoops </h2><p>$ 68,00</p><button>View Product</button></div></SwiperSlide>
                <SwiperSlide><div><h2>Gold big hoops </h2><p>$ 68,00</p><button>View Product</button></div></SwiperSlide>
                <SwiperSlide><div><h2>Gold big hoops </h2><p>$ 68,00</p><button>View Product</button></div></SwiperSlide>
                <SwiperSlide><div><h2>Gold big hoops </h2><p>$ 68,00</p><button>View Product</button></div></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;