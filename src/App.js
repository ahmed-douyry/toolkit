// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserList } from './UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
