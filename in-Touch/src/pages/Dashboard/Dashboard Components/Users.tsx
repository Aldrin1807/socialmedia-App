
import React, { useEffect, useState } from 'react';
import { Form, Pagination, Table } from 'react-bootstrap';
import '../Dashboard.css';
import { TUser } from '../../../types/types';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';

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
  }, [token]);



 
  const handleDelete = (id:number) => {
    // Implement the delete logic here
    console.log(`Delete user with id: ${id}`);
  };

  const handleLockUnlock = (id:number, isLocked:boolean) => {
    // Implement the lock/unlock logic here
    console.log(`Toggle lock/unlock for user with id: ${id}, isLocked: ${isLocked}`);
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