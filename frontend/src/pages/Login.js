import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import "../index.css";
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
    <div className="container" >
    <div className="left-col" >
      <div style={{textAlign:"center",marginTop:"50%"}} >
        <h1>Lorem ipsum <br /> dolor sit <br /> amet consectetur <br /> es </h1>
      </div>
    </div>
      <div className="right-col" style={{margin:""}}>
        <div>
          <h4>Welcome Back!!!</h4>
          <h3>Sign in</h3>
          <button>Sign in with Google</button>
        </div>
        <h5>Or</h5>
        <form onSubmit={handleSubmit} style={{ marginTop:"20px" }}>
  <div className="mb-3">
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
      <button type="submit" className="btn btn-primary" style={{ marginTop: '15px',marginLeft:"150px" }}>
        Login
      </button>
    </div>
  </div>
</form>
      </div>
    </div>
  );
};

export default Login;
