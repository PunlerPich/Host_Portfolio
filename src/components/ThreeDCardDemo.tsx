"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var  ">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.01] w-auto sm:w-[60rem] h-auto rounded-xl p-6    ">
        <CardItem
          translateZ="50"
          className="text-4xl font-bold text-neutral-600 dark:text-white">
          Keo PunlerPich
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Web/Mobile Developer
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F56.jpg?alt=media&token=12bf9974-1442-4ccb-9792-83848bbc93a6"
            height="1000"
            width="1000"
            className="h-[32rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="py-2 text-justify">
          <strong>Greeting! I'm Keo Punler Pich </strong>, a dedicated Web
          Developer hailing from the vibrant province of Takeo in Cambodia. I'm
          21 year old, I bring a youthful energy and a passion for crafting
          digital experiences to the forefront of my work. I approach every
          project with mindfulness and attention to detail. Professionally, I
          thrive in the dynamic world of web development, continuously honing my
          skills to create innovative and user-centric solutions. Outside of
          coding, I find joy in exploring new technologies, "I am passionate
          about my work. Because I love what I do, I have a steady source of
          motivation that drives me to do my best. In my last job this passion
          led me to challenge myself daily and learn new skills that helped me
          to do better work.”
        </CardItem>
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as="button"
            href="/Bt_Project"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Work experience →
          </CardItem>
          <a>
            <CardItem
              translateZ={20}
              as="button"
              href="/"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              Contact me
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
