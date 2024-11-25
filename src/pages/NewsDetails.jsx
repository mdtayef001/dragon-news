import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavBar from "../components/Home-components/RightNavBar";

import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { data } = useLoaderData();

  const news = data[0];

  return (
    <section className="font-poppins">
      <header>
        <Header />
      </header>
      <main className="container mx-auto">
        <section className="grid grid-cols-12 gap-6">
          <section className="col-span-9">
            <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
            {/* card */}
            <div className="card bg-white text-black border p-7 ">
              <figure className="w-full">
                <img className="w-full" src={news.image_url} alt={news.title} />
              </figure>
              <div className="card-body p-0 mt-5">
                <h2 className="card-title font-bold text-2xl">{news.title}</h2>
                <p className="text-[#706F6F]">{news.details}</p>
                <div className="card-actions mt-8">
                  <Link
                    to={"/"}
                    className="btn border-none rounded-none bg-[#D72050] text-white"
                  >
                    <FaArrowLeft /> All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <aside className="col-span-3">
            <RightNavBar />
          </aside>
        </section>
      </main>
    </section>
  );
};

export default NewsDetails;
