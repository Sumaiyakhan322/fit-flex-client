
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";






const Dashboard = () => {
 
   const {isAdmin,}=useAdmin();
   const {isTrainer,}=useTrainer();
   console.log(isAdmin,isTrainer);




   return (


       <div className="flex flex-col md:flex-row">
       
      <div className="md:w-64 bg-[#193e51] md:min-h-screen ">
        <ul className="menu flex flex-row md:flex-col text-white">
          <li>
          <Link to={"/"}>
              {" "}
              <span className="cursor-pointer text-3xl text-yellow-300 flex">
                Fit-Flex-Online
              </span>
            </Link>
          </li>
         {isAdmin ? <>
         {/* Admin exits */}
          <li>
            <NavLink to={"/dashboard/adminHome"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      } >
              
              Admin Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/dashboard/subscribers"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              All subscribers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/allTrainers"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              All Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/appliedTrainer"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Applied Trainer
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/balance"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Balance
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addNewForum"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Add new Forum
            </NavLink>
          </li>
         </> : 
         //trainer exist
         isTrainer ? <>
         {/* Trainer route */}
         <li>
            <NavLink to={"/dashboard/trainerHome"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Trainer Home
            </NavLink>
          </li>
         <li>
            <NavLink to={"/dashboard/manageSlots"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Manage Slots
            </NavLink>
          </li>
         <li>
            <NavLink to={"/dashboard/manageMember"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Manage member
            </NavLink>
          </li>
         <li>
            <NavLink to={"/dashboard/trainerForum"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
             Add a forum
            </NavLink>
          </li>
         <li>
            <NavLink to={"/dashboard/addClass"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Add new Class
            </NavLink>
          </li>
         
         

         </> :
                
         <>

         <li>
            <NavLink to={"/dashboard/userHome"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/userActivity"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Activity Log
            </NavLink>
          </li>
         
          <li>
            <NavLink to={"/dashboard/profileSetting"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Profile Settings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/userClass"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
              Recommended Classes
            </NavLink>
          </li></>}

          {/* common links */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/classes"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
             Classes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/trainer"} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-yellow-300" : ""
      }>
              {" "}
            Trainer
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
