import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

function OrangeButton({ to, text, width }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink to={to} className="inline-block" style={{ width: width }}>
      <button
        type="submit"
        style={{ width: "100%" }}
        className={`focus:outline-none text-custom-orange bg-white border border-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10 dark:focus:ring-yellow-900
        ${isHovered ? 'hover:text-white hover:bg-custom-orange hover:border-custom-orange' : 'hover:text-custom-orange hover:bg-white hover:border-custom-orange'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
    </NavLink>
  );
}

OrangeButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default OrangeButton;
