import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <section className=" font-poppins ">
      <header className="container mx-auto pt-10 mb-20">
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
