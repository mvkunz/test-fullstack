import Button from "../../components/Button";
import BaseTitle from "../../components/BaseTitle";
import Table from '../../components/Table';

function Customers() {
  return (
    <div className="ml-40 flex flex-col" style={{ marginTop: "100px" }}>
      <BaseTitle />
      <div className="mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-gray-list">Listagem de usuários</h1>
          <p className='text-gray-text'>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <div style={{ marginRight: "250px" }}>
          <Button to='/customers/create' text='Novo cliente' initialColor="custom-orange"/>
        </div>
      </div>
      <Table customers={[{
        id: 1,
        name: 'Fulano',
        cpf: '123.456.789-00',
        email: 'ola@teste.com',
        telefone: '1234568',
        status: 'ACTIVE'
      },
      {
        id: 2,
        name: 'Ciclano',
        cpf: '123.456.789-00',
        email: 'ola@teste.com',
        telefone: '1234568',
        status: 'INACTIVE',
      },
      {
        id: 3,
        name: 'Beltrano',
        cpf: '123.456.789-00',
        email: 'ola@teste.com',
        telefone: '1234568',
        status: 'PENDING',
      },
      {
        id: 3,
        name: 'Beltrano',
        cpf: '123.456.789-00',
        email: 'ola@teste.com',
        telefone: '1234568',
        status: 'DISABLED',
      }
      ]} />
    </div>
  )
}

export default Customers;
