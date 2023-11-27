
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import {  useParams } from "react-router-dom";


const DetailedTrainer = () => {
    const axiosPublic = useAxiosPublic();
    const {email}=useParams();
  
    // const data=useLoaderData()
    
    
  
    const { data,isPending } = useQuery({
       queryKey: ["trainersIndividual"],
       queryFn: async () => {
         const res = await axiosPublic.get(`/trainers/${email}`);
         return res.data;
       },
     });
   
    if (isPending) return <Loading></Loading>

   
    const {name,age,image,yearsOfExperience,experience,skills,selectedCheckboxes,weeks,}=data
    
    
    return (
        <div>
          <div className="hero min-h-screen bg-base-200 w-10/12 mx-auto my-20 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse px-10">
    <img src={image} className="w-full rounded-lg shadow-2xl" />
    <div className="">
      <h1 className="text-5xl font-bold">Trainer Name:<span className="text-[#146666]">{name}</span></h1>
      <p className="py-6 font-bold">Trainer`s Experience:<span className="text-[#146666]">{experience}</span></p>
      <p className="py-6 font-bold">Trainer age:<span className="text-[#146666]">{age}</span></p>
      <p className="py-6 font-bold">Years Of Experience<span  className="text-[#146666]">{yearsOfExperience}</span></p>
      <p className="py-6 font-bold">Trainers`s Skills:<span className="text-[#146666]">{skills}</span></p>
      <div className="py-6 font-bold"> Available in weeks:
              {weeks.map((item, index) => (
                <h1 key={index} className="text-[#146666]">
                  <span  className="mr-4 ">{index + 1}.</span>
                  {item}
                </h1>
              ))}
            </div>
      <div className="py-6 font-bold"> Available slots:
              {selectedCheckboxes.map((item, index) => (
                <h1 key={index} className="bg-[#358a8a] my-4 p-2 rounded-md text-[#e0dc5d] w-2/6">
                  <span  className="mr-4 ">{index + 1}.</span>
                  {item}
                </h1>
              ))}
            </div>
     

      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          
         </div>

    );
};

export default DetailedTrainer;