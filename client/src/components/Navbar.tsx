import React, { Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import Loading from "./Loading";
import NavLinkComponent from "./NavLinkComponent";
import ScrollToTop from "./ScrollToTop";

/** This is a functional component that renders a navbar with various
 * functionalities such as dark mode toggle, responsive menu, and scroll event. It also renders the
 * main content of the website using the `Outlet` component from `react-router-dom`. The component uses
 * various hooks such as `useState`, `useEffect`, and `useLocation` to manage state and handle events.
 */
function Navbar() {
  const { pathname } = useLocation();

  const [show, setShow] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [ExpandNavbar, setExpandNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NavbarStyle = `bgPrimary shadow-md border-1 border-gray-300 w-screen flex items-center justify-center ${
    ExpandNavbar ? "h-screen fixed" : "h-16"
  } z-50`;
  //Scroll Event
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (lastScrollY >= 62) {
        // if scroll down position fixed
        setShow(false);
      } else {
        // if scroll up normal position
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, pathname]);

  useEffect(() => {
    setExpandNavbar(false);
  }, [pathname]);
  //Check if theme option is in local storage
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    const theme = currentTheme !== null ? JSON.parse(currentTheme) : false;
    if (theme) {
      setDarkMode(theme);
    }
  }, []);
  //Set theme option in local storage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center bgPrimary textPrimary top-0 w-screen ${
        darkMode ? "dark" : ""
      }`}
    >
      {show ? <></> : <div className="h-16"></div>}
      <ScrollToTop />
      <header
        className={
          show
            ? `${NavbarStyle}`
            : `${NavbarStyle} ${ExpandNavbar ? "" : "animate-dropDown"} fixed`
        }
      >
        <img
          src="./images/logo.png"
          onClick={() => navigate("/")}
          className={`absolute top-3 sm:top-auto md:w-64 sm:w-36 sm:left-3 w-44 cursor-pointer ${
            show ? "" : "animate-dropDown"
          }`}
        />
        <button
          onClick={() => {
            setDarkMode((prev: boolean) => !prev);
          }}
          className={`absolute sm:right-0 sm:left-auto top-0 left-0 right-auto m-5 ${
            show ? "" : "[&_svg]:animate-dropDown"
          }`}
        >
          {darkMode ? (
            <LightModeIcon className="text-txtsecondary" />
          ) : (
            <DarkModeIcon />
          )}
        </button>
        <nav
          className={
            ExpandNavbar
              ? "absolute gap-2 md:gap-3"
              : "absolute sm:flex right-0 mr-16 hidden gap-2 md:gap-3 "
          }
        >
          <NavLinkComponent PATH="/" Name="Αρχική" />
          <div className="border border-transparent navSpaces mt-1 h-5"></div>
          <NavLinkComponent PATH="/about" Name="Πληροφορίες" />
          <div className="border border-transparent navSpaces mt-1 h-5"></div>
          <NavLinkComponent PATH="/services" Name="Υπηρεσίες" />
          <div className="border border-transparent navSpaces mt-1 h-5"></div>
          <NavLinkComponent PATH="/contact" Name="Επικοινωνία" />
        </nav>
        <button
          onClick={() => {
            setExpandNavbar((prev: boolean) => !prev);
          }}
          className={`sm:hidden absolute right-0 top-0 m-5  dark:text-txtsecondary ${
            show ? "" : "[&_svg]:animate-dropDown"
          }`}
        >
          <MenuIcon />
        </button>
      </header>
      <main>
        {/*This is where pages are loaded*/}
        <HelmetProvider>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </HelmetProvider>
      </main>
    </div>
  );
}

export default Navbar;
