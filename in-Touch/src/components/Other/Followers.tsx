import "./Suggested.css"
function Followers(){
    return(
           <>  <ul className="friend-list clearfix" id='lista'>
           <li>
               <a href="#">
                   <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                   <div className="friend-info">
                       <h4>Sancho Aldo</h4>
                       <p>392 friends</p>
                   </div>
               </a>
           </li>
           <li>
               <a href="#">
                   <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                   <div className="friend-info">
                       <h4>Jonty Augusto</h4>
                       <p>128 friends</p>
                   </div>
       
               </a>
           </li>
           </ul>
           </>
    )
}

export default Followers;