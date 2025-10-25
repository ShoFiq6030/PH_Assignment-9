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

  // console.log(skill);

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
    // console.log(formData);
    handleToggleModal();
    setIsBooked(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (!skill) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No Details Found </p>
      </div>
    );
  }

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
