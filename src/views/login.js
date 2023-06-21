import React from "react";

export const LoginPage = () => {
  return (
    <div className="mx-auto max-w-5xl mt-8">
      <div className="text-center">
        <i className="fa fa-github text-6xl" />
        <h1 className="text-2xl mt-4">Sign in to GitHub</h1>
      </div>
      <div className="flex justify-center w-full mt-4">
        <div className="bg-slate-100 w-80 p-4 rounded-md border border-slate-200">
          <div>
            <p className="mb-4 text-sm">Username or email address </p>
            <input className="mb-4 border border-slate-300 rounded-md w-full p-1" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm">Password</p>
              <p className="text-purple-500 text-sm">Forgot password?</p>
            </div>
            <input className="mb-6 border border-slate-300 rounded-md w-full p-1" />
          </div>
          <button className="bg-green-700 w-full rounded-md p-1 text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mt-2">
        <div className="text-sm border w-80 border-slate-200 p-4 rounded text-center">
          New to GitHub ?{" "}
          <span className="text-purple-600 hover:underline">
            Create an account.
          </span>{" "}
        </div>
      </div>
      <div className="flex justify-center w-full mt-20">
        <div className="w-60 text-center flex justify-between items-center">
          <a href="/" className="text-xs text-fuchsia-600 hover:underline">
            Terms
          </a>{" "}
          <a href="/" className="text-xs text-fuchsia-600 hover:underline">
            Privacy
          </a>{" "}
          <a href="/" className="text-xs text-fuchsia-600 hover:underline">
            Security
          </a>{" "}
          <a href="/" className="text-xs text-gray-400 hover:underline">
            Contact GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
