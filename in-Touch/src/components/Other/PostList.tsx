import "./PostList.css";
import { AdminDashboard } from "../../pages/AdminDashboard/AdminDashboard";
import SideBar from "./SideBar";
import Table from "react-bootstrap/Table";




function PostList() {

return(
    <div className="userList">
      <div className="dashboard">
      <SideBar></SideBar>
      </div>
      <div className="table"> 
      <Table striped bordered hover>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Content</th>
      <th scope="col">UserId</th>
      <th scope="col">ImageUrl</th>
      <th scope="col">PostDate</th>
      <th scope="col">ImagePath</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@twitter</td>
    </tr>
  </tbody>

        </Table>
  </div>
      </div>

);

}
export default PostList;