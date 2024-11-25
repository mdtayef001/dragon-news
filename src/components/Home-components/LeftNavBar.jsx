import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">All Category</h2>
      <div id="category" className="grid gap-2">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            className="btn bg-white text-black hover:bg-gray-400 hover:text-white"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;
