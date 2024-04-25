import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Education() {
  return (
    <>
      <div className="max-w-[1000px]  m-auto  mt-24 mb-12 px-4 ">
        <div className=" space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white">
            Education & Achievement
          </h1>
        </div>
      </div>
      <Card className="max-w-[980px] m-auto my-5">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={80}
            radius="xl"
            src="https://www.beltei.edu.kh/biue/images/homepics/document/beltei_international_university_in_cambodia.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Software Engeering</p>
            <p className="text-small text-default-500">2022-2024</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="grid md:grid-cols-3 md:gap-4 items-center content-center">
          <Image
            className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
            src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2FIMG_0436.JPG?alt=media&token=c5e7ce26-30be-40b3-b3c7-1cf0b27b03a6"
          />
          <div className="md:col-span-2">
            <h1 className="text-lg font-bold">BACHELOR DEGREE</h1>
            <p className="italic">Software Engeering</p>

            <p className="text-sm text-justify p-2">
              I am a graduate with a Bachelor of Software Engineering from
              BELTIE International University in 2024. At our institution, the
              focus was heavily on honing programming skills, including
              proficiency in C#, Java, and Python. We also delved into
              frameworks such as Django, Spring Boot, JavaFX, Dart, and Flutter.
              Additionally, our curriculum emphasized UX/UI skills using tools
              like Figma and Adobe XD. Throughout our program, we engaged in
              numerous projects and training sessions, providing hands-on
              experience and practical application of theoretical knowledge.
            </p>
          </div>
        </CardBody>

        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui">
            BELTIE INTERNATINAL UNIVERSITY
          </Link>
        </CardFooter>
        {/* CARD*/}
      </Card>
      <Card className="max-w-[980px] m-auto my-2">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={100}
            radius="xl"
            src="https://scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/308862498_421421383432899_4645069136379678918_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGdxtcLekLk_o1NikbMID8ch-bPa3uhDv6H5s9re6EO_nZUFNVzVsLadA-Lt-G5ID07u5RWMx0mk0IVac2qfPwB&_nc_ohc=VRchyKlzeT0Ab4fMeBl&_nc_zt=23&_nc_ht=scontent.fpnh18-1.fna&cb_e2o_trans=t&oh=00_AfDtCHYSinpW2SWxVsltEeE3y4Lf4qBhoEDHGM2tdXSqzg&oe=6627555E"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Information Technology</p>
            <p className="text-small text-default-500">2019-2021</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="grid md:grid-cols-3 md:gap-4 items-center content-center">
          <Image
            className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
            src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F54.jpg?alt=media&token=4627a144-9018-428c-a6de-f5aa3f355b71"
          />
          <div className="md:col-span-2">
            <h1 className="text-lg font-bold">ASSOCIATE DEGREE</h1>
            <p className="italic">Information Technology</p>

            <p className="text-sm text-justify p-2">
              I graduated with an Associate Degree in Information Technology
              from Don Bosco Kep in 2021, where I honed skills in Photoshop,
              Illustrator, networking (including Window Server 1 and Window
              Server 2 configurations, Linux), and programming (HTML, CSS,
              JavaScript, PHP).
            </p>
          </div>
        </CardBody>

        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui">
            DON BOSCO KEP
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
