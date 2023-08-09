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
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Header active={active} user={user} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
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
