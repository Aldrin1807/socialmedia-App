import { FiUsers } from "react-icons/fi"
import { MdReportGmailerrorred, MdReportProblem } from "react-icons/md";
import { TfiComments } from "react-icons/tfi";
import { TUser } from '../../../types/types';

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BiMessageRoundedDetail } from "react-icons/bi";


const HomeDashboard = (props:any) => {
   
  const apiUrl = `https://localhost:44386/api/Users/dashboard-analytics`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: `Bearer ${props.token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (props.token) {
      fetchData();
    }
  }, [props.token]);


  
  return (
    <>
    <div className="row">
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Users Registered</p>
            <FiUsers className="icons" />
            <hr />
            <p className="h2 text-thin">{data[0]}</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Posts made</p>
            <TfiComments className="icons" />
            <hr />
            <p className="h2 text-thin">{data[1]}</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Messages</p>
            <BiMessageRoundedDetail className="icons" />
            <hr />
            <p className="h2 text-thin">{data[2]}</p>
           
        </div>
        </div>
    </div>        
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Reports</p>
            
            <MdReportGmailerrorred className="icons" />
            <hr />
            <p className="h2 text-thin">{data[3]}</p>
           
        </div>
        </div>
    </div>
    
    </div>
    </>
  )
}

export default HomeDashboard;