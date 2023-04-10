import "./AdminDashboardMain.css";
import FeaturedInfo from "./FeaturedInfo";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";

function AdminDashboardMain() {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 200,
    },
    {
      name: "Mar",
      "Active User": 500,
    },
    {
      name: "Apr",
      "Active User": 1000,
    },
    {
      name: "May",
      "Active User": 2000,
    },
    {
      name: "Jun",
      "Active User": 0,
    },
    {
      name: "Jul",
      "Active User": 90,
    },
    {
      name: "Agu",
      "Active User": 300,
    },
    {
      name: "Spe",
      "Active User": 980,
    },
    {
      name: "Oct",
      "Active User": 290,
    },
    {
      name: "Nov",
      "Active User": 100,
    },
    {
      name: "Dec",
      "Active User": 9000,
    },
  ];
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <div className="chart">
        <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            {/* <YAxis></YAxis> */}
            <Line type="monotone" dataKey="Active User" stroke="#5550bd"></Line>
            <Tooltip></Tooltip>
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray={"5"}
            ></CartesianGrid>
            <Legend></Legend>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="homeWidgets">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}
export default AdminDashboardMain;
