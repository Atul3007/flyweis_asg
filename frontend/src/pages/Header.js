import React from 'react';
import "../index.css";

const Header = () => {
  return (
    <header className="header"  style={{height:"60px"}}>
      <div className="header-left">
        <div className="admin-info"style={{marginLeft:"30px"}}>
          <img
            src="data:image/jpeg;base64,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" 
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
        <div style={{border:".5px gray solid", margin:"20px",display:"flex"}}>
      <div className="icon" >🔍</div> 
        <input style={{width:"400px",border:0}}
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        </div>
        <span className="icon1">⚙️</span> 
        <span className="icon1">🕒</span> 
      </div>
    </header>
  );
};

export default Header;
