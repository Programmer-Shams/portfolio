import React from 'react';

interface ButtonProps {
  BtnText: string;
  BtnIcon?: React.ReactNode;
  width?: string;
  w2?: string;
}

const Button = ({ BtnText, BtnIcon, width = 'auto', w2 }: ButtonProps) => {
  return (
    <button
      className={`w-${width} bg-secondary py-2 px-4 rounded-lg`}
      style={{ width: width === 'auto' ? 'auto' : `${width}px` }}
    >
      <p className={`text-white text-2xl lg:text-base items-center justify-center flex flex-row gap-2 font-[500]`}>{BtnText}<span>{BtnIcon}</span> </p>
    </button>
  );
};

export default Button;
