import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function burgerHandler() {
    setMenuIsOpen((prevState) => !prevState);
  }

  return (
    <Fragment>
      <div className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src="logo192.png" alt="dollar sign" width="30" height="30" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="offcanvasNavbar"
            onClick={burgerHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <CSSTransition
            in={menuIsOpen}
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
                  onClick={burgerHandler}
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/budget" className="nav-link">
                      Budget page
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={menuIsOpen}
        timeout={150}
        classNames={{
          enter: 'showing',
          enterActive: 'showing',
          enterDone: 'show',
          exit: 'hiding',
          exitActive: 'hiding',
          exitDone: '',
        }}
      >
        <div className="offcanvas-backdrop fade" onClick={burgerHandler} />
      </CSSTransition>
    </Fragment>
  );
};

export default NavBar;
