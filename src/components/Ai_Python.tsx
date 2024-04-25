import React from "react";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";
import { Git } from "../assets/Git";

export default function Ai_Python() {
  return (
    <>
      <div className="w-full m-auto  mt-28 mb-12 px-4 "></div>
      <Card className="max-w-[1908px] m-auto my-5 shadow-none ">
        <CardBody className="grid md:grid-cols-3 md:gap-4">
          <div className="md:col-span-2">
            <div className="p-2">
              <Image
                className="md:col-span-1 object-cover rounded-xl group-hover/card:shadow-xl"
                src="https://firebasestorage.googleapis.com/v0/b/bel-news-99264.appspot.com/o/images%2FAI.jpg?alt=media&token=f5e25da6-f242-4ce8-be64-6c105b6d1ac6"
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
                The primary objective of this project is to empower users with
                the ability to generate customized images tailored to their
                preferences through the utilization of artificial intelligence
                (AI).
              </p>
              <Divider />
            </div>

            <div className="mb-5 shadow-md p-5 rounded-lg">
              <h1 className="text-xl font-bold text-sky-400 mb-2">
                PROJECT TECHNOLOGY & IMPLEMENT
              </h1>

              <Divider />
              <p className="text-sm text-justify ">
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
                      Next UI
                    </a>{" "}
                  </strong>
                  Moreover, Next.js will be incorporated into the project to
                  further enhance the user interface with dynamic features,
                  animations, and customizable templates. Next.js provides
                  powerful capabilities for server-side rendering, allowing for
                  faster page loads and enhanced SEO performance. Additionally,
                  its support for client-side routing enables seamless
                  navigation between different sections of the application
                  without the need for page refreshes. With Next.js, we can
                  leverage its built-in support for animations, enabling the
                  creation of engaging and interactive user experiences. Whether
                  it's subtle transitions between page views or more complex
                  animations within UI elements, Next.js offers the flexibility
                  and tools necessary to bring designs to life. Furthermore,
                  Next.js provides the ability to create custom templates,
                  streamlining the development process and ensuring consistency
                  across various pages and components. By defining reusable
                  layout structures and components, we can maintain a cohesive
                  design language throughout the application while optimizing
                  development efficiency. Incorporating Next.js into the project
                  will not only enhance the user interface with dynamic
                  animations and custom templates but also improve performance
                  and maintainability, ultimately resulting in a more polished
                  and user-friendly application.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      Django Framework:
                    </a>{" "}
                  </strong>
                  This robust web framework is utilized as the backbone of the
                  project, facilitating seamless integration of various
                  components and ensuring efficient backend operations.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      API Connectivity
                    </a>{" "}
                  </strong>
                  Django serves as the platform for implementing code to
                  establish connections with external APIs. Through this
                  integration, users can interact with the OpenAI API
                  seamlessly.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      OpenAI API Integration
                    </a>{" "}
                  </strong>
                  Leveraging the power of OpenAI's advanced AI capabilities,
                  users can harness state-of-the-art algorithms to generate
                  images that align precisely with their specifications and
                  preferences.
                </p>
                <Divider className="my-2" />
                <p>
                  <strong className="text-lg">
                    <a link rel="" type="" href="">
                      DELL2 Infrastructure:
                    </a>{" "}
                  </strong>
                  The project utilizes DELL2 infrastructure to support the
                  operations of the API responsible for generating images. This
                  infrastructure ensures scalability, reliability, and optimal
                  performance in handling image generation requests from users.
                </p>
              </p>
              <Divider className="my-2" />
            </div>
            <div className="mb-5 shadow-md p-5 rounded-lg">
              <h1 className="text-xl font-bold text-sky-400 mb-2">Resorce</h1>
              <Divider />
              <a
                className=" flex gap-3 py-5 text-blue-500 italic"
                href="https://github.com/PunlerPich/Images-Ai-Generate">
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
