import { BrowserRouter, Outlet, Route, Routes, useLocation, } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import About from './pages/about/About';
import Appointments from './pages/appointments/Appointments';
import Doctors from './pages/doctors/Doctors';
import Home from './pages/home/Home';
import { doctors } from './utils/data';
import "./styles/global.scss";
import Footer from './components/footer/Footer';
import SignUp from './features/authentication/SignUp';
import SignIn from './features/authentication/SignIn';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './features/authentication/AuthContext';


function Layout() {

  const location = useLocation();
  const hideNavbarOnAbout = location.pathname === '/about';
  return (
    <div className="app">
      {!hideNavbarOnAbout && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  console.log(doctors);
  return (
    <AuthProvider>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route element={<PrivateRoute />}>
                <Route element={<Appointments />} path="/appointment" exact />
              </Route>
            </Route>
            <Route path="/features/authentication/signin" element={<SignIn />} />
            <Route path="/features/authentication/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>

  );
}

export default App;