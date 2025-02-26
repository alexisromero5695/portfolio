"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
export type IconProps = React.HTMLAttributes<SVGElement>;
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita errores de renderizado en SSR

  return (<header className="backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 fixed w-full z-20 top-0 left-0">
    <nav className="container px-2 lg:max-w-[1114px] flex flex-wrap items-center justify-between mx-auto py-4 ">
      <a
        className="flex gap-2 items-center self-center text-3xl font-black whitespace-nowrap text-primary-600 dark:text-primary-400"
        href="/"
      >
        aromero.dev
      </a>
      <div className="md:order-2">
        <ul className="hidden md:flex md:space-x-8 items-center ">
          <li>
            <a
              href="https://www.linkedin.com/in/alexis-anderson-romero-correa-9651692a7"
              target="_blank"
              className="text-dark-700 hover:text-dark-500 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
              aria-label="Visit my LinkedId profile"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
          <li>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="bg-dark-300 dark:bg-dark-700 p-1 rounded-md  false"
              title="Cambiar tema"
            >
              {resolvedTheme === "dark" ? (
                // 🌙 Ícono de modo oscuro (luna)
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-dark-700 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-500 transition-colors duration-300 cursor-pointer"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z" />
                </svg>

              ) : (
                // ☀️ Ícono de modo claro (sol)
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-dark-700 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-700 transition-colors duration-300 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z" />
                </svg>

              )}
            </button>
          </li>
        </ul>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="bg-dark-300 dark:bg-dark-700 p-1 rounded-md  md:hidden"
            title="Cambiar tema"
          >
            {resolvedTheme === "dark" ? (
              // 🌙 Ícono de modo oscuro (luna)
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-dark-700 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-500 transition-colors duration-300 cursor-pointer"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z" />
              </svg>

            ) : (
              // ☀️ Ícono de modo claro (sol)
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-dark-700 hover:text-dark-500 dark:text-dark-300 dark:hover:text-dark-700 transition-colors duration-300 cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z" />
              </svg>

            )}
          </button>

          <button className="p-2 text-sm text-dark-700 dark:text-dark-200 rounded-lg md:hidden" onClick={() => setIsOpen(!isOpen)}>

            {isOpen ? <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
              : <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>}


          </button>
        </div>
      </div>
      <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0 md:border-0 ">
          <li className="text-center">
            <Link to="experiencia" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Experiencia
            </Link>
          </li>
          <li className="text-center">
            <Link to="proyectos" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Proyectos
            </Link>
          </li>

          <li className="text-center">
            <Link to="sobre-mi" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Sobre mi
            </Link>
          </li>
          <li className="text-center">
            <Link to="tecnologias" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Tecnologías
            </Link>
          </li>
          <li className="text-center">
            <Link to="logros" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Logros
            </Link>
          </li>
          <li className="text-center">
            <Link to="contactame" smooth={true} duration={500} className="cursor-pointer relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50">
              Contáctame
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center space-x-8 my-4 md:hidden">
          <li>
            <a
              href="https://www.linkedin.com/in/alexis-anderson-romero-correa-9651692a7"
              className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
}

