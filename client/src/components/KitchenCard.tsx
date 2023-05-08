import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { IKitchenCard } from "../interfaces/interfaces";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const KitchenCard: FC<IKitchenCard> = (props) => {
  const { title, label, images } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, 200);
  };
  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200);
  };

  const listItems = images.map((item, index) => (
    <button
      key={item}
      onClick={() => {
        setFade(true);
        setTimeout(() => {
          setFade(false);
          setCurrentIndex(index);
        }, 150);
      }}
      disabled={index === currentIndex ? true : false}
      className={`-mt-4 m-1 w-3 h-3 rounded-full duration-700 borderPrimary border-2 z-20 ${
        index === currentIndex ? "bgPrimary" : ""
      }`}
    ></button>
  ));
  return (
    <div className="relative items-center justify-center flex-col textPrimary bgPrimary xl:w-96 w-80 rounded shadow-md hover:drop-shadow-2xl transition-all duration-500 border-1 border-gray-300">
      <div className="relative xl:h-72 h-64">
        <div className="absolute">
          <div className="w-full relative">
            <button
              onClick={prevImage}
              disabled={currentIndex === 0 ? true : false}
              className={`bgText w-10 h-10 rounded-full outline-none absolute top-[108px] xl:top-[122px] z-20 opacity-30 hover:opacity-60 ${
                currentIndex === 0 ? "hidden" : ""
              } transition-opacity ml-1`}
            >
              <KeyboardArrowLeftIcon className="svgArrowColor" />
            </button>
            <button
              onClick={nextImage}
              disabled={currentIndex === images.length - 1 ? true : false}
              className={`bgText w-10 h-10 rounded-full outline-none absolute right-0 top-[108px] xl:top-[122px] z-20 opacity-30 hover:opacity-60 ${
                currentIndex === images.length - 1 ? "hidden" : ""
              } transition-opacity mr-1`}
            >
              <KeyboardArrowRightIcon className="svgArrowColor" />
            </button>
          </div>
          <img
            src={images[currentIndex]}
            className={
              fade
                ? "xl:w-96 xl:h-72 w-80 h-64 rounded-t opacity-30 transition-opacity"
                : "xl:w-96 xl:h-72 w-80 h-64 rounded-t opacity-100 transition-opacity"
            }
            alt={label}
          />
          <div className="flex items-center justify-center">{listItems}</div>
        </div>
      </div>
      <h2 className="text-center text-4xl m-5">{label}</h2>
      <p className="text-center m-5 break-words">{title}</p>
      <div className="h-20">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <Link
            to="/contact"
            className="flex items-center mb-8 justify-center rounded text-secondary w-44 h-10 bg-accent hover:bg-secondAccent hover:text-txtprimary transition-colors duration-300s"
          >
            Ζητήστε προσφορά
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;
