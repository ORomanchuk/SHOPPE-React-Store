import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlider = ({ images }) => {
    const settings = {
        customPaging: function(i) {
            return (
                <a>
                    <img src={`${images[i++]}`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="product__slider">
            <Slider {...settings}>
                {
                    images?.map(img => <div className="product__image"><img src={img} alt="product" /></div>)
                }
            </Slider>
        </div>
    );
}

export default ProductSlider;