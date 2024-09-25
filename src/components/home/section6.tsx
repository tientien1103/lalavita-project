import React, { useState } from "react";
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
  const [productList, setProductList] = useState(PRODUCT_LIST);

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
        setProductList(PRODUCT_LIST);
        break;
    }
  };
  return (
    <div className="container max-w-screen-xl">
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-center text:sm md:text-lg font-medium md:font-extrabold uppercase text-[#111111]">
          <ul className="flex list-none flex-col md:flex-row items-center">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={clsx("mr-6 cursor-pointer whitespace-nowrap", {
                  "bg-[#f2599c] rounded-[19px] py-2 px-5": activeTab === tab,
                })}
                onClick={() => {
                  onChangeTab(tab);
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-16">
          {productList.map((product, index) => (
            <ProductCard key={`${product.name} ${index + 1}`} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section6;
