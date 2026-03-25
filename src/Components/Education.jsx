import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      year: "2023 - 2027",
      grade: "CGPA: 8.08/10",
      description: "Focused on software engineering, algorithms, and system design. Active in coding competitions and hackathons."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Sri Chaitanya JR Collage",
      year: "2021 - 2023",
      grade: "Percentage: 80.05%",
      description: "Mathematics, Physics, and Chemistry. Excelled mathematics."
    },
    {
      degree: "Secondary School Certificate",
      institution: "Gloria Vidhya Kendhram EM School",
      year: "2020 - 2021",
      grade: "Percentage: 100%",
      description: "Foundation in science and mathematics with early exposure to programming concepts."
    },
  ];

  useGSAP(() => {
    const title = titleRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!title && cards.length === 0) return;

    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: "#Education",
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
          trigger: "#Education",
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
      id="Education"
      ref={sectionRef}
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
    >
      <div ref={titleRef} className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        <p className="text-gray-400 mt-4">
          My academic journey and educational background.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        {educationData.map((edu, idx) => (
          <div
            key={edu.degree}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 mb-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-400">{edu.year}</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{edu.grade}</p>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;