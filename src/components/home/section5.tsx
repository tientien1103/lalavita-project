"use client";
import React, { useRef, useState } from "react";
import Container from "../common/container";
import Image from "next/image";
import { ITEM_LIST } from "@/mockup/data";
import clsx from "clsx";

function Section5() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 270;

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
    <Container>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-10 mt-20">
          <p className="text-[#42c0cc] text-lg font-semibold">
            NMN의 효능, 효과
          </p>
          <h3 className="text-[40px] leading-[48px] font-semibold text-[#222222]">
            NMN의 효능과 효과를 <br />한 눈에 살펴보세요.
          </h3>
        </div>

        <div className="flex items-center gap-6">
          {/* Display current index */}
          <p className="text-2xl text-[#222222]">
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
        className="mt-16 flex flex-row gap-24 snap-x snap-mandatory overflow-x-scroll overscroll-x-contain scrollbar-hide whitespace-nowrap"
      >
        {ITEM_LIST.map((item, index) => (
          <div
            key={`item ${index + 1}`}
            className="min-w-[350px] flex flex-col gap-12"
          >
            <Image
              src={`/section5/${item.imgUrl}.webp`}
              alt={item.imgUrl}
              width={280}
              height={280}
              className="object-contain"
              loading="lazy"
            />
            <div className="space-y-5">
              <p className="text-2xl text-[#222] font-semibold max-w-[310px] whitespace-normal">
                {item.title}
              </p>
              <p className="text-base text-[#999] max-w-[330px] whitespace-normal">
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
