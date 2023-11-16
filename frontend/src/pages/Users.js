import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from './Menu';
import Header from "./Header";

const Users = () => {
  const [users, setUsers] = useState([]);
  const auth = JSON.parse(localStorage.getItem("auth"));

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`, // Include your authorization token
      "Content-Type": "application/json", // Specify the content type
    },
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/users",
        config
      );
      setUsers(data.data);
     // console.log(users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

// -------delete--------

const handleDelete=async()=>{
  try {
    const {data}=await axios.delete("")
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    getUsers();
  }, []);

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
        <h1>All Users</h1>
      <div className="border-shadow" style={{border:0,margin:"15px"}}>
        <table className="table">
          <thead>
            <tr>
              <td  style={{color:"grey"}}> <p> User Name </p></td>
              <td  style={{color:"grey"}}> <p> E Mail </p></td>
              <td  style={{color:"grey"}}> <p>Phone No.</p> </td>
              <td  style={{color:"grey"}}> <p>Total Consultants</p> </td>
            </tr>
          </thead>
          <tbody>
  {users.map((user, index) => (
    <tr key={index}>
      <td style={{color:"gray"}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          {user.firstName} {user.lastName}
        </div>
      </td>
      <td style={{color:"gray"}}>{user.email}</td>
      <td style={{color:"gray"}}>{user.phone}</td>
      <td style={{color:"gray"}}>32</td>
      <td>
        <span
          className="edit"
          style={{ cursor: "pointer", marginRight: "10px" }}
          // onClick={() => handleEdit(user.id)}
        >
          ✏️
        </span>
        <span
          className="delete"
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(user.id)}
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
    </div>
    
    </>
  );
};

export default Users;
