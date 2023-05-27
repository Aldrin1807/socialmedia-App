import React, { useEffect, useState } from "react";
import Reports from "./Reports";
import axios from "axios";

export const ReportedPosts = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44386/api/Reports/get-reports")
      .then((response: any) => {
        setReports(response.data);
      });
  }, [reports]);

  return (
    <div>
      {reports.map((report: any) => (
        <Reports postId={report.postId} userId={report.userId} />
      ))}
    </div>
  );
};
