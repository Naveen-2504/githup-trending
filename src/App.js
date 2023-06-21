import { Header } from "views/header";
import "./App.css";
import { AppBar } from "views/AppBar";
import { MainPage } from "views/MainPage";
import { NotFoundPage } from "views/404";
import { LoginPage } from "views/login";

function App() {
  return (
    <>
      {/* <AppBar />
      <Header />
      <MainPage /> */}
      <NotFoundPage />
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
