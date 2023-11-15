import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Menu from './Menu';
import Header from './Header';
import { useNavigate,useLocation } from "react-router-dom";

const Banners = () => {

  const [banner,setBanner]=useState([]);
  const navigate=useNavigate();
  const getBanner=async()=>{
    try {
      const {data}=await axios.get("https://pear-cloudy-chipmunk.cyclic.app/api/all-banner");
      setBanner(data.bannerbooks);
      console.log(banner)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete=async(id)=>{
    try {
      console.log(banner)
      const {data}=await axios.delete(`https://pear-cloudy-chipmunk.cyclic.app/api/delete/${id}`)
       getBanner();
       alert(data.message);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getBanner();
  },[])
    
  return (
   <>
   <Header/>
     <div className="row" style={{ margin: "20px" }}>
         <div className="col-md-3">
          <Menu/>
        </div>
        <div className="col-md-9">
          <div style={{display:'flex',justifyContent:"space-between"}}>
          <h1>Banners</h1>
          <button className='btn btn-primary' style={{width:"170px"}} onClick={()=>{navigate("/create-banner")}}>Create Banner</button>
          </div>
   <div className="border-shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Banner Image</th>
              <th scope="col">Title</th>
              <th scope="col">Url Link</th>
              <th scope="col">Banner Description</th>
            </tr>
          </thead>
          <tbody>
            {banner.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={user.image}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                  </div>
                </td>
                <td>{user.title}</td>
                <td>{user.linkUrl}</td>
                <td>{user.bannerInfo}</td>
                <td>
                  <span
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={()=>{navigate(`/edit-banner/${user._id}`)}}
                  >
                    ✏️
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                     onClick={() => handleDelete(user._id)}
                  >
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
   </>
  )
}

export default Banners