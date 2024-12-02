import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AddProject from './AddProject';
import UpdateProject from './UpdateProject';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/add-project" element={<Protected Cmp={AddProject} />} />
          <Route path="/update-project" element={<Protected Cmp={UpdateProject} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
