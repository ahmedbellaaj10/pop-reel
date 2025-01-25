"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const videos = ["/videos/tiktok1.mp4", "/videos/tiktok2.mp4", "/videos/tiktok3.mp4"];
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleSoundEnable = () => {
    setSoundEnabled(true); // Allow videos to play with sound
  };

  return (
    <main className="snap-y snap-mandatory scroll-smooth overflow-y-scroll h-screen relative">
      {videos.map((video, index) => (
        <VideoSection key={index} src={video} soundEnabled={soundEnabled} />
      ))}
      {!soundEnabled && (
        <Modal onConfirm={handleSoundEnable} />
      )}
    </main>
  );
}

function Modal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-lg text-gray-900 font-semibold mb-4">Enable Sound</h2>
        <p className="text-sm text-gray-600 mb-6">
          Would you like to enable sound for the videos?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onConfirm()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Yes, Enable Sound
          </button>
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            No, Keep Muted
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoSection({ src, soundEnabled }: { src: string; soundEnabled: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = !soundEnabled; // Unmute if sound is enabled
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reset to start
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the video is visible
    );

    const video = videoRef.current;
    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, [soundEnabled]);

  return (
    <div className="snap-start flex justify-center items-center h-screen bg-gray-900">
      <video
        ref={videoRef}
        src={src}
        playsInline
        loop
        controls
        className="w-auto h-full object-contain"
      />
    </div>
  );
}
