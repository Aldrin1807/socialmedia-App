import { AdminDashboard } from "../../pages/AdminDashboard/AdminDashboard";


import "./userList.css";
import Table from 'react-bootstrap/Table';
import SideBar from "./SideBar";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";




export default function UserList() {
  
  return (
   
     <div className="userList">
      <div className="dashboard"><SideBar></SideBar></div> 
<div className="table"><Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role</th>
          <td>Manage</td>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td  className="tablees"><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td ><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit></td>
         
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td ><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit></td>

        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td ><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit></td>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td ><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit></td>

        </tr>
        <tr>
          <td>3</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td ><AiFillDelete className="delete-button"></AiFillDelete><AiFillEdit className="edit-button"></AiFillEdit ></td>

        </tr>
      </tbody>
    </Table>
</div> 
</div>
    
    
  );
}