import './App.css'
import EmployeeComponent from './components/EmployeeComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import ListEmployee from './components/ListEmployee.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element = { <ListEmployee /> } />
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployee /> } />
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <EmployeeComponent /> } />
          {/* http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent /> } />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
