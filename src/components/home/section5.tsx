"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../common/container";
import Image from "next/image";
import { ITEM_LIST } from "@/mockup/data";
import clsx from "clsx";

function Section5() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemWidth(window.innerWidth < 768 ? 380 : 270);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft + itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.scrollLeft - itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    }
  };

  const isDisabledNext = carouselRef.current
    ? scrollPosition >=
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    : false;

  const isDisabledPrev = carouselRef.current
    ? carouselRef.current.scrollLeft === 0
    : true;
  return (
    <Container className="lg:pb-0 lg:pt-24 pt-20 pb-16 2xl:pt-20">
      <div className="flex lg:flex-row lg:justify-between flex-col items-center lg:gap-5">
        <div className="flex flex-col gap-6 3xl:gap-10">
          <p className="text-[#42c0cc] text-lg font-semibold lg:text-start text-center">
            NMN의 효능, 효과
          </p>
          <h3 className="3xl:text-[40px] 3xl:leading-[48px] lg:text-3xl text-2xl font-semibold text-[#222222] lg:text-start text-center">
            NMN의 효능과 효과를 <br />한 눈에 살펴보세요.
          </h3>
        </div>

        <div className="flex flex-row items-center gap-6">
          {/* Display current index */}
          <p className="text-2xl text-[#222222] hidden lg:block">
            {currentIndex + 1} / {ITEM_LIST.length}
          </p>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={isDisabledPrev}
              className="z-20"
            >
              {isDisabledPrev ? (
                <Image
                  src="/section5/icons/circle-arrow-l-off.webp"
                  alt="circle-arrow-l-off"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/section5/icons/circle-arrow-l-on.webp"
                  alt="circle-arrow-l-on"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              )}
            </button>
            <button
              onClick={handleNext}
              disabled={isDisabledNext}
              className="z-20"
            >
              {isDisabledNext ? (
                <Image
                  src="/section5/icons/circle-arrow-r-off.webp"
                  alt="circle-arrow-r-off"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/section5/icons/circle-arrow-r-on.webp"
                  alt="circle-arrow-r-on"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="3xl:mt-16 mt-10 lg:ml-0 ml-10 flex flex-row lg:gap-24 gap-20 snap-x snap-mandatory overflow-x-scroll overscroll-x-contain scrollbar-hide whitespace-nowrap"
      >
        {ITEM_LIST.map((item, index) => (
          <div
            key={`item ${index + 1}`}
            className={clsx(
              "lg:min-w-[350px] min-w-[300px] flex flex-col gap-6 3xl:gap-12",
              {
                "-translate-x-12":
                  currentIndex === index && index === ITEM_LIST.length - 1,
              }
            )}
          >
            <Image
              src={`/section5/${item.imgUrl}.webp`}
              alt={item.imgUrl}
              width={280}
              height={280}
              className="object-contain w-[200px] h-[200px] 3xl:w-[280px] 3xl:h-[280px]"
              loading="lazy"
            />
            <div className="3xl:space-y-5 2xl:space-y-2 space-y-5">
              <p className="2xl:text-2xl text-xl text-[#222] font-semibold max-w-[310px] whitespace-normal">
                {item.title}
              </p>
              <p className="2xl:text-base text-sm text-[#999] max-w-[330px] whitespace-normal">
                {item.description}
              </p>
            </div>
            <div className="flex gap-1">
              {item.tags.map((tag) => (
                <>
                  {currentIndex === index ? (
                    <div
                      key={tag}
                      className={clsx("bg-teal-100 rounded-[20px] py-2 px-5", {
                        "bg-yellow-100": tag === "#신체기능향상",
                      })}
                    >
                      <p
                        className={clsx(
                          "text-[#42c0cc] leading-[30px] text-sm font-semibold",
                          {
                            "text-[#f0a72e]": tag === "#신체기능향상",
                          }
                        )}
                      >
                        {tag}
                      </p>
                    </div>
                  ) : (
                    <div
                      key={tag}
                      className="bg-[#f5f5f5] rounded-[20px] py-2 px-5"
                    >
                      <p className="text-[#999999] leading-[30px] text-sm font-semibold">
                        {tag}
                      </p>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Section5;
