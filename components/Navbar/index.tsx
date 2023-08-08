import React from "react";
import SearchBox from "../Inputs/searchBox";
import Image from "next/image";
import { XusdLogo } from "../../assets";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="container mx-auto mt-4">
      <nav
        className=" max-w-[85rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="">
          <Link
            className="flex items-center justify-between text-xl font-semibold  dark:text-gray-800"
            href="/"
          >
            <Image src={XusdLogo} alt="XUD" width={50} />{" "}
            <h3 className="text-gray-400 pl-3  dark:text-gray-400">XUSD</h3>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-dark"
              aria-controls="navbar-dark"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-dark"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 ml-5 sm:flex-row sm:items-center sm:justify-start sm:mt-0 sm:pl-5">
            <Link
              className="font-medium text-blue-500 text-xl"
              href="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="/marketplace"
            >
              Marketplace
            </Link>
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="#"
            >
              Collections
            </Link>
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="#"
            >
              Profile
            </Link>{" "}
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="#"
            >
              Creators
            </Link>{" "}
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="#"
            >
              <SearchBox />
            </Link>{" "}
            <Link
              className="font-medium text-gray-400 text-xl hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              href="#"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
