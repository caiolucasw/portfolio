"use client";
import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface Props {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
}
const SliderButtons = ({ containerStyles, btnStyles, iconsStyles }: Props) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default SliderButtons;
