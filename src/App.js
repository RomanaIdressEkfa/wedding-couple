import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Navbar from './Pages/Homepage/Navbar';
import Login from './Pages/Component/Login/Login';
import SignUp from './Pages/Component/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/homepage" element={<Homepage></Homepage>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
