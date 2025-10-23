import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SkillsCard from "../components/CategoryWiseSkillsPage/SkillsCard";
import Loading from "../components/common/Loading";

export default function CategoryWiseSkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/skills.json");
        // const res2 = await fetch("/data/categories.json");
        const skills = await res.json();
        // const categories = await res2.json();
        // console.log(data);
        const filteredSkills = skills.filter(
          (skill) => skill.category === category
        );

        console.log("Filtered Skills:", filteredSkills);
        setSkills(filteredSkills);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="h-screen ">
      <div className="container m-auto grid grid-cols-2 my-10 gap-5">
        {skills.map((skill) => (
          <SkillsCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </section>
  );
}
