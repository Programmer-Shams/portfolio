import React from 'react'

const Info = () => {
  return (
    <div className="bg-white -mt-[180px] lg:-mt-[130px] border-2 border-blue-600 w-[570px] h-[570px] lg:h-[220px] ml-7 lg:w-[80rem] rounded-xl px-6 shadow-lg flex flex-col lg:flex-row gap-6  justify-center">
      
    <div className="bg-bg_secondary rounded-xl p-4 border-2 lg:w-[450px] text-[15px] flex-col gap-3 lg:h-[180px] lg:mt-3">
      <h1 className="font-[550] text-2xl lg:text-lg py-2 lg:py-1">Personal Details</h1>
      <hr className=" border-separate" />
      <div className='flex flex-col gap-1 pt-2 text-xl lg:text-[13px]'>
      <p>Email:<span className="text-textColor"> ssdeen313@gmial.com</span></p>
      <p>Phone:<span className="text-textColor"> +2349011855909</span></p>
      <p>Nationality:<span className="text-textColor"> Nigerian</span></p>
      </div>
    </div>

    <div className=" mt-3">
      <h1 className="text-3xl lg:text-2xl my-3">
        I Am <span className="text-secondary font-bold">Front-End Developer</span>
      </h1>
      <p className="text-textColor text-2xl mt-3 leading-[2.36rem] lg:leading-normal lg:text-[18px]">
        Obviously I'm a Web Designer. Web Developer with over 3 years of
        experience. Experienced with all stages of the development cycle for
        dynamic web projects. The as opposed to using 'Content here, content
        here', making it look like readable English.
      </p>
    </div>
  </div>
  )
}

export default Info