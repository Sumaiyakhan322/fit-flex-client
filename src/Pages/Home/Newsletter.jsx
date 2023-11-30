
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Title from "../../Shared/Title";
import img1 from '../../assets/about/img3.avif'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Newsletter = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useContext(AuthContext)
    
  const  handleSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        console.log(name,email);
        const newsLetter={name,email,role:'newsLetter'}
        axiosPublic.post('/newsLetter',newsLetter)
        .then(res=>{
            if(res.data.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Successfully subscribe ${email} `,
                showConfirmButton: false,
                timer: 1500,
              });
            }
        })
        e.target.reset();
  }
          

    
    return (
        <div>
            <Title heading={'Subscribe Us Now'}></Title>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${img1})`}}>
  <div className="hero-overlay bg-opacity-60 bg-[#193e51]"></div>
  <div className=" text-center text-neutral-content">
  <div className="hero-content  flex-col lg:flex-row  ">
    <div className=" lg:text-left ">
      <h1 className="text-5xl font-bold text-[#c3bd2e]">Subscribe Now</h1>
      <p className="py-6 text-white">Do Not Miss Any Update</p>
    </div>
    <div className="card  w-full shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered text-black" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered text-black" name="email" required />
          
        </div>
        <div className="form-control mt-6">
        
               {!user ? <button
                  className="my-4 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-[#c3bd2e] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!"
                  
                >
                 Subscribe
                </button> :<div className="tooltip" data-tip="Already  Login to the website"><button
                  className="my-4 inline-block rounded-full border-2 border-[#c3bd2e] px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-black  "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href="#!" disabled
                >
                 Subscribe
                </button></div> }
              
        </div>
      </form>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Newsletter;