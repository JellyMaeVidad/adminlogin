import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Records from './Components/Records'
import Requests from './Components/Requests'
import AddDelResident from './Components/AddDelResident'
import Category from './Components/Category'
import AddCategory from './Components/AddCategory'
import User from './Components/User'
import Adduser from './Components/Adduser'

function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/adminlogin' element={<Login />}></Route>
  <Route path='/dashboard' element={<Dashboard />}>
    <Route path='' element={<Home />}></Route>
    <Route path='/dashboard/user' element={<User />}></Route>
    <Route path='/dashboard/add_user' element={<Adduser />}></Route>
    <Route path='/dashboard/category' element={<Category />}></Route>
    <Route path='/dashboard/addDelRes' element={<AddDelResident />}></Route>
    <Route path='/dashboard/records' element={<Records />}></Route>
    <Route path='/dashboard/requests' element={<Requests />}></Route>
    <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
  </Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
