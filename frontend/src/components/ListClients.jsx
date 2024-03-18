import Button from "./Button";
import BaseTitle from "./BaseTitle";
// import Table from "./Table";

function ListClients() {
  return (
    <div className="ml-40 flex flex-col" style={{ marginTop: "100px" }}>
      <BaseTitle />
      <div className="mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-gray-list">Listagem de usuários</h1>
          <p className='text-gray-text'>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <div style={{ marginRight: "250px" }}>
          <Button to='/api/v1/customers' text='Novo cliente' />
        </div>
      </div>
      {/* <Table /> */}
    </div>
  )
}

export default ListClients;
