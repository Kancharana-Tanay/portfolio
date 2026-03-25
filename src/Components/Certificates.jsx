import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AICertificate from "../assets/AI.pdf"
import Cloud from "../assets/Cloud.pdf"
import Google from "../assets/Google.pdf"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Certificates = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const certificatesData = [
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys",
      date: "2025",
      description: "Demonstrated expertise in Building Generative AI Apps.",
      link: AICertificate,
      type: "link"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL25CS11S1437301571",
      description: "Certified in developing scalable applications on Google Cloud Platform.",
      link: Cloud,
      type: "link"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      description: "Validated skills in Computer Networking",
      link: Google,
      type: "link"
    },
  ];

  const handleCertificateClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="Certificates"
      ref={sectionRef}
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
    >
      <div ref={titleRef} className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">Certificates</h2>
        <p className="text-gray-400 mt-4">
          Professional certifications and achievements that validate my expertise.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificatesData.map((cert, idx) => (
          <div
            key={cert.title}
            ref={(el) => (cardRefs.current[idx] = el)}
            onClick={() => handleCertificateClick(cert.link)}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{cert.date}</span>
                {cert.type === 'pdf' ? (
                  <svg className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.5 2H15.5L19 5.5V22H5V2H8.5ZM15 3.5V7H18.5L15 3.5ZM7 4V20H17V9H13V4H7ZM9 12H11V18H9V12ZM13 10H15V18H13V10Z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
            </div>
            <p className="text-gray-300 font-medium mb-2">{cert.issuer}</p>
            <p className="text-gray-400 text-sm mb-3">{cert.description}</p>
            {cert.credentialId && 
              <div className="text-xs text-gray-500">
                Credential ID: {cert.credentialId}
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;