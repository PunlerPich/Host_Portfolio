"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ` Bachelor of Software Engineering at BELTIE International University
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
