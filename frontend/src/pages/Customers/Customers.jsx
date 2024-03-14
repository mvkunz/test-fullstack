import { NavLink } from 'react-router-dom';
// import Table from "./Table";

function ListClients(){
  return(
    <div>
      <h1>Painel de clientes</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <div>
        <h5>Listagem de usuários</h5>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <button
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          <NavLink to='/clients/create'>
            Novo cliente
          </NavLink>
        </button>
      </div>
      {/* <Table /> */}
    </div>
  )
}

export default ListClients;
