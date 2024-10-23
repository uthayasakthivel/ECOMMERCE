import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Exclusive</h2>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">SignUp</Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
