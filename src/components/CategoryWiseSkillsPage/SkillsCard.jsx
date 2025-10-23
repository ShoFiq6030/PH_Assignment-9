import React from "react";
import { Link } from "react-router";

export default function SkillsCard({ skill }) {
  // "skillId": "s1",
  //     "skillName": "Beginner Guitar Lessons",
  //     "providerId": "u1",
  //     "providerName": "Alex Martin",
  //     "price": 20,
  //     "rating": 4.8,
  //     "slotsAvailable": 3,
  //     "description": "Acoustic guitar classes for complete beginners focusing on chords and rhythm.",
  //     "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  //     "category": "Music"
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
    <div className="card card-side bg-base-100 shadow-sm w-[500px] hover:scale-102 transition-transform duration-300">
      <figure className="w-1/2">
        <img src={image} alt={skillName} />
      </figure>
      <div className="card-body w-1/2 ">
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
