import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useParams } from "react-router";
import Loading from "../components/common/Loading";
import BookingModal from "../components/SkillsDetailsPage/BookingModal";

export default function SkillsDetailsPage() {
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const { skillId } = useParams();

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const response = await fetch("/data/skills.json");
        const data = await response.json();
        const skillDetails = data.find((skill) => skill.skillId === skillId);

        setSkill(skillDetails);
      } catch (error) {
        console.error("Error fetching skill details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkillDetails();
  }, [skillId]);

  console.log(skill);

  const handleToggleModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      if (!openModal) modal.showModal();
      else modal.close();
    }
    setOpenModal(!openModal);
  };
  const handleSubmitBooking = (formData) => {
    toast.success("Booking Successful!");
    console.log(formData);
    handleToggleModal();
    setIsBooked(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (!skill) {
    return <div>NO Details Found</div>;
  }

  // "skillId": "s1",
  //       "skillName": "Beginner Guitar Lessons",
  //       "providerId": "u1",
  //       "providerName": "Alex Martin",
  //       "price": 20,
  //       "rating": 4.0,
  //       "slotsAvailable": 3,
  //       "description": "Acoustic guitar classes for complete beginners focusing on chords and rhythm.",
  //       "image": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  //       "category": "Music"

  return (
    <section className="container h-screen bg-white">
      {
        <BookingModal
          handleToggleModal={handleToggleModal}
          onSubmitBooking={handleSubmitBooking}
        />
      }
      <div className="h-1/2  ">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="h-full  object-cover "
        />
      </div>

      <div className="h-1/2 text-center flex flex-col gap-4 my-5 items-center ">
        <h1 className="text-2xl font-bold">{skill.skillName}</h1>
        <p>Author: {skill.providerName}</p>
        <p className="text-gray-500">{skill.description}</p>
        <p>Price: ${skill.price}</p>
        <p>Rating: {skill.rating} ⭐</p>
        <p>Slots Available: {skill.slotsAvailable}</p>
        <button
          className={`btn ${
            isBooked
              ? "bg-green-500 disabled cursor-not-allowed"
              : "custom-bg-color-primary"
          } w-1/2`}
          onClick={handleToggleModal}
          disabled={isBooked}
        >
          {isBooked ? <p className="text-white">Booked</p> : "Book Now"}
        </button>
      </div>
    </section>
  );
}
