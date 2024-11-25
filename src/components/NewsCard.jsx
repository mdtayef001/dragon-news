import { FaEye, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <section className="mb-10">
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Author and Date */}
        <div className="flex items-center justify-between  text-sm p-4 text-gray-500 bg-[#F3F3F3]">
          <div className="flex items-center justify-center gap-5">
            <div className="w-10 h-10">
              <img className="rounded-full" src={news.author.img} alt="" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{news.author.name}</span>
              <span>{new Date(news.author.published_date).toDateString()}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="px-4 mt-2 text-xl font-bold text-gray-800 leading-tight">
          {news.title}
        </h2>

        {/* Image */}
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full px-4 object-cover mt-3 "
        />

        {/* Details */}
        <p className="px-4 mt-2 text-sm text-gray-600">{news.details}</p>

        {/* Read More */}
        <div className="px-4 mt-2">
          <Link
            to={`/news/${news._id}`}
            className="text-blue-500 hover:underline font-semibold"
          >
            Read More
          </Link>
        </div>

        {/* Footer Section */}
        <div className="px-4 py-3 mt-2 border-t flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1 text-yellow-400">
            <FaStar />
            <span className="text-gray-800">{news.rating.number}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
