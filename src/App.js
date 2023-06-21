import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "views/MainPage";
import { NotFoundPage } from "views/404";
import { LoginPage } from "views/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/repos" element={<MainPage />} />
        {/* <Route path="/repos/developers" element={<MainPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
