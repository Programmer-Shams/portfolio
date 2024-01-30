import React from 'react';

interface ButtonProps {
  BtnText: string;
  BtnIcon?: React.ReactNode;
  width?: string;
}

const Button = ({ BtnText, BtnIcon, width = 'auto' }: ButtonProps) => {
  return (
    <button
      className={`w-${width} bg-secondary py-2 px-4 rounded-md`}
      style={{ width: width === 'auto' ? 'auto' : `${width}px` }}
    >
      <p className="text-white items-center justify-center flex gap-2 font-[500]">{BtnText}<span>{BtnIcon}</span> </p>
    </button>
  );
};

export default Button;
