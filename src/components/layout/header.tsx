"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  variant?: "black" | "white";
}

export default function Header({ variant }: HeaderProps) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="block inset-x-0 top-0 z-50 transition-colors duration-200 fixed bg-transparent">
      <div className="container max-w-[1800px]">
        <nav
          className="flex items-center justify-between py-20"
          aria-label="Global"
        >
          <Link href="/">
            <Image
              loading="eager"
              priority
              src={
                variant === "black"
                  ? "/logo-lalavita.webp"
                  : "/logo-lalavita-white.webp"
              }
              alt="logo-lalavita"
              width={101}
              height={27}
            />
          </Link>

          {/* <Link className="block 2xl:hidden" href="/">
            <Image
              loading="eager"
              priority
              src={"/logo-lalavita.webp"}
              alt="logo-lalavita"
              width={101}
              height={27}
            />
          </Link> */}

          <div className="flex flex-col gap-2 items-end justify-end text-left w-[238px]">
            <button
              // onClick={toggleDropdown}
              className="flex flex-col items-end justify-end"
            >
              <Image
                loading="eager"
                priority
                src={
                  variant === "black"
                    ? "/menu-icon.webp"
                    : "/menu-icon-white.webp"
                }
                alt="menu-icon"
                width={40}
                height={11}
              />
            </button>
            {/* {isOpen && (
              <div className="absolute left-0 right-0 top-[54px] !flex h-screen flex-col bg-black px-4 pt-4">
                {NAVIGATION.map((item) => (
                  <button
                    key={item.title}
                    className="block px-4 py-2 text-[#505050] hover:bg-[#201D41] w-full text-left hover:text-white"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </button>
                ))}
              </div>
            )} */}
            <div className="flex gap-2">
              <button className="text-[#42c0cc] text-lg">KR</button>
              <button
                className={
                  variant === "black"
                    ? "text-black text-lg"
                    : "text-white text-lg"
                }
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
