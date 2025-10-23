import React from "react";
import Carousel from "../components/HomePage/Carousel";
import { useLoaderData } from "react-router";
import Category from "../components/HomePage/Category";
import PopularSkills from "./../components/HomePage/PopularSkills";

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Carousel />

      <Category data={data} />
      <PopularSkills />
    </>
  );
}
