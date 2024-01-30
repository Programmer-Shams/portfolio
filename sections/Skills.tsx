import { SkillsInfo } from "@/constants";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <section className="w-full bg-white h-[80vh]">
      <h1 className="text-3xl font-[600] mt-10 text-center px-2">Work Expertise</h1>
      <div className="w-full flex flex-row mt-[6rem] ">
        <div className="ml-10 w-[40%] relative">
          <h1 className="text-4xl leading-[50px] mt-20">
            Let's Explore Popular
            <br />
            <span className="text-secondary">Skills & Experience</span>
            <p className="text-textColor mt-5 text-base leading-[30px]">
              As an experienced software developer, I bring expertise across all
              stages of the development cycle for dynamic web projects.I excel
              in using cutting-edge skills and technologies to deliver
              high-performance solutions.
            </p>
          </h1>
        </div>

        <div className="w-[70%] ml-[20rem] flex items-center gap-10 flex-wrap">
          {SkillsInfo.map((skill, i) => (
            <SkillsCard
              key={i}
              Boximage={skill.imgUrl}
              BoxPercentage={skill.percentage}
              BoxText={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
