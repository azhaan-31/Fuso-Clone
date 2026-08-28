import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import About from '../pages/about/about';
import Vehicles from '../pages/vehicles/vehicles';
import Services from '../pages/services/services';
import Contact from '../pages/contact/contact';
import Login from '../pages/login/login';

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