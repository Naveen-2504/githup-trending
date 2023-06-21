import React from "react";

export const LoginPage = () => {
  return (
    <div className="mx-auto max-w-6xl mt-8">
      <div className="text-center">
        <i className="fa fa-github text-6xl" />
        <h1 className="text-2xl mt-4">Sign in to GitHub</h1>
      </div>
      <div className="flex justify-center w-full mt-8">
        <div className="bg-slate-100 w-80 p-4 rounded-md border border-slate-200">
          <div>
            <p className="mb-4">Username or email address </p>
            <input className="mb-6 border border-slate-300 rounded-md w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <p>Password</p>
              <p className="text-purple-500">Forgot password?</p>
            </div>
            <input className="mb-6 border border-slate-300 rounded-md w-full" />
          </div>
          <button className="bg-green-700 w-full rounded-md p-1 text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mt-2">
        <div className="border w-80 border-slate-200 p-4 rounded text-center">
          New to GitHub ?{" "}
          <span className="text-purple-600 hover:underline">
            Create an account.
          </span>{" "}
        </div>
      </div>
      <div className="flex justify-center w-full mt-20">
        <div className="w-80 text-center flex justify-between items-center">
          <a href="/" className="text-sm text-fuchsia-600 hover:underline">
            Terms
          </a>{" "}
          <a href="/" className="text-sm text-fuchsia-600 hover:underline">
            Privacy
          </a>{" "}
          <a href="/" className="text-sm text-fuchsia-600 hover:underline">
            Security
          </a>{" "}
          <a href="/" className="text-sm text-gray-400 hover:underline">
            Contact GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
