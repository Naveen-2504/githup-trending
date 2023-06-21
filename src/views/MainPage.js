import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Header } from "./header";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "redux/slice/trending";

export const MainPage = () => {
  // const location = useLocation();
  // const currentPathname = location.pathname;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  const handleClick = (value) => {
    dispatch(fetchTrending(value));
  };

  const { data, isLoading, radioName } = state.trending;

  if (isLoading) {
    <>
      <AppBar />
      <p>Loading.....</p>
    </>;
  }

  return (
    <>
      <AppBar />
      <Header />
      <div className="mx-auto max-w-6xl border border-slate-300 rounded mt-8">
        <div className="bg-slate-100">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div
                  class="flex space-x-2 border border-slate-300 rounded-md"
                  x-data="app"
                >
                  <div onClick={() => handleClick("repositories")}>
                    <input
                      type="radio"
                      name="option"
                      id="repositories"
                      class="peer hidden"
                      checked={radioName === "repositories"}
                    />
                    <label
                      for="repositories"
                      class="block cursor-pointer select-none p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                    >
                      Repositories
                    </label>
                  </div>
                  <div onClick={() => handleClick("developers")}>
                    <input
                      type="radio"
                      name="option"
                      id="developers"
                      class="peer hidden"
                      checked={radioName === "developers"}
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
                    href="/"
                    className="text-slate-400	 hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Language:{" "}
                    <span>
                      Any <i className="fa fa-caret-down" />
                    </span>
                  </a>
                  <a
                    href="/"
                    className="text-slate-400	 hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Date range:{" "}
                    <span>
                      Today <i className="fa fa-caret-down" />
                    </span>
                  </a>
                  <a
                    href="/"
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
        {radioName === "developers" ? (
          <>
            {data?.items &&
              data.items.map((arr, i) => {
                console.log(arr);
                return (
                  <div className="border border-slate-300">
                    <div className="p-4 flex w-full justify-between">
                      <div className="flex gap-3">
                        <p>{i+1}</p>
                        <div className="flex gap-3">
                          <img
                            src={arr.owner.avatar_url}
                            className="rounded-full w-12 h-12"
                            alt="profile logo"
                          />
                          <div>
                            <h1>{arr.owner.login}</h1>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="flex gap-3">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-flame mr-1 color-fg-severe"
                          >
                            <path d="M9.533.753V.752c.217 2.385 1.463 3.626 2.653 4.81C13.37 6.74 14.498 7.863 14.498 10c0 3.5-3 6-6.5 6S1.5 13.512 1.5 10c0-1.298.536-2.56 1.425-3.286.376-.308.862 0 1.035.454C4.46 8.487 5.581 8.419 6 8c.282-.282.341-.811-.003-1.5C4.34 3.187 7.035.75 8.77.146c.39-.137.726.194.763.607ZM7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.79 2.79 0 0 1-1.436-.874A3.198 3.198 0 0 0 3 10c0 2.53 2.164 4.5 4.998 4.5Z"></path>
                          </svg>
                          <p>name</p>
                        </div>
                        <div className="flex gap-3">
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
                          <p>username</p>
                        </div>
                        <p>remark</p>
                      </div> */}
                      <div>
                        <button className="bg-slate-100 border border-slate-300 px-4 py-1 px-5 rounded-md">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : (
          <>
            {data?.items &&
              data.items.map((arr, i) => {
                return (
                  <div key={i} className="border border-slate-300">
                    <div className="p-4">
                      <div className="flex justify-between leading-6">
                        <div>
                          <div className="flex items-center gap-2">
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
                            <a
                              href="/"
                              className="hover:underline text-purple-600"
                              alt=""
                            >
                              {arr.full_name}
                            </a>
                          </div>
                          <p className="font-light w-9/12 mt-2">{arr.description}</p>
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
                      <div className="flex justify-between mt-2">
                        <div className="flex gap-5">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-stone-400 inline-block rounded-full" />{" "}
                            <p>{arr.language}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <i className="fa fa-star-o" />
                            <p>{arr.stargazers_count}</p>
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
                            <p>{arr.forks_count}</p>
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
                );
              })}
          </>
        )}
      </div>
    </>
  );
};
