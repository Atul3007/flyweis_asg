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
            src={"data:image/jpeg;base64,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"}
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
