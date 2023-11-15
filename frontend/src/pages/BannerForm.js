import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

const BannerForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const [bannerContext, setBannerContext] = useState("");
  const [bannerCover, setBannerCover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      title,
      date,
      urlLink,
      bannerContext,
      bannerCover,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerCover(file);
  };

  return (
    <>
      <Header/>
      <div className="row" style={{ margin: "20px" }}>
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-9" style={{marginTop:"30px"}}>
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
                  type="url"
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
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-control-file"
                id="bannerCover"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BannerForm;
