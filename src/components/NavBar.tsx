"use client"

import {Button, Divider, Flex} from "@aws-amplify/ui-react";
import {useRouter} from "next/navigation";
import {signOut} from "aws-amplify/auth";
import {Hub} from "aws-amplify/utils";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Image from 'next/image';


const Navbar = ({isSignedIn}:{isSignedIn: boolean}) => {

  const [authCheck, setAuthCheck] = useState(isSignedIn);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const router = useRouter();
  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setAuthCheck(true);
          router.push("/");
          break;
        case "signedOut":
          setAuthCheck(false);
          router.push("/");
          break;
      }
    });

    return () => hubListenerCancel();
  },[router]);

  const signOutSignIn = async () => {
    if(authCheck){
     await signOut();
    } else {
     router.push("/signin");
    }
   };

  return (
    // <nav className={`w-full flex items-center py-2 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"} border-b border-gray-200 dark:border-gray-600`}>
    <nav className={"bg-white fixed w-full py-2 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <div
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
            {/* <p className="text-dorado text-[18px] font-bold cursor-pointer flex">
              APP &nbsp;<span className="sm:block hidden"> | V0.01</span>
            </p> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">DataSphere</span>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-dorado" : "text-secondary"
                } hover:text-dorado text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex  justify-end items-center">
            <Button
              variation="primary"
              borderRadius="1rem"
              className="mr-4"
              onClick={signOutSignIn}
            >
              {authCheck? "Cerrar sesión" : "Iniciar sesión"}
            </Button>
            <div className="sm:hidden flex justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
      
}; export default Navbar;