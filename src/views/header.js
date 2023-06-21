import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-slate-400 px-3 py-2 text-sm font-medium"
                >
                  Explore
                </a>
                <a
                  href="/"
                  className="text-slate-400 px-3 py-2 text-sm font-medium"
                >
                  Topics
                </a>
                <a
                  href="/"
                  className="text-indigo-500 px-3 py-2 text-sm font-medium border-b-4 border-indigo-500"
                >
                  Trending
                </a>
                <a
                  href="/"
                  className="text-slate-400 px-3 py-2 text-sm font-medium"
                >
                  Collections
                </a>
                <a
                  href="/"
                  className="text-slate-400 px-3 py-2 text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="/"
                  className="text-slate-400 px-3 py-2 text-sm font-medium"
                >
                  GitHub Sponsors
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <a
                  href="/"
                  class="bg-slate-100 border border-slate-300 rounded-md px-3 py-2 text-sm"
                  aria-current="page"
                >
                  Get email updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 border border-slate-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center p-10 leading-10">
          <h1 className="text-4xl font-bold pb-2">Trending</h1>
          <p className="text-xl font-light">
            See what the GitHub community is most excited about today.
          </p>
        </div>
      </div>
    </div>
  );
};
