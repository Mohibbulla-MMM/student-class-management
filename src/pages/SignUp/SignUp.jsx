import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Container from "../../utils/Container";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignUp.css";
import bgImg from "../../assets/10001.webp";
import { FaUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import saveImage from "../../hooks/saveImage";
// import axios from "axios";
import saveImage from "../../hooks/saveImage";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import MediaLogin from "../SignIn/MediaLogin";
import useUserSave from "../../hooks/useUserSave";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { createUserWithEmail, userProfileUpdate } = useAuth();

  const [passwordShow, setPasswordShow] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  // const axiosBaseUrl = useAxios();
  // const navigate = useNavigate();
  // const location = useLocation();

  const handleSignUp = async (data) => {
    setLoading(true);
    // const userInfo = {
    //   name: data.name,
    //   email: data.email,
    //   image: data.image[0],
    // };

    const email = data.email;
    const password = data.password;
    const name = data.name;

    // console.log(userInfo);

    try {
      const imageFile = data.image[0];
      const res = await saveImage(imageFile);

      if (res.data.display_url) {
        console.log(res.data.display_url);
        await createUserWithEmail(email, password).then(() => {
          userProfileUpdate(name, res.data.display_url).then(() => {
            setLoading(false);
            toast.success("Sign up success");
          });
        });
        navigate(from, { replace: true });
        // console.log(res);
        const userData = {
          name: data.name,
          email: data.email,
          password: data.password,
          image: res.data.display_url,
          role: "user",
        };
        // console.log(userData);
        const userSaveRes = await useUserSave(userData);
        console.log(userSaveRes);
      }

    
    
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-white    min-h-screen py-16 text-gray-800 z-20"
    >
      <Helmet>
        <title>SignUp || EasyTeach</title>
      </Helmet>
      <Container>
        <div className="p-4 sm:px-6 shadow-2xl my-8 rounded-xl max-w-lg  mx-auto bg-whitebg-opacity-80">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <div className="  min-w-[300px]  max-w-lg    rounded-xl mx-auto ">
            {/* login form  */}
            <div>
              <h1 className="text-3xl font-semibold my-7 text-black">
                Sign Up{" "}
              </h1>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="space-y-6">
                  {/* name field */}
                  <div className="mm-input-design text-xl relative">
                    <input
                      // ref={emailRef}
                      {...register("name")}
                      name="name"
                      type="text"
                      required
                      className="bg-transparent"
                    />
                    <span
                      // onClick={handleSpan}
                      className=" bg-white
                        px-2  text-gray-800 border-transparent border-2  "
                    >
                      Name
                    </span>
                  </div>

                  {/* email field */}
                  <div className="mm-input-design text-xl relative">
                    <input
                      // ref={emailRef}
                      name="email"
                      type="text"
                      required
                      {...register("email")}
                      className="bg-transparent"
                    />
                    <span
                      // onClick={handleSpan}
                      className=" bg-white
                        px-2  text-gray-800 border-transparent border-2  "
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
                      {...register("password", { required: true })}
                      className="  bg-transparent  rounded-lg outline-none border-2 border-gray-300 
                    focus:border-teal-500  
                    valid:border-teal-500 
                    
                    absolute top-0 left-0 z-10
                    p-3 px-4 text-md"
                    />
                    <span
                      // onClick={handleSpan}
                      className=" bg-white
                      px-2  text-gray-800 border-transparent border-2    "
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

                  {/* Image upload field */}
                  <label className="mm-input-design text-xl relative block cursor-pointer border-dashed border-2 border-gray-300 rounded-lg ">
                    <input
                      name="image"
                      type="file"
                      required
                      {...register("image")}
                      className=" bg-transparent  rounded-lg outline-none   border-gray-300  text-transparent 
                    focus:border-teal-500  
                    valid:border-teal-500 
                    absolute top-0 left-0 z-10
                    p-3 px-4 text-md"
                    />
                    <div className="w-full bg-white h-[55px] flex  items-center px-6 gap-2">
                      <p className="block text-teal-600">
                        <FaUpload />
                      </p>
                      <p className="block">Picture Upload</p>
                    </div>
                  </label>

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

                  {/* sign up button */}
                  <button
                    type="submit"
                    className="btn btn-accent btn-block btn-outline border-2 text-xl"
                  >
                    {loading ? (
                      <span className="animate-spin">
                        <ImSpinner9 />
                      </span>
                    ) : (
                      <span>Sign Up</span>
                    )}
                  </button>

                  <div>
                    Already have an account?{" "}
                    <Link
                      to="/sign-in"
                      className=" btn-link cursor-pointer text-teal-600"
                    >
                      Login please
                    </Link>
                  </div>
                </div>
              </form>

              {/* or title  */}
              <div className="relative flex justify-center items-center py-4 ">
                <span className="p-2 btn btn-sm btn-ghost border-2 border-gray-500  btn-circle    bg-white hover:bg-white  capitalize z-10 ">
                  or
                </span>
                <span className="absolute w-full h-[2px] bg-gray-500"></span>
              </div>
              {/* media login */}
              <div>
                <MediaLogin />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
