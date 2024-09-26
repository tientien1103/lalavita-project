import React from "react";
import Container from "../common/container";
import Image from "next/image";

function Section3() {
  return (
    <Container>
      <div className="w-full py-24 lg:pb-24 lg:pt-32 2xl:pt-52">
        <div className="flex flex-col-reverse items-center 2xl:flex-row 2xl:justify-between">
          <div className="flex flex-col gap-10">
            <p className="text-[#42c0cc] lg:text-lg text-base font-semibold">
              라라비타 NMN 원료
            </p>
            <h3 className="text-[40px] leading-[48.5px] font-semibold text-[#222222]">
              Uthever® NMN이 <br />
              SUPERCONDRIA® NMN으로
              <br />
              새롭게 태어났습니다.
            </h3>
            <p className="lg:text-lg text-base text-[#222222] max-w-[630px]">
              라라비타는 Uthever® NMN 상표 사용 허가를 받은 최초의 한국
              브랜드입니다. Uthever® NMN은 라라비타의 SUPERCONDRIA® NMN으로 전
              세계에 판매되고 있습니다. Effepharm의 Uthever® NMN은 시장에서
              순도, 효능 및 품질에서 가장 뛰어난 원료로 인정 받고 있습니다. 99%
              이상의 고순도를 가지고 있는 것이 특징입니다.
            </p>
          </div>

          <div className="relative h-[300px] w-full self-center lg:h-[768px] lg:w-[700px]">
            <Image
              src="/main-bg-section3.webp"
              alt="main-bg-section3"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Section3;
