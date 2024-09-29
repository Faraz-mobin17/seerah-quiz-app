import React from "react";

export default function HeroSection() {
  return (
    <section className="md:container mx-auto h-full p-2">
      <div className="md:container mx-auto md:py-4 md:px-4 p-2 flex flex-col justify-center items-center h-full">
        <h1 className="mt-20 md:mt-15 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Discover the Life of the Prophet &#65018;
        </h1>
        <div className="mt-8 text-center">
          <p className="text-base text-justify md:text-center p-4">
            Dive deep into the life and teachings of the Prophet Muhammad
            &#65018; with our engaging and educational Seerah Quiz! Test your
            knowledge, learn new insights, and challenge yourself with questions
            that cover the most important events, lessons, and wisdom from the
            Prophet's life. Whether you're a student of Islamic history or just
            curious to learn more, our quizzes offer a fun and interactive way
            to explore the Seerah. Start your journey today and deepen your
            understanding of the Prophet's remarkable life story!
          </p>
        </div>
        <div className="text-center ">
          <a
            href="/quiz"
            className="bg-white border-2 border-transparent text-neutral-800 rounded px-4 py-2 mt-4 hover:bg-gray-200 transition-colors capitalize w-38 block hover:border-white"
          >
            Get Started with Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
