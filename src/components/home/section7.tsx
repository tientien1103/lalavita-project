import React from "react";
import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";

function Section7() {
  return (
    <Container>
      <div className="space-y-[104px] py-24">
        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Address</h3>
          <p className="text-4xl leading-[48px] text-white">
            1234, Dosan-daero 1-gil, <br /> lalavita Building
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Partnership</h3>
          <p className="text-4xl leading-[48px] text-white">
            +82 10 12347 890 <br />
            lalavita@gmail.com
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-lg leading-[40px] text-white">Address</h3>
          <div>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="text-4xl leading-[48px] text-white underline flex gap-2"
            >
              Youtube
              <Image
                src="/section7/sns-youtube.webp"
                alt="sns-youtube"
                width={37}
                height={37}
                className="object-contain"
              />
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="text-4xl leading-[48px] text-white underline flex gap-2"
            >
              Instagram
              <Image
                src="/section7/sns-instagram.webp"
                alt="sns-instagram"
                width={37}
                height={37}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Section7;
