"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ?", href: "/#faq" },
];

const Nav = ({ userStatus }) => {
  const pathname = usePathname();
  const membersNavigation = [
    { name: "Home", href: "/" },
    {
      name: "Billing",
      href: "https://billing.stripe.com/p/login/test_3csaG2csp7sj8wwbII",
    },
  ];

  const memoizedNavigation = useMemo(() => {
    switch (pathname) {
      case "/members":
        return membersNavigation;
      case "/":
        return navigation;
      // ...other cases
      default:
        return navigation;
    }
  }, [pathname, navigation, membersNavigation]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user, setUser] = useState(true);

  const router = useRouter();

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <nav className="header-nav">
      <div className="header-nav--container">
        {/* Burger menu icon */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="mobile-menu text-white"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu
            icon="material-symbols:menu-rounded"
            className="h-6 w-auto text-white"
          />
        </button>
        {/* {!userStatus && <UserButton afterSignOutUrl="/" />} */}
        {/* Sidebar */}
        <div
          className={`header-nav--menu-container z-20 ${
            isNavOpen ? "show" : "hide"
          }`}
          id="navbar-default"
        >
          <ul className="header-nav--menu mr-4">
            {memoizedNavigation.map((item) => (
              <li
                key={item.name}
                className={
                  item.isArrow
                    ? `inline-flex cursor-pointer ${
                        user ? "block" : "hidden"
                      } gap-3 rounded-lg justify-center lg:hidden md:hidden font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 w-[30%]`
                    : "header-nav--menu-item"
                }
              >
                <Link
                  key={item.name}
                  href={item.href}
                  className={`menu-item--link flex items-center
                                ${router.pathname === item.href ? "active" : ""}
                              `}
                  onClick={closeNav}
                  target={item.target ? item.target : "_self"}
                >
                  {item.name}
                  {item.isArrow && (
                    <span className="ml-2 inline-block text-sm font-medium text-inherit">
                      <FaArrowRight className="h-4 w-auto text-gray-300" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
