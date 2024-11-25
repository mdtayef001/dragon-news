import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavBar = () => {
  return (
    <section className="space-y-5">
      <SocialLogin />
      <FindUs />
    </section>
  );
};

export default RightNavBar;
