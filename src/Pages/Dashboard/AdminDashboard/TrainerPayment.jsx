import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../../Shared/Title";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const TrainerPayment = () => {
    const axiosPublic=useAxiosPublic();
    const {id}=useParams()
    const navigate=useNavigate()
  const { data, isPending } = useQuery({
    queryKey: ["trainersIndividual"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${id}`);
      return res.data
      
    
      
     
    },
  });
 
  if (isPending) return <Loading></Loading>;



  const {
    name,
    expectedPayment,
    email,_id
  } = data;
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const completePayment={name,expectedPayment,email}
    console.log(completePayment);
    const payment={payment:'pending'}

    const adminPaymentRes = await  axiosPublic.post("/adminPayments", completePayment)
    if (adminPaymentRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Paid the trainer monthly salary `,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/allTrainers')
      const updatedPayment= await   axiosPublic.patch(`/trainers/payments/${_id}`,payment)
      console.log(updatedPayment);
      
          

        }
      };
   
  
   


    
  

    return (
        <div>
          <Helmet>
        <title> Fit-Flex-Online|Admin-Trainer-Payment-page</title>
      </Helmet>
            <Title heading={'Trainer Payment page'}></Title>
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
            name="name" readOnly value={name}
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
            value={email}
            id="email"
          />
        </div>
      </div>
     
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile Image */}
        <div className="relative h-32 w-full  items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Payment amount:</span>
          </label>
          <input
           
           
            className="input input-bordered w-full  border border-[#c3bd2e]"
              readOnly value={expectedPayment}
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
        </div>
    );
};

export default TrainerPayment;