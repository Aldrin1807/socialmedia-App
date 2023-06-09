import React, { useEffect, useState } from "react";
import Reports from "./Reports";
import axios from "axios";

export const ReportedPosts = (props:any) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-intouch.azurewebsites.net/api/Reports/get-reports", {
        headers: {
          Authorization: `Bearer ${props.token}`
        }
      })
      .then((response: any) => {
        setReports(response.data);
      });
  }, [reports]);

  return (
    <div>
      {reports.length==0?(
        <h1 className="empty">No reported posts yet</h1>
      ):(
        reports.map((report: any) => (
          <Reports postId={report.postId} userId={report.userId} token={props.token}/>
        ))
      )}
      
    </div>
  );
};
