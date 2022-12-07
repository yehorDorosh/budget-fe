import React from 'react';
import { NavLink } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

import { links } from '../../types';

interface NavMenuProps {
  show: boolean,
  onClosing(): void,
  links: links,
};

const NavMenu: React.FC<NavMenuProps> = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames={{
        enter: 'showing',
        enterActive: 'showing',
        enterDone: 'show',
        exit: 'hiding',
        exitActive: 'hiding',
        exitDone: '',
      }}
    >
      <div
        id="offcanvasNavbar"
        className="offcanvas bg-primary offcanvas-end"
        tabIndex={-1}
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={props.onClosing}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              props.links.map((link, i) => (
                <li key={i + link.path} className="nav-item">
                  <NavLink to={link.path} className="nav-link">
                    { link.label }
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

export default NavMenu;
