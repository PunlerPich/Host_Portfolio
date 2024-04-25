import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export const MacbookScrollDemo = () => {
  return (
    <div className=" w-full   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      <div className="overflow-hidden  w-full  ">
        <div className="max-w-[1000px] px-8 m-auto">
          <p className="block text-sm uppercase text-neural-60">
            DISCOVER THE POTENTIAL OF
          </p>
          <h1 className="mt-1 block text-3xl font-semibold md:text-4xl lg:text-5xl">
            MY BACKGROUND
          </h1>
          <p className="mt-3 max-w-5xl text-neutral-60 xl:text-lg sm:text-small lg:text-lg">
            I'm Graduate Bachelor of Software Engineering at{" "}
            <strong> BELTIE International University </strong> in 2024, offers
            diverse experience in web and backend development. Skilled in PHP,
            Laravel, Spring Boot, and ReactJS, they have contributed to website,
            application, and API development within various organizations.
            Passionate about continuous learning, Keo actively participated in
            university projects and holds notable achievements like top academic
            honors and project awards.
          </p>
        </div>
        <MacbookScroll
          title={<span></span>}
          src={`https://aceternity.com/images/products/thumbnails/new/algochurn.png`}
          showGradient={false}
        />
      </div>
    </div>
  );
};
