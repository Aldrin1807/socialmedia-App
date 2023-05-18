import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../Dashboard.css';
import { TUser } from '../../../types/types';
import axios from "axios";

export const Users = () => {
  const token = sessionStorage.getItem("token");
  const apiUrl = `https://localhost:44386/api/Users/get-users`;
  const [data, setData] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      <div>Users</div>
      <div className='p-5'>  
        <Table striped bordered hover responsive="md">  
          <thead>  
            <tr>  
              <th>Id</th>  
              <th>First Name</th>  
              <th>Last Name</th>  
              <th>Username</th>  
              <th>Email</th>  
              <th>Role</th>  
              <th>Manage</th>  
            </tr>  
          </thead>  
          <tbody>  
            {data.map(({ id, firstName, lastName, username, email, role }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td className="tablees"></td>
              </tr>
            ))} 
          </tbody>  
        </Table>  
      </div> 
    </div>
  );
};