"use client"

import {useRouter} from "next/navigation";

import {signOut} from "aws-amplify/auth";
import {Hub} from "aws-amplify/utils";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { logo } from "../../public/assets";
import Image from 'next/image';

import { useAuthenticator } from '@aws-amplify/ui-react';

import { UserCircleIcon } from '@heroicons/react/24/solid';

import ThemeToggle from "@/components/colorToggle/ThemeToggle";
import UserIconToggle from "@/components/userToggle/UserIconToggle";


const Navbar = () => {

  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  const [toggle, setToggle] = useState(false);

  //const [authCheck, setAuthCheck] = useState(isSignedIn);
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

  const signOutSignIn = async () => {
    if(authStatus === "authenticated"){
     await signOut();
    } else {
     router.push("/signin");
    }
  }
  
  return (
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b">
        <Link href="http://localhost:3000/">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Image
              src={logo}
              width={32}
              height={32}
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap ">Aeteris</span>
          </div>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <UserIconToggle/>
          <ThemeToggle />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200"
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
        <div className={`items-center justify-between ${toggle ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3  rounded" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  rounded">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  rounded">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  rounded">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;