import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import User from './pages/User'
import { RegisterVehicle } from './pages/RegisterVehicle'
import { CompleteReg } from './pages/CompleteReg'
import Vehicle from './pages/Vehicle'
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'
import IssuerLogin from './pages/IssuerLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/register-vehicle/:id' element={<RegisterVehicle />} />
        <Route path='/complete-registration/:id' element={<CompleteReg />} />
        <Route path='/vehicle/:id' element={<Vehicle />} />


        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin/:id' element={<Admin />} />

        <Route path='/issuer-login' element={<IssuerLogin />} />
        {/* <Route path='/admin/:id' element={<Issu />} /> */}


      </Routes>
    </Router>
  )
}

export default App
