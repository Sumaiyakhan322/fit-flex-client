import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";


const Admin = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const {isAdmin,isPending}=useAdmin()
    console.log(isAdmin,user);
    console.log('kscjscd',loading);
    
    if(loading || isPending){
        return <> 
      <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
           <span className="loading loading-spinner loading-lg text-error"></span>
        </div></>
       
   
    }
    if(user && isAdmin){
        return children
    }
    return (
        <Navigate to='/' state={location.pathname} replace></Navigate>
    );
};

export default Admin;