import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Vehicles from '../pages/Vehicles/Vehicles';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';

function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/vehicles"
        element={<Vehicles />}
      />

      <Route
        path="/services"
        element={<Services />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
    <Route
  path="/login"
  element={<Login />}
/>
    </Routes>
  );
}

export default AppRoutes;