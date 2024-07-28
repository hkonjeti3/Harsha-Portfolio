import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import "./CustomCursor.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseDown = () => {
        if (!cursor.classList.contains("click")) {
            cursor.classList.add("click");

            setTimeout(() => {
                cursor.classList.remove("click");
            }, 800);
        }
    };

    const handleMouseMove = (event) => {
        const x = event.pageX - cursor.offsetWidth / 2;
        const y = event.pageY - cursor.offsetHeight / 2;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
    };
}, []);

  return (
    <Router>
      <div className="App">
      <div className="custom-cursor"></div>
        <Header />
        <AppRoutes />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;