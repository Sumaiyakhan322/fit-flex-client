import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Loading";

import Title from "../../Shared/Title";

import ForumCard from "../../Components/ForumCard";
import { Helmet } from "react-helmet-async";


const Forums = () => {
    const axiosPublic=useAxiosPublic();
  
    const { data, isPending } = useQuery({
        queryKey: ["forums"],
        queryFn: async () => {
          const res = await axiosPublic.get("/forums");
          return res.data;
        },
      });
    
      if (isPending) return <Loading></Loading>;
     
    return (
        <div>
          <Helmet>
        <title> Fit-Flex-Online|Forums </title>
      </Helmet>
            <section className="mb-32 text-center md:text-left">
          <Title heading={'Our Forums'}></Title>
          <div>
            {data?.map(forum=>(
             <ForumCard key={forum._id} forum={forum}></ForumCard>   
            ))}

          </div>

  
  
</section>

        </div>
    );
};

export default Forums;