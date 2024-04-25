import React from "react";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";
import { Git } from "../assets/Git";

export default function Book_Club() {
  return (
    <>
      <div className="w-full m-auto  mt-28 mb-12 px-4 "></div>
      <Card className="max-w-[1908px] m-auto my-5 shadow-none ">
        <CardBody className="grid md:grid-cols-3 md:gap-4">
          <div className="md:col-span-2">
            <div className="p-2">
              <Image
                className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
                src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F1111.jpg?alt=media&token=a778fa72-8624-43d0-96d1-ec1e01a3a1fe"
              />
            </div>
            <div className="p-2">
              <Image
                className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
                src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F22222.jpg?alt=media&token=270e9270-6ea0-4936-b2cd-5aba7b7e9ac4"
              />
            </div>
            <div className="p-2">
              <Image
                className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
                src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F3333.jpg?alt=media&token=d32bca9c-6f1c-4d37-9dd8-a56c6a9c5d8a"
              />
            </div>
            <div className="p-2">
              <Image
                className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
                src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2F55555.jpg?alt=media&token=ec13342e-3adf-4799-a0a8-6513736909d6"
              />
            </div>
          </div>
          <div className="pr-5 py-2 ">
            <div className="mb-5 shadow-md p-5 rounded-lg">
              <h1 className="text-xl font-bold text-sky-400 mb-2">
                PROJECT GOAL
              </h1>
              <Divider />
              <p className="text-sm text-justify pb-2">
                Project goal This book-club website use for user can check book
                detail and dicuss about book on the internet Technology Laravel
                Use as Backend to Implemet code and CRUD Api to react Meterail
                UI Use for add style and custom templete
              </p>
              <Divider />
            </div>

            <div className="mb-5 shadow-md p-5 rounded-lg">
              <h1 className="text-xl font-bold text-sky-400 mb-2">
                PROJECT TECHNOLOGY & IMPLEMENT
              </h1>

              <Divider />

              <p className="text-sm text-justify pb-2">
                <p>
                  <strong className="text-lg ">
                    <a link rel="" type="" href="">
                      React
                    </a>{" "}
                  </strong>
                  React will be utilized as the front-end framework, serving as
                  the cornerstone for designing the user interface (UI) and
                  facilitating seamless interaction with the backend. Through
                  React's robust capabilities, we'll craft an intuitive and
                  visually appealing UI that enhances user experience and
                  engagement. Moreover, React's versatility enables efficient
                  integration with backend services, allowing for the retrieval
                  of necessary data and APIs. By leveraging React's
                  component-based architecture and state management features,
                  we'll ensure the development of a dynamic and responsive
                  frontend that empowers users to effortlessly navigate through
                  the platform while accessing relevant information from the
                  backend.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      Tailwind
                    </a>{" "}
                  </strong>
                  In addition to React, we'll harness the power of Tailwind CSS
                  to elevate the aesthetics and functionality of the user
                  interface. Tailwind CSS offers a utility-first approach to
                  styling, enabling rapid development and customization of UI
                  components. By leveraging its extensive set of pre-built
                  utility classes, we can efficiently add style and polish to
                  every aspect of the interface, ensuring consistency and
                  coherence across the application. Tailwind's flexibility
                  empowers us to create visually stunning designs while
                  maintaining a modular and maintainable codebase. Through the
                  seamless integration of React and Tailwind CSS, we'll deliver
                  a visually compelling and user-friendly interface that
                  enhances the overall user experience.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      Material UI
                    </a>{" "}
                  </strong>
                  At the forefront of our design philosophy lies Material UI, a
                  sophisticated design system that enhances the visual appeal
                  and functionality of our website. With Material UI, we
                  meticulously craft stylish and customizable templates,
                  ensuring a visually engaging and intuitive interface for our
                  users. Our design ethos prioritizes user experience,
                  seamlessly blending aesthetics with functionality to create a
                  truly immersive literary environment.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      Laravel
                    </a>{" "}
                  </strong>
                  Powered by Laravel, a robust backend framework renowned for
                  its efficiency and scalability, our website seamlessly
                  implements code and facilitates CRUD APIs to ensure smooth
                  data management and interaction. Leveraging the advanced
                  features of Laravel, we prioritize security, performance, and
                  flexibility, providing users with a seamless browsing
                  experience.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      MYSQL
                    </a>{" "}
                  </strong>
                  Furthermore, Spring Boot will serve as the backend framework
                  for implementing essential functionalities such as Spring
                  Security and CRUD operations. With Spring Boot's robust
                  features, we can efficiently manage user authentication and
                  authorization using Spring Security, ensuring secure access to
                  the application's resources. Additionally, we'll leverage
                  Spring Boot's powerful data access capabilities to perform
                  CRUD operations, allowing users to interact with the
                  application's data seamlessly. For data storage, MySQL will be
                  employed as the relational database management system. MySQL
                  offers reliability, scalability, and performance, making it an
                  ideal choice for managing structured data within the
                  application. With MySQL, we can efficiently store and retrieve
                  data, ensuring data integrity and consistency across the
                  application.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      Amazon Cloud
                    </a>{" "}
                  </strong>
                  To store data and files securely, Amazon Cloud services will
                  be utilized. Specifically, Amazon S3 (Simple Storage Service)
                  will serve as the storage solution for storing files and
                  images. Amazon S3 provides scalable, durable, and highly
                  available object storage, making it suitable for storing a
                  variety of data types securely. By leveraging Amazon S3, we
                  can seamlessly integrate file storage capabilities into the
                  application while ensuring high reliability and performance.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      S3 Bucket
                    </a>{" "}
                  </strong>
                  Additionally, S3 buckets will be utilized to organize and
                  manage data effectively. By utilizing S3 buckets, we can
                  categorize data and control access permissions, ensuring that
                  files and images are stored securely and efficiently. By
                  integrating Spring Boot, MySQL, and Amazon Cloud services into
                  the backend architecture, we can develop a robust and scalable
                  application that provides essential features such as user
                  authentication, CRUD operations, and secure data storage. This
                  comprehensive backend infrastructure will form the foundation
                  for building a reliable and efficient application.
                </p>
              </p>
              <Divider className="my-2" />
            </div>
            <div className="mb-5 shadow-md p-5 rounded-lg">
              <h1 className="text-xl font-bold text-sky-400 mb-2">Resorce</h1>
              <Divider />
              <a
                className=" flex gap-3 py-5 text-blue-500 italic"
                href="https://github.com/PunlerPich/Book-Club_Repo">
                <Git />
                <strong>Install Project Git-Hub Click here</strong>
              </a>

              <Divider />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
