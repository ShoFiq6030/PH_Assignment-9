import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category({ data }) {
  return (
    <div className="container m-auto grid grid-cols-4 gap-10 my-10">
      {data.map((category) => (
        <CategoryCard key={category.categoryId} category={category} />
      ))}
    </div>
  );
}
