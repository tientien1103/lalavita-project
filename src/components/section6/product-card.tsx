import { ProductListProps } from "@/mockup/data";
import Image from "next/image";
import React from "react";

function ProductCard({
  img,
  name,
  description,
  oldPrice,
  newPrice,
}: ProductListProps) {
  return (
    <div className="bg-white h-[486px] flex flex-col items-center gap-8">
      <div className="bg-[#f8f8f8] h-[286px] 2xl:min-w-[400px] lg:min-w-[330px] min-w-[350px] flex items-center justify-center">
        <Image
          src={`/section6/${img}`}
          alt={img}
          width={220}
          height={220}
          className="object-contain"
        />
      </div>
      <div className="">
        <p className="text-2xl leading-[48px] text-[#222] font-semibold text-center">
          {name}
        </p>
        <p className="lg:text-base text-sm text-[#999] text-center whitespace-normal max-w-[310px]">
          {description}
        </p>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <hr className="w-full h-[2px] border-[#eeeeee]" />
        <p className="text-sm text-[#999] whitespace-nowrap line-through">
          {oldPrice}
        </p>
        <p className="text-lg text-[#222] font-semibold whitespace-nowrap">
          {newPrice}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
