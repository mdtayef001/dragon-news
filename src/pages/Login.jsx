// react icons
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [Error, setError] = useState({});
  const location = useLocation();

  const handleLogIn = () => {
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({ ...Error, logIn: errorMessage });
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[50%]  mx-auto space-y-5 bg-[#fcf8f8d8] p-16 rounded-xl"
      >
        <h2 className="text-center font-bold text-3xl mb-12">
          Login your account
        </h2>
        <div className="divider"></div>
        <div className="">
          <label htmlFor="name" className="text-[15px] font-[400]">
            Email
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className={`peer bg-white border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300 ${
              Error.logIn ? "border-red-400" : ""
            }`}
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="text-[15px] text-text font-[400]"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={isEyeOpen ? "text" : "password"}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`peer bg-white border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300 ${
                Error.logIn ? "border-red-400" : ""
              }`}
            />

            {isEyeOpen ? (
              <IoEyeOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(false)}
              />
            ) : (
              <IoEyeOffOutline
                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                onClick={() => setIsEyeOpen(true)}
              />
            )}
          </div>
        </div>

        {Error.logIn ? (
          <div role="alert" className="alert alert-error">
            <span>{Error.logIn}</span>
          </div>
        ) : (
          ""
        )}

        <button onClick={handleLogIn} className="btn w-full text-white text-xl">
          Login
        </button>
        <p className="font-semibold text-[#706F6F] text-center mt-5">
          Dont’t Have An Account ?{" "}
          <Link to={"/auth/register"} className="text-[#F75B5F]">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
