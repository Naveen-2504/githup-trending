import React from "react";
import { AppBar } from "./AppBar";
import NotFound from "assets/notFound.png";
export const NotFoundPage = () => {
  return (
    <>
      <AppBar />
      <img src={NotFound} alt="404 Page" />
      <div className="mx-auto max-w-4xl mt-10">
        <p className="mb-2 font-light text-sm text-gray-500">
          Find code, projects, and people on GitHub:
        </p>
        <div className="flex items-center gap-3">
          <input
            className="placeholder:text-slate-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder=""
            type="text"
            name="search"
          />
          <button className="bg-slate-200 px-6 py-2 px-5 rounded">
            Search
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-xl mt-10 flex gap-2">
        <a
          href="/"
          className="hover:text-purple-600 hover:underline font-light text-sm text-gray-500"
        >
          Contact Support
        </a>{" "}
        <p className="font-light text-sm text-gray-500">—</p>
        <a
          href="/"
          className="hover:text-purple-600 hover:underline font-light text-sm text-gray-500"
        >
          GitHub Status
        </a>{" "}
        <p className="font-light text-sm text-gray-500">—</p>
        <a
          href="/"
          className="hover:text-purple-600 hover:underline font-light text-sm text-gray-500"
        >
          @githubstatus
        </a>
      </div>
      <div className="mx-auto max-w-6xl flex justify-between mt-20">
        <div>
          <h1 className="mb-3 font-bold text-4xl">GitHub</h1>
          <div className="leading-5 mb-3 ">
            <h6 className="font-bold mb-2">Subscribe to our newsletter</h6>
            <p className="font-light text-sm">
              Get product updates, company news, and more.
            </p>
          </div>
          <button className="border border-gray-300 rounded px-5 py-2 hover:border-black mt-2">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4">
          <div className="px-3 leading-12">
            <h1 className="font-light text-gray-500 mb-3">Product</h1>
            <div className="flex flex-col">
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Features
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Security
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Team
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Enterprise
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Customer stories
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                The ReadME Project
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Pricing
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Resources
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Roadmap
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Compare GitHub
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1 className="font-light text-gray-500 mb-3">Platform</h1>
            <div className="flex flex-col">
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Developer API
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Partners
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Electron
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                GitHub Desktop
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1 className="font-light text-gray-500 mb-3">Support</h1>
            <div className="flex flex-col">
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Docs
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Community Forum
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Professional Services
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Premium Support
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Skills
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Status
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Contact GitHub
              </a>
            </div>
          </div>
          <div className="px-3 leading-10">
            <h1 className="font-light text-gray-500 mb-3">Company</h1>
            <div className="flex flex-col">
              <a href="/" className="text-sm font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                About
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Blog
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Careers
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Press
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Inclusion
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Social Impact
              </a>
              <a href="/" className="font-light text-sm text-gray-500 hover:underline hover:text-purple-600 mb-3">
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
