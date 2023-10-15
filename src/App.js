import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import NoteState from './context/note/NoteStates';
import ManageNote from './components/manage-note/ManageNote';
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <div>
      <NoteState>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/manage-note' element={<ManageNote />} />
        </Routes>
      </NoteState>
    </div>
  )
}

export default App;
