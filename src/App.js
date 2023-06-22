import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "views/MainPage";
import { NotFoundPage } from "views/404";
import { LoginPage } from "views/login";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TrendingDetails } from "views/details";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Component = isAuthenticated ? <MainPage /> : <Navigate to="/login" />;
  const DetailsComponent = isAuthenticated ? <TrendingDetails /> : <Navigate to="/login" />;
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/repos" element={Component} />
        <Route path="/repos/:user_name/:repos" element={DetailsComponent} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
