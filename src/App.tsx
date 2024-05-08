import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import AboutPage from "./page/about";
import FeedbackProvider from "./contexts/feedbackcontext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </FeedbackProvider>
    </>
  );
}

export default App;
