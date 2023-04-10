import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import "./AdminDashboardMain.css";
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            -11.4{" "}
            <BiTrendingDown className="featuredIcon negative"></BiTrendingDown>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            -1.4{" "}
            <BiTrendingDown className="featuredIcon negative"></BiTrendingDown>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            +4.52 <BiTrendingUp className="featuredIcon"></BiTrendingUp>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
export default FeaturedInfo;
