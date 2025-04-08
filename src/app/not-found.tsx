import React from "react";
import NotFoundSvg from "@/assets/not-found.svg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-3xl">404 - Not Found</h1>
        <p className="text-gray-400">
          The page you are looking for does not exist.
        </p>
        <div className="rounded-2xl overflow-hidden relative">
          <Image
            src={NotFoundSvg}
            alt=""
            className="h-72 object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
