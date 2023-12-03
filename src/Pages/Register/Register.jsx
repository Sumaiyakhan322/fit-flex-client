import { useContext, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import SocailLogin from "../../Shared/SocailLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import '../../Styles/box.css'
const Register = () => {
    const axiosPublic=useAxiosPublic()
    const {createUser}=useContext(AuthContext)
    const [error, setError] = useState("");
    
    const navigate=useNavigate()
   
    const handleSubmit=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value
        setError("");
        if (password.length < 6) {
            setError("The length of your password must be more than 6 digit");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setError("Your password must have one Capital letter");
            return;
          } 
          createUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: `${name}`,
              photoURL: `${photo}`,
            })
              .then()
              .catch()
              const userInfo={name,email,role:'member'}
              console.log(userInfo);
              axiosPublic.post('/users',userInfo)
            .then(res=>{
              if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Successfully register by email and password ",
                  showConfirmButton: false,
                  timer: 1500,
                });
                
            e.target.reset();
            navigate("/");
              }
            })
          
            
          })
            .catch()
      };
       
    return (
        <div>
        
        <Helmet>
      <title>Fit-Flex-Online| Register</title>
     </Helmet>
        <div className="flex justify-center">
        <div className="hero-content text-center text-neutral-content md:w-1/2 w-full">
        
          <div className="card w-full  shadow-2xl  box">
          <h2 className='text-[#193e51] my-10 font-bold md:text-4xl text-2xl'>Please Register  </h2>
            <div>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Photo url</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo url" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-xl text-[#193e51]">Password</span>
                </label>
                <input type='password' name="password" placeholder="password" className="input input-bordered text-black" required />  
                {error && <p className="text-red-500">{error}</p>}
                
              </div>
              
              <div className="form-control mt-6 ">
               <input type="submit" className=' btn bg-gradient-to-r from-[#193e51] to-[#146666]hover:bg-white hover:border hover:border-[#193e51] text-[#fcf540] font-bold'  value={'Register'} />
              </div>
            </form>
            </div>
           <p className='text-black'>have already account <Link to='/login' className=" text-[#c3bd2e] font-bold underline">Log in</Link> </p>
            <SocailLogin></SocailLogin>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;