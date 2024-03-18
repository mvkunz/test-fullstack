import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Table({ customers }) {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/customers/${id}`);
  }

  const parseStatus = (status) => {
    if (status === 'ACTIVE') {
      return '🟢 Ativo';
    } else if (status === 'INACTIVE') {
      return '🔴 Inativo';
    } else if (status === 'PENDING') {
      return '🟡 Aguardando ativação';
    } else {
      return '⚪ Desativado';
    }
  }

  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.id} className='border border-gray-list mb-8 p-3 flex items-center mt-10' style={{ width: "1020px" }}>
          <div className="mr-4 ml-4 text-gray-customers">
            <p><strong>{customer.name}</strong></p>
            <p>{customer.email}</p>
          </div>
          <div className="text-gray-customers" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <p><strong>{customer.cpf}</strong></p>
            <p>{customer.phone}</p>
          </div>
          <div className="flex items-center text-gray-customers" style={{ marginLeft: "auto" }}>
            <p>{parseStatus(customer.status)}</p>
          </div>
          <div className="flex items-center text-gray-customers" style={{ marginLeft: "auto" }}>
            <button onClick={() => handleEdit(customer.id)} >
              <Button width={130} text='Editar' />
            </button>
          </div>
        </div>
      ))}
      <p>Exibindo {customers.length} clientes</p>
    </div>
  )
}

Table.propTypes = {
  customers: PropTypes.array.isRequired
};

export default Table;
