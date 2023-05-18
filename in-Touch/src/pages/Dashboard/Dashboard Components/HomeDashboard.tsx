import { FiUsers } from "react-icons/fi"
import { MdReportGmailerrorred, MdReportProblem } from "react-icons/md";
import { TfiComments } from "react-icons/tfi";
import { TUser } from '../../../types/types';

import React, { useEffect, useState } from 'react';
import axios from "axios";


const HomeDashboard = () => {
   

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
    <>
    <div className="row">
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Users Registered</p>
            <FiUsers className="icons" />
            <hr />
            <p className="h2 text-thin">{data.length}</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Posts made</p>
            <TfiComments className="icons" />
            <hr />
            <p className="h2 text-thin">20</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Reports</p>
            
            <MdReportGmailerrorred className="icons" />
            <hr />
            <p className="h2 text-thin">5</p>
           
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">suspicious</p>
            <MdReportProblem className="icons" />
            <hr />
            <p className="h2 text-thin">2</p>
           
        </div>
        </div>
    </div>        
    </div>
    </>
  )
}

export default HomeDashboard;