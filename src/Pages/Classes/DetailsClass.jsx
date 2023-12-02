import { Link, useParams } from "react-router-dom";
import Title from "../../Shared/Title";
import { useQuery } from "@tanstack/react-query";

import Loading from "../../Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DetailsClass = () => {
    const {id}=useParams();
    console.log(id);
    const axiosPublic=useAxiosPublic()
    const {data,isPending}=useQuery({
        queryKey:['DetailsClass'],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/classess/${id}`)
            return res.data;
        },
      

    })
    if(isPending) return <Loading></Loading>

    console.log(Object.keys(data).join(','));
    const {image,timeSlot,day,trainerName,className,classDescription}=data
    return (
        <div>
            <Title heading={'Details of the class'}></Title>
            <div className="hero min-h-screen bg-base-200 w-10/12 mx-auto my-20 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src={image} className="w-1/2 h-[600px] rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">
              Class Name:<span className="text-[#146666]">{className}</span>
            </h1>
            <p className="py-6 font-bold">
             Time Slot:
              <span className="text-[#146666]">{timeSlot}</span>
            </p>
            <p className="py-6 font-bold">
             Day:<span className="text-[#146666]">{day}</span>
            </p>
            <p className="py-6 font-bold">
             Trainer Name:
              <span className="text-[#146666]">{trainerName}</span>
            </p>
            <p className="py-6 font-bold">
              Class Description:<span className="text-[#146666]">{classDescription}</span>
            </p>
            <Link to={'/trainer'}>
            <button className=" md:w-1/2 mt-4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  ">Join Now</button>
            </Link>
          
            
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default DetailsClass;