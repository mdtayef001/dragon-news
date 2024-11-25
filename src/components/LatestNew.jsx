import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNew = () => {
  return (
    <div className="py-4 px-4 bg-[#F3F3F3] flex items-center gap-4 mb-8">
      <p className="py-2 px-6 bg-[#D72050] text-white text-xl font-medium">
        Latest
      </p>

      <Marquee pauseOnHover={true} className="space-x-5">
        <Link to={"/news"} className="text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <span className="mx-4">|</span>
        <Link to={"/news"} className="text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <span className="mx-4">|</span>
        <Link to={"/news"} className="text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <span className="mx-4">|</span>
      </Marquee>
    </div>
  );
};

export default LatestNew;
