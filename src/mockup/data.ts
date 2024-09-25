export interface ProductListProps {
  img: string;
  name: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  type: string;
}

export const PRODUCT_LIST: ProductListProps[] = [
  {
    img: "product-powder.webp",
    name: "NMN 파우더",
    description:
      "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
    oldPrice: "67,000원",
    newPrice: "56,900원",
    type: "NMN",
  },
  {
    img: "product-powder.webp",
    name: "NMN 파우더",
    description:
      "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
    oldPrice: "67,000원",
    newPrice: "56,900원",
    type: "NMN",
  },
  {
    img: "product-powder.webp",
    name: "NMN 파우더",
    description:
      "남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품",
    oldPrice: "67,000원",
    newPrice: "56,900원",
    type: "NMN",
  },
];

interface ItemListProps {
  imgUrl: string;
  title: string;
  description: string;
  tags: string[];
}

export const ITEM_LIST: ItemListProps[] = [
  {
    imgUrl: "main-illust-05-1",
    title: "노화 억제 및 세포 활성화",
    description:
      "NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-2",
    title: "활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호",
    description:
      "NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-3",
    title: "혈액순환 촉진 및 심장 기능 개선 기능",
    description:
      "연구 결과, 신체 국소에 빈혈을 예방하는 효과가 있다고 합니다. SIRT1을 활성화함으로써 심장을 보호하고 혈액순환을 촉진시킵니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-4",
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-5",
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-1",
    title: "노화 억제 및 세포 활성화",
    description:
      "NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
  {
    imgUrl: "main-illust-05-2",
    title: "활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호",
    description:
      "NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.",
    tags: ["#신체기능향상", "#노화억제"],
  },
];
