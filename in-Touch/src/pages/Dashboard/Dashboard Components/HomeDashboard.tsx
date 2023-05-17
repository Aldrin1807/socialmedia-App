import { FiUsers } from "react-icons/fi"
import { MdReportGmailerrorred, MdReportProblem } from "react-icons/md";
import { TfiComments } from "react-icons/tfi";

const HomeDashboard = () => {
  return (
    <>
    <div className="row">
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Users Registered</p>
            <FiUsers className="icons" />
            <hr />
            <p className="h2 text-thin">254,487</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Posts made</p>
            <TfiComments className="icons" />
            <hr />
            <p className="h2 text-thin">873</p>
          
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">Reports</p>
            
            <MdReportGmailerrorred className="icons" />
            <hr />
            <p className="h2 text-thin">2,423</p>
           
        </div>
        </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
            <p className="text-uppercase mar-btm text-sm">suspicious</p>
            <MdReportProblem className="icons" />
            <hr />
            <p className="h2 text-thin">7,428</p>
           
        </div>
        </div>
    </div>        
    </div>
    </>
  )
}

export default HomeDashboard