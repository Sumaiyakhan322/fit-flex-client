import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Loading";



const useAdmin = () => {
    const axiosPublic=useAxiosPublic();
    let isAdmin=false
    const {user}=useContext(AuthContext)
     const userEmail=user?.email
 
     const {data,isPending} =useQuery({
         queryKey:[user?.email,'isAdmin'],
        //  enabled:!loading,
         queryFn:async ()=>{
            const res=await axiosPublic.get(`/admin`)
             return res.data;
         }
     })
     if(isPending) return <Loading></Loading>
    
 
     if (data && data?.length > 0 && user) {
       
        const admin = data[0].email === userEmail;
        if (admin) {
          isAdmin = true;
        }
        console.log(isAdmin,user);
       
      }
      return { isAdmin,isPending}
    }

   

export default useAdmin;