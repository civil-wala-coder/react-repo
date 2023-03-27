import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = (props) => {

    const [users,setUsers] =useState([])

    useEffect(()=>{
        loadUsers();
    },[])
 
    const loadUsers= async ()=>{
        const result = await axios.get("http://localhost:8080/spring/react/users");
        setUsers(result.data);  
    }

  return (
    <div className="container">
        <div className="py-4">

        <table class="table border shadow ">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   
   {

        users.map((user,index)=>(

        <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-primary mx-2">View</button>
            <button className="btn btn-outline-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2">Delete</button>
          </td>
      </tr>

        ))

   }

  </tbody>
</table>

        </div>
    </div>
  )
}
