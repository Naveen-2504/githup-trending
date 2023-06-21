import React from "react";
import logo from "assets/logo.png";

export const AppBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <i className="fa fa-github text-white text-4xl"></i>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div>
                  <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                      <i className="fa fa-search text-slate-400 pr-4" />
                    </span>
                    <input
                      class="placeholder:text-slate-400 block bg-gray-800 w-96 border border-slate-100 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      placeholder="Search for anything..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-white hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  Pull requests
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-white hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  Issues
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-white hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  Codespaces
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-white hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  Marketplace
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:bg-white hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 pr-5 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <i className="fa fa-bell-o" />
            </button>
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <i className="fa fa-plus mr-3" />
              <i className="fa fa-caret-down" />
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img className="h-8 w-8 rounded-full" src={logo} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div> */}
    </nav>
  );
};
