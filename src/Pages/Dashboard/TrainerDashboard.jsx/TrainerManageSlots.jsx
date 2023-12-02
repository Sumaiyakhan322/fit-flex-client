import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Shared/Title";
import Loading from "../../../Loading";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
emailjs.init("ZYlfDB9H57G6wKORU");
const TrainerManageSlots = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);


  

  const { data, isPending } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  const { data: bookedSlots, isPending: bookedPending } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await axiosPublic.get("/confirmBooked");
      return res.data;
    },
  });

  if (isPending || bookedPending) return <Loading></Loading>;

  const trainer = data?.find((trainer) => trainer.email === user?.email);
  const allBookedSlots = bookedSlots?.filter(
    (book) => book.trainerEmail === user?.email
  );
   const handleReject=async(item)=>{
    console.log(item);
    const templateParams = {
        to_name: `${item?.memberEmail}`,
        from_name:`${item?.trainerEmail}`,
      };

      await emailjs.send("service_5zq1qlr", "template_xdwfelj", templateParams);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully sent message to  ${item.memberName}  via emailjs`,
        showConfirmButton: false,
        timer: 1500,
      });
    
  

   }

  return (
    <div>
       <Helmet>
        <title> Fit-Flex-Online|Manage Slots </title>
      </Helmet>
      <Title heading={"Manage Slots"}></Title>

      <div className="px-6 py-12 text-center md:px-12 lg:text-left ">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#1466548a] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px] ">
                <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl text-white">
                  My all slots <br />
                </h1>
                <div className="py-6 font-bold flex flex-col text-white ">
                  {" "}
                  {trainer?.selectedCheckboxes.map((item, index) => (
                    <h1 key={index} className="text-[#f1ed6d]">
                      <span className="mr-4 ">{index + 1}.</span>
                      {item}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <img
                src={trainer?.image}
                className="w-full h-96 rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Trainer booked slots */}

        <div className="mt-36">
          <Title heading={"All Booked Slots"}></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {allBookedSlots?.map((slot) => (
              <div key={slot._id}>
                <div className="card bg-[hsla(0,0%,100%,0)] px-2 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#1466548a] dark:shadow-black/20 text-primary-content backdrop-blur-[30px]">
                  <div className="card-body">
                    <h2 className="card-title text-[#193e51] font-bold text-xl">My Slot Time:<span className="text-[#eee95c]">{slot.slotTime}</span></h2>
                    <h2 className="card-title text-[#193e51] font-bold text-xl">Member Email:<span className="text-[#eee95c]">{slot.memberEmail}</span></h2>
                    <h2 className="card-title text-[#193e51] font-bold text-xl">Member Name:<span className="text-[#eee95c]">{slot.memberName}</span></h2>
                    <h2 className="card-title text-[#193e51] font-bold text-xl">Selected Package:<span className="text-[#eee95c]">{slot.packageName}</span>
</h2>
                   
                    <div className="card-actions justify-end">
                    <button onClick={()=>handleReject(slot)}
        type="submit"
        className="block mt-10 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
      >
      Reject 
      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerManageSlots;
