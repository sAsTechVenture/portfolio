import React from 'react'
import leftAbout from "../assets/leftAbout.svg";
import rightAbout from "../assets/rightAbout.svg";

const Section = ({ title }) => {
  return (
    <>
     <div className="md:col-span-3 flex justify-center items-center">
          <img src={leftAbout} alt="leftImg" />
        </div>
        <div className="md:col-span-6 flex justify-center items-center">
          <h1 className="md:text-7xl text-5xl font-bold text-green-950 text-center">
            { title }
          </h1>
        </div>
        <div className="md:col-span-3 flex justify-center items-center">
          <img src={rightAbout} alt="rightImg" />
        </div>
    </>
  )
}

export default Section
