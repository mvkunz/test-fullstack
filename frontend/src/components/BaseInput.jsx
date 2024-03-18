import PropTypes from 'prop-types';

function BaseInput({ type, id, placeholder, value, onChange }) {
  return(
    <div className="mb-6">
      <label htmlFor={ id }
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="bg-white border border-custom-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-15 p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  )
}

BaseInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BaseInput;