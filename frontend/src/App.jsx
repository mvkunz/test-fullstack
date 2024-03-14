import { Routes, Route } from 'react-router-dom'
import NewClient from './components/NewClient'
import ListClients from './components/ListClients'

function App() {

  return (
    <Routes>
      <Route path='/create' element={ <NewClient /> } />
      <Route path='/clients' element={ <ListClients /> } />
    </Routes>
  )
}

export default App
