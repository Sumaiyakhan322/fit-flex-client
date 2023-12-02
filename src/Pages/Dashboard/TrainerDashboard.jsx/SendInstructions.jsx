import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Loading from "../../../Loading";
import Title from "../../../Shared/Title";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
emailjs.init("ZYlfDB9H57G6wKORU");


const SendInstructions = () => {
    const axiosPublic=useAxiosPublic();
    const {id}=useParams();
    const {user}=useContext(AuthContext)
    const { data: bookedMember, isPending: bookedPending } = useQuery({
        queryKey: ["oneBooked"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/confirmBooked/${id}`);
          return res.data;
        },
      });
    
      if ( bookedPending) return <Loading></Loading>;
      const handleSubmit=async(e)=>{
        e.preventDefault();
        const memberEmail=bookedMember?.memberEmail;
        const TrainerEmail=user?.email;
        const message=e.target.des.value;
       
        const templateParams = {
            to_name:`${memberEmail}` ,
            from_name:`${TrainerEmail}`,
            message:`${message}`
          };
    
          await emailjs.send("service_5zq1qlr", "template_6tsaxvk", templateParams);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully sent Instructions to ${bookedMember?.memberName}  via emailjs`,
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        


      }
      
    
    return (
        <div>
                  <div>
                  <Helmet>
        <title> Fit-Flex-Online|Trainer-Instructions</title>
      </Helmet>
                <div>
            <Title heading={'Send Instructions'}></Title>
               <form onSubmit={handleSubmit}>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile name */}
        <div className="relative h-32 w-full items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className=" text-[#194a63] font-bold">Member Name:</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full border border-[#c3bd2e]"
             readOnly value={bookedMember?.memberName}
          />
        </div>
        {/* Email */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Member Email</span>
          </label>
          <input
            type="url"
            className="input input-bordered w-full  border border-[#c3bd2e]"
           readOnly value={bookedMember?.memberEmail}
           />
        </div>
      </div>
     
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Description */}
      <div className="relative h-32 w-full  flex md:flex-row flex-col items-center justify-center gap-2">
        <label htmlFor="des" className="text-[#194a63] font-bold">
        Instructions
        </label>
        <textarea
          className="textarea border border-[#c3bd2e] w-full"
          name="des" placeholder="Instructions"
          required
        ></textarea>
      </div>
      
        
      </div>

     
      
   
     

      <button
        type="submit"
        className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
      >
       Confirm
      </button>
    </form>
        </div>
            
        </div> 
        </div>
    );
};

export default SendInstructions;