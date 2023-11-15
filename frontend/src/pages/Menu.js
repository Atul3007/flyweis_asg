import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div classname="text-center">
        <h1>Admin</h1>
      <div className="list-group">
        <NavLink
          to="/users"
          className="list-group-item list-group-item-action"
        >
          Users
        </NavLink>
        <NavLink
          to="/banners"
          className="list-group-item list-group-item-action"
        >
            Banners
        </NavLink>
      
      </div>
    </div>
  );
};

export default Menu;
