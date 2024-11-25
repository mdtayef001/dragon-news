import moment from "moment";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-3 py-6 mb-7">
      <div className="logo">
        <img className="w=[300px]" src={logoImg} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <small className="text-gray-500">
        {moment().format("dddd, MMMM Do YYYY")}
      </small>
    </section>
  );
};

export default Header;
