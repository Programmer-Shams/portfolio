import { Button } from "@/components/ui/button";
import {motion} from 'framer-motion'
import Link from "next/link";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Component() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12  md:w-full w-[630px] border-b">
      <div className="flex flex-col md:flex-row justify-between gap-8 pt-5  w-full">
        <motion.div
        whileInView={{ x: [-200, 50, 0], opacity: [0, 0, 1] }}
         className="space-y-1 w-full py-20 md:py-0 px-10 sm:w-full lg:w-[55%] md:w-[30%] justify-center flex gap-5 flex-col bg-bg_secondary rounded-lg  md:h-[600px]">
          <h2 className="text-3xl font-semibold text-center md:text-left">Work Participation</h2>
          <p className="text-textColor mt-7 text-[23px] leading-[30px] text-center lg:text-left  lg:text-[17px] lg:leading-[25px]">
          Take a trip through my career, where I've not only paved the
           way but also reached important goals, taken on different roles,<span className=" hidden md:block">worked on impressive projects, and accomplished notable things.
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with growth and innnovation.</span>
          </p>
          <a href='#projects' className=" bg-secondary p-2 rounded-md text-center text-white w-[100px] hidden md:block ">See More</a>
        </motion.div>
        <div className="space-y-8 w-full px-5 md:w-[50%]">
          <motion.div
           whileInView={{ y: [-350, -50, 0], opacity: [0, 0, 1] }}
           transition={{ duration: 0.5 }}
           className="flex items-center space-x-4">
            <PenToolIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-blue-600 text-[20px]">2022 - 2023</p>
              <p className="text-gray-600 text-[20px] md:text-base">Alx Academy - Front-End Developer</p>
              <p className="text-textColor text-[21px] md:text-base">
              I attended ALX's 12-month Software Engineering program, specializing in Front-End Development. 
              Where I collaborated on different projects like <span className=" text-secondary">Airbnb clone</span>, contributing to the development of dynamic UI interfaces.
              </p>
            </div>
          </motion.div>
          <hr className="border-t border-gray-200" />
          <motion.div
          whileInView={{ y: [-350, -50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.8 }}
           className="flex items-center space-x-4">
            <CodeIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Front-End Developer</h3>
              <p className="text-blue-600 text-[20px]">2023</p>
              <p className="text-gray-600 text-[20px]">MalHub - Front-End Intern</p>
              <p className="text-textColor text-[21px] md:text-base">
              I functioned as a Front-End Developer Intern at MalHub, where I  build a dynamic web applications.
              I had the priviledge of building 4 full-stack applications using modern web technologies such as <span className=" text-secondary">React NextJS And Typescript</span>, .
              </p>
            </div>
          </motion.div>
          <hr className="border-t border-gray-200" />
          <motion.div
          whileInView={{ y: [-350, -50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 1.1 }}
           className="flex items-center space-x-4">
            <LayersIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Front-End Developer</h3>
              <p className="text-blue-600 text-[20px]">2023 - 2024</p>
              <p className="text-gray-600 text-[20px]">TechnoHacks  - Front-End Intern</p>
              <p className="text-textColor text-[21px] md:text-base">
              I worked as an Intern at TechnoHacks, where I learn from industry
               experts and gain real life practical experience, learning how to manage <span className=" text-secondary">scalability</span> and  <span className="text-secondary">Performance Optimization</span> of web Applications .
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Button className="text-blue-600 bg-transparent"></Button>
        </div>
      </div>
    </div>
  );
}

function CodeIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayersIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function PenToolIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}
