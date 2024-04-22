"use client";

import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div>i am from Contact</div>
    </motion.div>
  );
};

export default Contact;
