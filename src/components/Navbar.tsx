"use client";
import React, { useState } from "react";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "./utils/cn";
import { ThemeSwitcher } from "../assets/ThemSwitcher";
import { Tweet } from "../assets/Tweet";

import { Git } from "../assets/Git";
import { Discord } from "../assets/Discord";
import { Link } from "react-router-dom";
export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <nav></nav>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm ">
            <Link to="/">Home</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Background ">
          <div className="flex flex-col space-y-4 text-sm font-bold">
            <Link to="/WorkExperience">Work Experience </Link>
            <Link to="/Education">Education</Link>

            <Link to="/technology">Technology</Link>

            <Link to="/individual">Individual</Link>

            <Link to="/Contact">Contact</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 max-sm:grid-cols-1 gap-10 p-4">
            <ProductItem
              href="/Bt_Project"
              title="NEWS"
              src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F1.png?alt=media&token=c932fac9-32cc-4290-848a-c6c5176c25ee"
              description="The primary aim of this project is to provide students and staff at BELTIE University"
            />

            <ProductItem
              title="AI Images Generate"
              href="/Ai_Python"
              src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F22.png?alt=media&token=d00a1fe2-0211-4e4a-a86c-de926ca06cd3"
              description="
              
              The primary objective of this project is to empower users with the ability to generate customized images"
            />
            <ProductItem
              title="BookClub"
              href="/Book_Club"
              src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F55555.jpg?alt=media&token=ec13342e-3adf-4799-a0a8-6513736909d6"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Real Estest"
              href="/Real_Estest"
              src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2FScreenshot%202024-04-21%20094839.png?alt=media&token=d5b4543a-8706-421e-a619-b3d226fc503f"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <div className="lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/PunlerPich"
                className="hover:text-gray-400 transition-colors duration-300">
                <Git />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/keo-punlerpich/"
                className="hover:text-gray-400 transition-colors duration-300">
                <Discord />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/keopunlerpich"
                className="hover:text-gray-400 transition-colors duration-300">
                <Tweet />
              </a>
            </li>
          </ul>
        </div>

        <ThemeSwitcher />
      </Menu>
    </div>
  );
}
