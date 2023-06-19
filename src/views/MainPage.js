import React from "react";

export const MainPage = () => {
  return (
    <div className="mx-auto max-w-6xl border border-slate-300 rounded mt-8">
      <div className="bg-slate-100">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div
                class="flex space-x-2 border border-slate-300 rounded-md"
                x-data="app"
              >
                <div>
                  <input
                    type="radio"
                    name="option"
                    id="repositories"
                    class="peer hidden"
                    checked
                  />
                  <label
                    for="repositories"
                    class="block cursor-pointer select-none p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Repositories
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="option"
                    id="developers"
                    class="peer hidden"
                  />
                  <label
                    for="developers"
                    class="block cursor-pointer select-none p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Developers
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400	 hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Language:{" "}
                  <span>
                    Any <i className="fa fa-caret-down" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-400	 hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Date range:{" "}
                  <span>
                    Today <i className="fa fa-caret-down" />
                  </span>
                </a>
                <a
                  href="#"
                  className="text-slate-400	 hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sponsorsable:{" "}
                  <span>
                    All <i className="fa fa-caret-down" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-slate-300">
        <div className="p-4">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo mr-1 color-fg-muted"
                >
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
                <a className="hover:underline text-purple-600">hi</a>
              </div>
              <p className="font-light">gghhhhhjhj</p>
            </div>
            <div>
              <div class="bg-slate-100 flex space-x-2 border border-slate-300 rounded-md">
                <div>
                  <label class="flex items-center gap-2 block cursor-pointer select-none p-2 text-center">
                    <i className="fa fa-star-o" />
                    <p>Star</p>
                  </label>
                </div>
                <div className="border border-slate-300"></div>
                <div>
                  <label class="block cursor-pointer select-none p-2 text-center">
                    <i className="fa fa-caret-down" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-stone-400 inline-block rounded-full" />{" "}
                <p>Pjsvd</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa fa-star-o" />
                <p>Pjsvd</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  aria-label="fork"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-repo-forked"
                >
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                <p>Pjsvd</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Built by</p>
                <p>Pjsvd</p>
              </div>
            </div>
            <div>
              <label class="flex items-center gap-2">
                <i className="fa fa-star-o" />
                <p>star today</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
