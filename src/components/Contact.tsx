import { Card, CardFooter, Image, CardHeader, Link } from "@nextui-org/react";
import kp from "../assets/Pich.jpg";

import { Git } from "../assets/Git";
import { Discord } from "../assets/Discord";
import { Tweet } from "../assets/Tweet";
import { ContactUs } from "./ContactUs";

export default function Contact() {
  return (
    <>
      <div className="max-w-[1000px] px-8 m-auto mt-24   ">
        <p className="block text-sm uppercase text-neural-60">Contact me</p>
        <h1 className="mt-1 block text-3xl font-semibold md:text-4xl lg:text-5xl">
          On Email
        </h1>
        <p className="mt-3 max-w-5xl text-neutral-60 md:text-lg lg:text-lg">
          "I am passionate about my work. Because I love what I do, I have a
          steady source of motivation that drives me to do my best. In my last
          job this passion led me to challenge myself daily and learn new skills
          that helped me to do better work.”
        </p>
        <div className="gap-6 grid grid-cols-12 grid-rows-1 mt-10">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Keo PunlerPich
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={kp}
            />
          </Card>
          <Card className="col-span-12 sm:col-span-8 h-[300px] rounded-3xl flex flex-col justify-center p-6 lg:p-10 ">
            <h3 className="text-2xl capitalize font-semibold">
              Keo PunlerPich
            </h3>
            <span className=" inline-block capitalize text-sm font-light mt-0.5 mb-2">
              Backend Developer
            </span>
            <p className=" opacity-75 leading-normal text-small text-justify ">
              I been <strong>development </strong> of a sophisticated back-end
              system that significantly improved data processing efficiency.
              This experience honed my skills in designing and implementing
              scalable solutions using languages such as Python and Java.
              Additionally, my proficiency in database management, including SQL
              and NoSQL databases, ensures optimal data storage and retrieval.
            </p>
            <CardFooter className="flex justify-end mt-3 gap-2">
              <p className="text-small font-semibold">Follow More:</p>
              <Link href="https://www.facebook.com/">
                <Tweet />
              </Link>

              <Link href="https://www.facebook.com/">
                <Git />
              </Link>
              <Link href="https://www.facebook.com/">
                <Discord />
              </Link>
            </CardFooter>
          </Card>
          <ContactUs />
        </div>
      </div>
    </>
  );
}
