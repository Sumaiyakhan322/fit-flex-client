import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import Title from "../../../Shared/Title";
import PieChat from "../../../Components/PieChat";
import { Helmet } from "react-helmet-async";


const AdminBalance = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending } = useQuery({
    queryKey: ["adminPayments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/adminPayments");
      return res.data;
    },
  });

  const { data: paidMembers, isPending: paidMembersPending } = useQuery({
    queryKey: ["paidMembers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/confirmBooked");
      return res.data;
    },
  });
  const { data: newsLetter, isPending: newsLetterPending } = useQuery({
    queryKey: ["newsLetter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/newsLetter");
      return res.data;
    },
  });

  if (isPending || paidMembersPending || newsLetterPending)
    return <Loading></Loading>;

    const paidMembersNumber=paidMembers.length;
    const newsLetterNumber=newsLetter.length;
   
//payments
  const AdminPayments = data?.reduce((sum, ini) => {
    const payments = parseFloat(ini.expectedPayment) || 0;
    return sum + payments;
  }, 0);
  const totalPayment = (AdminPayments / 1000).toFixed(2);
  const initial = 100000;
  const remaining = ((initial - AdminPayments) / 1000).toFixed(2);

  return (
    <div className="">
        <div className="">
        <Helmet>
        <title> Fit-Flex-Online|Admin-Balance </title>
      </Helmet>
       <div className="">
       <Title heading={'Statistic'}></Title>
      <div className="stats shadow flex flex-col gap-10 md:flex-row mb-36">
        <div className="stat">
          <div className="stat-figure text-[#c3bd2e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Initial Bank Balance:</div>
          <div className="stat-value">100K</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-[#c3bd2e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Remaining Balance:</div>
          <div className="stat-value">{remaining}K</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-[#c3bd2e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Payments:</div>
          <div className="stat-value">{totalPayment}K</div>
        </div>
      </div>
       </div>

   <div className=""> {/* Pie chart */}
    <Title heading={'NewsLetter .VS. Paid Members'}></Title>
    
       <PieChat newsLetterNumber={newsLetterNumber} paidMembersNumber={paidMembersNumber}></PieChat></div>
       </div>

    {/* Paid members */}
    <Title heading={'Transactions'}></Title>
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

      {paidMembers?.map((item,index)=>(<tr key={item._id}>
        <th>{index+1}</th>
        <td className="uppercase font-semibold" >{item.memberName}</td>
        <td className=" font-semibold">{item.memberEmail}</td>
        
      </tr>))}
     
    </tbody>
  </table>
</div>
    </div>

    
  );
};

export default AdminBalance;
