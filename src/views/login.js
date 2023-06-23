import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/slice/auth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const client_Id = "6a09e4df5782e078abd9";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ user_name: null, password: null });
  const [error, setError] = useState({
    status: false,
    msg: "Please enter your User name and password ",
  });

  const handlelogin = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + client_Id
      );
      dispatch(login());
      navigate("/repos")
  };

  const handleClose = () => {
    setError((preState) => ({
      ...preState,
      status: false
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if (user.user_name && user.password) {
      dispatch(login());
      navigate("/repos");
    } else {
      setError((preState) => ({
        ...preState,
        status: true,
      }));
    }
  };

  return (
    <div className="mx-auto max-w-5xl mt-8">
      <div className="text-center">
        <i className="fa fa-github text-6xl" />
        <h1 className="text-2xl mt-4">Sign in to GitHub</h1>
      </div>
      <div className="flex justify-center flex-col items-center w-full mt-2">
        {error.status && (
          <div className="flex gap-3 items-center text-sm border w-80 text-red-600 bg-red-100 border-red-600 p-4 rounded text-center mb-2">
            <div>{error.msg}</div>
            <i class="fa fa-close cursor-pointer" onClick={() => handleClose()} />
          </div>
        )}
      </div>

      <div className="flex justify-center w-full mt-4">
        <div className="bg-slate-100 w-80 p-4 rounded-md border border-slate-200">
          <div>
            <p className="mb-4 text-sm">Username or email address </p>
            <input
              onChange={handleOnChange}
              name="user_name"
              className="mb-4 border border-slate-300 rounded-md w-full p-1"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm">Password</p>
              <p className="text-purple-500 text-sm">Forgot password?</p>
            </div>
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              className="mb-6 border border-slate-300 rounded-md w-full p-1"
            />
          </div>
          <button
            onClick={() => onSubmit()}
            className="bg-green-700 w-full rounded-md p-1 text-white"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-full mt-2">
        <div className="text-sm border w-80 border-slate-200 p-4 rounded text-center mb-2">
          New to GitHub ?{" "}
          <span className="text-purple-600 hover:underline">
            Create an account.
          </span>{" "}
        </div>
        <div
          className="text-sm border w-80 border-slate-200 p-4 rounded text-center cursor-pointer flex items-center justify-center"
          onClick={() => handlelogin()}
        >
          <i className="fa fa-github text-2xl" />
          <p className="pl-3">Connect with github.</p>{" "}
        </div>
      </div>
      <div className="flex justify-center w-full mt-20">
        <div className="w-60 text-center flex justify-between items-center">
          <a href="/login" className="text-xs text-fuchsia-600 hover:underline">
            Terms
          </a>{" "}
          <a href="/login" className="text-xs text-fuchsia-600 hover:underline">
            Privacy
          </a>{" "}
          <a href="/login" className="text-xs text-fuchsia-600 hover:underline">
            Security
          </a>{" "}
          <a href="/login" className="text-xs text-gray-400 hover:underline">
            Contact GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
