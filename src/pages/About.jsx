import React from "react";
import Container from "../Components/Container";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="my-10 h-[80vh]">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] md:text-5xl font-bold mb-2 leading-snug">
            About Me.
          </h1>
          <p className="text-sm md:text-base text-gray-700">
            I’m a UX Designer with over 3 years of experience creating
            user-centered designs that make life easier and more enjoyable. What
            excites me most about UX design is the opportunity to craft seamless
            experiences that solve real problems and enhance everyday
            interactions.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-2">
            I’m committed to continuous learning and growth, always refining my
            skills to deliver better solutions. Beyond design, I have a strong
            interest in frontend development. Writing code allows me to deepen
            my understanding of how things work on the development side,
            enabling me to collaborate more effectively with developers and
            bridge the gap between design and implementation.
          </p>

          {/* <button
            className="border w-auto border-black bg-black rounded-full px-4 py-3 text-center flex items-center gap-2 text-white"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open("mailto:kwabenaadofo330@gmail.com", "_blank");
            }}
          >
            Let's Talk
            <MdArrowOutward />
          </button> */}
          {/* <a
            href="mailto:kwabenaadofo330@gmail.com"
            target="_blank"
            className="text-white bg-black rounded-full  px-3 py-2 flex items-center gap-2 text-[14px]"
          >
            Let's Talk
            <MdArrowOutward />
          </a> */}
          <div>
            <p className="text-[20px] font-semibold text-gray-700 mb-2">
              My Experience
            </p>
            <div className="py-6 border border-gray-200 rounded-md">
              <div>
                <div className="flex justify-between px-6 border-b pb-6">
                  <div>
                    <p className="text-lg md:text-[24px] font-semibold">
                      UX Designer
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">Hubtel</p>
                  </div>
                  <p className="text-gray-800 text-sm md:text-base">
                    Mar 2024 - Present
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between px-6 border-b p-6">
                  <div>
                    <p className="text-lg md:text-[24px] font-semibold">
                      UX/UI Designer
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      Dataware Tech
                    </p>
                  </div>
                  <p className="text-gray-800 text-sm md:text-base">
                    Jan 2024 - Dec 2024
                  </p>
                </div>
                <div className="flex justify-between px-6 pt-6">
                  <div>
                    <p className="text-lg md:text-[24px] font-semibold">
                      UX Designer
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">Brolly</p>
                  </div>
                  <p className="text-gray-800 text-sm md:text-base">
                    Sept 2022 - Jun 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;