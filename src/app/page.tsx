import FullPageScroll from "@/components/common/full-page-scroll";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <section className="w-full pb-24 pt-10 md:pt-40 lg:pb-60">
        <FullPageScroll />
      </section>
    </main>
  );
}
