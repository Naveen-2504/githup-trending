import React from "react";
import { AppBar } from "./AppBar";
import NotFound from "assets/notFound.png";
export const NotFoundPage = () => {
  return (
    <>
      <AppBar />
      <img src={NotFound} alt="404 Page" />
      <div className="mx-auto max-w-4xl mt-10">
        <p className="mb-2">Find code, projects, and people on GitHub:</p>
        <div className="flex items-center gap-3">
          <input
            className="placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder=""
            type="text"
            name="search"
          />
          <button className="bg-slate-200 px-6 py-2 px-5 rounded">Search</button>
        </div>
      </div>
      <div className="mx-auto max-w-xl mt-10">
        <a className="hover:text-purple-600 hover:underline">Contact Support</a>{" "}
        — <a className="hover:text-purple-600 hover:underline">GitHub Status</a>{" "}
        — <a className="hover:text-purple-600 hover:underline">@githubstatus</a>
      </div>
      <div className="mx-auto max-w-6xl flex justify-between mt-20">
        <div>
          <h1 className="mb-3 font-bold text-4xl">GitHub</h1>
          <div className="leading-5 mb-3 "> 
            <h6 className="font-bold">Subscribe to our newsletter</h6>
            <p className="font-light">Get product updates, company news, and more.</p>
          </div>
          <button className="border border-gray-300 rounded px-5 py-2 hover:border-black mt-2">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4">
          <div className="px-3 leading-10">
            <h1>Product</h1>
            <div className="flex flex-col">
              <a className="hover:underline hover:text-purple-600">Features</a>
              <a className="hover:underline hover:text-purple-600">Security</a>
              <a className="hover:underline hover:text-purple-600">Team</a>
              <a className="hover:underline hover:text-purple-600">
                Enterprise
              </a>
              <a className="hover:underline hover:text-purple-600">
                Customer stories
              </a>
              <a className="hover:underline hover:text-purple-600">
                The ReadME Project
              </a>
              <a className="hover:underline hover:text-purple-600">Pricing</a>
              <a className="hover:underline hover:text-purple-600">Resources</a>
              <a className="hover:underline hover:text-purple-600">Roadmap</a>
              <a className="hover:underline hover:text-purple-600">
                Compare GitHub
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1>Platform</h1>
            <div className="flex flex-col">
              <a className="hover:underline hover:text-purple-600">
                Developer API
              </a>
              <a className="hover:underline hover:text-purple-600">Partners</a>
              <a className="hover:underline hover:text-purple-600">Electron</a>
              <a className="hover:underline hover:text-purple-600">
                GitHub Desktop
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1>Support</h1>
            <div className="flex flex-col">
              <a className="hover:underline hover:text-purple-600">Docs</a>
              <a className="hover:underline hover:text-purple-600">
                Community Forum
              </a>
              <a className="hover:underline hover:text-purple-600">
                Professional Services
              </a>
              <a className="hover:underline hover:text-purple-600">
                Premium Support
              </a>
              <a className="hover:underline hover:text-purple-600">Skills</a>
              <a className="hover:underline hover:text-purple-600">Status</a>
              <a className="hover:underline hover:text-purple-600">
                Contact GitHub
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1>Company</h1>
            <div className="flex flex-col">
              <a className="hover:underline hover:text-purple-600">About</a>
              <a className="hover:underline hover:text-purple-600">Blog</a>
              <a className="hover:underline hover:text-purple-600">Careers</a>
              <a className="hover:underline hover:text-purple-600">Press</a>
              <a className="hover:underline hover:text-purple-600">Inclusion</a>
              <a className="hover:underline hover:text-purple-600">
                Social Impact
              </a>
              <a className="hover:underline hover:text-purple-600">Shop</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
