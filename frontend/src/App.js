import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from './pages/Users';
import Banners from './pages/Banners';
import Login from './pages/Login';
import BannerForm from './pages/BannerForm';
import BannerEdit from './pages/BannerEdit';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/users" element={<Users/>} />
  <Route path="/banners" element={<Banners/>} />
  <Route path="/create-banner" element={<BannerForm/>} />
  <Route path="/edit-banner/:id" element={<BannerEdit/>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
