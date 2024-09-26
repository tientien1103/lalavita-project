import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../common/container";

interface CardListProps {
  imgUrl: string;
  bgColor: string;
  widthImg: number;
  heightImg: number;
  title: string;
  description: string;
  colorTextDes: string;
}

const CARD_LIST: CardListProps[] = [
  {
    imgUrl: "main-illust-02-1",
    bgColor: "white",
    widthImg: 60,
    heightImg: 50,
    title: "인체의 NAD+ 균형 유지를 위해",
    description:
      "인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+ 는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가 들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체 건강 상태도 나빠지기도 합니다.",
    colorTextDes: "#999",
  },
  {
    imgUrl: "main-illust-02-2",
    bgColor: "#42c0cc",
    widthImg: 60,
    heightImg: 47,
    title: "인체 내의 주요 세포 에너지원",
    description:
      "니코틴아마이드 모노뉴클레오타이드(NMN)는 인체 내의 주요 세포 에너지원 중에 하나입니다. 감소된 NAD+ 를 보충제 역할을 함으로써 노화를 늦추는 효과가 있으며, 건강을 향상시키는데 도움이 됩니다.",
    colorTextDes: "#222",
  },
  {
    imgUrl: "main-illust-02-3",
    bgColor: "white",
    widthImg: 61,
    heightImg: 61,
    title: "젊음 유지 및 노화 억제에 탁월한 효과",
    description:
      "NMN은 노화를 되돌릴 뿐만 아니라 관련된 질병을 억제하는데 효과적입니다. 연구를 진행한 결과, NMN가 노화로 인한 세포 손상, 신경 퇴행, 심장기능 악화 등의 문제 개선과 젊음을 유지하는데 효과가 있다는 것을 발견했습니다.",
    colorTextDes: "#999",
  },
];

function Section2() {
  return (
    <Container>
      <div className="w-full py-16 2xl:py-2 3xl:py-24 bg-[#fed614]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <p className="text-[#42c0cc] lg:text-lg text-sm font-semibold text-center">
              NMN는 왜 중요할까요?
            </p>
            <h3 className="lg:text-[40px] lg:leading-[48px] text-3xl font-semibold text-center text-[#222222]">
              “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. <br />
              그리고 이것에 가장 근접한 물질은 ‘NMN’이다.”
            </h3>
            <p className="lg:text-lg text-sm text-[#222222] text-center">
              미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드
              싱클레어 교수
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center space-y-6 lg:space-x-4 xl:space-x-8 pt-5 lg:pt-16 2xl:pt-4 3xl:pt-16">
            {CARD_LIST.map((card, index) => (
              <div
                key={`card ${index + 1}`}
                style={{ backgroundColor: card.bgColor }}
                className={clsx(
                  "space-y-4 lg:space-y-7 rounded-[20px] 2xl:w-[467px] 3xl:h-[448px] 2xl:h-[410px] lg:h-[448px] lg:w-[327px] w-[300px] h-[120px] lg:pt-10 xl:px-10 px-5 pt-5",
                  {
                    "mt-5": index === 0,
                  }
                )}
              >
                <div className="flex justify-center items-center lg:justify-start lg:items-center">
                  <Image
                    src={`/section2/${card.imgUrl}.webp`}
                    alt={card.imgUrl}
                    width={card.widthImg}
                    height={card.heightImg}
                    className={`object-contain w-[50px] h-[40px] lg:${card.widthImg} lg:${card.heightImg}`}
                  />
                </div>
                <p className="lg:text-[32px] lg:leading-[40px] text-sm text-[#222222] font-semibold lg:text-start text-center">
                  {card.title}
                </p>
                <p
                  className={clsx(
                    "hidden lg:block text-base xl:text-lg max-w-[363px]",
                    {
                      "text-[#999]": card.colorTextDes === "#999",
                      "text-[#222]": card.colorTextDes === "#222",
                    }
                  )}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Section2;
