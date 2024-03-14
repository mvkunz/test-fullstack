import { Routes, Route } from 'react-router-dom'
import FormCustomer from './pages/Customers/FormCustomer'
import Navbar from './components/Navbar'
// import Customers from './pages/Customers'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/customers/create' element={ <FormCustomer /> } />
        <Route path='/customers/edit/:id' element={ <FormCustomer /> } />
        {/* <Route path='/customers' element={ <h1>Customers</h1> } /> */}
      </Routes>
    </div>
  )
}

export default App
