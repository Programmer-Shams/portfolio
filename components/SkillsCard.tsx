import Image from "next/image";

interface CardProps {
  Boximage: string;
  BoxText: string;
  BoxPercentage: number;
}
const SkillsCard = ({ Boximage, BoxText, BoxPercentage }: CardProps) => {
  return (
    <div className="w-[100px] text-center items-center justify-center relative">
      <p className="absolute right-2 bg-[#E2EEFB] text-secondary text-[12px] font-semibold w-[2.2rem] p-[1px] h-[18px] rounded-md items-center">{BoxPercentage}%</p>
      <div className="rounded-full bg-bg_secondary w-[80px] h-[80px] items-center justify-center flex">
        <Image
          src={Boximage}
          alt="skills"
          width={55}
          height={55}
          className="rounded-full"
        />
      </div>
      <p className="mt-1 -ml-3 text-base font-bold">{BoxText}</p>
      {/* <p className="absolute">{BoxPercentage}%</p> */}
    </div>
  );
};

export default SkillsCard;
