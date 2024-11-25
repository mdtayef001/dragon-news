import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftNavBar from "../components/Home-components/LeftNavBar";
import RightNavBar from "../components/Home-components/RightNavBar";
import LatestNew from "../components/LatestNew";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <section className="font-poppins container mx-auto">
      <header>
        <Header />
        <LatestNew />
      </header>
      <nav>
        <NavBar />
      </nav>
      <main className="grid grid-cols-12 gap-5">
        <aside className="col-span-3 ">
          <LeftNavBar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNavBar />
        </aside>
      </main>
    </section>
  );
};

export default HomeLayout;
