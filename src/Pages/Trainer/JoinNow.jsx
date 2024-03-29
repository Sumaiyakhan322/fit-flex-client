import { useContext } from "react";

import { ContextApi } from "../../Providers/ContextProviders";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import { RiArrowRightUpFill } from "react-icons/ri";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const JoinNow = () => {
  const { pricingDetails, timeSlots, setBookings } = useContext(ContextApi);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { data, isPending } = useQuery({
    queryKey: ["trainersIndividual"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/plans`);
      return res.data;
    },
  });

  if (isPending) return <Loading></Loading>;

  const hanldeJoinNow = (name, price) => {
    const bookedPageInfo = {
      trainerName: pricingDetails.name,

      trainerEmail: pricingDetails.email,
      slotTime: timeSlots,
      packageName: name,
      price: price,
      memberEmail: user?.email,
      memberName: user?.displayName,
    };

    axiosPublic.post("/booked", bookedPageInfo).then((res) => {
      if (res.data.insertedId) {
        navigate(`/bookedPage`);
        setBookings(bookedPageInfo);
      }
    });
  
  };

  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="background-radial-gradient text-center text-white lg:h-[400px] h-[300px] lg:pt-[80px] pt-[55px] bg-[#193e51]">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Trainer Name: {pricingDetails.name}
            </h2>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Time Slot: {timeSlots}
            </h2>
          </div>

          <div
            className="grid gap-10 px-6 md:px-12 lg:grid-cols-3"
            style={{ marginTop: "-200px" }}
          >
            {data.map((items) => (
              <div key={items._id} className="p-0 py-12">
                <div className="block h-full rounded-lg bg-yellow-100">
                  <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                    <p className="mb-4 text-sm uppercase">
                      <strong>{items.name}</strong>
                    </p>
                    <h3 className="mb-6 text-3xl">
                      <strong>price:${items.price}</strong>
                      <small className="text-base text-neutral-500 dark:text-gray-400-300">
                        /month
                      </small>
                    </h3>
                  </div>
                  <div className="p-6 ml-4">
                    <h2 className="text-xl font-bold">Classes:</h2>
                    <div>
                      {items.classes.map((pp, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-3 text-lg font-semibold">
                            <RiArrowRightUpFill />
                            <h1>{pp}</h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 ml-4">
                    <h2 className="text-xl font-bold">Facilities:</h2>
                    <div>
                      {items.facilities.map((pp, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-3 text-lg font-semibold">
                            <FaCircleArrowRight />
                            <h1>{pp}</h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="mx-auto text-center block my-10 rounded bg-[#193e51] text-white px-7 pb-2.5 pt-3 text-sm uppercase font-bold"
                    onClick={() => hanldeJoinNow(items.name, items.price)}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </div>
  );
};

export default JoinNow;
