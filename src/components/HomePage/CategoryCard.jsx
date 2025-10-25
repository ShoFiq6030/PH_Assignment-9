import { Link } from "react-router";

export default function CategoryCard({ category }) {
  return (
    <div className="card bg-gray-100 max-w-96 shadow-sm hover:scale-103 transition-transform duration-400">
      <div className="card-body">
        <h2 className="card-title underline">{category.name}</h2>
        <p>{category.description}</p>
      </div>

      <figure className="relative cursor-pointer overflow-hidden group">
        <Link to={`/category/${category.name}`}>
          <img
            src={category.icon}
            alt={category.name}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <button className="btn btn-neutral btn-outline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border-white ">
              Explore
            </button>
          </div>
        </Link>
      </figure>
    </div>
  );
}
