import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home.js";
import Discuss from "./Views/Discuss.js";
import Browse from "./Views/Browse.js";
import LogIn from "./Views/LogIn.js";
import NoMatch from "./Views/NoMatch.js";
import More from "./Views/More.js";
import Register from "./Views/Register.js";
import { MovieContextProvider } from "./Contexts/MovieContext";

// import Movies from "./Components/Movies";
import Navigation from "./Components/Navbar/Navbar.js";
import React from "react";
import { AuthContextProvider } from "./Contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import { app } from "./config.js";
function App() {
  // <Browse />;

  return (
    <div className="App">
      <AuthContextProvider>
        <Navigation />
        <MovieContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/discuss"
              element={
                <ProtectedRoute>
                  <Discuss />
                </ProtectedRoute>
              }
            />
            <Route path="/browse" element={<Browse />} />
            <Route path="/browse/:title" element={<More />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
