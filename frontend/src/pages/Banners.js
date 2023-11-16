import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";

const Banners = () => {
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();
  const getBanner = async () => {
    try {
      const { data } = await axios.get(
        "https://pear-cloudy-chipmunk.cyclic.app/api/all-banner"
      );
      setBanner(data.bannerbooks);
      console.log(banner);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(banner);
      const { data } = await axios.delete(
        `https://pear-cloudy-chipmunk.cyclic.app/api/delete/${id}`
      );
      getBanner();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      <div className="user-container">
        <div className="col-left">
          <Menu />
        </div>
        <div className="col-right">
          <div className="col-md-3">
            <Header />
          </div>
          <hr />
          <div className="col-md-12">
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h1 style={{marginLeft:"30px"}}>Banners</h1>
            <button
              className="btn btn-primary"
              style={{ width: "200px",height:"40px" }}
              onClick={() => {
                navigate("/create-banner");
              }}
            >
              Create Banner
            </button>
            </div>
            
          </div>
          <div className="border-shadow" style={{border:0,margin:"15px"}}>
            <table className="table">
              <thead>
                <tr>
                  <td  style={{color:"grey"}}>Banner Image</td>
                  <td  style={{color:"grey"}}>Title</td>
                  <td  style={{color:"grey"}}>Url Link</td>
                  <td  style={{color:"grey"}}>Banner Description</td>
                </tr>
              </thead>
              <tbody>
                {banner.map((user, index) => (
                  <tr key={index}>
                    <td style={{color:"gray"}}>
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
                    <td style={{color:"gray"}}>{user.title}</td>
                    <td style={{color:"gray"}}>{user.linkUrl}</td>
                    <td style={{color:"gray"}}>{user.bannerInfo}</td>
                    <td style={{color:"gray"}}>
                      <span
                      className="Edit"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => {
                          navigate(`/edit-banner/${user._id}`);
                        }}
                      >
                        ✏️
                      </span>
                      <span
                        className="Delete"
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
  );
};

export default Banners;
