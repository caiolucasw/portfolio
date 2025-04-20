"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface Props {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
  numSlides?: number;
  disabledStyles?: string;
  showCount?: boolean;
}
const SliderButtons = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  numSlides,
  disabledStyles,
  showCount,
}: Props) => {
  const swiper = useSwiper();
  const first = swiper.activeIndex === 0;
  const last = numSlides && swiper.activeIndex === numSlides - 1;
  const firstDisabled = first ? disabledStyles || "" : "";
  const lastDisabled = last ? disabledStyles || "" : "";
  return (
    <div className={containerStyles}>
      <button
        className={cn(btnStyles, firstDisabled)}
        onClick={() => swiper.slidePrev()}
        disabled={!!first}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      {showCount && (
        <p className="block sm:hidden text-2xl text-center align-middle mt-1 font-bold">{`${
          swiper.activeIndex + 1
        } / ${numSlides}`}</p>
      )}
      <button
        className={cn(btnStyles, lastDisabled)}
        disabled={!!last}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default SliderButtons;
