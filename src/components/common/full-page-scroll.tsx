"use client";
import { useEffect, useRef, useState } from "react";
import Container from "./container";
import Section1 from "../home/section1";
import Section7 from "../home/section7";
import Section6 from "../home/section6";
import Section5 from "../home/section5";
import Section4 from "../home/section4";
import Section3 from "../home/section3";
import Section2 from "../home/section2";
import clsx from "clsx";
import Header from "../layout/header";

interface SectionProps {
  title: string;
  component: JSX.Element;
  bgColor?: string;
  bgColorMobile?: string;
  bgImg?: string;
}

const SECTION_LIST: SectionProps[] = [
  {
    title: "section1",
    component: <Section1 />,
  },
  {
    title: "section2",
    component: <Section2 />,
    bgColor: "#fed614",
  },
  {
    title: "section3",
    component: <Section3 />,
  },
  {
    title: "section4",
    component: <Section4 />,
    bgColor: "linear-gradient(to right, #fed614 50%, white 50%)",
    bgColorMobile: "linear-gradient(to bottom, #fed614 50%, white 50%)",
  },
  {
    title: "section5",
    component: <Section5 />,
  },
  {
    title: "section6",
    component: <Section6 />,
    bgColor: "#f7d6e9",
  },
  {
    title: "section7",
    component: <Section7 />,
    bgImg: "/section7/main-bg-section7.webp",
  },
];

const FullPageScroll = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check window size on initial render
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (event.deltaY > 0) {
        if (currentIndex < sectionsRef.current.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY.current - touchEndY.current > 50) {
        // Swiped up (next section)
        if (currentIndex < sectionsRef.current.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }

      if (touchStartY.current - touchEndY.current < -50) {
        // Swiped down (previous section)
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    sectionsRef.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentIndex]);

  return (
    <div className="fullpage-scroll">
      <Header variant={currentIndex === 6 ? "white" : "black"} />
      {SECTION_LIST.map((section, index) => (
        <section
          key={`page ${index}`}
          ref={(el: HTMLDivElement | null) => {
            if (el) sectionsRef.current[index] = el;
          }}
          style={{
            background: isMobile ? section.bgColorMobile : section.bgColor,
          }}
          className={clsx(`h-screen w-full flex items-center justify-center`, {
            "bg-[url('/section7/main-bg-section7.webp')] bg-no-repeat bg-cover bg-center":
              section.bgImg,
          })}
        >
          {section.component}
        </section>
      ))}

      {/* Pagination Buttons */}
      <Container>
        {!isMobile && (
          <div className="fixed right-4 3xl:right-16 top-1/3 transform flex flex-col space-y-2">
            {SECTION_LIST.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`px-[6px] py-[6px] rounded-full ${
                  currentIndex === index
                    ? "bg-[#42c0cc] text-white"
                    : "bg-gray-300 text-black"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default FullPageScroll;
