import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div classname="text-center">
        <h1 style={{margin:"50px"}} >Admin</h1>
      <div style={{padding:"5px"}}>
        <NavLink style={{margin:"10px",marginLeft:"30px"}}
          to="/users"
          className="list-group-item list-group-item-action"
        >
          <h5>Users</h5>
        </NavLink>
        <NavLink style={{margin:"10px",marginLeft:"30px"}}
          to="/banners"
          className="list-group-item list-group-item-action"
        >
            <h5>Banners</h5>
        </NavLink>
       
      </div>
    </div>
  );
};

export default Menu;
