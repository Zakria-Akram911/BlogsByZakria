import "./App.css";
import "./utility/style.scss";
import "./utility/media-query.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import { signOut } from "firebase/auth";

function App() {
  // const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate("/auth");
    });
  };

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
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
        <Route
          path="/add-blog"
          element={user?.uid ? <AddUpdate user={user} /> : <Navigate to="/" />}
        />
        <Route path="/update-blog/:id" element={<AddUpdate user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
