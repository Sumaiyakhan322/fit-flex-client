
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";





const Dashboard = () => {
 
   const {isAdmin}=useAdmin();
   const {isTrainer}=useTrainer();




   return (


       <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen">
        <ul className="menu">
         {isAdmin ? <>
         {/* Admin exits */}
          <li>
            <NavLink to={"/dashboard/adminHome"}>
              
              Admin Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/dashboard/addItems"}>
              {" "}
              Add items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageItems"}>
              {" "}
             Manage items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageBookings"}>
              {" "}
           Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allUsers"}>
              {" "}
            All users
            </NavLink>
          </li>
         </> : 
         //trainer exist
         isTrainer ? <>
         </> :
        //  Admin does not exits
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
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
   )


  
   
   
};

export default Dashboard;
