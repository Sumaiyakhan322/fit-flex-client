import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router-dom";


const Admin = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const {isAdmin,isPending}=useAdmin()
    console.log(isAdmin,user);
   
    
    if(loading && isPending){
        return <loading></loading>
    }
    if(user && isAdmin){
        console.log('last',user,isAdmin);
        return children
        
    }
    return (
        <Navigate to='/' state={location.pathname} replace></Navigate>
    );
};

export default Admin;