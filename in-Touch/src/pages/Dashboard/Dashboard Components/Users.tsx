
import React, { useEffect, useState } from 'react';
import { Form, Pagination, Table } from 'react-bootstrap';
import '../Dashboard.css';
import { TUser } from '../../../types/types';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';
import swal from "sweetalert";

export const ActiveUsers = (props:any) => {
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
  }, [token,data]);


 
  const handleDelete = (id:number) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://localhost:44386/api/Users/${id}`,{
          headers: {
            Authorization: `Bearer ${props.token}`,
          }
        })
          .then(() => {
            swal("Poof! The user has been deleted!", {
              icon: "success",
            });
          })
          .catch((error) => {
            swal("Oops! Something went wrong.", error.message, "error");
          });
      } else {
        swal("User is safe!");
      }
    });
  };

  const handleLockUnlock = (id:number, isLocked:boolean) => {
    if(isLocked){
      swal({
        title: "Are you sure?",
        text: "Once unlocked, only you will be able to lock this account again!",
        icon: "warning",
        buttons: ["Cancel", "Unlock"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.put( `https://localhost:44386/api/Users/unlock-account?userId=${id}`,{},{
            headers: {
              Authorization: `Bearer ${props.token}`,
            }
          })
            .then(() => {
              swal("Poof! The user has been unlocked!", {
                icon: "success",
              });
            })
            .catch((error) => {
              swal("Oops! Something went wrong.", error.message, "error");
            });
        } else {
          swal("User is safely locked!");
        }
      });
    }else{
      swal({
        title: "Are you sure?",
        text: "Once locked, only you will be able to unlock this account again!",
        icon: "warning",
        buttons: ["Cancel", "Lock"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.put( `https://localhost:44386/api/Users/lock-account?userId=${id}`,{},{
            headers: {
              Authorization: `Bearer ${props.token}`,
            }
          })
            .then(() => {
              swal("Poof! The user has been locked!", {
                icon: "success",
              });
            })
            .catch((error) => {
              swal("Oops! Something went wrong.", error.message, "error");
            });
        } else {
          swal("User is safely unlocked!");
        }
      });
    }
    
  };


  const columns = [
    {
      name: 'Id',
      selector: (row:any) => row.id,
      sortable: true
    },
    {
      name: 'First Name',
      selector: (row:any) => row.firstName,
      sortable: true
    },
    {
      name: 'Last Name',
      selector: (row:any) => row.lastName,
      sortable: true
    },
    {
      name: 'Username',
      selector: (row:any) => row.username,
      sortable: true
    },
    {
      name: 'Email',
      selector: (row:any) => row.email,
      sortable: false
    }
    ,
    {
      name: 'Manage',
      selector: (row:any) => row.isLocked,
      sortable: true,
      cell: (row:any) => (
        <div>
          <Button variant={row.isLocked?'outline-primary':'primary'} onClick={() => handleLockUnlock(row.id, row.isLocked)}>
            {row.isLocked ? 'Unlock' : 'Lock'}
          </Button>
        </div>
      ),
      sortFunc: (a:any, b:any, order:any, dataField:any) => {
        const aValue = a ? 1 : 0;
        const bValue = b ? 1 : 0;
        if (order === 'asc') {
          return aValue - bValue;
        } else {
          return bValue - aValue; 
        }
      },
    },
    {
      name: 'Actions',
      cell: (row:any) => (
        <div>
          <Button variant='danger' onClick={() => handleDelete(row.id)}>Delete</Button>
        </div>
      )
    }
  ];



  return (
    <div>
      <div className='p-5'>
        <DataTable
          title="Users"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
         
        />
      </div>
    </div>
  );
};