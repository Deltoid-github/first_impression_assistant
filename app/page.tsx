import { AiForm } from "@/components/first-visit/aiForm";
import bg from "../public/images/bg.jpg"; // Replace with your image path
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-full flex-col items-center justify-between pt-14 pb-4 md:pt-24 md:pb-6 px-4 bg-[#000000] bg-opacity-20">
        <AiForm />
      </div>
    </Suspense>
  );
}
