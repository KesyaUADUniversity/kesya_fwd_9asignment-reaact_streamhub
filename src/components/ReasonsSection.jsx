// src/components/ReasonsSection.jsx
import { useState, useEffect } from 'react';

export default function ReasonsSection() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1.75-3M9 13h6v6H9v-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
        </svg>
      )
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16h.01" />
        </svg>
      )
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-4.553A2 2 0 0121.354 7.354H18.646a2 2 0 01-1.414-.586l-4.553-4.553A2 2 0 0010.586 4.586L6.032 9.14A2 2 0 004.586 10.586l4.553 4.553A2 2 0 0010.586 16.586l4.553-4.553A2 2 0 0116.586 10.586z" />
        </svg>
      )
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-8v-2c0-.642.312-1.249.824-1.707l6-6C16.312 9.249 16.624 8.642 16.624 8V6a2 2 0 00-2-2h-6a2 2 0 00-2 2v2c0 .642.312 1.249.824 1.707l6 6C15.688 14.751 15.999 15.358 15.999 16v2a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-4 bg-black">
      <h2 className="text-2xl font-bold mb-8 text-white">More Reasons to Join</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4 text-white">{reason.title}</h3>
            <p className="text-gray-300 mb-6">{reason.description}</p>
            <div className="flex justify-end">
              {reason.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}