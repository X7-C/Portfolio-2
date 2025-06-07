import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "../pages/home/HomePage";
import Semester from "../pages/semester/semester";
import Frameworks from "../pages/Java/frameworks";
import Exam from "../pages/exam/exam";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semester" element={<Semester />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
