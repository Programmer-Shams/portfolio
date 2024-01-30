import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="w-full h-[80vh] bg-white flex justify-between items-center p-10">
      <div className="w-1/3">
        <h1>Work Experience</h1>
        <p className="text-textColor text-base">
          Obviously I'm a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center w-1/2">
        <Image src="/assets/images/exp1.png" width={600} height={600} alt="expimg" />
        <Image src="/assets/images/exp2.png" width={600} height={600} alt="expimg" />
        <Image src="/assets/images/exp3.png" width={600} height={600} alt="expimg" />
      </div>
    </section>
  );
};

export default Experience;
