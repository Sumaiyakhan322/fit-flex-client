import { useContext } from "react";
import { ContextApi } from "../../Providers/ContextProviders";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Bookedpage = () => {
    const {bookings}=useContext(ContextApi);
    const axiosPublic=useAxiosPublic()
    
    const {trainerName,trainerEmail,slotTime,packageName,price,memberEmail,memberName}=bookings
    console.log(packageName);
    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosPublic.post("/confirmBooked", bookings).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Successfully Joined ${packageName}  `,
                showConfirmButton: false,
                timer: 1500,
              });
                   
                   
            }
          });
          
        };
         
        

    
    
    return (
       <>
       <Helmet>
        <title> Fit-Flex-Online|Booked-page </title>
      </Helmet>
        <form onSubmit={handleSubmit}>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile name */}
        <div className="relative h-32 w-full items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className=" text-[#194a63] font-bold">Trainer Name:</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full border border-[#c3bd2e]"
            name="name" readOnly value={trainerName}
          />
        </div>
        {/* Email */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Trainer`s Email:</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="email"
            readOnly
            value={trainerEmail}
            id="email"
          />
        </div>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile Image */}
        <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Slot time:</span>
          </label>
          <input
            type="url"
           
            className="input input-bordered w-full  border border-[#c3bd2e]"
              readOnly value={slotTime}
          />
        </div>
        {/* age */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Package Name:</span>
          </label>
          <input
            
           readOnly value={packageName}
            className="input input-bordered w-full  border border-[#c3bd2e]"
            
          />
        </div>
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Price:</span>
          </label>
          <input
            
           readOnly value={price}
            className="input input-bordered w-full  border border-[#c3bd2e]"
            
          />
        </div>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile Image */}
        <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">User Email:</span>
          </label>
          <input
           
           
            className="input input-bordered w-full  border border-[#c3bd2e]"
              readOnly value={memberEmail}
          />
        </div>
        {/* age */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">User Name:</span>
          </label>
          <input
            
           readOnly value={memberName}
            className="input input-bordered w-full  border border-[#c3bd2e]"
            
          />
        </div>
        
      </div>

     
      
   
     

      <button
        type="submit"
        className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
      >
       Confirm
      </button>
    </form>
       
       </>
    )
};

export default Bookedpage;