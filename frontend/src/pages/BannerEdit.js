import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BannerEdit = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const [bannerContext, setBannerContext] = useState("");
  const [bannerCover, setBannerCover] = useState(null);
  const navigate=useNavigate();

  const {id}=useParams();
console.log(id)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const obj = {
      title,
      date,
      linkUrl:urlLink,
      bannerInfo:bannerContext,
      imageUrl:bannerCover,
    };
   const {data}=await axios.put(`https://pear-cloudy-chipmunk.cyclic.app/api/update-banner/${id}`,obj);
   console.log(data)
   if(data){
    alert("Banner updated successfully!!!")
     navigate("/banners")
   }
  };

  return (
    <>
      <div className="user-container">
      <div className="col-left"><Menu/></div>
      <div className="col-right">
         <div className="col-md-3">
         <Header/>
        </div>
        <hr />
        <div className="col-md-12" >
            <h3 style={{textAlign:"center"}}>Edit Banner</h3>
          <form onSubmit={handleSubmit} className="banner-form">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Banner Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="title"
                placeholder="Enter banner title"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control"
                  id="date"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="urlLink" className="form-label">
                  URL Link
                </label>
                <input
                  type="text"
                  value={urlLink}
                  onChange={(e) => setUrlLink(e.target.value)}
                  className="form-control"
                  id="urlLink"
                  placeholder="Enter URL link"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bannerContext" className="form-label">
                Banner Context
              </label>
              <textarea
                value={bannerContext}
                onChange={(e) => setBannerContext(e.target.value)}
                className="form-control"
                id="bannerContext"
                placeholder="Enter banner context"
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bannerCover" className="form-label">
                Upload Banner Cover
              </label>
              <input
                type="text"
                value={bannerCover}
                onChange={(e) => setBannerCover(e.target.value)}
                className="form-control"
                placeholder="Enter banner image url"
                required
              />
            </div>
            <div style={{display:"flex",marginLeft:"300px"}}>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button type="submit" className="btn btn-outline">
              Cancel
            </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default BannerEdit;
