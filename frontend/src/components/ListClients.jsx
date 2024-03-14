import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';

function ListClients(){
  return(
    <div>
      <Navbar />
      <h1>Painel de clientes</h1>
      <div>
        <h5>Listagem de usuários</h5>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
            <NavLink to='/create'>
              Novo cliente
            </NavLink>
          </button>
      </div>
    </div>
  )
}

export default ListClients;