function SectionMain() {
  return (<section className="relative mx-auto container px-2 pt-44 lg:h-screen overflow-hidden lg:pt-0 lg:w-[740px] lg:flex lg:flex-col lg:justify-center">
    <div className="text-left lg:flex lg:flex-row-reverse lg:justify-center lg:items-center md:gap-x-4">
      <div className="Hero-image flex justify-center mb-6 w-16 lg:w-1/5 ">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQEOB2kK24g-0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721683794026?e=1746057600&v=beta&t=bcUaHiiNnCAWa6sW-CXqC63XKLzxEjv6zrDjaj8vUoQ"
          alt="Alexis Romero Dev"
          width={200}
          height={200}
          className="drop-shadow-sm w-[130px] rounded-full  object-contain shadow-lg dark:shadow-dark-900"
          loading="lazy"
        />
      </div>
      <header className="lg:w-4/5">
        <h1 className="text-3xl font-bold lg:text-5xl  text-dark-700 dark:text-dark-200">
          Hola,{" "}
          <span className=" text-primary-600 dark:text-primary-400">
            soy Alexis
          </span>
        </h1>
        <span className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
          Desarrollador Fullstack
        </span>

        <p className="mt-3">
          <span className="border border-dark-300 
          bg-gradient-to-r 
          from-slate-50 to-slate-100 
          dark:from-slate-800 dark:to-slate-950
          inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md pointer-events-auto body-primary box-gen">
            <span className="mr-1.5 flex h-3 w-3 items-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-lime-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Disponible para nuevos proyectos
          </span>
        </p>


        <h2 className="lg:text-xl mt-6 md:mt-10 text-dark-700 dark:text-dark-200 text-pretty">
          +5 años de experiencia.{" "}
          <span className="text-crusta-800 dark:text-crusta-300 ">
            Ingeniero Informático y Desarrollador Web
          </span>
          .{" "}
          <span className=" text-daintree-700 dark:text-daintree-200 ">
            Especializado en crear soluciones web robustas
          </span>
        </h2>
      </header>
    </div>
    <ul className="mt-10 flex flex-wrap gap-4 justify-start ">
      <li>
        <a
          href="https://www.linkedin.com/in/alexis-anderson-romero-correa-9651692a7"
          className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-dark-700 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width={256}
            height={256}
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 256"
            className="size-4 md:size-6"
          >
            <path
              d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              fill="currentColor"
            />
          </svg>{" "}
          LinkedIn
        </a>
      </li>
      {/* <li>
        <a
          href="https://github.com/"
          className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-dark-700 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 256 250"
            width={256}
            height={250}
            fill="currentColor"
            preserveAspectRatio="xMidYMid"
            className="size-4 md:size-6"
          >
            <path
              d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
              fill="currentColor"
            />
          </svg>{" "}
          GitHub
        </a>
      </li> */}
      <li>
        <a
          href="mailto:info.alexisromero@gmail.com"
          className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-dark-700 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="size-4 md:size-6"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
            <path d="M3 7l9 6l9 -6" />
            <path d="M15 19l2 2l4 -4" />
          </svg>{" "}
          info.alexisromero@gmail.com
        </a>
      </li>
      <li>
        <a
          className="flex items-center gap-2 px-6 md:py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-primary-600 before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 bg-dark-800 rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-primary-500/50 ease duration-500"
          href="/Alexis_Romero_Correa_CV.pdf"
          download="Alexis_Romero_Correa_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M644.7 669.2a7.92 7.92 0 0 0-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 0 0-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z" />
          </svg>
        </a>
      </li>
    </ul>
    <div className="absolute hidden md:flex bottom-4 w-full justify-center">
      <a
        href="#experiencia"
        className="md:flex gap-2 animate-bounce text-primary-500 dark:text-primary-400 font-bold"
      >
        Experiencia{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </a>
    </div>
  </section>);
}

function SeccionExperiencia() {
  return (
    <section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="experiencia">
      <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50">
        Experiencia
      </h2>
      <article className="container px-2 mt-10">
        <ul className="relative border-l border-dark-400 dark:border-dark-700">
          <li className="mb-8 md:mb-6 ml-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-primary-100 dark:text-primary-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-primary-700 dark:text-primary-400">
              Desarrollador FullStack{" "}
              <span className="dark:text-white text-dark-700 font-normal">-</span>
              <span className="text-sm text-crusta-800 dark:text-crusta-300/90">
                Soluciones MW.
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary-950/80 dark:text-primary-200/90">
              Diciembre 2022 - Presente
            </time>
            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
              Como Desarrollador Full Stack, he trabajado con un amplio conjunto de tecnologías y herramientas para crear aplicaciones web completas y eficientes.
              En el frontend, he utilizado frameworks y librerías como React, Angular, Vue, jQuery, junto con HTML5, CSS3, Tailwind, Bootstrap y Vite para desarrollar
              interfaces de usuario responsivas y modernas. En el backend, he trabajado con PHP (Laravel), Python y JavaScript para construir APIs robustas y funcionales.
              Para la gestión de datos, he manejado bases de datos como MySQL y SQL. Además, he utilizado herramientas como Git, GitHub y Bitbucket para el control de versiones,
              y he implementado API REST, JSON y AJAX para la integración de servicios. También he colaborado estrechamente en equipos multidisciplinarios,
              trabajando junto a diseñadores, analistas y otros desarrolladores para lograr entregas eficientes. Complemento mi perfil con nociones
              de diseño gráfico y manejo de herramientas como CorelDRAW, Photoshop e Illustrator, lo que me permite apoyar en la creación de elementos visuales cuando es necesario.
            </p>
          </li>
          <li className="mb-8 md:mb-6 ml-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-primary-100 dark:text-primary-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-primary-700 dark:text-primary-400">
              Desarrollador Web{" "}
              <span className="dark:text-white text-dark-700 font-normal">-</span>
              <span className="text-sm text-crusta-800 dark:text-crusta-300/90">
                Wilsoft Asesorías y Sistemas
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary-950/80 dark:text-primary-200/90">
              Enero 2022 - Presente
            </time>
            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
              En mi experiencia, me he enfocado en la creación y mantenimiento de sitios web utilizando tecnologías como HTML,
              CSS, Bootstrap, JavaScript, jQuery y PHP. He trabajado en la optimización del rendimiento y la usabilidad
              de los sitios, asegurando que sean rápidos y fáciles de usar. Además, he implementado diseños responsivos
              con Bootstrap para garantizar una experiencia óptima en dispositivos móviles. En cuanto a la gestión de datos,
              he manejado bases de datos como MySQL y SQL, incluyendo la optimización de consultas y la realización de migraciones
              de datos para mejorar la eficiencia y la integridad de la información.
            </p>
          </li>
          <li className="mb-8 md:mb-6 ml-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-primary-100 dark:text-primary-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-primary-700 dark:text-primary-400">
              Desarrollador de software{" "}
              <span className="dark:text-white text-dark-700 font-normal">-</span>
              <span className="text-sm text-crusta-800 dark:text-crusta-300/90">
                Universidad Nacional José Faustino Sánchez Carrión
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-primary-950/80 dark:text-primary-200/90">
              Febrero 2020 - Noviembre 2021
            </time>
            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
              Durante mi tiempo en la Oficina de Servicios Informáticos de la UNJFSC,
              me dediqué al desarrollo y mantenimiento de sistemas web internos utilizados por la universidad.
              Esto implicó la creación de nuevas funcionalidades, la corrección de errores y
              la mejora de la interfaz de usuario para garantizar una experiencia óptima.
              Mi trabajo contribuyó a modernizar y mantener operativos los sistemas esenciales para la administración
              y el funcionamiento diario de la institución.
            </p>
          </li>
        </ul>
      </article>
    </section>
  )
}

function SeccionProyectos() {
  return (
    <section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="proyectos">
      <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50">
        Proyectos
      </h2>
      <p className="mt-6 text-dark-700 dark:text-dark-200">
        Cada proyecto que desarrollo es una combinación de creatividad,
        tecnología y pasión por la programación. A través de cada línea de código,
        transformo ideas en soluciones digitales funcionales e innovadoras.
        Te invito a explorar mis creaciones y descubrir cómo cada desafío
        se ha convertido en una oportunidad para innovar y mejorar.
      </p>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <div
          className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
         
        >
          <figure className="w-full rounded-3xl overflow-hidden">
            <img
              className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
              src="/images/portafolio.jpg"
              alt="Portfolio Alexis Romero"
              loading="lazy"
            />
          </figure>
          <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">
              Portfolio
            </h1>
            <p className="line-clamp-10 mt-4 text-dark-700 dark:text-dark-200">
              Sitio web diseñado para presentar mi experiencia, habilidades y proyectos en desarrollo de software.
              Incluye secciones detalladas sobre trabajos realizados y formas de contacto profesional.
            </p>
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                NextJS
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                ReactJS
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Tailwind
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                JavaScript
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                HTML
              </li>
            </ul>
          </div>
          <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
            Frontend
          </span>
        </div>

        <div
          className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
        >
          <a href="https://topmedicalsolution.com" target="_blank" rel="noopener noreferrer">
            <figure className="w-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                src="/images/topmedicalsolution.jpg"
                alt="Momentum Generative App"
                loading="lazy"
              />
            </figure>
          </a>
          <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">
              Top Medical Solution
            </h1>
            <p className="line-clamp-10 mt-4 text-dark-700 dark:text-dark-200">
              Es una empresa dedicada al rubro médico tanto en la venta y soporte
              para el mantenimiento preventivo y calibración de los diferentes equipos médicos.
            </p>
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                ReactJs
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                PHP
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                MySQL
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Bootstrap
              </li>
            </ul>
          </div>
          <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
            Fullstack
          </span>
        </div>

        <div
          className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
        >
          <a href="https://www.okarepuestos.cl/#/" target="_blank" rel="noopener noreferrer">
            <figure className="w-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                src="/images/okarepuestos.jpg"
                alt="Momentum Generative App"
                loading="lazy"
              />
            </figure>
          </a>
          <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">
              E-commerce repuestos automotriz
            </h1>
            <p className="line-clamp-10 mt-4 text-dark-700 dark:text-dark-200">
              E-commerce especializado en repuestos automotrices, ofreciendo una amplia gama de piezas para diferentes marcas y modelos, con descripciones detalladas, opciones de pago seguras y envíos rápidos.
            </p>
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Angular
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                PHP
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                MySQL
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Bootstrap
              </li>
            </ul>
          </div>
          <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
            Fullstack
          </span>
        </div>


        <div
          className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
        >
          <a href="https://crmveterinario.com/index.html" target="_blank" rel="noopener noreferrer">
            <figure className="w-full rounded-3xl overflow-hidden">
              <img
                className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                src="/images/crmveterinario.jpg"
                alt="Momentum Generative App"
                loading="lazy"
              />
            </figure>
          </a>
          <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">
              CRM Veterinario
            </h1>
            <p className="line-clamp-10 mt-4 text-dark-700 dark:text-dark-200">
              Software de gestión para clínicas veterinarias que unifica procesos administrativos, incluyendo citas en línea, fichas de pacientes, pagos, facturación, punto de venta e inventario.
            </p>
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Angular
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                PHP
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                MySQL
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Bootstrap
              </li>
            </ul>
          </div>
          <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
            Fullstack
          </span>
        </div>

        <div
          className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
        >
          <figure className="w-full rounded-3xl overflow-hidden">
            <img
              className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
              src="/images/buinzoo.jpg"
              alt="Momentum Generative App"
              loading="lazy"
            />
          </figure>
          <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">
              Software de gestión empresarial - Zoológico Buinzoo
            </h1>
            <p className="line-clamp-10 mt-4 text-dark-700 dark:text-dark-200">
              Software que integra herramientas para administrar contactos, ventas, marketing, servicio al cliente e inventario, optimizando procesos internos y la relación con los clientes.
            </p>
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Laravel
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                PHP
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                MySQL
              </li>
              <li className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200">
                {" "}
                Bootstrap
              </li>
            </ul>
          </div>
          <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
            Fullstack
          </span>
        </div>


      </div>


    </section >
  );
}

function SeccionSobreMi() {
  return (
    <section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="sobre-mi">
      <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50">
        Sobre mí
      </h2>
      <div className="pt-12 md:pt-2">
        <div className="w-full">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQEOB2kK24g-0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721683794026?e=1746057600&v=beta&t=bcUaHiiNnCAWa6sW-CXqC63XKLzxEjv6zrDjaj8vUoQ"
            alt="Programador mirando a la cámara con escritorio atrás"
            className=" object-cover rounded-full size-72 shadow-lg shadow-dark-900/20 dark:shadow-dark-50/10  mx-auto"
            loading="lazy"
          />
          <p className="mt-8 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
            Hola 👋, soy Alexis Romero,{" "}
            <span className="font-bold text-primary-700 dark:text-primary-400">
              Ingeniero Informático,{" "}
            </span>
            actualmente trabajando en el desarrollo de soluciones tecnológicas para clínicas veterinarias y comercio electrónico. Con más de 4 años de experiencia en el desarrollo de sitios web dinámicos y plataformas corporativas, he demostrado mi capacidad para adaptarme a diversas tecnologías y entregar productos de alta calidad.
          </p>

          <p className="mt-8 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
            Me apasiona poner en práctica mis conocimientos y brindar soluciones que tengan un impacto positivo en la calidad de vida de las personas.
            Estoy siempre abierto a aprender más sobre nuevas tecnologías y metodologías de trabajo, y me entusiasma la posibilidad de colaborar en proyectos que desafíen mis habilidades y contribuyan al crecimiento tanto personal como profesional. Si estás interesado en conectar o discutir posibles colaboraciones, no dudes en contactarme.
          </p>

        </div>
      </div>
    </section>
  );
}

function SeccionLogros() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0); // Índice de la imagen seleccionada

  const images = [
    { src: "/images/certificado react uni.jpg", alt: "Imagen certificado React", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "Aplicaciones Frontend con React", fecha: "Expedido: jun. 2024" },
    { src: "/images/certificado java nivel ii uni.jpg", alt: "Imagen certificado Java - Desarrollo de Aplicaciones de Escritorio ", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "Java - Desarrollo de Aplicaciones de Escritorio", fecha: "Expedido: oct. 2022" },
    { src: "/images/certificado java nivel i uni.jpg", alt: "Imagen certificado Java - Programación", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "Java - Programación", fecha: "Expedido: sept. 2022" },
    { src: "/images/certificado php nivel iii uni.jpg", alt: "Imagen certificado PHP Nivel III - Avanzado", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "PHP Nivel III - Avanzado", fecha: "Expedido: dic. 2018" },
    { src: "/images/certificado php nivel ii uni.jpg", alt: "Imagen certificado PHP Nivel II - DAO - POO", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "PHP Nivel II - DAO - POO", fecha: "Expedido: nov. 2018" },
    { src: "/images/certificado php nivel i uni.jpg", alt: "Imagen certificado PHP Nivel I - Programación Web", institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA", curso: "PHP Nivel I - Programación Web", fecha: "Expedido: sept. 2018" },
  ];

  return (<section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="logros">
    <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50">
      Logros
    </h2>

    {images.map((image, i) => (

      <article key={i} className="mt-4 flex flex-col md:flex-row gap-x-6 px-4 py-6 rounded-xl shadow-lg items-center hover:scale-[1.02] transition-transform dark:shadow-dark-900">
        <picture className="w-full md:w-1/4 rounded-lg overflow-hidden shadow-md ">
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        </picture>
        <section className="w-3/4">
          <header>
            <span className="text-xs text-crusta-700/90 dark:text-crusta-300">
              {image.institucion}
            </span>
            <h1 className="text-primary-700 dark:text-primary-400 font-bold text-lg">
              {image.curso}
            </h1>
          </header>
          <div>
            <p className="hidden lg:visible lg:line-clamp-1 text-dark-700/80 dark:text-dark-200 ">
              {image.fecha}
            </p>
          </div>
        </section>
      </article>



    ))}

    {open && (
      <Lightbox
        slides={images} // Muestra todas las imágenes
        open={open}
        close={() => setOpen(false)}
        index={index} // Abre la imagen seleccionada
        plugins={[Zoom]} // Habilita zoom   
        zoom={{ maxZoomPixelRatio: 3 }} // Habilita zoom hasta 3x
      />
    )}
  </section>);
}

