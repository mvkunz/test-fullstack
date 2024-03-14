import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Table({ clients }) {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/clients/edit/${id}`);
  }

  return (
    <div>
      <table>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>CPF</th>
          </tr>
        </thead> */}
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{ client.name }</td>
              <td>{ client.cpf }</td>
              <td>{ client.email }</td>
              <td>{ client.telefone }</td>
              <td>{ client.status }</td>
              <td>
                <button
                  onClick={() => handleEdit(client.id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Exibindo X clientes</p>
    </div>
  )
}

Table.propTypes = {
  clients: PropTypes.array.isRequired
};

export default Table;
