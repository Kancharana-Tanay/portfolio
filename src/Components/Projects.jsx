import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
    const sectionRef = useRef(null);

    const ProjectsList = [
        {"id":1, "Title": "Ride Hailing Web Application", "description": "A web-based ride hailing app inspired by Uber that enables users to tack their real-time location on a map and book rides through a complete end-to-end booking flow with fare estimation and trip confirmation.", "tools": ["React.js", "Node.js", "Express.js", "MongoDB", "Geoapify", "Leaflet.JS", "GSAP", "Tailwind"], "demoURL":null, "GithubURL": "https://github.com/Kancharana-Tanay/Uber-Clone"},
        {
        id: 2,
        Title: "AQI Time-Series Predictor",
        description:
        "Designed a lag-feature based machine learning pipeline to forecast hourly PM2.5 levels and visualize air quality insights using an interactive analytics dashboard.",
        tools: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Streamlit",
        "Time-Series",
        "Data Visualization"
        ],
        demoURL: "https://aqi-predictor-manideep.streamlit.app/",
        GithubURL: "https://github.com/Kancharana-Tanay/AQI-Predictor"
        },
        {
        id: 6,
        Title: "MovieZ – Movie Discovery Platform",
        description:
        "Developed a responsive movie discovery application that enables users to search films, explore trending titles and view detailed metadata using real-time API driven content rendering and optimized UI states.",
        tools: [
        "React.js",
        "JavaScript",
        "TMDB API",
        "API Integration",
        "Tailwind CSS",
        "Responsive Design"
        ],
        demoURL: "https://kancharana-tanay.github.io/moviesDB-React/",
        GithubURL: "https://github.com/Kancharana-Tanay/moviesDB-React"
        }
    ]

    const TitleRef = useRef(null);
    const projectRefs = useRef([]);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1100px)", () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#Projects",
                    start: "top 50%",
                    end: "top 0%",
                },
            });
        });
        return () => mm.revert();
    }, { scope: sectionRef, dependencies: [] });

  const handleMouseEnter = (el) => {
    gsap.to(el, {
      boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el, {
      boxShadow: '0 0 0px rgba(147, 51, 234, 0)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  return (
    <section
      id="Projects"
      ref={sectionRef}
      className="scroll-mt-50 min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
    >
      <div ref={TitleRef} className="title text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Real products I built to solve real problems.
        </p>
      </div>


      {/* PROJECT GRID */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        
        {ProjectsList.map((project) => (
          <div
            key={project?.id}
            ref={(el) => projectRefs.current[project?.id-1] = el}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl hover:-translate-y-2 transition duration-300"
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
            <h4 className="text-lg font-bold">{project?.Title}</h4>

            <p className="text-gray-400 mt-3 text-sm">
              {project?.description}
            </p>

            <div className="mt-5 flex gap-3 text-xs flex-wrap">
                {project?.tools?.map((tool, i)=>(
                    <span key={i} className="text-xs bg-blue-600/20 px-2 py-1 rounded">
                        {tool}
                    </span>
                ))}            
            </div>

            <div className="mt-6 flex gap-4">
                {project?.demoURL !==null&&
                    <a href={`${project.demoURL}`} className="text-purple-400">
                        Demo →
                    </a>
                }
                {project?.GithubURL !==null&&
                    <a href={`${project.GithubURL}`} className="text-purple-400">
                        Code →
                    </a>
                }
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;