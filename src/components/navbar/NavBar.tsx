import { Fragment, useState } from 'react';

import { links } from '../../types';

import BackDrop from '../ui/backdrop/BackDrop';
import NavMenu from './NavMenu';
import BurgerNav from '../ui/button/BurgerNav';
import SiteLogo from './SiteLogo';

const LINKS: links = [
  { label: 'Home', path: '/' },
  { label: 'Budget', path: '/budget' },
];

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function burgerHandler() {
    setMenuIsOpen((prevState) => !prevState);
  }

  return (
    <Fragment>
      <div className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <SiteLogo />
          <BurgerNav onClick={burgerHandler} />
          <NavMenu show={menuIsOpen} onClosing={burgerHandler} links={LINKS} />
        </div>
      </div>
      <BackDrop timeout={150} show={menuIsOpen} onClick={burgerHandler} />
    </Fragment>
  );
};

export default NavBar;
