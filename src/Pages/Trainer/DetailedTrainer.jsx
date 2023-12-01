import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import { useParams } from "react-router-dom";
import {  useState } from "react";




const DetailedTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const [details, setDetails] = useState({});
  const { id } = useParams();
 
  

  const { data, isPending } = useQuery({
    queryKey: ["trainersIndividual"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${id}`);
      
      setDetails(res.data);
   },
  });
 
  if (isPending) return <Loading></Loading>;

  const {
    name,
    age,
    image,
    yearsOfExperience,
    experience,
    skills,
    selectedCheckboxes,
    weeks,
   } = details;



  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-10/12 mx-auto my-20 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src={image} className="w-1/2 h-[600px] rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">
              Trainer Name:<span className="text-[#146666]">{name}</span>
            </h1>
            <p className="py-6 font-bold">
              Trainer`s Experience:
              <span className="text-[#146666]">{experience}</span>
            </p>
            <p className="py-6 font-bold">
              Trainer age:<span className="text-[#146666]">{age}</span>
            </p>
            <p className="py-6 font-bold">
              Years Of Experience
              <span className="text-[#146666]">{yearsOfExperience}</span>
            </p>
            <p className="py-6 font-bold">
              Trainers`s Skills:<span className="text-[#146666]">{skills}</span>
            </p>
            <div className="py-6 font-bold">
              {" "}
              Available in weeks:
              {weeks.map((item, index) => (
                <h1 key={index} className="text-[#146666]">
                  <span className="mr-4 ">{index + 1}.</span>
                  {item}
                </h1>
              ))}
            </div>
            <div className="py-6 font-bold flex flex-col ">
              {" "}
              Available slots:
              {selectedCheckboxes.map((item, index) => (
                <h1 key={index} className="text-[#146666]">
                  <span className="mr-4 ">{index + 1}.</span>
                  {item}
                </h1>
              ))}
                
             
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedTrainer;
