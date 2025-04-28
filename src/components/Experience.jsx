"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import {
  LeopardRuns,
  Piramal,
  IITB,
  Sports,
  IIITians,
  GDSC,
  GSSOC,
  Hackthechain
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >

            <Exp_prop
              img={Piramal}
              title="Piramal Capital Housing Finance Limited"
              subtitle="As Sales Trainee"
              date="September 2024 - March 2025"
              para="- Gained hands-on experience in the finance sector, working on data analysis, reporting, and financial process optimization. "
            />
            <Exp_prop
              img={LeopardRuns}
              title="LeopardRuns Innovation and Technology"
              subtitle="As an Intern"
              date="July 2024 - Aug2024"
              para="- Completed an internship focused on developing responsive and interactive web applications using React.js and  improving user experience."
            />
          
           
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience; 