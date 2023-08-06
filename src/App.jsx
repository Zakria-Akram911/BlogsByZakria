import "./App.css";
import "./utility/style.scss";
import "./utility/media-query.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DetailPage from "./pages/DetailPage";
import AddUpdate from "./pages/AddUpdate";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");
  return (
    <>
      <Router>
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/add-blog" element={<AddUpdate />} />
          <Route path="/update-blog/:id" element={<AddUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
