import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category({ data }) {
  return (
    <section className=" my-10">
      <h4 className="text-center font-bold text-2xl">Categories</h4>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
        {data.map((category) => (
          <CategoryCard key={category.categoryId} category={category} />
        ))}
      </div>
    </section>
  );
}
