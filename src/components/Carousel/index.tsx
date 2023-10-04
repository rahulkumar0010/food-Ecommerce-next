import { carouselItemPropsType } from "@/types";
import Slider from "react-slick";
import ImageCom from "../Image";

export default function Carousel({ image }: carouselItemPropsType) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {image.map((item, index) => (
          <div key={index}>
            <ImageCom  image={item} title={`${index}`} />
          </div>
        ))}
      </Slider>
    </>
  );
}
