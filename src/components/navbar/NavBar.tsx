'use client'

import Image from "next/image"
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import Link from "next/link"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useAuthenticator } from '@aws-amplify/ui-react';
import UserIconToggle from "@/components/ui/UserIconToggle";

import ThemeToggle from "@/components/ui/ThemeToggle";

import LanguageSwitcher from "@/components/ui/LenguageToggle";

import { useTranslation } from '@/../hooks/useTranlation';

export default function NavBar() {
  const router = useRouter();

  const t = useTranslation();

  //Logica de inicio de sesion
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
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
  }, [router]);

  const signOutSignIn = async () => {
    if (authStatus === "authenticated") {
      await signOut();
    } else {
      router.push("/signin");
    }
  }

  //logica de posicion de navbar despues de hacer scroll
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

  //Logica para cambio de color
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className={`${scrolled ? 'fixed backdrop-blur-md bg-opacity-10' : 'block'} top-0 z-40 w-full border-b`}>
      <div className="container flex h-16 items-center justify-between py-4 px-4 md:px-6 w-full">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <Image
                src="/assets/insignia_degrade.png"
                alt="Cathaleia Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">CATHALE<span className="text-slate-400">IA</span></span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          {t.header.nav.map((nav) => (
            <Link href={`#${nav.id}`} className="text-sm font-medium hover:text-primary">
              {nav.title}
            </Link>
          ))}

          <div className="flex items-center">
            <div className="mr-2">|</div>
            <UserIconToggle />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}