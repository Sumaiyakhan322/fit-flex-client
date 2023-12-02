import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Shared/Title";
import Loading from "../../../Loading";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const TrainerManageMember = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useContext(AuthContext)
    const { data: bookedSlots, isPending: bookedPending } = useQuery({
        queryKey: ["booked"],
        queryFn: async () => {
          const res = await axiosPublic.get("/confirmBooked");
          return res.data;
        },
      });
    
      if ( bookedPending) return <Loading></Loading>;
    
      
      const allBookedSlots = bookedSlots?.filter(
        (book) => book.trainerEmail === user?.email
      );
   
    return (
        <div>
           <Helmet>
        <title> Fit-Flex-Online|Manage Member</title>
      </Helmet>
            <Title heading={'Manage Member'}></Title>
            <div className="w-full">
     
      <div className="overflow-x-auto md:overflow-hidden">
        <table className="table table-xs">
          <thead>
            <tr className="w-10/12">
              <th></th>
              <th className="text-center">MEMBER NAME</th>
              <th>MEMBER EMAIL</th>
              <th>PACKAGE</th>
              <th className="text-center">SLOT TIME</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allBookedSlots?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="uppercase font-semibold text-center">{item.memberName
}</td>
                <td className=" font-semibold">{item.memberEmail}</td>
                <td className=" font-semibold ">{item.packageName}</td>
                <td className=" font-semibold text-center ">{item.slotTime
}</td>

                <td className="font-semibold">
                 
                    <Link to={`sendInstructions/${item._id}`} className="rounded  p-3  text-lg font-medium uppercase  text-[#193e51]"><IoMdMail /></Link>
                    
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        </div>
    );
};

export default TrainerManageMember;