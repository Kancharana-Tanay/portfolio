import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const SkillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "JavaScript", icon: "js" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "HTML & CSS", icon: "html" },
        { name: "Responsive UI", icon: "css" },
      ],
    },
        {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "REST APIs", icon: "postman" },
        { name: "Auth & APIs", icon: "firebase" },
      ],
    },
    {
      title: "Tools & Core",
      skills: [
        { name: "Git", icon: "git" },
        { name: "github", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
        { name: "VS Code", icon: "vscode" },
        { name: "Postman", icon: "postman" },
      ],
    },
  ];

  useGSAP(() => {
    const title = titleRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!title && cards.length === 0) return;

    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: "#Skills",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        immediateRender: false,
      });
    }
    if (cards.length) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: "#Skills",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.6,
        immediateRender: false,
      });
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
    >
    <div ref={titleRef} className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
        <p className="text-gray-400 mt-4">
        Technologies and tools I use to build great products.
        </p>
    </div>

    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {SkillsData.map((category, idx) => (
        <div
            key={category.title}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
        >
            <h3 className="text-xl font-bold text-purple-400 mb-6">
            {category.title}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
            {category.skills.map((skill) => (
                <div
                key={skill.name}
                className="flex flex-col items-center gap-2 group"
                >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 group-hover:bg-purple-500/20 transition-colors">
                    <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                        e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`;
                    }}
                    />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                </span>
                </div>
            ))}
            </div>
        </div>
        ))}
    </div>

    <div className="mt-16 max-w-5xl mx-auto flex gap-10  bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
        <div className="">
            <h2 className="text-3xl md:text-4xl font-bold">Platforms</h2>    
            <p className="text-gray-400 mt-4">See My work</p>
        </div>
        <div className="flex gap-x-5 gap-y-1 flex-wrap space-y-6">
            <a href="https://www.linkedin.com/in/kancharanatanay/" className="block max-h-10 text-sm font-medium text-gray-400 mb-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-2">Linked In <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/kancharana-Tanay" className="block max-h-10 text-sm font-medium text-gray-400 mb-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-2">GitHub <i class="fa-brands fa-github"></i></a>
            <a href="https://leetcode.com/u/ScorpionSailor" className="block max-h-10 text-sm font-medium text-gray-400 mb-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-2">LeetCode</a>
            <a href="https://www.geeksforgeeks.org/profile/kancharana9g6d" className="block max-h-10 text-sm font-medium text-gray-400 mb-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-2">GeeksforGeeks</a>
            <a href="https://codolio.com/profile/tanay%20kancharana" className="block max-h-10 text-sm font-medium text-gray-400 mb-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-2">Codolio <i class="fa-brands fa-duolingo"></i></a>
        </div>
    </div>
    </section>
  );
};

export default Skills;
