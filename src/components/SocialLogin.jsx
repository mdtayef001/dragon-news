import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      <h2 className="font-semibold text-xl mb-5">Login With</h2>
      <div className="grid gap-2">
        <button className="btn bg-white text-red-300 border-red-300 hover:bg-white">
          <FaGoogle />
          Login with google
        </button>
        <button className="btn text-white">
          <FaGithub />
          Login with github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
