import React from "react";
import { Link } from "react-router";

export default function SkillsCard({ skill }) {
 
  const {
    skillId,
    skillName,
    providerName,
    price,
    rating,
    slotsAvailable,
    description,
    image,
  } = skill;

  return (
    <div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-sm w-[300px] lg:w-[500px]  hover:scale-102 transition-transform duration-300">
      <figure className=" w-full h-40 lg:h-full lg:w-1/2 rounded-lg">
        <img src={image} alt={skillName} />
      </figure>
      <div className="card-body lg:w-1/2 flex flex-col items-center justify-center ">
        <h2 className="card-title">{skillName}</h2>
        {/* <p className="text-gray-500">{description}</p> */}
        <p className="hover:underline cursor-pointer font-semibold ">
          Author: {providerName}
        </p>
        <p>Rating: {rating}</p>
        <p>Available Slot: {slotsAvailable}</p>
        <p>Price: {price}$</p>

        <div className="card-actions justify-end">
          <Link
            to={`/skills/${skillId}`}
            className="btn custom-bg-color-primary w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
