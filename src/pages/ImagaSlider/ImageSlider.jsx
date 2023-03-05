
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Carousel,
  Wrap

} from "./Style";

import img from '../../assets/slider-badging.jpg'
import img1 from '../../assets/slider-scale.jpg'
import img2 from '../../assets/slider-badag.jpg'
import img3 from '../../assets/slider-scales.jpg'

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src={img} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={img1} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={img2} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src={img3} alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};



export default ImageSlider;