// react icons
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [hintDropdownOpen, setHintDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [StrongPassword, setStrongPassword] = useState("");
  const [signal, setSignal] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
    length: false,
    strong: false,
  });

  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStrongPasswordChecker = (e) => {
    setPassword(e.target.value);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinimumLength = /^.{8,}$/.test(password);

    setSignal({
      lowercase: hasLowerCase,
      uppercase: hasUpperCase,
      number: hasNumber,
      symbol: hasSymbol,
      length: hasMinimumLength,
      strong:
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSymbol &&
        hasMinimumLength,
    });

    setStrongPassword(password);
  };

  const handleRegister = () => {
    if (email === "") {
      return;
    }

    const isValid = Object.values(signal).every((value) => value === true);

    if (!isValid) {
      return;
    }

    console.log({ email, StrongPassword, userName });

    createNewUser(email, StrongPassword)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: userName })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
          Register your account
        </h2>
        <div className="divider"></div>
        {/* Name input */}
        <div className="">
          <label htmlFor="name" className="text-[15px] font-[400]">
            Your Name
          </label>

          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Name"
            className="border-[#e5eaf2] bg-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
          />
        </div>
        {/* email input */}
        <div className="">
          <label htmlFor="name" className="text-[15px] font-[400]">
            Email
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="border-[#e5eaf2] bg-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
            required
          />
        </div>

        {/* password input */}

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
              onChange={handleStrongPasswordChecker}
              onFocus={() => setHintDropdownOpen(true)}
              onBlur={() => {
                setHintDropdownOpen(false);
              }}
              placeholder="Password"
              className="peer bg-white border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
            />

            <div
              className={`${
                hintDropdownOpen
                  ? "opacity-100 translate-y-0 z-30"
                  : "opacity-0 translate-y-[-10px] z-[-1]"
              } bg-white shadow-md rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}
            >
              <h3 className="text-gray-900 font-[500] text-[1rem]">
                Your password must contain:
              </h3>

              <div className="w-full mt-2 flex-col flex gap-[6px]">
                <div
                  className={`${
                    signal.length ? "text-green-500" : "text-gray-500"
                  } text-[0.8rem] flex items-center gap-[8px]`}
                >
                  {signal.length ? (
                    <MdDone className={`text-[1rem]`} />
                  ) : (
                    <RxCross1 />
                  )}
                  Minimum number of characters is 8.
                </div>
                <div
                  className={`${
                    signal.uppercase ? "text-green-500" : "text-gray-500"
                  } text-[0.8rem] flex items-center gap-[8px]`}
                >
                  {signal.uppercase ? (
                    <MdDone className={`text-[1rem]`} />
                  ) : (
                    <RxCross1 />
                  )}
                  Should contain uppercase.
                </div>
                <div
                  className={`${
                    signal.lowercase ? "text-green-500" : "text-gray-500"
                  } text-[0.8rem] flex items-center gap-[8px]`}
                >
                  {signal.lowercase ? (
                    <MdDone className={`text-[1rem]`} />
                  ) : (
                    <RxCross1 />
                  )}
                  Should contain lowercase.
                </div>
                <div
                  className={`${
                    signal.number ? "text-green-500" : "text-gray-500"
                  } text-[0.8rem] flex items-center gap-[8px]`}
                >
                  {signal.number ? (
                    <MdDone className={`text-[1rem]`} />
                  ) : (
                    <RxCross1 />
                  )}
                  Should contain numbers.
                </div>
                <div
                  className={`${
                    signal.symbol ? "text-green-500" : "text-gray-500"
                  } text-[0.8rem] flex items-center gap-[8px]`}
                >
                  {signal.symbol ? (
                    <MdDone className={`text-[1rem]`} />
                  ) : (
                    <RxCross1 />
                  )}
                  Should contain special characters.
                </div>
              </div>
            </div>

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

        <button
          onClick={handleRegister}
          className="btn w-full text-white text-xl"
        >
          Register
        </button>
        <p className="font-semibold text-[#706F6F] text-center mt-5">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-[#F75B5F]">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
