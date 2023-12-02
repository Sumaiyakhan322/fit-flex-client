import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import Title from "../../../Shared/Title";
import { Helmet } from "react-helmet-async";


const AllSubcribers = () => {
    const axiosPublic=useAxiosPublic();
   
  const { data, isPending } = useQuery({
    queryKey: ["newsLetter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/newsLetter");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;
 

    return (
        <div>
          <Helmet>
        <title> Fit-Flex-Online| All subscribers</title>
      </Helmet>
          <Title heading={' All subscribers'}></Title>
          <div className="overflow-x-auto md:ml-20 ml-0">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="text-2xl font-bold">
        <th></th>
        <th >Name</th>
        <th>EMAIL</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {data?.map((item,index)=>(<tr key={item._id}>
        <th>{index+1}</th>
        <td className="uppercase font-semibold" >{item.name}</td>
        <td className=" font-semibold">{item.email}</td>
        
      </tr>))}
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllSubcribers;