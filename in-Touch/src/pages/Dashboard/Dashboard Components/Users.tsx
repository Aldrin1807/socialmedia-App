
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../Dashboard.css';
import { TUser } from '../../../types/types';
import axios from "axios";
import Button from 'react-bootstrap/Button';

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



  const handleDelete = (id: number) => {
    const newData = data.filter((user) => user.id !== id);
    console.log(newData);
  
    axios.delete(`https://localhost:44386/api/Users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  

  return (
    <div>
      <div>Users </div>
      <div className='p-5'>
        <Table striped bordered hover responsive="md">
          <thead>
            <tr className='tabelat'>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th className='manage'>Manage</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, firstName, lastName, username, email, role }) => (
              <tr key={id} className="tables">
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td className="tablees">
                  <Button variant="success" className='Edit'>Edit</Button>{' '}
                  <Button variant="danger" className='Delete' onClick={() => handleDelete(id)} >Delete</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};