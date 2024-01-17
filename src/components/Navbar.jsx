import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/registrazione">registrazione </NavLink>
      <NavLink to="/registrazionecompletata">registrazionecompletata</NavLink>
      {user && (
        <>
          <NavLink to="/dashboard">| Dashboard </NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
