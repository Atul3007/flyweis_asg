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
      <div className="register">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
      
          <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <div style={{display:"grid",justifyContent:"space-between"}}>
            <div>
            </div>
            <div>
            <button type="submit" className="btn btn-primary" style={{marginLeft:70,marginTop:25}}>
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
