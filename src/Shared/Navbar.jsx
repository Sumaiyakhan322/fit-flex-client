import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
import { CgGym } from "react-icons/cg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const {isAdmin}=useAdmin();
  const {isTrainer}=useTrainer()
  const handleSignOut = (e) => {
    e.preventDefault();
    logout().then().catch();
  };
  const navLinks = (
    <>
      <li className="hover:bg-[#aac7c7]  rounded-lg nav ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#c3bd2e]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-[#aac7c7]  rounded-lg nav">
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="hover:bg-[#aac7c7] rounded-lg nav">
        <NavLink
          to={`/trainer`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
          }
        >
          Trainer
        </NavLink>
      </li>
      <li className="hover:bg-[#aac7c7] rounded-lg nav">
        <NavLink
          to={`/classes`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
          }
        >
          Classes
        </NavLink>
      </li>

    
      <li className="hover:bg-[#aac7c7] rounded-lg nav">
        <NavLink
          to={`/forums`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
          }
        >
          Forums
        </NavLink>

      </li>
      <li  className="hover:bg-[#aac7c7] rounded-lg nav">
      {user && isAdmin && !isTrainer && (
        <NavLink to={"/dashboard/adminHome"}  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
      }>
          Dashboard
        </NavLink>
      )}
      {user && !isAdmin && !isTrainer && (
        <NavLink to={"/dashboard/userHome"}  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
      }>
          Dashboard
        </NavLink>
      )}
      {user && !isAdmin && isTrainer && (
        <NavLink to={"/dashboard/trainerHome"}  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#c3bd2e]" : ""
      }>
          Dashboard
        </NavLink>
      )}
      </li>
    </>
  );
  return (
    <div>
      <div>
        <div className="navbar p-4 sticky inset-0  z-10  flex flex-col gap-5 md:flex-row justify-between  bg-[#193e51] ">
          <div className=" flex flex-col-reverse md:flex-row lg:navbar-start">
            <div className="dropdown  ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-bold text-base space-x-2  bg-[#478686] text-white "
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              {" "} 
              <span className="cursor-pointer text-4xl text-[#c3bd2e] flex items-center ">
             <span className="ml-2"><CgGym /></span> <span> Fit-Flex-Online</span> 
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-base space-x-2 text-white ">
              {navLinks}
            </ul>
          </div>
          <div className="md:navbar-end mx-auto">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 flex-col-reverse">
                    <p className="font-bold text-lg  text-[#c3bd2e]">
                      {user?.displayName}
                    </p>
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="md:h-20 md:w-20 h-10 w-10 rounded-full"
                    />
                  </div>
                  <button
                    className="btn text-[#146666] hover:bg-white  font-bold border  hover:border-#c3bd2e "
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="btn text-[#146666] border   border-[#c3bd2e]   hover:bg-white hover:text-[#c3bd2e] font-bold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
