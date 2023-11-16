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
                          src={"data:image/jpeg;base64,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"}
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
