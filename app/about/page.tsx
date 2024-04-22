"use client";

import Brain from "@/components/brain";
import { experience, Skills } from "@/config";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* MAIN CONTAINER */}
      <div
        className="h-full flex overflow-scroll scroll-smooth"
        ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48  flex flex-col gap-24 md:gap-32  lg:gap-48   xl:gap-64  duration-200 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg text-neutral-700">
              Mastering React.js was no small feat. I have devoted countless
              hours to learning its intricacies, devouring documentation,
              tutorials, and online courses. From understanding state management
              with Redux to exploring the latest features like hooks, their
              journey was filled with challenges and triumphs. Yet, through
              perseverance and a relentless pursuit of knowledge, I have emerged
              as a seasoned React.js developer.
            </p>
            <p className="text-sm font-bold italic">
              "If it doesn't challenge YOU, It won't change YOU."
            </p>
            <div className="self-end">
              <motion.svg
                width="185"
                height="77"
                viewBox="0 0 639 872"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M86.8523 80.1909C89.5211 135.347 107.256 186.857 126.144 238.351C148.678 299.788 166.902 363.611 196.52 422.125C216.05 460.71 232.509 500.453 251.478 539.253C253.765 543.932 269.88 565.235 269.88 569.84C269.88 574.151 264.553 563.06 261.922 559.644C248.935 542.783 235.116 526.577 221.885 509.908C173.126 448.484 126.402 385.305 78.8946 322.902C35.6227 266.062 1.80402 215.223 1.80402 141.863C1.80402 106.37 7.84022 15.3092 53.5293 4.34378C154.236 -19.8258 178.059 135.03 184.832 201.795C195.175 303.752 212.636 441.886 133.853 522.591C125.459 531.189 57.417 589.65 44.3282 557.655C19.9598 498.088 58.5038 431.962 118.186 416.903C175.072 402.548 221.004 419.719 274.854 432.818C317.785 443.261 301.711 370.611 301.711 346.278C301.711 334.924 306.789 308.276 299.473 298.034C299.324 297.825 305.623 323.803 310.664 330.86C318.017 341.155 357.933 396.429 341.251 349.51C336.707 336.73 302.379 228.404 285.796 228.404C261.06 228.404 252.473 271.202 252.473 287.838C252.473 325.202 257.602 305.401 263.663 279.134C265.106 272.884 268.654 197.683 268.885 197.567C284.404 189.808 342.348 253.859 350.95 261.727C388.442 296.018 423.684 332.531 459.871 368.161C471.351 379.465 483.58 386.343 458.876 378.109C419.672 365.04 382.111 349.038 341.002 342.547C334.272 341.485 306.791 342.878 302.706 333.346C294.215 313.534 306.721 275.498 311.161 256.504C322.701 207.139 366.078 129.908 332.05 81.1856C328.043 75.4478 305.521 50.1744 295.743 58.5558C284.067 68.5633 326.006 140.384 330.558 148.329C359.293 198.48 396.231 244.849 433.014 289.33C434.328 290.919 467.771 330.478 470.813 324.394C480.491 305.038 467.805 264.372 465.342 244.319C464.551 237.877 457.152 203.596 463.85 197.567C469.381 192.589 500.229 219.251 502.893 207.266C505.534 195.38 494.107 132.891 512.342 140.869C520.052 144.242 528.637 146.261 535.469 150.816C548.162 159.277 522.087 122.847 511.596 111.773C498.473 97.9205 408.9 38.6229 400.437 80.937C393.071 117.764 393.494 142.858 435.998 142.858C458.043 142.858 446.156 162.883 439.977 178.917C423.138 222.606 399.979 263.957 376.812 304.5C317.054 409.076 251.994 510.62 186.821 611.867C150.209 668.745 112.89 725.18 76.9051 782.461C61.1269 807.577 37.5311 837.62 28.6614 866.763C24.9238 879.044 47.5717 849.325 56.0161 839.657C128.403 756.78 197.533 671.213 265.901 585.01C375.019 447.426 482.055 308.2 591.92 171.208C602.992 157.402 619.018 126.614 637.428 120.477"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </motion.svg>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="w-full grid grid-cols-2 sm:grid-cols-3  gap-4 md:grid-cols-3 lg:grid-cols-3">
              {Skills.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="p-1 bg-black text-sm text-white font-semibold rounded-md  hover:bg-white hover:text-black cursor-pointer justify-center items-center flex">
                    {item}
                  </div>
                );
              })}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}>
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">
              Experience
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}>
              {experience.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row  justify-between h-auto ">
                    <div className="flex-1  mb-2">
                      {item.position === "l" && (
                        <>
                          <div className="p-3 bg-white font-semibold rounded-s-xl rounded-b-xl">
                            {item.role}
                          </div>
                          <div className="text-sm p-3 italic">
                            {item.description}
                          </div>
                          <div className="text-sm text-red-400 p-3 font-bold">
                            {item.date}
                          </div>
                          <div className="text-sm bg-white p-1 font-semibold ml-2 w-fit h-fit">
                            {item.company}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="w-8  flex justify-center items-center">
                      <div className="w-1 h-full bg-gray-600 rounded-sm relative">
                        <div className="w-5 h-5 absolute bg-white ring-2 ring-red-400 rounded-full -left-2"></div>
                      </div>
                    </div>
                    <div className="flex-1 mb-2 ">
                      {item.position === "r" && (
                        <>
                          <div className="p-3 bg-white font-semibold  rounded-bl-2xl  rounded-e-xl">
                            {item.role}
                          </div>
                          <div className="text-sm p-3 italic">
                            {item.description}
                          </div>
                          <div className="text-sm text-red-400 p-3 font-bold">
                            {item.date}
                          </div>
                          <div className="text-sm bg-white p-1 font-semibold ml-2 w-fit h-fit">
                            {item.company}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block  sticky top-0 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
