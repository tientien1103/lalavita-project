import FullPageScroll from "@/components/common/full-page-scroll";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <section className="py-40">
        <FullPageScroll />
      </section>
    </main>
  );
}
