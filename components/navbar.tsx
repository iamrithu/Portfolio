"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Links } from "@/config/index";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { stagger } from "framer-motion/dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVarients = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 duration-700 transition ease-in-out ">
      <div className="hidden md:flex gap-4 w-1/3">
        {Links.map(
          (
            item: {
              url: string;
              title: string;
            },
            index
          ) => {
            return <NavLink key={index} props={item} />;
          }
        )}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex duration-700 xl:w-1/3 xl:justify-center ">
        <Link
          href={"/"}
          className=" text-sm bg-black rounded-md font-bold p-1 flex justify-center items-center">
          <span className="text-white">Rithi</span>
          <span className="w-12 h-8 bg-white text-black rounded-md justify-center items-center flex ml-1">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex  gap-4 w-1/3 ">
        <Link href={"/#"}>
          <Image alt="github" src={"/github.png"} width={24} height={24} />
        </Link>
        <Link href={"/#"}>
          <Image alt="linkedin" src={"/linkedin.png"} width={24} height={24} />
        </Link>
        <Link href={"/#"}>
          <Image
            alt="instagram"
            src={"/instagram.png"}
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENY */}
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex flex-col justify-between items-center relative z-50"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-sm origin-left"></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-sm"></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded-sm origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVarients}
            initial={"closed"}
            animate={"opened"}
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {Links.map((item, index) => {
              if (index !== 2 && index !== 3) {
                return (
                  <motion.div
                    variants={listItemVarients}
                    // initial={"closed"}
                    // animate={"opened"}
                    key={index}>
                    <Link href={item.url} key={index} className="">
                      {item.title}
                    </Link>
                  </motion.div>
                );
              }
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
