import { useContext } from "react";
import SocailLogin from "../../Shared/SocailLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import "../../Styles/box.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const [error, setError] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signIn(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",

          title: "Successfully register by email and password ",

          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errormessage = error.message;
        errormessage && setError("Give correct  email and password");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Fit-Flex-Online| Login</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="hero-content text-center text-neutral-content w-full ">
          <div className="md:w-2/4 w-full ">
            <h2 className="text-[#193e51] my-10 font-bold md:text-4xl text-2xl">
              Please Log in{" "}
            </h2>
            <div className=" rounded-3xl ">
              <div className="card w-full  shadow-2xl  box ">
                <form className="card-body text-xl " onSubmit={handleLogIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl text-[#193e51]">
                        Email:
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input login input-bordered  text-black bg-white  "
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl text-[#193e51]">
                        Password:
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input login input-bordered  text-black bg-white"
                      name="password"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 ">{error}</p>}
                  <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-[#193e51] to-[#146666]hover:bg-white hover:border hover:border-[#193e51] text-[#fcf540] font-bold ">
                      Login
                    </button>
                  </div>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-black">
                      OR
                    </p>
                  </div>

                  {/* <!-- Social login buttons --> */}

                  {/* <!-- Google --> */}
                  <SocailLogin></SocailLogin>

                  <p className="text-black">
                    Do not have any account ? Go to{" "}
                    <Link
                      className="text-[#c3bd2e] font-bold underline"
                      to="/register"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
