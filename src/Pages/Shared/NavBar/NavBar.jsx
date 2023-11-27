import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useShop from "../../../hooks/useShop";

const NavBar = () => {
  const [shop] = useShop()
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {});
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/shop/dessert">Shop</Link>
      </li>
      <Link to='/sideNavBar' className="btn">
        Inbox
        <div className="badge badge-secondary">+{shop.length}</div>
      </Link>
      {user ? (
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-black text-white fixed z-10 max-w-screen-xl bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
    </div>
  );
};

export default NavBar;
