import { SkillsInfo } from "@/constants";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
  return (
    <section className="bg-white h-full my-8 w-[630px] sm:w-full lg:h-[100vh] pt-14" id="resume">
      <h1 className="text-3xl text-center font-[600]">Work Expertise</h1>
      <div className="w-full flex flex-col lg:flex-row lg:mt-[6rem]">
        <div className="px-10 sm:w-full lg:w-[55%]">
          <h1 className="text-4xl leading-[50px] mt-16 text-center lg:text-left">
            Let's Explore Popular
            <br />
            <span className="text-secondary">Skills & Experience</span>
          </h1>
          <p className="text-textColor mt-5 text-xl text-center lg:text-left lg:text-xl leading-[40px]">
              As an experienced software developer, I bring expertise across all
              stages of the development cycle for dynamic web projects.I excel
              in using cutting-edge skills and technologies to deliver
              high-performance solutions.
            </p>
        </div>

        <div className="lg:w-[70%]  flex flex-row items-center justify-center mt-[6.5rem] lg:mt-0 gap-10 flex-wrap">
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
