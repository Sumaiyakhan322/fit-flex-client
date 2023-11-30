
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";






const Dashboard = () => {
 
   const {isAdmin}=useAdmin();
   const {isTrainer}=useTrainer();




   return (


       <div className="flex flex-col md:flex-row">
       
      <div className="md:w-64 bg-orange-400 md:min-h-screen ">
        <ul className="menu flex flex-row md:flex-col">
         {isAdmin ? <>
         {/* Admin exits */}
          <li>
            <NavLink to={"/dashboard/adminHome"}>
              
              Admin Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/dashboard/subscribers"}>
              {" "}
              All subscribers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allTrainers"}>
              {" "}
              All Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/appliedTrainer"}>
              {" "}
              Applied Trainer
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/balance"}>
              {" "}
              Balance
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addNewForum"}>
              {" "}
              Add new Forum
            </NavLink>
          </li>
         </> : 
         //trainer exist
         isTrainer ? <>
         {/* Trainer route */}
         </> :
                
         <>

         <li>
            <NavLink to={"/dashboard/userHome"}>
              
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>
              {" "}
              Payment History
            </NavLink>
          </li>
         
          <li>
            <NavLink to={"/dashboard/review"}>
              {" "}
           Add review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myBookings"}>
              {" "}
             My Bookings
            </NavLink>
          </li></>}

          {/* common links */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              {" "}
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
             Order
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              {" "}
            Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashborad */}
      <div className="flex-1 p-8 ">
        <Outlet></Outlet>
      </div>
    </div>
   )


  
   
   
};

export default Dashboard;