function SeccionTecnologias() {
  return (<section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="tecnologias">
    <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50">
      Tecnologías
    </h2>
    <p className="my-8 text-pretty md:text-lg max-w-[740px] text-dark-700 dark:text-dark-200">
      A lo largo de mi trayectoria {" "}
      <span className=" text-daintree-700 dark:text-daintree-300">
        en el desarrollo web
      </span>
      , he adquirido {" "}
      <span className="text-crusta-700 dark:text-crusta-300">
        experiencia y habilidades {" "}
      </span>
      en diversas tecnologías.{" "}

      <span className="text-daintree-700 dark:text-daintree-300 font-semibold">
        Mi stack tecnológico incluye
      </span>
      :
    </p>

    <article className="relative rounded-2xl p-6 dark:border  dark:border-dark-900 bg-gradient-to-r  dark:from-dark-950 dark:to-black shadow-2xl overflow-hidden false">
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: 0,
          background:
            "radial-gradient(600px at 1px 122.333px, rgba(255, 182, 255, 0.1), transparent 40%)"
        }}
      />

      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4  ">
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg className="size-12 mb-2" viewBox="0 0 452 520">
            <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
            <path
              fill="#ecedee"
              d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
            />
            <path
              fill="#fff"
              d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
            />
          </svg>
          <span className=" text-sm w-full text-center">HTML</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg className="size-12 mb-2" viewBox="0 0 452 520">
            <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
            <path
              fill="#ecedee"
              d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
            />
            <path
              fill="#fff"
              d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
            />
          </svg>
          <span className=" text-sm w-full text-center">CSS</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            width={2500}
            height={2500}
            viewBox="0 0 1052 1052"
          >
            <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
            <path
              d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
              fill="#323330"
            />
          </svg>
          <span className=" text-sm w-full text-center">JavaScript</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 271"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <title>Angular</title>
            <defs>
              <linearGradient
                x1="25.0714876%"
                y1="90.9292007%"
                x2="96.1321855%"
                y2="55.1837089%"
                id="linearGradient-1"
              >
                <stop stopColor="#E40035" offset="0%" />
                <stop stopColor="#F60A48" offset="24%" />
                <stop stopColor="#F20755" offset="35.2%" />
                <stop stopColor="#DC087D" offset="49.4%" />
                <stop stopColor="#9717E7" offset="74.5%" />
                <stop stopColor="#6C00F5" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="21.8628652%"
                y1="12.0575311%"
                x2="68.3669921%"
                y2="68.2103006%"
                id="linearGradient-2"
              >
                <stop stopColor="#FF31D9" offset="0%" />
                <stop stopColor="#FF5BE1" stopOpacity={0} offset="100%" />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                fill="url(#linearGradient-1)"
              />
              <path
                d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                fill="url(#linearGradient-2)"
              />
            </g>
          </svg>

          <span className=" text-sm w-full text-center">Angular</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 228"
            width={256}
            height={228}
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
              fill="#00D8FF"
            />
          </svg>
          <span className=" text-sm w-full text-center">ReactJS</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 154"
            width={256}
            height={154}
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient
                x1="-2.778%"
                y1="32%"
                x2="100%"
                y2="67.556%"
                id="a"
              >
                <stop stopColor="#2298BD" offset="0%" />
                <stop stopColor="#0ED7B5" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
              fill="url(#a)"
            />
          </svg>
          <span className=" text-sm w-full text-center">TailwindCSS</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 135"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <radialGradient
                id="radialGradient-1"
                cx="0.8366"
                cy="-125.811"
                r="363.0565"
                gradientTransform="matrix(0.463 0 0 0.463 76.4644 81.9182)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} style={{ stopColor: "#FFFFFF" }} />
                <stop offset="0.5" style={{ stopColor: "#4C6B97" }} />
                <stop offset={1} style={{ stopColor: "#231F20" }} />
              </radialGradient>
            </defs>
            <g>
              <ellipse
                fill="url(#radialGradient-1)"
                cx={128}
                cy="67.3"
                rx={128}
                ry="67.3"
              />
              <ellipse fill="#6181B6" cx={128} cy="67.3" rx={123} ry="62.3" />
              <g>
                <path
                  fill="#FFFFFF"
                  d="M152.9,87.5c0,0,6.1-31.4,6.1-31.4c1.4-7.1,0.2-12.4-3.4-15.7c-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6     c0.1-0.6,0-1.2-0.4-1.7c-0.4-0.5-0.9-0.7-1.5-0.7h-14.6c-1,0-1.8,0.7-2,1.6l-6.5,33.3c-0.6-3.8-2-7-4.4-9.6     c-4.3-4.9-11-7.4-20.1-7.4H52.1c-1,0-1.8,0.7-2,1.6L37,104.7c-0.1,0.6,0,1.2,0.4,1.7c0.4,0.5,0.9,0.7,1.5,0.7h14.7     c1,0,1.8-0.7,2-1.6l3.2-16.3h10.9c5.7,0,10.6-0.6,14.3-1.8c3.9-1.3,7.4-3.4,10.5-6.3c2.5-2.3,4.6-4.9,6.2-7.7l-2.6,13.5     c-0.1,0.6,0,1.2,0.4,1.7s0.9,0.7,1.5,0.7h14.6c1,0,1.8-0.7,2-1.6l7.2-37h10c4.3,0,5.5,0.8,5.9,1.2c0.3,0.3,0.9,1.5,0.2,5.2     l-5.8,29.9c-0.1,0.6,0,1.2,0.4,1.7c0.4,0.5,0.9,0.7,1.5,0.7H151C151.9,89.1,152.7,88.4,152.9,87.5z M85.3,61.5     c-0.9,4.7-2.6,8.1-5.1,10c-2.5,1.9-6.6,2.9-12,2.9h-6.5l4.7-24.2h8.4c6.2,0,8.7,1.3,9.7,2.4C85.8,54.2,86.1,57.3,85.3,61.5z"
                />
                <path
                  fill="#FFFFFF"
                  d="M215.3,42.9c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1,0-1.8,0.7-2,1.6l-13.1,67.5c-0.1,0.6,0,1.2,0.4,1.7     c0.4,0.5,0.9,0.7,1.5,0.7h14.7c1,0,1.8-0.7,2-1.6l3.2-16.3h10.9c5.7,0,10.6-0.6,14.3-1.8c3.9-1.3,7.4-3.4,10.5-6.3     c2.6-2.4,4.8-5.1,6.4-8c1.6-2.9,2.8-6.1,3.5-9.6C220.9,54.7,219.6,47.9,215.3,42.9z M200,61.5c-0.9,4.7-2.6,8.1-5.1,10     c-2.5,1.9-6.6,2.9-12,2.9h-6.5l4.7-24.2h8.4c6.2,0,8.7,1.3,9.7,2.4C200.6,54.2,200.9,57.3,200,61.5z"
                />
              </g>
              <g>
                <path
                  fill="#000004"
                  d="M74.8,48.2c5.6,0,9.3,1,11.2,3.1c1.9,2.1,2.3,5.6,1.3,10.6c-1,5.2-3,9-5.9,11.2c-2.9,2.2-7.3,3.3-13.2,3.3     h-8.9l5.5-28.2H74.8z M39,105h14.7l3.5-17.9h12.6c5.6,0,10.1-0.6,13.7-1.8c3.6-1.2,6.8-3.1,9.8-5.9c2.5-2.3,4.5-4.8,6-7.5     c1.5-2.7,2.6-5.7,3.2-9c1.6-8,0.4-14.2-3.5-18.7c-3.9-4.5-10.1-6.7-18.6-6.7H52.1L39,105z"
                />
                <path
                  fill="#000004"
                  d="M113.3,19.6h14.6l-3.5,17.9h13c8.2,0,13.8,1.4,16.9,4.3c3.1,2.9,4,7.5,2.8,13.9L151,87.1h-14.8l5.8-29.9     c0.7-3.4,0.4-5.7-0.7-6.9c-1.1-1.2-3.6-1.9-7.3-1.9h-11.7l-7.5,38.7h-14.6L113.3,19.6z"
                />
                <path
                  fill="#000004"
                  d="M189.5,48.2c5.6,0,9.3,1,11.2,3.1c1.9,2.1,2.3,5.6,1.3,10.6c-1,5.2-3,9-5.9,11.2c-2.9,2.2-7.3,3.3-13.2,3.3     h-8.9l5.5-28.2H189.5z M153.7,105h14.7l3.5-17.9h12.6c5.6,0,10.1-0.6,13.7-1.8c3.6-1.2,6.8-3.1,9.8-5.9c2.5-2.3,4.5-4.8,6-7.5     c1.5-2.7,2.6-5.7,3.2-9c1.6-8,0.4-14.2-3.5-18.7c-3.9-4.5-10.1-6.7-18.6-6.7h-28.3L153.7,105z"
                />
              </g>
            </g>
          </svg>

          <span className=" text-sm w-full text-center">PHP</span>
        </li>
        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 264"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z"
                fill="#FF2D20"
              />
            </g>
          </svg>

          <span className=" text-sm w-full text-center">Laravel</span>
        </li>

        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 346"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M82.5539491,267.472524 C82.5539491,267.472524 69.35552,275.147869 91.9468218,277.745105 C119.315549,280.867375 133.303389,280.419607 163.463913,274.711273 C163.463913,274.711273 171.393396,279.683258 182.467491,283.989644 C114.855564,312.966982 29.4483782,282.311215 82.5539491,267.472524"
                fill="#5382A1"
              />
              <path
                d="M74.2921309,229.658996 C74.2921309,229.658996 59.4888145,240.616727 82.0968727,242.955171 C111.333004,245.971316 134.421411,246.218007 174.373236,238.524975 C174.373236,238.524975 179.899113,244.127185 188.588218,247.190807 C106.841367,271.094691 15.79008,249.075898 74.2921309,229.658996"
                fill="#5382A1"
              />
              <path
                d="M143.941818,165.514705 C160.601367,184.695156 139.564684,201.955142 139.564684,201.955142 C139.564684,201.955142 181.866124,180.117876 162.438982,152.772422 C144.294633,127.271098 130.380335,114.600495 205.706705,70.9138618 C205.706705,70.9138618 87.4691491,100.44416 143.941818,165.514705"
                fill="#E76F00"
              />
              <path
                d="M233.364015,295.441687 C233.364015,295.441687 243.131113,303.489396 222.60736,309.715316 C183.580858,321.537862 60.1748945,325.107898 25.8932364,310.186356 C13.5698618,304.825251 36.67968,297.385425 43.9491491,295.824291 C51.5304727,294.180305 55.8629236,294.486575 55.8629236,294.486575 C42.15808,284.832116 -32.7195927,313.443607 17.8287709,321.637469 C155.681513,343.993251 269.121164,311.570618 233.364015,295.441687"
                fill="#5382A1"
              />
              <path
                d="M88.9008873,190.479825 C88.9008873,190.479825 26.1287564,205.389265 66.6717091,210.803433 C83.7901964,213.095331 117.915462,212.576815 149.702284,209.913484 C175.680233,207.722124 201.765236,203.062924 201.765236,203.062924 C201.765236,203.062924 192.605091,206.985775 185.977949,211.510924 C122.233949,228.275665 -0.907636364,220.476509 34.5432436,203.328233 C64.5241018,188.83584 88.9008873,190.479825 88.9008873,190.479825"
                fill="#5382A1"
              />
              <path
                d="M201.506444,253.422313 C266.305164,219.7504 236.344785,187.392 215.432844,191.751447 C210.307258,192.818269 208.021876,193.742662 208.021876,193.742662 C208.021876,193.742662 209.924655,190.761891 213.558924,189.471651 C254.929455,174.927127 286.746065,232.368873 200.204102,255.11936 C200.204102,255.120291 201.206691,254.223825 201.506444,253.422313"
                fill="#5382A1"
              />
              <path
                d="M162.438982,0.371432727 C162.438982,0.371432727 198.325527,36.27008 128.402153,91.4720582 C72.3307055,135.753542 115.616116,161.001658 128.37888,189.848669 C95.6490473,160.318371 71.6297309,134.322735 87.7437673,110.128407 C111.395375,74.6132945 176.918342,57.3942691 162.438982,0.371432727"
                fill="#E76F00"
              />
              <path
                d="M95.2683055,344.665367 C157.466996,348.646865 252.980131,342.45632 255.24224,313.025629 C255.24224,313.025629 250.893964,324.182575 203.838371,333.042967 C150.750487,343.033484 85.2740655,341.867055 46.4393309,335.464262 C46.4402618,335.463331 54.3892945,342.043927 95.2683055,344.665367"
                fill="#5382A1"
              />
            </g>
          </svg>


          <span className=" text-sm w-full text-center">Java</span>
        </li>

        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 259.3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                fill="#9EDCF2"
                d="M200.9,199.8c0,13.9-32.2,25.1-71.9,25.1c-39.7,0-71.9-11.3-71.9-25.1c0-13.9,32.2-25.1,71.9-25.1C168.7,174.7,200.9,185.9,200.9,199.8L200.9,199.8z M200.9,199.8"
              />
              <g>
                <defs>
                  <path
                    id="SVGID_1_"
                    d="M98.1,244.8c1.6,7.5,5.5,11.9,9.4,14.5l41.1,0c5-3.4,10.1-9.8,10.1-21.8v-31c0,0,0.6-7.7,7.7-10.2c0,0,4.1-2.9-0.3-4.5c0,0-19.5-1.6-19.5,14.4v23.6c0,0,0.8,8.7-3.8,12.3v-29.2c0,0,0.3-9.3,5.1-12.8c0,0,3.2-5.7-3.8-4.2c0,0-13.4,1.9-14,17.6l-0.3,30h-3.2l-0.3-30c-0.6-15.6-14-17.6-14-17.6c-7-1.6-3.8,4.2-3.8,4.2c4.8,3.5,5.1,12.8,5.1,12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5,1.6-0.3,4.5-0.3,4.5c7,2.6,7.7,10.2,7.7,10.2v21.7L98.1,244.8z"
                  />
                </defs>
                <clipPath id="SVGID_2_">
                  <use xlinkHref="#SVGID_1_" overflow="visible" />
                </clipPath>
                <path
                  clipPath="url(#SVGID_2_)"
                  fill="#7DBCE7"
                  d="M200.9,199.8c0,13.9-32.2,25.1-71.9,25.1c-39.7,0-71.9-11.3-71.9-25.1c0-13.9,32.2-25.1,71.9-25.1C168.7,174.7,200.9,185.9,200.9,199.8L200.9,199.8z M200.9,199.8"
                />
              </g>
              <path
                fill="#9EDCF2"
                d="M46.9,125.9l-2.1,7.2c0,0-0.5,2.6,1.9,3.1c2.6-0.1,2.4-2.5,2.2-3.2L46.9,125.9L46.9,125.9z M46.9,125.9"
              />
              <path
                fill="#010101"
                d="M255.8,95.6l0.2-0.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7,2.8-16.7,2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9,3.5-15.8-2-29.7c0,0-9.8-3.1-32.1,11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2,0-20.5,1.3-30.2,3.9C74.4-2.9,64.3,0.3,64.3,0.3c-6.6,16.5-2.5,28.8-1.3,31.8c-7.8,8.4-12.5,19.1-12.5,32.2c0,9.9,1.1,18.8,3.9,26.5c-13.2-0.5-34-0.3-54.4,3.8l0.2,0.9c20.4-4.1,41.4-4.2,54.5-3.7c0.6,1.6,1.3,3.2,2,4.7c-13,0.4-35.1,2.1-56.3,8.1l0.3,0.9c21.4-6,43.7-7.6,56.6-8c7.8,14.4,23,23.8,50.2,26.7c-3.9,2.6-7.8,7-9.4,14.5c-5.3,2.5-21.9,8.7-31.9-8.5c0,0-5.6-10.2-16.3-11c0,0-10.4-0.2-0.7,6.5c0,0,6.9,3.3,11.7,15.6c0,0,6.3,21,36.4,14.2V177c0,0-0.6,7.7-7.7,10.2c0,0-4.2,2.9,0.3,4.5c0,0,19.5,1.6,19.5-14.4v-23.6c0,0-0.8-9.4,3.8-12.6v38.8c0,0-0.3,9.3-5.1,12.8c0,0-3.2,5.7,3.8,4.2c0,0,13.4-1.9,14-17.6l0.3-39.3h3.2l0.3,39.3c0.6,15.6,14,17.6,14,17.6c7,1.6,3.8-4.2,3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6,3.6,3.8,12.3,3.8,12.3v23.6c0,16,19.5,14.4,19.5,14.4c4.5-1.6,0.3-4.5,0.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9,42.9-12.2,49.3-26.8c12.7,0.3,35.6,1.9,57.4,8.1l0.3-0.9c-21.7-6.1-44.4-7.7-57.3-8.1c0.6-1.5,1.1-3,1.6-4.6C212.9,91.4,234.6,91.4,255.8,95.6L255.8,95.6z M255.8,95.6"
              />
              <path
                fill="#F5CCB3"
                d="M174.6,63.7c6.2,5.7,9.9,12.5,9.9,19.8c0,34.4-25.6,35.3-57.2,35.3c-31.6,0-57.2-4.8-57.2-35.3c0-7.3,3.6-14.1,9.8-19.7c10.3-9.4,27.7-4.4,47.4-4.4C147,59.4,164.3,54.3,174.6,63.7L174.6,63.7z M174.6,63.7"
              />
              <path
                fill="#FFFFFF"
                d="M108.3,85.3c0,9.5-5.3,17.1-11.9,17.1c-6.6,0-11.9-7.7-11.9-17.1c0-9.5,5.3-17.1,11.9-17.1C103,68.1,108.3,75.8,108.3,85.3L108.3,85.3z M108.3,85.3"
              />
              <path
                fill="#AF5C51"
                d="M104.5,85.5c0,6.3-3.6,11.4-7.9,11.4c-4.4,0-7.9-5.1-7.9-11.4c0-6.3,3.6-11.4,7.9-11.4C100.9,74.1,104.5,79.2,104.5,85.5L104.5,85.5z M104.5,85.5"
              />
              <path
                fill="#FFFFFF"
                d="M172.2,85.3c0,9.5-5.3,17.1-11.9,17.1c-6.6,0-11.9-7.7-11.9-17.1c0-9.5,5.3-17.1,11.9-17.1C166.8,68.1,172.2,75.8,172.2,85.3L172.2,85.3z M172.2,85.3"
              />
              <path
                fill="#AF5C51"
                d="M168.3,85.5c0,6.3-3.6,11.4-7.9,11.4c-4.4,0-7.9-5.1-7.9-11.4c0-6.3,3.6-11.4,7.9-11.4C164.8,74.1,168.3,79.2,168.3,85.5L168.3,85.5z M168.3,85.5"
              />
              <path
                fill="#AF5C51"
                d="M130.5,100.5c0,1.6-1.3,3-3,3c-1.6,0-3-1.3-3-3s1.3-3,3-3C129.1,97.5,130.5,98.8,130.5,100.5L130.5,100.5z M130.5,100.5"
              />
              <path
                fill="#AF5C51"
                d="M120.6,108c-0.2-0.5,0.1-1,0.6-1.2c0.5-0.2,1,0.1,1.2,0.6c0.8,2.2,2.8,3.6,5.1,3.6c2.3,0,4.3-1.5,5.1-3.6c0.2-0.5,0.7-0.8,1.2-0.6c0.5,0.2,0.8,0.7,0.6,1.2c-1,2.9-3.8,4.9-6.9,4.9C124.4,112.9,121.6,110.9,120.6,108L120.6,108z M120.6,108"
              />
              <path
                fill="#C4E5D9"
                d="M54.5,121.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C53.6,120.2,54.5,120.8,54.5,121.6L54.5,121.6z M54.5,121.6"
              />
              <path
                fill="#C4E5D9"
                d="M60.3,124.8c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C59.4,123.4,60.3,124,60.3,124.8L60.3,124.8z M60.3,124.8"
              />
              <path
                fill="#C4E5D9"
                d="M63.8,129c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C62.9,127.5,63.8,128.2,63.8,129L63.8,129z M63.8,129"
              />
              <path
                fill="#C4E5D9"
                d="M67,133.8c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C66.1,132.3,67,133,67,133.8L67,133.8z M67,133.8"
              />
              <path
                fill="#C4E5D9"
                d="M70.5,138.2c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C69.6,136.8,70.5,137.4,70.5,138.2L70.5,138.2z M70.5,138.2"
              />
              <path
                fill="#C4E5D9"
                d="M75.3,142.1c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C74.4,140.6,75.3,141.3,75.3,142.1L75.3,142.1z M75.3,142.1"
              />
              <path
                fill="#C4E5D9"
                d="M82,144.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C81.1,143.2,82,143.8,82,144.6L82,144.6z M82,144.6"
              />
              <path
                fill="#C4E5D9"
                d="M88.7,144.6c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C87.8,143.2,88.7,143.8,88.7,144.6L88.7,144.6z M88.7,144.6"
              />
              <path
                fill="#C4E5D9"
                d="M95.5,143.5c0,0.8-0.9,1.4-2.1,1.4c-1.1,0-2.1-0.6-2.1-1.4c0-0.8,0.9-1.4,2.1-1.4C94.5,142.1,95.5,142.7,95.5,143.5L95.5,143.5z M95.5,143.5"
              />
            </g>
          </svg>


          <span className=" text-sm w-full text-center">Github</span>
        </li>

        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 512 349"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <title>MySQL</title>
            <g>
              <path
                d="M152.309482,230.297132 L167.86997,280.784245 C171.365572,292.247035 172.823596,300.249204 172.240386,304.810306 C180.750861,282.018239 186.69631,257.179801 190.078866,230.297132 L208.788809,230.297132 C200.744231,274.062814 190.133104,305.867404 176.962131,325.707846 C166.699894,340.995741 155.457718,348.639536 143.215797,348.639536 C139.952382,348.639536 135.928112,347.65393 131.152739,345.695549 L131.152739,335.145347 C133.485579,335.487834 136.223069,335.670535 139.371305,335.670535 C145.082434,335.670535 149.685038,334.087943 153.186734,330.929176 C157.380116,327.08024 159.478635,322.754083 159.478635,317.959869 C159.478635,314.68531 157.841748,307.966018 154.582903,297.801687 L132.902369,230.297132 L152.309482,230.297132 Z M33.2240656,199.265507 L61.7248633,286.222494 L61.8997562,286.222494 L90.5754558,199.265507 L114.003486,199.265507 C119.133538,242.389598 122.162939,281.847453 123.093515,317.611577 L103.34119,317.611577 C102.646457,284.178568 100.720707,252.740602 97.5730804,223.291568 L97.3990803,223.291568 L67.3211176,317.611577 L52.279851,317.611577 L22.3841033,223.291568 L22.2079824,223.291568 C19.9897133,251.573517 18.5941538,283.011483 18.0121629,317.611577 L1.41179433e-16,317.611577 C1.1639819,275.532363 4.07698373,236.086729 8.73900548,199.265507 L33.2240656,199.265507 Z"
                fill="#00758F"
                fillRule="nonzero"
              />
              <path
                d="M352.497915,197.509381 C383.154516,197.509381 398.484341,217.096242 398.484341,256.248578 C398.484341,277.524962 393.874119,293.595598 384.662818,304.453459 C383.002163,306.437198 381.167855,308.150857 379.235981,309.739254 L379.235981,309.739254 L400.931141,320.466047 L400.909811,320.464825 L393.20681,333.766842 L364.954349,317.281922 C360.270998,318.668675 355.118397,319.361899 349.502642,319.361899 C334.450101,319.361899 323.206401,314.974638 315.771543,306.212336 C307.611482,296.518199 303.534498,281.25719 303.534498,260.454666 C303.534498,239.298962 308.135578,223.288818 317.349927,212.41782 C325.741566,202.474074 337.460609,197.509381 352.497915,197.509381 Z M258.617594,197.682305 C269.574869,197.682305 279.538798,200.614376 288.512428,206.457438 L283.954007,216.613826 C276.275382,213.349655 268.703406,211.711153 261.238077,211.711153 C255.180496,211.711153 250.51238,213.169398 247.258106,216.102998 C243.985549,219.011239 241.962293,222.753854 241.962293,227.315261 C241.962293,234.324186 246.956446,240.403721 256.176889,245.540116 C258.657424,246.888835 261.888271,248.687364 265.208154,250.551383 L265.896079,250.937851 C266.010873,251.002376 266.125718,251.066947 266.240588,251.131549 L266.929885,251.519402 C267.044745,251.584063 267.159575,251.648724 267.274348,251.713368 L267.962087,252.100904 C274.942764,256.036258 281.510254,259.792299 281.510254,259.792299 C290.730697,266.33714 295.325683,273.314902 295.325683,284.807938 C295.325683,294.844563 291.647866,303.08412 284.316608,309.530889 C276.979256,315.949245 267.121975,319.166977 254.778282,319.166977 C243.232922,319.166977 232.04407,315.463469 221.205631,308.116945 L226.275961,297.951086 C235.603052,302.625841 244.043444,304.960316 251.621514,304.960316 C258.730336,304.960316 264.294291,303.374059 268.319475,300.240039 C272.335517,297.08341 274.742705,292.680873 274.742705,287.096891 C274.742705,280.06994 269.8552,274.063425 260.887664,269.024491 C258.559224,267.743313 255.576874,266.07017 252.492622,264.326885 L251.80578,263.938465 C250.544317,263.224723 249.272726,262.503296 248.028336,261.795946 L247.3525,261.411646 C241.298293,257.967862 236.06316,254.958674 236.06316,254.958674 C227.098671,248.401918 222.604238,241.366718 222.604238,229.774999 C222.604238,220.1881 225.956018,212.439207 232.650438,206.543595 C239.360093,200.636068 248.016827,197.682305 258.617594,197.682305 Z M434.512933,199.265507 L434.512933,303.053568 L471.751212,303.053568 L471.751212,317.611577 L415.627174,317.611577 L415.627174,199.265507 L434.512933,199.265507 Z M492.443885,303.099091 L492.443885,305.558524 L488.348619,305.558524 L488.348619,317.599356 L485.219275,317.599356 L485.219275,305.558524 L480.965561,305.558524 L480.965561,303.099091 L492.443885,303.099091 Z M500.003704,303.099091 L503.934428,312.982955 L507.54521,303.099091 L511.981748,303.099091 L511.981748,317.599356 L509.032151,317.599356 L509.032151,306.563683 L504.921649,317.599356 L502.794823,317.599356 L498.678227,306.563683 L498.519749,306.563683 L498.519749,317.599356 L495.72866,317.599356 L495.72866,303.099091 L500.003704,303.099091 Z M350.569117,212.063723 C332.503021,212.063723 323.465403,226.973385 323.465403,256.77346 C323.465403,273.843146 325.860402,286.222494 330.64126,293.936864 L330.64126,293.936864 C335.068657,301.077468 342.003795,304.639826 351.446674,304.639826 C369.51277,304.639826 378.550389,289.614373 378.550389,259.575686 C378.550389,242.744612 376.15539,230.472501 371.380626,222.754465 C366.947135,215.629748 360.015044,212.063723 350.569117,212.063723 Z"
                fill="#F29111"
                fillRule="nonzero"
              />
              <path
                d="M303.217602,7.33321895 C309.211195,-7.39282549 330.165916,3.7586397 338.298554,8.90358967 C340.29134,10.1898272 342.576645,12.9089515 344.86195,13.914111 C348.427025,14.05465 351.989053,14.3326729 355.560223,14.4823775 C362.25769,16.0558034 368.531613,17.3420409 373.809143,20.3483537 C398.338081,34.7933201 414.304744,49.5132541 429.000777,73.8265034 C432.139263,78.9775638 433.708536,84.5502412 436.274141,90.1229186 C439.833122,98.4299963 443.833929,107.149526 447.96576,115.005351 C449.815333,118.729024 451.247427,122.870342 453.81614,126.015055 C454.818627,127.453136 457.667671,127.876586 459.370954,128.736012 C464.078682,131.172837 469.782803,133.022758 474.2102,135.883338 C482.479956,141.038981 490.475476,147.18298 497.742745,153.472406 C500.451593,155.900982 502.298119,159.338108 504.87899,161.906275 L504.87899,161.906275 L504.87899,163.202289 C502.587591,163.90529 500.305334,164.625094 498.020029,165.201304 C493.028923,166.484486 488.60762,166.194242 483.765821,167.477425 C480.773595,168.344795 477.059213,169.49049 473.920728,169.780737 C474.060894,169.921581 474.2102,170.07311 474.2102,170.07311 C476.056726,175.347906 486.045032,179.638317 490.612594,182.792502 C496.161314,186.796641 501.301727,191.653792 505.439652,197.229525 C506.868729,198.653246 508.297806,199.948343 509.720789,201.367176 C510.714135,202.805257 510.994435,204.664649 512,205.947832 L512,205.947832 L512,206.380753 C510.886126,205.987651 510.085422,205.238298 509.325681,204.453825 L508.872575,203.981496 C508.420028,203.510091 507.962628,203.049164 507.441579,202.668079 C504.293952,200.517526 501.167655,197.945663 498.020029,195.946648 C492.608427,192.513219 486.331457,190.520009 480.773595,187.073442 C477.632063,185.071983 474.63676,182.792502 471.641518,180.503549 C468.926575,178.496285 465.937397,174.641544 464.231036,171.781881 C463.225532,170.202039 463.088384,168.344786 461.939637,167.202753 C462.145191,165.293305 463.894482,164.725632 465.658657,164.259501 L466.065343,164.15317 C466.67368,163.994685 467.269709,163.836935 467.790017,163.62848 C475.203546,160.4801 484.043105,159.338083 495.45744,159.62434 L495.45744,159.62434 C495.027742,156.757967 487.894514,153.18736 485.618381,151.471256 C481.047771,148.177144 476.209019,144.740048 471.361126,141.74229 C468.792443,140.171614 464.365077,139.025915 461.51908,137.743039 C457.66758,136.169002 449.108351,134.595881 446.9754,131.598123 C443.350321,126.872182 440.746267,121.235168 438.218034,115.54054 L437.529685,113.986673 C437.300389,113.468668 437.071009,112.950829 436.840835,112.433796 C433.851657,105.577019 430.140322,98.4278608 427.145049,91.4070205 C425.578853,87.9821458 424.859744,84.975833 423.144242,81.6914974 C412.738488,61.5333146 397.335533,44.6564122 378.660023,32.786976 C372.523218,28.9252083 365.679492,25.350629 358.125798,22.9217483 C353.84466,21.6294004 348.707295,22.3443162 344.145826,21.3513775 L344.145826,21.3513775 L341.14449,21.3513775 C338.581902,20.6303513 336.442826,17.9142516 334.443976,16.4813952 C330.028768,13.484248 325.607465,11.4708739 320.326887,9.33223671 C318.477314,8.47372665 313.193719,6.47565906 311.35021,8.04905442 C310.207557,8.33624283 309.628614,8.76705601 309.348313,9.91275449 C308.211725,11.6236642 309.211164,14.1991944 309.918116,15.7756755 C312.060208,20.3462486 315.052434,23.0623178 317.767376,26.9240855 C320.183705,30.3489601 323.185072,34.2107278 324.897527,37.9350117 C328.593627,45.939625 330.315223,54.8088589 333.740133,62.8134722 C335.010762,65.8228402 337.018753,69.2477149 338.868357,71.9637841 C340.434552,74.1176972 343.283596,75.6758777 344.145887,78.4041371 C345.864437,81.2638005 341.574158,90.7012702 340.580812,93.698448 C336.866399,105.425207 337.585509,121.725593 341.863599,131.891452 C341.939844,132.068817 342.015799,132.247617 342.091741,132.427477 L342.319802,132.969854 C343.881696,136.692637 345.553537,140.701633 349.706765,141.743237 C349.99319,141.459107 349.706765,141.608491 350.273521,141.459107 C351.279085,133.590756 351.562433,126.01387 354.274328,119.857955 C355.840523,116.009019 358.969898,113.288062 361.115007,110.145793 C362.544084,111.001553 362.544084,113.582858 363.397295,115.290743 C365.252962,119.720777 367.245779,124.577927 369.5341,129.021099 C374.22964,138.171411 379.513264,147.042172 385.500763,155.04648 C387.505737,157.904616 390.351673,161.051804 392.917338,163.627303 C394.060021,164.623847 395.339762,165.200118 396.199036,166.483239 L396.199036,166.483239 L396.479367,166.483239 L396.479367,166.915244 C392.201276,165.337541 389.489381,160.91209 386.07666,158.32831 C379.65343,153.47116 371.95957,146.17688 367.532173,139.177426 C365.679553,135.160149 363.677595,131.309074 361.681793,127.311045 L361.681793,127.311045 L361.681793,127.022048 C360.828582,128.164446 361.115007,129.298107 360.688447,131.026187 C358.835827,138.171374 360.261857,146.322392 353.844721,148.891751 C346.571358,151.90173 341.14452,144.034601 338.868357,140.460327 C331.591946,128.593946 329.599161,108.576302 334.730432,92.4173707 C335.870037,88.8397363 336.025438,84.5502412 338.015176,81.693633 C337.585539,79.1119924 335.59577,78.4062116 334.444007,76.8236506 C332.448174,74.1198022 330.738766,70.9698647 329.175618,67.9666376 C326.174251,62.1006614 324.038252,55.0920419 321.759042,48.8013935 C320.756555,46.2319737 320.47016,43.6533883 319.47069,41.2214523 C317.767376,37.5093893 314.625813,33.7851054 312.203421,30.5007698 C308.921723,25.780492 299.366102,16.6332354 303.217602,7.33321895 Z M349.990143,35.3480734 C350.371027,35.7299729 350.831135,36.064011 351.30693,36.3925046 L351.881347,36.7867437 C352.646432,37.3160693 353.386614,37.874533 353.841643,38.6354642 C354.560722,39.6406237 354.694824,40.6335624 355.557145,41.6418076 C355.557145,45.078903 354.560722,47.3642201 352.549684,48.7879109 C352.549684,48.7879109 352.412566,48.9376766 352.272431,49.0781851 C351.132795,46.7867881 350.133386,44.507673 348.984639,42.2192702 C347.570797,40.221172 345.571887,38.6355253 344.420124,36.353294 L344.420124,36.353294 L344.14284,36.353294 L344.14284,36.0661361 C345.864437,35.6414333 347.570828,35.3480734 349.990173,35.3480734 Z"
                fill="#00758F"
              />
            </g>
          </svg>
          <span className=" text-sm w-full text-center">MySQL</span>
        </li>

        <li className=" rounded-2xl  group flex flex-col fle justify-center items-center">
          <svg
            className="size-12 mb-2"
            viewBox="0 0 256 204"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <title>Bootstrap</title>
            <g>
              <path
                d="M53.1720678,0 C38.5648814,0 27.7564746,12.7848136 28.2402712,26.6500339 C28.7045424,39.9707119 28.1014237,57.2225085 23.7581017,71.291661 C19.4017627,85.4020339 12.0341695,94.340339 0,95.488 L0,108.444203 C12.0341695,109.591864 19.4017627,118.530169 23.7581017,132.640542 C28.1014237,146.709695 28.7045424,163.961492 28.2402712,177.282169 C27.7564746,191.14522 38.5648814,203.932203 53.1742373,203.932203 L202.847458,203.932203 C217.454644,203.932203 228.260881,191.14739 227.777085,177.282169 C227.312814,163.961492 227.915932,146.709695 232.259254,132.640542 C236.617763,118.530169 243.965831,109.591864 256,108.444203 L256,95.488 C243.965831,94.340339 236.617763,85.4020339 232.259254,71.291661 C227.915932,57.224678 227.312814,39.9707119 227.777085,26.6500339 C228.260881,12.7869831 217.454644,0 202.847458,0 L53.1698983,0 L53.1720678,0 Z M173.559322,125.533288 C173.559322,144.624814 159.31878,156.20339 135.686508,156.20339 L95.4576271,156.20339 C93.0612729,156.20339 91.1186441,154.260761 91.1186441,151.864407 L91.1186441,52.0677966 C91.1186441,49.6714424 93.0612729,47.7288136 95.4576271,47.7288136 L135.456542,47.7288136 C155.162034,47.7288136 168.094373,58.4027119 168.094373,74.7910508 C168.094373,86.2936949 159.394712,96.5922712 148.31078,98.3951186 L148.31078,98.9960678 C163.399593,100.65139 173.559322,111.099661 173.559322,125.533288 Z M131.299797,61.4833898 L108.361763,61.4833898 L108.361763,93.8825763 L127.681085,93.8825763 C142.615864,93.8825763 150.851254,87.8687458 150.851254,77.1189153 C150.851254,67.0459661 143.770034,61.4833898 131.299797,61.4833898 L131.299797,61.4833898 Z M108.361763,106.738983 L108.361763,142.444475 L132.143729,142.444475 C147.692475,142.444475 155.930034,136.205017 155.930034,124.478915 C155.930034,112.750644 147.462508,106.736814 131.143593,106.736814 L108.361763,106.736814 L108.361763,106.738983 Z"
                fill="#7E13F8"
              />
            </g>
          </svg>

          <span className=" text-sm w-full text-center">Bootstrap</span>
        </li>
      </ul>
    </article>
    <section className="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center">


    </section>
  </section>);
}

