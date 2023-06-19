import React from "react";
import { AppBar } from "./AppBar";
import NotFound from "assets/notFound.png";
export const NotFoundPage = () => {
  return (
    <>
      <AppBar />
      <img src={NotFound} alt="404 Page" />
      <div>
        <p>Find code, projects, and people on GitHub:</p>
        <div className="flex items-center gap-3">
          <input
            className="placeholder:text-slate-400 block w-96 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder=""
            type="text"
            name="search"
          />
          <button className="bg-slate-300 p-2 px-5 rounded">Search</button>
        </div>
      </div>
      <div>
        <a className="hover:text-purple-600 hover:underline">Contact Support</a>{" "}
        — <a className="hover:text-purple-600 hover:underline">GitHub Status</a>{" "}className="hover:text-purple-600 hover:underline"
        — <a className="hover:text-purple-600 hover:underline">@githubstatus</a>
      </div>
    </>
  );
};
