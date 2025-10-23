import React, { useEffect, useState } from "react";
import SkillsCard from "../CategoryWiseSkillsPage/SkillsCard";

export default function PopularSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/skills.json");
        const skills = await res.json();

        const filteredSkills = skills.filter((skills) => {
          return skills.rating >= 4.5;
        });

        setSkills(filteredSkills);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="container mx-auto my-10">
      <div className="my-10 text-center font-bold text-2xl">PopularSkills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {skills.map((skill) => (
          <SkillsCard skill={skill} key={skill.skillId} />
        ))}
      </div>
    </section>
  );
}
