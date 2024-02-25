import { Button } from "@/components/ui/button";
interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function Component() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12  md:w-full w-[630px] border-b">
      <div className="flex flex-col md:flex-row justify-between gap-8 pt-5  w-full">
        <div className="space-y-2 w-full py-20 md:py-0 px-10 sm:w-full lg:w-[55%] md:w-[30%] justify-center flex flex-col bg-bg_secondary rounded-lg">
          <h2 className="text-3xl font-semibold text-center md:text-left">Work Participation</h2>
          <p className="text-textColor mt-7 text-[23px] leading-[30px] text-center lg:text-left  lg:text-[17px] lg:leading-[25px]">
          Take a trip through my career, where I've not only paved the
           way but also reached important goals, taken on different roles,<span className=" hidden md:block">worked on impressive projects, and accomplished notable things.
            From coding in the late hours to collaborating with talented teams,
            my career has been a dynamic adventure filled with growth and innnovation.</span>
          </p>
          <Button className="bg-blue-600 text-white w-[100px] hidden md:block ">See More</Button>
        </div>
        <div className="space-y-8 w-full px-5 md:w-[50%]">
          <div className="flex items-center space-x-4">
            <PenToolIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">UX Designer</h3>
              <p className="text-blue-600">2015 - 2018</p>
              <p className="text-gray-600">Vivo - Senior Designer</p>
              <p className="text-textColor text-[20px] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada tellus lorem, et condimentum.
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200" />
          <div className="flex items-center space-x-4">
            <CodeIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-blue-600">2012 - 2015</p>
              <p className="text-gray-600">Oppo - HR Manager</p>
              <p className="text-textColor text-[20px] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada tellus lorem, et condimentum.
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200" />
          <div className="flex items-center space-x-4">
            <LayersIcon className="text-gray-400 h-12 w-12 bg-white rounded-full p-3 shadow-lg" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Graphic Designer</h3>
              <p className="text-blue-600">2012 - 2010</p>
              <p className="text-gray-600">Apple - Testor</p>
              <p className="text-textColor text-[20px] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                malesuada tellus lorem, et condimentum.
              </p>
            </div>
          </div>
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
