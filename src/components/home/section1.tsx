import React from "react";
import Container from "../common/container";
import Image from "next/image";

interface LetterListProps {
  imgUrl: string;
  width: number;
  height: number;
}

const LETTER_LIST: LetterListProps[] = [
  {
    imgUrl: "main-letter-1",
    width: 57.9,
    height: 79.7,
  },
  {
    imgUrl: "main-letter-2",
    width: 67,
    height: 80,
  },
  {
    imgUrl: "main-letter-3",
    width: 92.3,
    height: 63.7,
  },
  {
    imgUrl: "main-letter-4",
    width: 73,
    height: 80,
  },
];

const LOGO_LIST: LetterListProps[] = [
  {
    imgUrl: "main-confirm-logo-1",
    width: 42,
    height: 42,
  },
  {
    imgUrl: "main-confirm-logo-2",
    width: 42,
    height: 42,
  },
  {
    imgUrl: "main-confirm-logo-3",
    width: 50,
    height: 41,
  },
  {
    imgUrl: "main-confirm-logo-4",
    width: 60,
    height: 14,
  },
  {
    imgUrl: "main-confirm-logo-5",
    width: 80,
    height: 15,
  },
];

function Section1() {
  return (
    <Container>
      <div className="w-full pb-24 pt-10 md:pt-52">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-10 mt-20">
            <p className="text-[#42c0cc] text-lg font-semibold">
              왜 라라비타 NMN일까요?
            </p>
            <h3 className="text-[55px] leading-[72px] font-semibold text-[#222222]">
              노화를 늦추고 <br /> 건강을 지키는
              <br /> 최적의 방법
            </h3>
            <p className="text-lg text-[#222222]">
              라라비타의 SUPERCONDRIA ®NMN은 전세계적으로 <br /> 인증 받은
              Uthever® NMN로 만든 고순도 제품입니다.
            </p>

            <div className="flex gap-5">
              {LETTER_LIST.map((letter, index) => (
                <Image
                  key={`letter ${index + 1}`}
                  src={`/main/${letter.imgUrl}.webp`}
                  alt={letter.imgUrl}
                  width={letter.width}
                  height={letter.height}
                  className="object-contain"
                />
              ))}
            </div>

            <div className="flex gap-2">
              {LOGO_LIST.map((logo, index) => (
                <Image
                  key={`logo ${index + 1}`}
                  src={`/main/${logo.imgUrl}.webp`}
                  alt={logo.imgUrl}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              ))}
            </div>

            <Image
              src="/main/down-arrow.webp"
              alt="down-arror"
              width={49}
              height={49}
              className="object-contain pt-24"
            />
          </div>
          <div className="relative h-[200px] w-full self-center md:h-[768px] lg:w-[700px]">
            <Image
              src="/main/main-bg.webp"
              alt="main-bg"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Section1;
