import { Fragment, useState } from 'react';
import { useAppSelector } from '../../hooks/useReduxTS';

import BackDrop from '../ui/backdrop/BackDrop';
import NavMenu from './NavMenu';
import BurgerNav from '../ui/button/BurgerNav';
import SiteLogo from './SiteLogo';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const links = useAppSelector(state => state.navigation.links);

  function burgerHandler() {
    setMenuIsOpen((prevState) => !prevState);
  }

  function closingHandler() {
    setMenuIsOpen(false);
  }

  return (
    <Fragment>
      <div className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <SiteLogo />
          <BurgerNav onClick={burgerHandler} />
          <NavMenu show={menuIsOpen} onClosing={closingHandler} links={links} />
        </div>
      </div>
      <BackDrop timeout={150} show={menuIsOpen} onClick={closingHandler} />
    </Fragment>
  );
};

export default NavBar;
