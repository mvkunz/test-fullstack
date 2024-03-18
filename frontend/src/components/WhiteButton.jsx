import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function WhiteButton({ to, text }) {
  return(
    <button
    type="submit"
    className="text-custom-orange bg-white border border-custom-orange focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-15 w-75" style={{ width: "115px", height: "40px" }}>
      <NavLink to={to}>
        {text}
      </NavLink>
    </button>
  )
}

WhiteButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default WhiteButton;