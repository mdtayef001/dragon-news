import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: newsData } = useLoaderData();

  if (newsData.length === 0) {
    return (
      <h1 className="text-5xl text-red-400 font-bold flex items-center justify-center">
        No News found!
      </h1>
    );
  }

  return (
    <section>
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
      <div className="p-2 ">
        {newsData.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default CategoryNews;
