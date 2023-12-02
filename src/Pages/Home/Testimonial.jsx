import testimonial1 from '../../assets/testimonail/man1.jpg'
import testimonial2 from '../../assets/testimonail/img2.avif'
import testimonial3 from '../../assets/testimonail/img3.jpg'
import Title from '../../Shared/Title';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

import Loading from '../../Loading';
import { useQuery } from '@tanstack/react-query';

const Testimonial = () => {

  const axiosPublic=useAxiosPublic();
 
  const { data: bookedSlots, isPending: bookedPending } = useQuery({
      queryKey: ["booked"],
      queryFn: async () => {
        const res = await axiosPublic.get("/confirmBooked");
        return res.data;
      },
    });
  
    if ( bookedPending) return <Loading></Loading>;
    return (
        <div>
        <section className="mb-32 text-center">
        <Title heading={'Our satisfied users '}></Title>
        
            <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
              <div className="mb-6 lg:mb-0" data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <div
                  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={testimonial1} className="w-full h-[300px] rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg className="absolute left-0 bottom-0 text-white " xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320">
                      <path fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 md:text-2xl text-lg font-bold">{bookedSlots[0].memberName}</h5>
                    <h6 className="mb-4 font-medium text-[#c3bd2e] ">
                      Marketing Specialist
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                    Working with this was an absolute pleasure! They turned our vision into a reality and executed our corporate event flawlessly. From the initial planning stages to the final moments of the event, their team demonstrated professionalism, creativity. Our guests were truly impressed. We highly recommend  for any event you have in mind.
                    </p>
                  </div>
                </div>
              </div>
        
              <div className="mb-6 lg:mb-0" data-aos="fade-up"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <div
                  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={testimonial2} className="w-full h-[300px] rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg className="absolute left-0 bottom-0 text-white " xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320">
                      <path fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 md:text-2xl text-lg font-bold">{bookedSlots[2].memberName}</h5>
                    <h6 className="mb-4 font-medium text-[#c3bd2e] ">
                      Marketing Specialist
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                    I had the pleasure of collaborating with this company for our annual charity gala, and it was a game-changer. Their event planning and management skills are unmatched. They took care of everything, from selecting the perfect venue to coordinating with vendors and ensuring every guest had a memorable experience. 
        
        
        
        
        
        
                    </p>
                  </div>
                </div>
              </div>
        
              <div className="mb-6 lg:mb-0 " data-aos="fade-left" 
             data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <div
                  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={testimonial3} className="w-full h-[300px] rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg className="absolute left-0 bottom-0 text-white " xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320">
                      <path fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 md:text-2xl text-lg font-bold">{bookedSlots[3].memberName}</h5>
                    <h6 className="mb-4 font-medium text-[#c3bd2e] ">
                    Public Relations
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-[#c3bd2e]">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                    <p>
                   
                    I can not thank this Company  enough for making our wedding day truly magical. Their expertise, dedication, and organization ensured that every aspect of our special day went off without a hitch. They took care of all the details, allowing us to relax and enjoy the moment. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
            </div>
            );
        };
        
   


export default Testimonial;