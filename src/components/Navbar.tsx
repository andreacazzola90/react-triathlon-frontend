import { NavLink, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/registrazione">registrazione </NavLink>
      <NavLink to="/registrazionecompletata">registrazionecompletata</NavLink>
      <NavLink to="/profilo/:id">Profilo</NavLink>
    </nav>
  );
};

export default Navbar;
