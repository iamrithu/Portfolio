"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const yText1 = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  return (
    <motion.div
      className="h-[calc(100vh-6rem)] w-full fixed bottom-0  right-0"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div ref={scrollRef} className="w-full h-full overflow-scroll snap-y">
        <div className="h-full flex relative justify-center items-center bg-gradient-to-t from-blue-950 to-blue-200 snap-start">
          <motion.h1 style={{ y: yText }} className="text-6xl font-bold z-10">
            What I Can Do..
          </motion.h1>
          <motion.div className="w-full h-full absolute top-0 bottom-0  bg-[url('/mountains.png')] z-20 bg-cover bg-bottom"></motion.div>
          <motion.div
            style={{ y: yBg }}
            className="w-full h-full absolute top-0 bottom-0  bg-[url('/planets.png')] z-10 bg-cover bg-bottom"></motion.div>
          {/* <div className="w-full h-full absolute top-0 bottom-0  bg-[url('/sun.png')] z-10"></div> */}
          <motion.div
            style={{ x: yBg }}
            className="w-full h-full absolute top-0 bottom-0  bg-[url('/stars.png')] bg-cover bg-bottom"></motion.div>
        </div>
        <motion.div
          ref={scrollRef}
          className="h-full flex  flex-col overflow-scroll scroll-smooth  relative justify-center items-center bg-gradient-to-t from-blue-950 to-blue-200  snap-start">
          <div
            className="px-16 py-20 w-full flex justify-end items-center 
          ">
            <p className="font-bold text-md italic text-neutral-600">
              I focus on helping your
              <br />
              brand grow and move forward.
            </p>
            <div className="w-[400px] h-[1px] bg-slate-900"></div>
          </div>
          <div
            className="px-16 py-10 flex justify-center items-center text-6xl font-bold  text-white
          w-full 
          ">
            What I know to solve your queries?
          </div>
          <div className="flex-1 w-full px-64 py-4 gap-6 flex flex-row ">
            <div className="flex-1 flex-col flex justify-start gap-8 items-center h-full ">
              <div className="w-full p-2 flex justify-center items-center rounded-md bg-blue-900/80 text-lg text-white font-bold">
                Front End Development
              </div>
              <div className="bg-white p-6 rounded-md tracking-wider ">
                Architect and develop reusable and modular UI components using
                React.js. Decompose complex user interfaces into smaller,
                manageable components for improved maintainability and
                scalability.Utilize React&apos;s component lifecycle methods and
                hooks to manage state, handle user interactions, and update the
                UI dynamically
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                {[
                  "Html",
                  "Css",
                  "Javascript",
                  "Typescript",
                  "React.JS",
                  "Next.JS",
                  "Dart",
                  "Flutter",
                  "React Native",
                  "Tailwind",
                  "Tailwind",
                  "Shadcn-UI",
                  "Ant-UI",
                  "Framer-Motion",
                  "Redux",
                  "Zustand",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-md  bg-blue-900/80  text-white">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-full w-[2px] rounded-lg bg-white"></div>
            <div className="flex-1 flex-col flex justify-start gap-8 items-center h-full ">
              <div className="w-full p-2 flex justify-center items-center rounded-md bg-blue-900/80 text-lg text-white font-bold">
                Back End Development
              </div>
              <div className="bg-white p-6 rounded-md tracking-wider ">
                Develop and maintain the entire stack of a web application,
                Building reusable components and front-end libraries for future
                use, Translating designs and wireframes into high-quality code
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                {[
                  "Node.JS",
                  "Express.JS",
                  "MongoDB",
                  "MySQL",
                  "PrismaORM",
                  "Rest-APIs",
                  "JWT",
                  "Next-Auth.JS",
                  "Auth.JS",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-md  bg-blue-900/80  text-white">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="h-full flex relative justify-center items-center bg-gradient-to-t from-blue-950 to-blue-200 snap-start">
          <motion.h1 style={{ y: yText1 }} className="text-6xl font-bold z-10">
            What I Did?..
          </motion.h1>
          <motion.div className="w-full h-full absolute top-0 bottom-0  bg-[url('/mountains.png')] z-20 bg-cover bg-bottom"></motion.div>
          <motion.div
            style={{ y: yBg1 }}
            className="w-full h-full absolute top-0 bottom-0  bg-[url('/planets.png')] z-10 bg-cover bg-bottom"></motion.div>
          {/* <div className="w-full h-full absolute top-0 bottom-0  bg-[url('/sun.png')] z-10"></div> */}
          <motion.div
            style={{ x: yBg1 }}
            className="w-full h-full absolute top-0 bottom-0  bg-[url('/stars.png')] bg-cover bg-bottom"></motion.div>
        </div>
        <motion.div
          ref={scrollRef}
          className="h-full flex  flex-col overflow-scroll scroll-smooth  relative justify-center items-center bg-gradient-to-t from-blue-950 to-blue-200 snap-start ">
          <div
            className="px-16 py-20 w-full flex justify-end items-center 
          ">
            <p className="font-bold text-md italic text-neutral-600">
              I focus on helping your
              <br />
              brand grow and move forward.
            </p>
            <div className="w-[400px] h-[1px] bg-slate-900"></div>
          </div>
          <div
            className="px-16 py-10 flex justify-center items-center text-6xl font-bold  text-white
          w-full 
          ">
            What I know to solve your queries?
          </div>
          <div className="flex-1 w-full px-64 py-4 gap-6 flex flex-row ">
            <div className="flex-1 flex-col flex justify-start gap-8 items-center h-full ">
              <div className="w-full p-2 flex justify-center items-center rounded-md bg-blue-900/80 text-lg text-white font-bold">
                Front End Development
              </div>
              <div className="bg-white p-6 rounded-md tracking-wider ">
                Architect and develop reusable and modular UI components using
                React.js. Decompose complex user interfaces into smaller,
                manageable components for improved maintainability and
                scalability.Utilize React&apos;s component lifecycle methods and
                hooks to manage state, handle user interactions, and update the
                UI dynamically
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                {[
                  "Html",
                  "Css",
                  "Javascript",
                  "Typescript",
                  "React.JS",
                  "Next.JS",
                  "Dart",
                  "Flutter",
                  "React Native",
                  "Tailwind",
                  "Tailwind",
                  "Shadcn-UI",
                  "Ant-UI",
                  "Framer-Motion",
                  "Redux",
                  "Zustand",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-md  bg-blue-900/80  text-white">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-full w-[2px] rounded-lg bg-white"></div>
            <div className="flex-1 flex-col flex justify-start gap-8 items-center h-full ">
              <div className="w-full p-2 flex justify-center items-center rounded-md bg-blue-900/80 text-lg text-white font-bold">
                Back End Development
              </div>
              <div className="bg-white p-6 rounded-md tracking-wider ">
                Develop and maintain the entire stack of a web application,
                Building reusable components and front-end libraries for future
                use, Translating designs and wireframes into high-quality code
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                {[
                  "Node.JS",
                  "Express.JS",
                  "MongoDB",
                  "MySQL",
                  "PrismaORM",
                  "Rest-APIs",
                  "JWT",
                  "Next-Auth.JS",
                  "Auth.JS",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-md  bg-blue-900/80  text-white">
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
