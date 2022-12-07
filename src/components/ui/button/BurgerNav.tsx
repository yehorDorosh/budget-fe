import React from 'react';

interface BurgerNavProps {
  onClick(): void;
}

const BurgerNav: React.FC<BurgerNavProps> = (props) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="offcanvasNavbar"
      onClick={props.onClick}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default BurgerNav;
