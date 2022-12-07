import { NavLink } from 'react-router-dom';

import imgLogo from '../../static/img/logo192.png';

const SiteLogo = () => {
  return (
    <NavLink to="/" className="navbar-brand">
      <img src={imgLogo} alt="dollar sign" width="30" height="30" />
    </NavLink>
  );
};

export default SiteLogo;
