import React from "react";

export type imagePropsType = {
  image: string;
  // id: string;
  title: string;
  // width: number;
  height?: string;
};
type settingsType = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};
export type carouselPropsType = {
  settings: settingsType;
  btnRef?: React.Ref<HTMLInputElement>;
  children: React.ReactNode;
};
export type carouselItemPropsType = {
  image: string[];
};

export type postItemType = {
  id: number;
  name: string;
  image: string;
  price: number;
  count?: number | undefined;
  totalPrice?: number | undefined;
};
