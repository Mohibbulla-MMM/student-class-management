// import { useRef } from "react";
import toast from "react-hot-toast";
import "./Login.css";
import MediaLogin from "./MediaLogin";
import Container from "../../layout/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loginUserEmailAndPassword } = useAuth();
  const [passwordShow, setPasswordShow] = useState(false);
  // const axiosBaseUrl = useAxios();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginForm = (e) => {
    const loginTostId = toast.loading("Please wait");
    e.preventDefault();
    // console.log(e);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // user login firebase function

    loginUserEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        toast.success("Login Success", { id: loginTostId });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed", { id: loginTostId });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login || Self-Help Insight</title>
      </Helmet>
      <Container>
        <div className="p-4 sm:px-6 shadow-2xl my-8 rounded-xl max-w-lg  mx-auto">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <div className="  min-w-[300px]  max-w-lg  bg-white dark:bg-gray-800 rounded-xl mx-auto ">
            {/* login form  */}
            <div>
              <h1 className="text-3xl font-semibold my-7 ">Login </h1>
              <form onSubmit={handleLoginForm}>
                <div className="space-y-6">
                  {/* email field */}
                  <div className="mm-input-design text-xl relative">
                    <input
                      // ref={emailRef}
                      name="email"
                      type="text"
                      required
                      className="bg-white"
                    />
                    <span
                      // onClick={handleSpan}
                      className=" bg-white dark:bg-gray-800
                    dark:text-white    px-2  border-transparent border-2   "
                    >
                      Email
                    </span>
                  </div>

                  {/* password field */}
                  <div className="mm-input-design text-xl relative">
                    <input
                      // ref={emailRef}
                      name="password"
                      type={`${passwordShow ? "text" : "password"}`}
                      required
                      className="  bg-transparent dark:text-white rounded-lg outline-none border-2 border-gray-300 dark:border-gray-500
                    focus:border-teal-500  dark:focus:border-teal-500 
                    valid:border-teal-500 
                    dark:valid:border-teal-500 
                    absolute top-0 left-0 z-10
                    p-3 px-4 text-md"
                    />
                    <span
                      // onClick={handleSpan}
                      className=" bg-white dark:bg-gray-800
                    dark:text-white    px-2  border-transparent border-2   "
                    >
                      Password
                    </span>
                    {/* password show and hidden toggle eye */}
                    <div
                      onClick={() => setPasswordShow(!passwordShow)}
                      className={` hover:text-teal-600 absolute top-1/2 right-12 transform -translate-y-1/2 z-10  
                    cursor-pointer
                    `}
                    >
                      <span
                        className={`
                      ${passwordShow ? "block" : "hidden"}`}
                      >
                        <AiOutlineEye></AiOutlineEye>
                      </span>
                      <span
                        className={` ${
                          passwordShow ? "hidden" : "block"
                        }        `}
                      >
                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                      </span>
                    </div>
                  </div>
                  {/* terms and condition */}
                  <div>
                    By continuing, you agree to Our{" "}
                    <span className=" btn-link text-teal-600 cursor-pointer">
                      Conditions of Use
                    </span>{" "}
                    and{" "}
                    <span className=" btn-link cursor-pointer text-teal-600">
                      Privacy Notice.
                    </span>
                  </div>
                  {/* login button */}
                  <button className="btn btn-accent btn-block btn-outline border-2">
                    Login
                  </button>

                  <div>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className=" btn-link cursor-pointer text-teal-600"
                    >
                      Create an account
                    </Link>
                  </div>
                </div>
              </form>
              {/* or title  */}
              <div className="relative flex justify-center items-center py-4 ">
                <span className="p-2 btn btn-sm btn-ghost border-2 border-gray-500  btn-circle    bg-white hover:bg-white dark:bg-gray-800  capitalize z-10 ">
                  or
                </span>
                <span className="absolute w-full h-[2px] bg-gray-500"></span>
              </div>
              {/* media login */}
              <div>
                <MediaLogin></MediaLogin>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
