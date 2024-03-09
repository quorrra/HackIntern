import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Test from "./components/tests/Test";
import Check from "./components/tests/check/Check";

function App() {
  return (
    <BrowserRouter className="main-container">
      {/* <NavBar/> */}
      <div className="dashboard container-fluid">
        <div className="row">
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/test" exact element={<Test />} />
            <Route path="/check" exact element={<Check />} />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
