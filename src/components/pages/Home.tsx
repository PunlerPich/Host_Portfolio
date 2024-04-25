import { MacbookScrollDemo } from "../MacbookScrollDemo";

import { ThreeDCardDemo } from "../ThreeDCardDemo";
import Para from "../Para";

import { CardHoverEffectDemo } from "../CardHoverEffectDemo";
import { TracingBeamDemo } from "../TracingBeamDemo";
import Education from "../Education";
import Contact from "../Contact";
import { ContactUs } from "../ContactUs";

export default function Home() {
  return (
    <>
      <ThreeDCardDemo />
      <MacbookScrollDemo />
      <Education />
      <TracingBeamDemo />
      <CardHoverEffectDemo />
      <Contact />

      <Para />
    </>
  );
}
