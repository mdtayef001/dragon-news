import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Log out successful");
      })
      .catch((error) => {
        console.log(` An ${error.message} happened.`);
      });
  };

  return (
    <section className="flex justify-between items-center mb-16">
      <div>
        <p>{user && user.displayName}</p>
      </div>
      <div className="space-x-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <p>{user && user.email}</p>
          <div>
            <img src={userImg} alt="" />
          </div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-neutral text-white"
            >
              Log out
            </button>
          ) : (
            <Link to={"/auth/login"}>
              <button className="btn btn-neutral text-white">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
