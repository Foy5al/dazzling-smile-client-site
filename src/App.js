import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
