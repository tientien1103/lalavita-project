import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ProductCard from "../section6/product-card";
import { PRODUCT_LIST } from "@/mockup/data";

const tabs = [
  "NMN",
  "트렌스-레스베라트롤",
  "비타민 K2+D3",
  "아피제닌",
  "피세틴",
  "케르세틴",
  "Coq10",
  "Tmg",
  "Lutein",
  "MSM",
];

function Section6() {
  const [activeTab, setTab] = useState(tabs[0]);
  const [productList, setProductList] = useState(
    PRODUCT_LIST.filter((item) => item.type === "NMN")
  );
  const [fixedHeight, setFixedHeight] = useState("auto");
  const productListRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onChangeTab = (type: string) => {
    setTab(type);

    switch (type) {
      case "NMN":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "NMN"));
        break;
      case "트렌스-레스베라트롤":
        setProductList(
          PRODUCT_LIST.filter((item) => item.type === "트렌스-레스베라트롤")
        );
        break;
      case "digital-acc":
        setProductList(
          PRODUCT_LIST.filter((item) => item.type === "digital-acc")
        );
        break;
      case "비타민 K2+D3":
        setProductList(
          PRODUCT_LIST.filter((item) => item.type === "비타민 K2+D3")
        );
        break;
      case "아피제닌":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "아피제닌"));
        break;
      case "피세틴":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "피세틴"));
        break;
      case "케르세틴":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "케르세틴"));
        break;
      case "Coq10":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "Coq10"));
        break;
      case "Tmg":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "Tmg"));
        break;
      case "Lutein":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "Lutein"));
        break;
      case "MSM":
        setProductList(PRODUCT_LIST.filter((item) => item.type === "MSM"));
        break;
      default:
        setProductList(PRODUCT_LIST.filter((item) => item.type === "NMN"));
        break;
    }

    if (productListRef.current) {
      const newHeight = productListRef.current.scrollHeight;
      setFixedHeight(`${newHeight}px`);
    }
  };
  return (
    <div className="min-h-screen w-full pt-32 lg:pt-60 2xl:pb-20 2xl:pt-14 3xl:pt-44 bg-[#f7d6e9]">
      <div className="container max-w-screen-xl">
        <div className="flex flex-col gap-14 lg:gap-10 2xl:mt-10 3xl:mt-0">
          <div className="flex w-full justify-center">
            <ul className="flex list-none flex-row items-center snap-x snap-mandatory overflow-x-scroll overscroll-x-contain scrollbar-hide whitespace-nowrap">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={clsx(
                    "mr-6 cursor-pointer text:sm md:text-lg font-medium md:font-extrabold uppercase text-[#111111] snap-start",
                    {
                      "bg-[#f2599c] rounded-[19px] py-1 px-4":
                        activeTab === tab,
                    }
                  )}
                  onClick={() => {
                    onChangeTab(tab);
                  }}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={productListRef}
            style={{ height: fixedHeight }}
            className={clsx(
              "flex flex-row lg:gap-8 gap-4 lg:justify-center lg:items-center justify-start",
              {
                "snap-x snap-mandatory overflow-x-scroll overscroll-x-contain scrollbar-hide whitespace-nowrap":
                  isMobile,
              }
            )}
          >
            {productList.length > 0 ? (
              productList.map((product, index) => (
                <div
                  key={`${product.name} ${index + 1}`}
                  className="snap-start"
                >
                  <ProductCard {...product} />
                </div>
              ))
            ) : (
              <p className="text-center text-3xl text-[#222]">
                No product found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
