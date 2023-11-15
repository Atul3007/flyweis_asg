import axios from 'axios'
import React,{ useEffect, useState } from 'react'

const Users = () => {
  const [users,setUsers]=useState([]);
  const auth = JSON.parse(localStorage.getItem("auth"));

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`, // Include your authorization token
      "Content-Type": "application/json", // Specify the content type
    },
  };
  
  const getUsers = async () => {
    try {
      const {data} = await axios.get("https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/users", config);
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  useEffect(() => {
    getUsers();
  }, [auth]);
  
  return (
    <div>
       <h1>All Users</h1>
          {users.map((user, index) => (
            <div className="border-shadow" key={index}>
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
                  <tr key={index}>
                    {/* <td>{index + 1}</td>
                    <td>{user}</td>
                    <td>{(user)}</td>
                    <td>{user}</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
    </div>
  )
}

export default Users