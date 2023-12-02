import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import Title from "../../../Shared/Title";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;

  const appliedTrainers = data?.filter((trainer) => trainer.role === "trainer");
  console.log(appliedTrainers);

  return (
    <div className="w-full">
       <Helmet>
        <title> Fit-Flex-Online|All Trainers </title>
      </Helmet>
      <Title heading={"All Trainers"}></Title>
      <div className="overflow-x-auto md:overflow-hidden">
        <table className="table table-xs">
          <thead>
            <tr className="w-10/12">
              <th></th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>PAYMENT</th>
              <th className="text-center">PAYMENT STATUS</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {appliedTrainers?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="uppercase font-semibold">{item.name}</td>
                <td className=" font-semibold">{item.email}</td>
                <td className=" font-semibold ">{item.expectedPayment}</td>
                <td className=" font-semibold text-center ">{item.payment}</td>

                <td className="font-semibold   ">
                  {(() => {
                    const trainerJoinDate = new Date(item.date);
                    const today = new Date();
                    const timeDifference = Math.abs(today - trainerJoinDate);
                    const daysDifference =
                      timeDifference / (1000 * 60 * 60 * 24);

                    if (daysDifference < 30 ) {
                      return (
                        <div
                          className="tooltip"
                          data-tip="Trainer joined date less than 30 days"
                        >
                          <button
                            className="rounded hover:bg-[#85aec2] hover:text-white  text-sm font-medium uppercase bg-[#62a4c5] text-[red] disabled p-3 "
                            disabled
                          >
                            Pay
                          </button>
                        </div>
                      );
                    } 
                    
                    
                    else {
                      return (
                        <Link to={`/dashboard/trainerPay/${item._id}`}>
                          <button className="rounded hover:bg-[#4b819c] hover:text-white p-3  text-sm font-medium uppercase bg-[#326a86] text-[#e2df82] ">
                            Pay
                          </button>
                        </Link>
                      );
                    }
                  })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTrainers;
