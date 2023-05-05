import { AdminDashboard } from "../../pages/AdminDashboard/AdminDashboard";
import "./userList.css";
import Table from "react-bootstrap/Table";
import SideBar from "./SideBar";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import {TUser} from '../../types/types'

function UserList() {
  const apiUrl = "https://localhost:44386/api/Users/get-users";
  const [data, setData] = useState<TUser[]|[]>([]);


  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleDelete = (id : number) => {
    let newdata=structuredClone(data)
    let newdata1 = newdata.filter((user: { id: any; }) => user.id !== id);
    console.log(newdata1)
    axios.delete(`https://localhost:44386/api/Users/${id}`)
      .then((response) => {
        
          setData(newdata1);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userList">
      <div className="dashboard">
        <SideBar />
      </div>
      <div className="table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="id">id</th>
              <th className="firstname">First Name</th>
              <th className="lastname">Last Name</th>
              <th className="username">Username</th>
              <th className="email">Email</th>
              <th className="role">Role</th>
              <th className="manag">Manage</th>
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
                <td className="tablees">
                  
                  <button type="button" className="btn btn-success">Edit </button> 
                  <button type="button" className="btn btn-danger" onClick={
                    ()=>{handleDelete(id)}
                  }>
                   Delete  
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UserList;