import React from 'react';
import "../index.css";

const Header = () => {
  return (
    <header className="header"  style={{height:"100px"}}>
      <div className="header-left">
        <div className="admin-info"style={{marginLeft:"30px"}}>
          <img
            src="path_to_dummy_image.jpg" 
            alt="Admin"
            className="admin-image"
          />
          <div className='row'>
          <span className="admin-name">Admin Name</span>
          <span>Lorem Ipsum</span>
          </div>
        </div>
      </div>
      <div className="header-right">
        <input style={{width:"400px"}}
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <span className="icon">🔍</span> 
        <span className="icon">⚙️</span> 
        <span className="icon">🕒</span> 
      </div>
    </header>
  );
};

export default Header;
