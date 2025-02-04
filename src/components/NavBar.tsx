"use client"

import {useRouter} from "next/navigation";
import {signOut } from "aws-amplify/auth";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { logo } from "../assets";
import Image from 'next/image';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Hub } from "aws-amplify/utils";

const Navbar = () => {

  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  var estado = "";

  const handleAuthOut = Hub.listen("auth", (data) => {
    console.log("LLAME A LA FUNCION");
    switch (data.payload.event) {
      case "signedIn":
        router.push("/");
        console.log("ESTOY DENTRO");
        break;
      case "signedOut":
        router.push("/signin"); // Redirige a la página principal si está autenticado
        console.log("ESTOY AFUERA");
        break;
    }
  });

   // Función para manejar el cierre de sesión o redirigir al inicio de sesión
  const handleAuthAction = async () => {
    handleAuthOut();
     if (authStatus === "authenticated") {
       await signOut(); // Cierra la sesión
       //router.push("/"); // Redirige a la página principal
     } else {
       //router.push("/signin"); // Redirige al inicio de sesión
     }
  }

  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="http://localhost:3000/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={logo}
              width={32}
              height={32}
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Datashape</span>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleAuthAction}
          >
            {authStatus === "authenticated" ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;