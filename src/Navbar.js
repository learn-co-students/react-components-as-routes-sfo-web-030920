import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => (
  <div>
    {/* set exact so it knows to only set activeStyle when route is deeply equal to link  */}
    <NavLink
      to="/"
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */ activeStyle={{ background: "darkblue" }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Login
    </NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{ background: "darkblue" }}
    >
      Messages
    </NavLink>
  </div>
);

export default NavBar;
