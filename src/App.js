import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navb';
import UserList from './Components/UserList';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
