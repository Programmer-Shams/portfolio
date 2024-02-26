import Image from "next/image";
import { Transition, motion } from "framer-motion";


type MotionProps = {
  y: number[];
  opacity: number[];
};
interface CardProps {
  Boximage: string;
  BoxText: string;
  BoxPercentage?: number;
  motionProps: MotionProps | undefined 
  duration: Transition | undefined;
}
const SkillsCard = ({ Boximage, BoxText, BoxPercentage, motionProps, duration }: CardProps) => {
  return (
    <motion.div
    whileInView={motionProps}
    transition={duration}
     className="w-[100px] text-center items-center justify-center relative">
      {/* <p className="absolute right-2 bg-[#E2EEFB] text-secondary text-[12px] font-semibold w-[2.2rem] p-[1px] h-[18px] rounded-md items-center">{BoxPercentage}%</p> */}
      <motion.div 
      // whileInView={motionProps}
      // transition={duration}
      className="rounded-full bg-bg_secondary w-[80px] h-[80px] items-center justify-center flex border">
        <Image
          src={Boximage}
          alt="skills"
          width={55}
          height={55}
          className="rounded-full"
        />
      </motion.div>
      <p className="mt-1 -ml-3 text-base font-semibold">{BoxText}</p>
      {/* <p className="absolute">{BoxPercentage}%</p> */}
    </motion.div>
  );
};

export default SkillsCard;
