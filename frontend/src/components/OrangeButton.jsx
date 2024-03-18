import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

function OrangeButton({ to, text, width, click }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ButtonContent = (
    <button
      type="submit"
      style={{ width: width }}
      className={`focus:outline-none text-white bg-custom-orange border border-custom-orange font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10 dark:focus:ring-yellow-900
      ${isHovered ? 'hover:text-custom-orange hover:bg-white hover:border-custom-orange' : 'hover:text-custom-orange hover:bg-white hover:border-custom-orange'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={click}
    >
      {text}
    </button>
  );

  return to ? (
    <NavLink to={to} className="inline-block w-full h-full">
      {ButtonContent}
    </NavLink>
  ) : (
    ButtonContent
  );
}

OrangeButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  click: PropTypes.func,
};

export default OrangeButton;