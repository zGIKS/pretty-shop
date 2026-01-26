"use client";

import SignShampooIcon from "@/components/icon/sign-shampoo";

export default function LoginIconPanel() {
  return (
    <div className="hidden md:flex items-center justify-center flex-shrink-0 px-4 md:px-6">
      <SignShampooIcon className="h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72 transition-transform duration-300 lg:scale-125" />
    </div>
  );
}
