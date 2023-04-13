import "./AdminDashboardMain.css";
import { MdVisibility } from "react-icons/md";
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type}</button>;
  };
  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>

            <th className="widgetLgTh">Amount</th>

            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">21 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">21 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">21 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined"></Button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan carol</span>
            </td>
            <td className="widgetLgDate">21 June 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending"></Button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default WidgetLg;
