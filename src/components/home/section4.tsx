import React from "react";
import Image from "next/image";

function Section4() {
  return (
    <div className="container max-w-[1800px] pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-9 justify-center items-center text-center">
          <p className="text-[#42c0cc] text-lg font-semibold">Advantages 1</p>
          <h3 className="text-[40px] leading-[47px] font-semibold text-[#222222]">
            99% 이상 고순도의 <br />
            Uthever® NMN
          </h3>
          <ul className="text-lg text-[#222] list-decimal list-inside">
            <li>가장 높은 고순도 NMN.</li>
            <li>세계 최대 시험인증기관 인터텍 인증 획득.</li>
          </ul>
          <Image
            src="/section4/main-illust-04-1.webp"
            alt="main-illust-04-1"
            width={451}
            height={450}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-9 justify-center items-center text-center">
          <p className="text-[#42c0cc] text-lg font-semibold">Advantages 2</p>
          <h3 className="text-[40px] leading-[47px] font-semibold text-[#222222]">
            높은 안전성 및 <br />
            유효성
          </h3>
          <ul className="text-lg text-[#222] list-decimal list-inside">
            <li>
              Effepharm에서는 Uthever® NMN에 대한 동물실험과 <br /> 인체
              임상실험을 통해 안정성 및 유효성 인증.
            </li>
            <li>흡수성과 온도에 휠씬 덜 민감하여 실온에서 보관 가능.</li>
          </ul>
          <Image
            src="/section4/main-illust-04-2.webp"
            alt="main-illust-04-2"
            width={451}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
