import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useTrainer from "../Hooks/useTrainer";
import { Navigate } from "react-router-dom";


const Trainer = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const{isTrainer,isPending}=useTrainer()
    if(loading || isPending){
        return <> 
      <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
           <span className="loading loading-spinner loading-lg text-error"></span>
        </div></>
       
   
    }
    if(user && isTrainer){
        return children
    }
    return (
        <Navigate to='/' state={location.pathname} replace></Navigate>
    );
};

export default Trainer;