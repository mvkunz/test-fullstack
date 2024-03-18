import { Routes, Route } from 'react-router-dom'
import FormCustomer from './pages/Customers/FormCustomer'
import Navbar from './components/Navbar'
import Customers from './pages/Customers/Customers'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/customers/criar' element={ <FormCustomer /> } />
        <Route path='/customers/:id' element={ <FormCustomer /> } />
        <Route path='/customers' element={ <Customers /> } />
        {/* <Route path='/customers' element={ <Customers /> } /> */}
      </Routes>
    </div>
  )
}

export default App
