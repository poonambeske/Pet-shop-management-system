
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Customerregistration from './components/Customerregistration';
import About from './components/About';
import CustomerDashboard from './components/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard';
import Allregisteredusers from './components/Allregisteredusers';
import ErrorPage from './components/ErrorPage';
import CustProfile from './components/CustProfile';
import Cart from './components/Cart';
import SearchPet from './components/SearchPet';
import ViewOwnerPets from './components/ViewOwnerPets';
import PetRegisteration from './components/PetRegisteration';
import PaymentDashboard from './components/PaymentDashboard';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div className="App" >
      <NavBarComp />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/customerregistration" element={<Customerregistration />} />
        <Route exact path="/customerDashboard" element={<CustomerDashboard />} />
        <Route exact path="/adminDashboard" element={<AdminDashboard />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/allregisteredusers" element={<Allregisteredusers />} />
        <Route exact path="/*" element={<ErrorPage />} />
        <Route exact path="/searchpet" element={<SearchPet />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<CustProfile />} />
        <Route exact path="/viewopets" element={<ViewOwnerPets />} />
        <Route exact path="/petregistration" element={<PetRegisteration />} />
        <Route exact path="/paymentDashboard" element={<PaymentDashboard />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />

      </Routes>

    </div>
  );
}

export default App;
