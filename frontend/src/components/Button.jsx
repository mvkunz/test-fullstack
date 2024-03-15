import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Button({ to, text, initialColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState(initialColor || 'custom-orange');

  console.log(currentColor);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentColor('custom-orange');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentColor(initialColor || 'custom-orange');
  };

  return (
    <button
      type="submit"
      className={`focus:outline-none text-${isHovered ? 'white' : 'custom-orange'} bg-${isHovered ? 'custom-orange' : 'white'} hover:text-${isHovered ? 'white' : 'custom-orange'} hover:bg-${isHovered ? 'white' : 'custom-orange'} border border-${isHovered ? 'custom-orange' : 'white'} focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to={to} className="inline-block w-full h-full">
        {text}
      </NavLink>
    </button>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  initialColor: PropTypes.oneOf(['custom-orange', 'white']),
};

export default Button;
