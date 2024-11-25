import facebookImg from "../assets/fb.png";
import instaImg from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const FindUs = () => {
  return (
    <>
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button
          className="btn join-item justify-start
         bg-white text-[#706F6F] hover:bg-gray-400 hover:text-white border-gray-300"
        >
          <span className="flex items-center gap-4">
            <img src={facebookImg} alt="" />
            Facebook
          </span>
        </button>
        <button className="btn join-item justify-start bg-white text-[#706F6F] hover:bg-gray-400 hover:text-white border-gray-300">
          <span className="flex items-center gap-4">
            <img src={twitter} alt="" />
            Twitter
          </span>
        </button>
        <button className="btn join-item justify-start bg-white text-[#706F6F] hover:bg-gray-400 hover:text-white border-gray-300">
          <span className="flex items-center gap-4">
            <img src={instaImg} alt="" />
            Instagram
          </span>
        </button>
      </div>
    </>
  );
};

export default FindUs;
