import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const storyRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const title = titleRef.current;
    const story = storyRef.current;
    const image = imageRef.current;

    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: "#About",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        immediateRender: false,
      });
    }
    if (story) {
      gsap.from(story, {
        scrollTrigger: {
          trigger: "#About",
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        delay: 0.2,
        immediateRender: false,
      });
    }
    if (image) {
      gsap.from(image, {
        scrollTrigger: {
          trigger: "#About",
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        delay: 0.2,
        immediateRender: false,
      });
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      id="About"
      ref={sectionRef}
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
    >
      <div ref={titleRef} className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">My Story</h2>
        <p className="text-gray-400 mt-4">
          The journey of how I became a Full Stack Developer.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div ref={storyRef} className="flex-1 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="text-purple-400 font-semibold">Kancharana Tanay</span> — 
            a Full Stack Developer with a passion for building scalable, user-centric products.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My journey into tech started with curiosity — wanting to understand how the apps 
            I used every day actually worked. That curiosity led me to dive deep into 
            JavaScript, React, and the entire MERN stack. Along the way, I've built 
            real-world projects like ride-hailing apps, predictive analytics dashboards, 
            and movie discovery platforms.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I believe great software is born at the intersection of clean code, thoughtful 
            design, and relentless iteration. When I'm not coding, you'll find me 
            exploring new technologies, contributing to open source, or learning from 
            the dev community.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
              Problem Solver
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
              Quick Learner
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
              Team Player
            </span>
          </div>
        </div>

        <div
          ref={imageRef}
          className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20"
        >
          <img
            src="src/assets/profile-pic.png"
            alt="Kancharana Tanay"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
