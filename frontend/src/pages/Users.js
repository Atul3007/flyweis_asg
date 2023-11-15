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
    <Header/>
    <div className="row" style={{ margin: "20px" }}>
         <div className="col-md-3">
          <Menu/>
        </div>
        <div className="col-md-9">
        <h1>All Users</h1>
      <div className="border-shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">E Mail</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Total Consultants</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
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
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>32</td>
                <td>
                  <span
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    // onClick={() => handleEdit(user.id)}
                  >
                    ✏️
                  </span>
                  <span
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
    </>
  );
};

export default Users;
