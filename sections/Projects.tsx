import { ProjectInfo } from "@/constants";
import { useState } from "react";
import ProjectBox from "../components/ProjectBox";
import Link from "next/link";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState(ProjectInfo);
  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFiler = (item: string) =>{
    setActiveFilter(item)
      if(item === 'All') {
        setFilterWork(works)
      } else{
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
  }

  return (
    <section className="bg-bg_secondary w-full h-[120vh]" id="projects">
      <div className="pt-10">
        <h1 className="text-3xl text-center font-[600]">
          My Creative <span className="text-secondary">Portfolio</span>
        </h1>
        <p className="text-textColor mt-5 text-base text-center leading-[30px]">
          Explore My Popular Projects
        </p>

        <div className="flex flex-row items-center justify-center gap-5 mt-6">
          {[ "All", "Web App", "Mobile App", "React JS", "Next JS","UI/UX" ].map(
            (item, i) => (
              <div
                key={i}
                onClick={() => handleWorkFiler(item)}
                className={`bg-white py-[0.5rem] px-[1rem] rounded-md cursor-pointer`}
                style={{ backgroundColor: activeFilter === item ? "#017BFF" : "", color: activeFilter === item ? 'white' : 'black' }}
              >
                {item}
              </div>
            )
          )}
        </div>

        <div className="flex flex-row justify-center mt-10 flex-wrap gap-10">
          {filterWork.map((project, i) => (
            <ProjectBox
              key={i}
              imgUrl={project.imgUrl}
              name={project.name}
              projectStackIcons={project.projectStackIcons}
              projectSlider={project.projectSlider}
              description={project.description}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        {/* <Link href='https://github.com/Programmer-Shams' className="bg-secondary rounded-md flex items-center gap-3 w-20 items-center justify-center">
          See more 
            </Link> */}
      </div>
    </section>
  );
};

export default Projects;

