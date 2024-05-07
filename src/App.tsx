import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import AboutPage from "./page/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
