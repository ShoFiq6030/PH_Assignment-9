import React from "react";
import Category from "../components/HomePage/Category";
import { useLoaderData } from "react-router";

export default function CategoryPage() {
  const data = useLoaderData();
  return (
    <div>
      <Category data={data} />
    </div>
  );
}
