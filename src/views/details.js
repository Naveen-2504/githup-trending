import React, { useEffect, useState } from "react";
import { AppBar } from "./AppBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "redux/slice/details";
import { useLocation } from "react-router-dom";
import { fetchContributors } from "redux/slice/contributors";
import { fetchLanguages } from "redux/slice/languages";
import { fetchBranches } from "redux/slice/branches";
import { percentage } from "helpers";
import { fetchCommits } from "redux/slice/commits";
import { fetchTrees } from "redux/slice/trees";

let fixedColor = {
  0: "bg-yellow-300",
  1: "bg-lime-500",
  2: "bg-blue-500",
  3: "bg-slate-950",
  4: "bg-violet-600",
  5: "bg-zinc-700",
  6: "bg-green-700",
  7: "bg-orange-300",
  8: "bg-teal-700",
  9: "bg-red-700",
  10: "bg-orange-500",
  11: "bg-gray-600",
  12: "bg-blue-800",
  13: "bg-yellow-500",
  14: "bg-blue-200",
  15: "bg-slate-500",
  16: "bg-green-900",
  17: "bg-cyan-600",
};

export const TrendingDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.details);
  const conState = useSelector((state) => state.contributors);
  const langState = useSelector((state) => state.language);
  const banState = useSelector((state) => state.branches);
  const comState = useSelector((state) => state.commits);
  const treeState = useSelector((state) => state.trees);
  const location = useLocation();
  const currentPathname = location.pathname.split("repos");
  const [dropDownValue, setDropDownValue] = useState({
    branch: false,
  });

  useEffect(() => {
    dispatch(fetchDetails(currentPathname[1]));
    dispatch(fetchContributors(currentPathname[1]));
    dispatch(fetchLanguages(currentPathname[1]));
    dispatch(fetchBranches(currentPathname[1]));
    dispatch(fetchCommits(currentPathname[1]));
  }, []);

  useEffect(() => {
    if (comState?.data?.length > 0) {
      dispatch(fetchTrees(comState.data[0].commit.tree.url));
    }
  }, [comState]);

  const handleDropDown = (e, value) => {
    setDropDownValue((preState) => ({
      ...preState,
      [e]: !value,
    }));
  };

  const { data } = state;
  if (data && treeState?.data) {
    return (
      <>
        <AppBar />
        <div className="bg-slate-100 border border-slate-300">
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 text-center px-10 pt-3 pb-0 leading-10">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
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
                <p className="text-blue-800">
                  {data.full_name.split("/")[0]} /{" "}
                  <span className="text-indigo-800 font-bold text-xl">
                    {data.full_name.split("/")[1]}
                  </span>
                </p>
              </div>
              <div className="flex gap-4">
                <div class="bg-slate-100 flex space-x-2 border border-slate-300 rounded-md">
                  <label class="flex items-center px-4 gap-2 block cursor-pointer select-none text-center">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-eye mr-2"
                    >
                      <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                    </svg>
                    <p>watch</p>
                  </label>
                  <div className="border border-slate-300"></div>
                  <label class="block px-4 cursor-pointer select-none text-center">
                    {data.watchers_count}
                  </label>
                </div>
                <div class="bg-slate-100 flex space-x-2 border border-slate-300 rounded-md">
                  <label class="flex px-4 items-center gap-2 block cursor-pointer select-none text-center">
                    <i className="fa fa-star-o" />
                    <p>Star</p>
                  </label>
                  <div className="border border-slate-300"></div>
                  <label class="px-4 block cursor-pointer select-none text-center">
                    {data.stargazers_count}
                  </label>
                </div>
                <div class="bg-slate-100 flex space-x-2 border border-slate-300 rounded-md">
                  <label class="px-4 flex items-center gap-2 block cursor-pointer select-none text-center">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo-forked mr-2"
                    >
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                    <p>forks</p>
                  </label>
                  <div className="border border-slate-300"></div>
                  <label class="px-4 block cursor-pointer select-none text-center">
                    {data.forks}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-14 mx-4 mt-6">
              <div className="flex items-center gap-4 border-b-4 border-green-500">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
                <p>Code</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
                <p>Issues</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                </svg>
                <p>Pull requests</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
                </svg>
                <p>Actions</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
                </svg>
                <p>Projects</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                </svg>
                <p>Wiki</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                </svg>
                <p>Security</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
                </svg>
                <p>Insights</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
                >
                  <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
                </svg>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between p-6 gap-5">
            <div className="mt-8 w-[150rem]">
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <div
                    onClick={() =>
                      handleDropDown("branch", dropDownValue.branch)
                    }
                    class="bg-slate-100 relative flex items-center  space-x-2 border border-slate-300 rounded-md"
                  >
                    <label class="flex pl-3 items-center gap-2 block cursor-pointer select-none p-2 text-center">
                      <svg
                        text="gray"
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-git-branch"
                      >
                        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                      </svg>
                      <p>{data.default_branch}</p>
                    </label>
                    <label class="block cursor-pointer select-none pr-4 text-center">
                      <i className="fa fa-caret-down" />
                    </label>

                    {dropDownValue.branch && (
                      <div class="z-10 absolute top-10 left-[-12px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          {banState.data.map((arr) => {
                            if (arr.name !== data.default_branch)
                              return (
                                <li>
                                  <p class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    {arr.name}
                                  </p>
                                </li>
                              );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      text="gray"
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-git-branch"
                    >
                      <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                    </svg>
                    <div className="flex items-center gap-2">
                      <p>{banState.data.length}</p>
                      <p>branches</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      text="gray"
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-tag"
                    >
                      <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                    </svg>
                    <div className="flex items-center gap-2">
                      <p>{"count"}</p>
                      <p>tags</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div class="bg-slate-100 flex space-x-2 px-5 border cursor-pointer select-none p-2 text-center border-slate-300 rounded-md">
                    <p>Go to file</p>
                  </div>
                  <div class="bg-slate-100 px-3 flex space-x-2 border border-slate-300 rounded-md">
                    <label class="flex items-center gap-2 block cursor-pointer select-none p-2 text-center">
                      <p>Add file</p>
                      <i className="fa fa-caret-down" />
                    </label>
                  </div>
                  <div class="bg-green-500 px-2 flex items-center space-x-2 border border-slate-300 rounded-md">
                    <label class="flex pl-3 items-center gap-2 block cursor-pointer select-none p-2 text-center">
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-code"
                      >
                        <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                      <p className="text-white">{"Code"}</p>
                    </label>
                    <label class="block text-white cursor-pointer select-none pr-4 text-center">
                      <i className="fa fa-caret-down" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="border border-slate-300 rounded mt-8">
                <div className="bg-slate-100 p-3">
                  <div className="flex h-10 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={data.owner.avatar_url}
                        className="rounded-full w-8 ml-2"
                        alt=""
                      />
                      <h1>{data.owner.login}</h1>
                      <p className="text-sm">
                        {comState.data[0].commit.message.slice(0, 50)}
                      </p>
                    </div>
                    <div className="flex">
                      <div className="flex items-center gap-3">
                        <svg
                          aria-label="10 / 12 checks OK"
                          role="img"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-check"
                        >
                          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                        <p>{comState.data[0].sha.slice(0, 7)}</p>
                        <p></p>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          text="gray"
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-history"
                        >
                          <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                        </svg>
                        <p>{comState.data.length}</p>
                        <p>commits</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-slate-300">
                  <div className="flex w-full justify-between">
                    <div className="w-full">
                      {treeState?.data?.tree.map((arr, i) => {
                        return (
                          <>
                            <div className="flex justify-between">
                              <div className="flex gap-2 p-2 w-64 text-center items-center">
                                {arr.type === "tree" ? (
                                  <i class="fa fa-folder text-blue-500" />
                                ) : (
                                  <svg
                                    aria-label="File"
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-file color-fg-muted"
                                  >
                                    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                                  </svg>
                                )}{" "}
                                <p>{arr.path}</p>
                              </div>
                              <p className="w-40 text-center text-slate-500 font-light">
                                Initial commit
                              </p>
                              <p className="w-40 text-center text-slate-500 font-light">
                                2 days ago
                              </p>
                            </div>
                            <div className="border border-slate-200" />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8  w-[40rem]">
              <div>
                <h1 className="font-bold mb-6">About</h1>
                <p className="mb-4 text-slate-500">
                  {data?.description
                    ? data.description
                    : "No description, website, or topics provided."}
                </p>
                <div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-book mr-2"
                    >
                      <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                    </svg>
                    <p>Readme</p>
                  </div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-law mr-2"
                    >
                      <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
                    </svg>
                    <p> MIT license</p>
                  </div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      text="gray"
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-pulse mr-2"
                    >
                      <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
                    </svg>
                    <p> Activity</p>
                  </div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-star mr-2"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <p>{data.stargazers_count} stars</p>
                  </div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-eye mr-2"
                    >
                      <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                    </svg>
                    <p>{data.watchers_count} watching</p>
                  </div>
                  <div className="flex gap-1 items-center mb-4 text-slate-500">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo-forked mr-2"
                    >
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                    <p>{data.forks} forks</p>
                  </div>
                </div>
                <p className="mb-6">Report repository</p>
              </div>
              <div className="border border-slate-300" />
              <div className="my-6">
                <h1 className="font-bold my-6">Packages</h1>
                <p>No packages published</p>
              </div>
              <div className="border border-slate-300" />
              <div>
                <h1 className="font-bold my-6">Contributors</h1>
                <div className="flex flex-wrap mb-6">
                  {conState?.data?.map((arr, i) => {
                    if (i >= 15)
                      return (
                        <img
                          key={i}
                          src={arr.avatar_url}
                          className="rounded-full w-6 m-1"
                          alt=""
                        />
                      );
                  })}
                </div>
                {conState?.data.length > 15 && (
                  <div className="text-blue-700 mb-6">
                    +{conState?.data.length - 15} contributors
                  </div>
                )}
              </div>
              <div className="border border-slate-300" />
              <div>
                <h1 className="font-bold my-6">Languages</h1>

                <div class="relative">
                  <div class="mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                    {Object.keys(langState.data).map((key, i) => {
                      return (
                        <>
                          <div
                            className={`flex flex-col justify-center ${fixedColor[i]} text-white`}
                            style={{
                              width: percentage(
                                langState.data[key],
                                Math.max(...Object.values(langState.data))
                              ),
                            }}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className={`flex flex-wrap gap-2`}>
                  {Object.keys(langState.data).map((key, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <div
                        className={`${fixedColor[i]} w-2 h-2 rounded-full`}
                      ></div>
                      {key}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
