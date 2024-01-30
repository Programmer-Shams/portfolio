import React from 'react'

const Info = () => {
  return (
    <div className="flex justify-center items-center gap-10 bg-white -mt-[130px] w-[80%] mx-[10%] rounded-xl h-[200px] p-8 shadow-lg">
    <div className=" w-[25%] bg-bg_secondary rounded-xl py-5 pl-5 text-[15px] flex flex-col gap-1">
      <h1 className="font-[550] text-lg">Personal Details</h1>
      <hr className=" border-separate" />
      <p>Email:<span className="text-textColor"> ssdeen313@gmial.com</span></p>
      <p>Phone:<span className="text-textColor"> +2349011855909</span></p>
      <p>Nationality:<span className="text-textColor"> Nigerian</span></p>
    </div>
    <div className="w-[80%]">
      <h1 className="text-2xl -mt-3">
        I Am <span className="text-secondary">Front-End Developer</span>
      </h1>
      <p className="text-textColor mt-3">
        Obviously I'm a Web Designer. Web Developer with over 3 years of
        experience. Experienced with all stages of the development cycle for
        dynamic web projects. The as opposed to using 'Content here, content
        here', making it look like readable English.
      </p>
      {/* <p className="text-2xl">Programmer Shams</p> */}
    </div>
  </div>
  )
}

export default Info