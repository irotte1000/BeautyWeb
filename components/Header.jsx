"use client";
import React, { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Mobilenav from "./Mobilenav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar  */}
      <div className="bg-secondary-100 mb-6 xl:mb-[20px] py-2 xl:py-1">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* phone & name  */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              {/* phone  */}
              <div className="flex gap-2 items-center text-white">
                <FaPhoneAlt />
                <span>+212668449058</span>
              </div>
              {/* email  */}
              <div className="flex gap-2 items-center text-white">
                <IoMdMail />
                <span>irotte6@gmail.com</span>
              </div>
            </motion.div>
            {/* socials  */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* log  */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="logoImg"
              width={100}
              height={100}
              priority
            />
          </Link>
        </motion.div>
        {/* mobile nav trigger  */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        {/* mobile nav  */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <Mobilenav setMobileNav={setMobileNav} />
        </motion.div>
        {/* desktop nav  */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
