import { useContext } from "react";
import Title from "../../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import { Helmet } from "react-helmet-async";


const UserDailyActivity = () => {
    const {user}=useContext(AuthContext);
    const axiosPublic=useAxiosPublic()
    const { data:myClass, isPending: bookedPending } = useQuery({
        queryKey: ["booked"],
        queryFn: async () => {
          const res = await axiosPublic.get("/confirmBooked");
          return res.data;
        },
      });
    
      if ( bookedPending) return <Loading></Loading>;
     const  myBooked = myClass?.find(
        (bookedItem) => bookedItem.memberEmail === user?.email
      );


    return (
        <div>
          <Helmet>
        <title> Fit-Flex-Online|Daily Activity</title>
      </Helmet>
            <Title heading={'My Daily Activity '}></Title>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3  text-[#193e51] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-lg font-bold  leading-none text-[#193e51] ">
      Todays Activity
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
     
    </h3>
    <p className="mb-4 text-base font-bold text-black my-4">
    My Package Name:<span className="text-[#c3bd2e] uppercase">{myBooked?.packageName}</span>
    </p>
    <p className="mb-4 text-base font-bold text-black ">
    My Trainer Name:<span className="text-[#c3bd2e] uppercase">{myBooked?.trainerName}</span>
    </p>
    <p className="mb-4 text-base font-bold text-black ">
    My Trainer Name:<span className="text-[#c3bd2e] uppercase">{myBooked?.trainerEmail}</span>
    </p>
    <p className="mb-4 text-base  text-black ">
    Cardio Blast:
Description: Join our Cardio Blast class for an exhilarating workout that gets your heart pumping and calories burning. This high-energy session combines dynamic cardio routines with upbeat music, ensuring an enjoyable and effective way to improve cardiovascular health and boost endurance.
    </p>
    
    
  </li>
  {/* <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      Previous Class
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      Marketing UI design in Figma
    </h3>
    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
    Experience the Strength Fusion class, a perfect blend of resistance training and functional movements. Designed to sculpt and tone your muscles, this class incorporates a variety of equipment to challenge your strength and enhance overall fitness. Whether you're a beginner or seasoned fitness enthusiast, Strength Fusion offers a versatile and empowering workout
    </p>
  </li>
   */}
</ol>

  </div>
    );
};

export default UserDailyActivity;