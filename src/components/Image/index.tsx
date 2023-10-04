"use client";
import { imagePropsType } from "@/types";
import Image from "next/image";

const ImageCom = ({ image, title, height="20rem" }: imagePropsType) => {
  return (
    <>
      <Image
        alt={title}
        src={image}
        loader={() => image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: height, objectFit: "cover" }} // optional
        unoptimized 
      />
    </>
  );
};

export default ImageCom;
