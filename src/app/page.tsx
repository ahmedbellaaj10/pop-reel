"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function MainPage() {
  const router = useRouter();

  const handleExploreReels = () => {
    router.push("/feed"); // Navigate to the videos feed page
  };

  return (
    <main
      className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center"
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="Reel-Pop Logo"
            width={150}
            height={150}
            className="rounded-full"
            priority
          />
        </div>

        {/* Motto Section 1 */}
        <h1 className="text-blue-900 text-5xl font-bold text-center drop-shadow-lg">
          Pop Reel - Mini TikTok Clone
        </h1>

        {/* Separator */}
        <div className="my-4 w-12 border-t-4 border-blue-900"></div>

        {/* Motto Section 2 */}
        <h1 className="text-blue-900 text-4xl font-bold text-center drop-shadow-lg">
          Pop into the Spotlight!
        </h1>

        {/* Buttons Section */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {/* Explore Reels Button */}
          <button
            onClick={handleExploreReels}
            className="px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-pink-500 transition"
          >
            Explore Reels     
            <br />
            (Guest Mode)
          </button>

          {/* Sign In Button */}
          <SignInButton mode="modal">
            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition">
              Sign In 
              <br />(Connect to your account)
            </button>
          </SignInButton>

          {/* Sign Up Button */}
          <SignUpButton mode="modal">
            <button className="px-6 py-3 bg-lime-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-lime-500 transition">
              Sign Up 
              <br />
              (Create a new account)
            </button>
          </SignUpButton>
        </div>
      </div>
    </main>
  );
}
