import React, { useEffect } from "react";
import '../app/global.scss'
import { preLoaderAnim } from "@/app/animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader h-screen">
      <div className="texts-container">
        <span>Develop,</span>
        <span>Build,</span>
        <span>Innovate.</span>
      </div>
    </div>
  );
};

export default PreLoader;