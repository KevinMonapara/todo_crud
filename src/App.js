import React from 'react';
import Add from './Add';
import Edit from './Edit';
import List from './List';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1><i>Hello,,,,,,,</i></h1><br />
      <Router>
        <Link to="/Add">Add</Link> |
        <Link to="/Edit"> Edit</Link> |
        <Link to="/List"> List</Link> |
        <Routes>
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;