import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Shared/Title";
import Loading from "../../../Loading";
import { Link } from "react-router-dom";

const UserClass = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending } = useQuery({
    queryKey: ["newsLetter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classess");
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;
  return (
    <div>
      <Title heading={"Recommended Classes"}></Title>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.slice(0, 9)?.map((classes) => (
          <div
            key={classes._id}
            className="block rounded-lg bg-yellow-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#193e51d2]"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat h-60"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <img
                className="rounded-t-lg w-full h-full"
                src={classes.image}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
              </a>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Class-Name:<span>{classes.className}</span>
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-bold">
                Trainer Name:
                <span className="text-base  text-[#c3bd2e]">
                  {classes.trainerName}
                </span>
              </p>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-bold">
                Time Slot:
                <span className="text-[#c3bd2e] ">{classes.timeSlot}</span>
              </p>
              <Link to={"/trainer"}>
                <button className="bg-[#193e51]  text-[#c3bd2e] p-3 rounded-lg text-center  font-bold">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserClass;
