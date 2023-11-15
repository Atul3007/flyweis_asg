import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
//import { useAuth } from "../../context/Auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth,setAuth]=useAuth()

  const navigate=useNavigate();
  const location=useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        email,
        password
      };
      //console.log({obj})
      const {data} = await axios.post("https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/login", obj);
     // console.log(data.accessToken)
    //  setAuth({...auth,
    //          user:res.data.user,
    //          token:res.data.token})
        localStorage.setItem("auth",JSON.stringify(data.accessToken));      
        alert("Login successful")
       navigate(location.state||"/users")
    } catch (error) {
      alert("Error in logging");
    }
  };

  return (
    <>
      <div className="register" style={{margin:"100px"}}>
        <h3 style={{textAlign:"center"}}>Login as a admin</h3>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px',marginLeft:"350px",marginTop:"50px" }}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Enter your password"
      required
    />
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: '15px',marginLeft:"100px" }}>
        Submit
      </button>
    </div>
  </div>
</form>

      </div>
    </>
  );
};

export default Login;
