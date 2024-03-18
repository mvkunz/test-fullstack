import PropTypes from "prop-types";

function DropdownStatus({ status, setStatus }) {

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="relative">
      <select
        value={status}
        onChange={handleChange}
        className="form-select flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-text bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 w-60 h-15 p-2.5"
      >
        <option value="" disabled>Status</option>
        <option value="ACTIVE">Ativo</option>
        <option value="INACTIVE">Inativo</option>
        <option value="PENDING">Aguardando ativação</option>
        <option value="DISABLED">Desativado</option>
      </select>
    </div>
  );
}

DropdownStatus.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
}

export default DropdownStatus;
