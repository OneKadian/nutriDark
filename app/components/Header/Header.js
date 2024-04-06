"use client";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "../Section/SectionContainer";
import { Nav } from "../Nav/Nav";
import { ButtonGroup } from "../Button/ButtonGroup";
import { Button } from "../Button/Button";
import { Icon } from "@iconify/react";
import Logo from "../../public/nutritrack.svg";

export const Header = () => {
  return (
    <header
      id="header"
      className="header fixed left-0 w-full top-0 z-30 bg-black border-b border-transparent border-gradient-to-b from-neutral-100 to-neutral-500"
    >
      <SectionContainer className="header--container wrap wrap-px bg-black border-[3px] border-transparent border-gradient-to-b from-neutral-100 to-neutral-500">
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
              <Icon
                icon="material-symbols:arrow-forward-rounded"
                className="text-white"
              />
            </a>
          </ButtonGroup>
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};
