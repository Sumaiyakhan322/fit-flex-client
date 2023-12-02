import { useQuery } from "@tanstack/react-query";
import Title from "../../../Shared/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../Loading";
import { FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
emailjs.init("ZYlfDB9H57G6wKORU");
const AppliedTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const {user}=useContext(AuthContext)
  const { data, isPending,refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;

  const appliedTrainers = data?.filter((trainer) => trainer.role === "member");
  const handleConfirm = async (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,

    });
  
    try {
      const result = await swalWithBootstrapButtons.fire({
        width:'40rem',
        title: `Trainer email:${item.email}`,
        text: `Trainer Name:${item.name}`,
        icon: "question",
        html: `
          <h1 class='font-bold'>Trainer age:${item.age}</h1>
          <h2 class='font-bold'>Experience:<span>${item.yearsOfExperience}years</span></h2>
              
          <p class='font-bold'>Available time slots:<span class='font-normal'>${item.selectedCheckboxes}</span></p>
          <p class='font-bold'>Available time in weeks:<span class='font-normal'>${item.weeks}</span></p>
         `,
        showCancelButton: true,
        confirmButtonText: "Confirm Trainer",
       
        cancelButtonText: "Reject Trainer",
        reverseButtons: true,
      });
  
      if (result.isConfirmed) {
        const beTrainers = { role: "trainer",date:new Date(),payment:'pending' };
        const updatedTrainers = await axiosPublic.patch(`/trainers/beTrainers/${item._id}`, beTrainers);
  
        if (updatedTrainers && updatedTrainers.data && updatedTrainers.data.modifiedCount > 0) {
          swalWithBootstrapButtons.fire({
            title: `Confirm the ${item.name}`,
            text: "Trainer Added ",
            icon: "success",
          });
          refetch();
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: `Reject the ${item.name}`,
          text: `A Message will be sent on ${item.email} via emailjs`,
          icon: "warning",
        });
  
        const templateParams = {
          to_name: `${item.email}`,
          from_name: `${user?.email}`,
          // Add any other parameters you want to include in your email
        };
  
        await emailjs.send("service_5zq1qlr", "template_xdwfelj", templateParams);
      }
    } catch (error) {
      console.error("Error in handleConfirm:", error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <Helmet>
        <title> Fit-Flex-Online|Applied Trainers </title>
      </Helmet>
      <Title heading={"Applied Trainers"}></Title>
      <div className="overflow-x-auto md:ml-20 ml-0">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-2xl font-bold">
              <th></th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {appliedTrainers?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="uppercase font-semibold">{item.name}</td>
                <td className=" font-semibold">{item.email}</td>
                <td className=" font-semibold ">
                  <button onClick={() => handleConfirm(item)}>
                    <FaRegEye className="text-center ml-10"></FaRegEye>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedTrainer;
