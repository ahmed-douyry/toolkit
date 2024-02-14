// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserList } from './UserList';
import { Adduser } from './Adduser';
import { EditUser } from './EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/Adduser' element={<Adduser />} />
          <Route path='/modifier/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
