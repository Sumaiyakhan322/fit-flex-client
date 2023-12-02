import Swal from "sweetalert2";
import Title from "../../../Shared/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";



const AdminForum = () => {
    const axiosPublic=useAxiosPublic()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const des=e.target.des.value;
        const img=e.target.image.value;
        const role='admin';
        const date=new Date();
        const forumDetails={title,des,img,role,date};
          //post on db
      axiosPublic.post("/forums", forumDetails).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully added the  ${title}  forum`,
            showConfirmButton: false,
            timer: 1500,
          });
         e.target.reset()
        }
      });
    };

        
 
    return (
      
        <div>
                <div>
                <Helmet>
        <title> Fit-Flex-Online|Admin-Forum </title>
      </Helmet>
            <Title heading={'Add Forum'}></Title>
               <form onSubmit={handleSubmit}>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Profile name */}
        <div className="relative h-32 w-full items-center  flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className=" text-[#194a63] font-bold">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full border border-[#c3bd2e]"
            name="title" 
          />
        </div>
        {/* Email */}
        <div className="relative h-32 w-full   items-center flex md:flex-row flex-col  gap-2 ">
          <label className="label">
            <span className="text-[#194a63] font-bold">Image Url:</span>
          </label>
          <input
            type="url"
            className="input input-bordered w-full  border border-[#c3bd2e]"
            name="image"
           />
        </div>
      </div>
     
      <div className="flex gap-4 md:flex-row flex-col">
        {/* Description */}
      <div className="relative h-32 w-full  flex md:flex-row flex-col items-center justify-center gap-2">
        <label htmlFor="des" className="text-[#194a63] font-bold">
        Description
        </label>
        <textarea
          className="textarea border border-[#c3bd2e] w-full"
          name="des" placeholder="Description"
          required
        ></textarea>
      </div>
      
        
      </div>

     
      
   
     

      <button
        type="submit"
        className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
      >
       Confirm
      </button>
    </form>
        </div>
            
        </div>
    )
};

export default AdminForum;