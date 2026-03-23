import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errorMessage, setErrorMessage] = useState("");
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formContainerRef = useRef(null);

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
        }
    ]
    useGSAP(() => {
        const title = titleRef.current;
        const formContainer = formContainerRef.current;

        if (title) {
        gsap.from(title, {
            scrollTrigger: {
            trigger: "#Contact",
            start: "top 70%",
            toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            immediateRender: false,
        });
        }
        if (formContainer) {
        gsap.from(formContainer, {
            scrollTrigger: {
            trigger: "#Contact",
            start: "top 55%",
            toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.2,
            immediateRender: false,
        });
        }
    }, { scope: sectionRef, dependencies: [] });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
        setStatus("error");
        setErrorMessage(
            "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
        );
        return;
        }

        emailjs
        .sendForm(serviceId, templateId, formRef.current, { publicKey })
        .then(
            () => {
            setStatus("success");
            formRef.current?.reset();
            },
            (error) => {
            setStatus("error");
            setErrorMessage(error.text || "Something went wrong. Please try again.");
            }
        );
    };

    return (
        <section
        id="Contact"
        ref={sectionRef}
        className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-24"
        >
            <div ref={titleRef} className="text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
                <p className="text-gray-400 mt-4">
                Have a project in mind? I'd love to hear from you.
                </p>
                <a
                href="public/CV.pdf"
                download="Kancharana-Tanay-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition"
                >
                <i className="fa-solid fa-file-pdf"></i> Download my CV
                </a>
            </div>
            <div ref={formContainerRef} className="mt-16 max-w-xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                    <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                </div>

                <div>
                    <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                </div>

                <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                    >
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                    />
                </div>

                {status === "success" && (
                    <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                )}

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
