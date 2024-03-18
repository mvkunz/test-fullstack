import PropTypes from "prop-types";

function DropdownStatus({ status, setStatus }) {

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      className="form-select className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-text bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 w-60 h-15 p-2.5 ${isOpen ? 'bg-blue-500' : ''}`}"
    >
      <svg className="w-2.5 h-2.5 ms-2.5" style={{ marginLeft: "150px" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
      <option value="ativo">Ativo</option>
      <option value="inativo">Inativo</option>
      <option value="aguardando">Aguardando ativação</option>
      <option value="desativado">Desativado</option>
    </select>
  );
}

DropdownStatus.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
}

export default DropdownStatus;
