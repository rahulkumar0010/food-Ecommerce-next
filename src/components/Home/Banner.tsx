"use client";
import Carousel from "../Carousel";

function Banner() {
  let image = [
    "https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800110/129010048-assorted-indian-food-on-black-background-indian-cuisine-top-view-with-copy-space-panorama-banner.jpg",
    "https://www.shutterstock.com/image-photo/collage-various-food-products-260nw-1114876286.jpg",
    "https://www.chennailounge.com/wp-content/uploads/2019/04/food-banner.jpg",
  ];

  return (
    <div className="p-0">
      <Carousel image={image} />
    </div>
  );
}

export default Banner;
