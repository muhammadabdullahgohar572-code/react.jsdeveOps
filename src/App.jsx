
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Footer from "./Components/main/Footer";
import Navbar from "./Components/main/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            token ? <h1>Dashboard</h1> : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            token ? <Navigate to="/" /> : <Login />
          }
        />

        <Route
          path="/register"
          element={
            token ? <Navigate to="/" /> : <Register />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
