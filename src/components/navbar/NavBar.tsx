"use client"

import {navLinks} from '@/constants/index'

import Barra from './Barra.module.css';

import {useRouter} from "next/navigation";

import {signOut} from "aws-amplify/auth";
import {Hub} from "aws-amplify/utils";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import Image from 'next/image';

import { useAuthenticator } from '@aws-amplify/ui-react';


import ThemeToggle from "@/components/ui/ThemeToggle";
import UserIconToggle from "@/components/ui/UserIconToggle";

import { motion } from "framer-motion";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  const router = useRouter();


  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          router.push("/");
          break;
        case "signedOut":
          router.push("/");
          break;
      }
    });
    return () => hubListenerCancel();
  },[router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const signOutSignIn = async () => {
    if(authStatus === "authenticated"){
     await signOut();
    } else {
     router.push("/signin");
    }
  }
  
  return (
    <nav className={`h-50 ${scrolled ? 'fixed' : 'block'} top-0 z-20 w-full 
      ${scrolled ? "backdrop-blur-md bg-opacity-10 bg-secondary" : "bg-transparent"
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-2">
        <Link href="/">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Image
              src="/assets/logo_navbar.png"
              width={100}
              height={32}
              className="h-8 object-contain"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <UserIconToggle/>
          <ThemeToggle />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={`${Barra.phone} inline-flex items-center p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200`}
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 
              (<><span className="sr-only">Close main menu</span><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l15 15M1 16l15-15" />
              </svg></>) : 
              (<><span className="sr-only">Open main menu</span><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg></>)
            }
          </button>

        </div>
        <div className={` items-center justify-between ${toggle ? `flex ${Barra.nav_ul}` : 'hidden'} w-full md:flex md:w-auto md:order-1 rounded`} id="navbar-sticky">
          <ul className={`w-full flex flex-col p-4 md:p-0 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}>
            {navLinks.map((nav) => (
              <motion.li
                key={nav.id}
                className={`${
                  active === nav.title ? `${Barra.link_nav}` : ""
                }`}
                onClick={() => setActive(nav.title)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
              >
                <a className={`${Barra.link_nav} block py-2 px-3 rounded`} href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;