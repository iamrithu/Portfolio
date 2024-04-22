"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        <div className="h-1/2 relative lg:h-full lg:w-1/2  p-14">
          <div className="w-full h-full relative rounded-lg">
            <Image
              alt=""
              src={"/hero2.png"}
              fill
              className="object-contain rounded-xl  "
            />
          </div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-8 pl-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experience, Designing Tommorow.{" "}
          </h1>
          <p className="md:text-xl text-neutral-500 italic">
            Welcome to my digital canvas, Discover immersive web experiences
            where creativity meets functionality. As a React.js developer, I
            specialize in crafting dynamic, user-centric applications that
            captivate and engage. Explore my projects to witness seamless UI/UX
            designs, optimized performance, and innovative solutions tailored to
            diverse client needs. Let's collaborate to bring your next digital
            vision to life!
          </p>
          <div className="flex  w-full justify-start gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
