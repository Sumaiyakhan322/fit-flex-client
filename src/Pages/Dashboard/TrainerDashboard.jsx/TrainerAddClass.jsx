import Swal from "sweetalert2";
import Title from "../../../Shared/Title";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const TrainerAddClass = () => {
  
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
  
    const handleAdd=e=>{
        e.preventDefault();
      
        const trainerName=user?.displayName;
        const className=e.target.className.value ;
        const image=e.target.img.value;
        const classDescription=e.target.des.value ;
        const day=e.target.day.value ;
        const timeSlot=e.target.timeSlot.value ;
        const classInfo={trainerName,classDescription,className,image,day,timeSlot}
        
        axiosPublic.post('/classess',classInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Successfully add a class `,
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset()
            }
          });
 }
        
  return (
    <div>
      <Helmet>
        <title> Fit-Flex-Online|Add-Class </title>
      </Helmet>
      <Title heading={"Add a class"}></Title>
      <div>
        <form onSubmit={handleAdd}>
          {/* email and job title */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
            <div className="relative h-12 w-full flex items-center justify-center gap-2">
              <label htmlFor="email" className="text-[#194a63] font-bold">
               Trainer Name:
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-full"
                type="text"
                name="name"
                readOnly
                value={user?.displayName}
               
              />
            </div>
            <div className="relative h-12  w-full flex items-center justify-center gap-2">
              <label htmlFor="title" className="text-[#194a63] font-bold">
               Class Name:
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-full"
                placeholder="Class Name "
                type="text"
                name="className"
                required
                id="title"
              />
            </div>
          </div>
          {/* Img and type */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
            <div className="relative h-12 w-full flex items-center justify-center gap-2">
              <label htmlFor="deadline" className="text-[#194a63] font-bold">
               Image
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-full"
                placeholder="Image "
                type="url"
                name="img"
                required
                id="deadline"
              />
            </div>
            <div className="relative h-12 w-full flex items-center justify-center gap-2">
              <label htmlFor="timeSlot" className="text-[#194a63] font-bold">
                Time slot:
              </label>
              <select
                className="select select-bordered border-[#c3bd2e] input  w-full"
                id="timeSlot"
                name="timeSlot" defaultValue={'default'}
              >
                 <option value={"default"} disabled>
                Select Time Slot
              </option>
                <option>8am-9am</option>
                <option>10am-11am</option>
                <option>11am-12am</option>
                <option>2pm-3pm</option>
                <option>4pm-5pm</option>
                <option>5pm-6pm</option>
                <option>7pm-9pm</option>
              </select>
            </div>
          </div>
          {/* minimum and maximum */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
              <label htmlFor="day" className="text-[#194a63] font-bold">
                Day:
              </label>
              <select
                className="select select-bordered border-[#c3bd2e] input  w-full"
                id="day"
                name="day" defaultValue={'default'}
              >
                <option value={"default"} disabled>
                Select Day
              </option>
                
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Monday</option>
                <option> Tuesday</option>
                <option> Wednesday</option>
                <option> Thursday</option>
                <option> Friday</option>
              </select>
            </div>
          
          </div>
          

          <div className="relative h-32 w-full  flex items-center justify-center gap-2">
            <label htmlFor="des" className="text-[#194a63] font-bold">
              Description:
            </label>
            <textarea
              className="textarea border border-[#c3bd2e] w-full"
              placeholder="Description"
              name="des"
              id="des"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            value="Add Class"
            className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default TrainerAddClass;
