"use client";
import React from "react";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// interface props Readonly<{
//   children: React.ReactNode;
// }

const TransitionProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName.substring(1)}
        className="w-screen h-screen bg-gradient-to-b from-red-50 to-blue-100">
        <motion.div
          className="h-screen w-screen fixed bg-black z-40 rounded-b-[100px] "
          animate={{
            height: "0vh",
          }}
          exit={{
            height: "140vh",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl font-bold  cursor-default z-50 w-fit h-fit "
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}>
          {pathName == "/" ? "HOME" : pathName.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black z-40 rounded-t-[100px] bottom-0 "
          animate={{
            height: "0vh",
            transition: {
              delay: 0.5,
            },
          }}
          initial={{
            height: "140vh",
          }}
        />
        <div className="h-24 z-40">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
