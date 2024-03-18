import { useState, useEffect } from 'react';
import BaseTitle from "../../components/BaseTitle";
import Table from '../../components/Table';
import OrangeButton from "../../components/OrangeButton";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Erro ao buscar clientes: ', error);
      }
    };

    fetchCustomers();

    // Clean-up function if needed
    // return () => {
    //   cleanup code...
    // };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="ml-40 flex flex-col" style={{ marginTop: "100px" }}>
      <BaseTitle />
      <div className="mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-gray-list">Listagem de usuários</h1>
          <p className='text-gray-text'>Escolha um cliente para visualizar os detalhes</p>
        </div>
        <div style={{ marginRight: "250px" }}>
          <OrangeButton to='/customers/criar' text='Novo cliente'/>
        </div>
      </div>
      <Table customers={customers} />
    </div>
  );
}

export default Customers;
