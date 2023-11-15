import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from './pages/Users';
import Banners from './pages/Banners';
import Login from './pages/Login';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/users" element={<Users/>} />
  <Route path="/banners" element={<Banners/>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