function SeccionContactame() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://api.topmedicalsolution.com/public/web/contacto_portafolio.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, asunto, mensaje }),
      });

      const data = await response.json();
      setResponseMessage(data.message);
      setIsError(!response.ok);

      if (response.ok) {
        setNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
      }
    } catch (error) {
      setResponseMessage("Error al enviar el mensaje.");
      setIsError(true);
    } finally {
      setLoading(false);

      setTimeout(() => setResponseMessage(""), 5000);
    }
  };

  return (
    <section className="pt-24 container mx-auto px-2 lg:w-[740px]" id="contactame">
      <h2 className="text-3xl font-bold text-dark-700 dark:text-primary-50">Contáctame</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold text-dark-700 dark:text-dark-200">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="p-3 mt-4 bg-dark-100 dark:bg-dark-900 rounded"
              required
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 mt-4 md:mt-0">
            <label className="font-semibold text-dark-700 dark:text-dark-200">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 mt-4 bg-dark-100 dark:bg-dark-900 rounded"
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="font-semibold text-dark-700 dark:text-dark-200">Asunto</label>
          <input
            type="text"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className="p-3 mt-4 bg-dark-100 dark:bg-dark-900 rounded"
            required
          />
        </div>
        <div className="w-full flex flex-col mt-8">
          <label className="font-semibold text-dark-700 dark:text-dark-200">Mensaje</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="h-40 p-3 mt-4 bg-dark-100 dark:bg-dark-900 rounded"
            required
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            disabled={loading}
            className="mt-9 py-4 px-10 bg-primary-600 rounded-full text-white hover:bg-primary-700"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
        {responseMessage && (
          <p className={`text-center mt-4 p-3 rounded ${isError ? "bg-red-600" : "bg-green-600"} text-white`}>
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
}

function IndexPage() {
  return (
    <>
      <Header />
      <div className="absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,153,255,0.25),rgba(255,255,255,0))]" />
      <SectionMain />
      <SeccionExperiencia />
      <SeccionProyectos />
      <SeccionSobreMi />
      <SeccionTecnologias />
      <SeccionLogros />
      <SeccionContactame />
      <div className="mt-8 mb-8 flex justify-center opacity-70">
        <small className="text-dark-700 dark:text-dark-200 text-center">
          {" "}
          Construido con ❤️ usando React, Next.js y Tailwind CSS.
        </small>
      </div>
    </>
  );
}

export default IndexPage