"use client";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "./SectionContainer";
import Nav from "./Nav";
import ButtonGroup from "./ButtonGroup";
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from "../public/nutritrack.svg";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header
      id="header"
      // className="header fixed left-0 w-full top-0 z-30 bg-black border-b border-transparent border-gradient-to-b from-neutral-100 to-neutral-500"
      className="header fixed left-0 w-full top-0 z-30 bg-black "
    >
      <SectionContainer className="header--container wrap wrap-px bg-black border-[1px] border-transparent border-gradient-to-b from-neutral-100 to-neutral-500">
        <div className="header-logo--container">
          <h1 className="logo mb-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="h-6 w-auto"
                height="24"
                width="100"
              />
            </Link>
          </h1>
        </div>
        <SectionContainer className="flex items-center ml-auto">
          <Nav />
          <ButtonGroup className="hidden md:block">
            <a
              role="button"
              href="https://github.com/onekadian"
              // className="btn btn--secondary ml-4"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 ml-4 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 md:w-auto"
            >
              Login
              {/* <FaArrowRightLong className="text-white" /> */}
              <FaArrowRight className="text-white" />
            </a>
          </ButtonGroup>
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};

export default Header;
