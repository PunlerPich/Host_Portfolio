import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea, Button } from "@nextui-org/react";
import { toast } from "react-toastify"; // Import toast library

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ctv91eb", "template_qfuibe9", form.current, {
        publicKey: "fFP2zCdgBuoJCpXPO",
      })
      .then(
        () => {
          toast.success("Email sent successfully!"); // Display success toast
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email. Please try again later."); // Display error toast
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="m-auto w-[930px] max-md:w-[350px] flex-wrap  max-md:mt-5 gap-4 mt-5">
          <div className="flex gap-3   ">
            <Input type="text" name="user_name" label="Name" />
            <Input
              type="email"
              name="user_email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>
          <Textarea
            label="Description"
            name="message"
            placeholder="Enter your description"
            className="w-full   md:w-26 py-5"
          />

          <Button
            className=" w-full "
            type="submit"
            value="Send"
            color="primary">
            Sign in
          </Button>
        </div>
      </form>
    </>
  );
};
