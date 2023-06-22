import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./slice/trending";
import auth from "./slice/auth";
import detailsReducer from "./slice/details";
import contributorsReducer from "./slice/contributors";
import languageReducer from "./slice/languages";
import branchesReducer from "./slice/branches";
import commitsReducer from "./slice/commits";
import treesReducer from "./slice/trees";

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
    auth: auth,
    details: detailsReducer,
    contributors: contributorsReducer,
    language: languageReducer,
    branches: branchesReducer,
    commits: commitsReducer,
    trees: treesReducer,
  },
});
