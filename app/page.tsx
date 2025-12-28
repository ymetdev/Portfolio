"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Twitter,
  Plus,
  Minus,
  MapPin,
  Clock,
  Terminal,
  ChevronRight,
  Globe,
  Sparkles,
  ArrowUp,
  MessageSquare,
} from "lucide-react";

/**
 * --- DATA CONFIGURATION ---
 */
const DATA = {
  name: "TEMY.",
  role: "Creative Full-Stack Developer",
  location: "Bangkok, TH",
  status: "OPEN FOR NEW IDEAS",
  lastUpdated: "DEC 28, 2024",
  bio: "Crafting digital spaces where technical precision meets organic aesthetics. I build systems that feel as natural as they are powerful.",
  socials: {
    github: "https://github.com/temy",
    linkedin: "https://linkedin.com/in/temy",
    twitter: "https://twitter.com/temy",
    email: "hello@temy.studio",
  },
  expertise: [
    {
      category: "Frontend",
      tools: ["React", "TypeScript", "Tailwind", "Figma"],
    },
    { category: "Backend", tools: ["Node.js", "Go", "PostgreSQL", "Redis"] },
    { category: "Tools", tools: ["Docker", "Git", "Rust", "AWS"] },
  ],
  categories: ["All", "Web", "System", "Tool"],
  projects: [
    {
      id: 1,
      title: "Sabi Dashboard",
      cat: "Web Experience",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Go"],
    },
    {
      id: 2,
      title: "Matcha API",
      cat: "Backend System",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      tech: ["Node", "Redis"],
    },
    {
      id: 3,
      title: "Forest CLI",
      cat: "Developer Tool",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000",
      tech: ["Rust"],
    },
    {
      id: 4,
      title: "Neon Shader Lab",
      cat: "Experimental UI",
      image:
        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
      tech: ["Three.js", "GLSL"],
    },
    {
      id: 5,
      title: "Zen Pomodoro",
      cat: "Mini Tool",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
      tech: ["Next.js", "Framer"],
    },
    {
      id: 6,
      title: "Crypto Viz v0.1",
      cat: "Data Visualization",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
      tech: ["D3.js", "WebSockets"],
    },
  ],
};

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 10);
      setShowBackToTop(scrollPos > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDark = true;
  const themeClass = "bg-[#0A0A0A] text-[#E5E5E5]";
  const borderClass = "border-white/10";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visibleProjects = showAllProjects
    ? DATA.projects
    : DATA.projects.slice(0, 3);

  const socialItems = [
    { name: "Github", url: DATA.socials.github },
    { name: "Linkedin", url: DATA.socials.linkedin },
    { name: "Twitter", url: DATA.socials.twitter },
  ];

  return (
    <div
      id="home"
      className={`min-h-screen font-mono transition-colors duration-700 selection:bg-[#8ca67a]/40 ${themeClass} relative`}
    >
      {/* Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 bg-emerald-900"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 bg-lime-900"></div>
      </div>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      ></div>

      <div
        className={`max-w-[1400px] mx-auto border-x ${borderClass} min-h-screen relative z-10 shadow-2xl bg-inherit`}
      >
        {/* --- Header / Navigation --- */}
        <header
          className={`flex border-b ${borderClass} sticky top-0 z-[100] transition-all duration-300 ${
            isScrolled
              ? "bg-[#0A0A0A]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-white/20"
              : "bg-[#0A0A0A]/80 border-white/10"
          } glass`}
        >
          <div
            onClick={() => scrollToSection("home")}
            className={`p-6 border-r ${borderClass} flex-shrink-0 font-black tracking-tighter text-2xl group cursor-pointer transition-all duration-300 ${
              isScrolled ? "py-4" : "py-6"
            }`}
          >
            <span className="group-hover:text-[#8ca67a] transition-colors">
              {DATA.name}
            </span>
          </div>

          <div className="flex-grow flex items-center px-8">
            <nav className="flex gap-10 text-[11px] tracking-[0.3em] uppercase font-black">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-[#8ca67a] transition-all relative group whitespace-nowrap"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="opacity-30 hover:opacity-100 hover:text-[#8ca67a] transition-all whitespace-nowrap relative group"
              >
                SELECTED_PROJECTS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact-area")}
                className="opacity-30 hover:opacity-100 hover:text-[#8ca67a] transition-all whitespace-nowrap relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
            </nav>
          </div>

          <div
            className={`p-6 border-l ${borderClass} items-center gap-6 hidden md:flex transition-all duration-300 ${
              isScrolled ? "py-4" : "py-6"
            }`}
          >
            <span className="text-[10px] font-black opacity-30 tracking-widest uppercase italic">
              Archive_01
            </span>
          </div>
        </header>

        <div className="relative overflow-hidden">
          {/* --- Hero Section --- */}
          <section
            className={`grid grid-cols-1 lg:grid-cols-12 border-b ${borderClass}`}
          >
            <div
              className={`lg:col-span-8 p-10 md:p-20 border-b lg:border-b-0 lg:border-r ${borderClass} relative overflow-hidden group`}
            >
              <div className="absolute top-0 left-0 w-20 h-1 bg-[#8ca67a]"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="px-3 py-1 rounded-full border border-[#8ca67a] text-[#8ca67a] text-[10px] font-black tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8ca67a] animate-ping"></span>
                    {DATA.status}
                  </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-12">
                  Simplicity <br />
                  <span className="text-[#8ca67a] italic font-light drop-shadow-sm">
                    Defined
                  </span>{" "}
                  by <br />
                  Code.
                </h1>

                <p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-80 border-l-4 border-[#8ca67a]/30 pl-6 italic">
                  {DATA.bio}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col bg-current/[0.01]">
              <div
                className={`p-10 border-b ${borderClass} flex-grow flex flex-col justify-center items-center relative overflow-hidden group/photo`}
              >
                <div className="absolute top-6 right-6 text-2xl opacity-10 group-hover/photo:opacity-40 group-hover/photo:rotate-12 transition-all duration-700 select-none">
                  ✨
                </div>
                <div className="absolute bottom-10 left-6 text-xl opacity-5 group-hover/photo:opacity-20 group-hover/photo:-rotate-12 transition-all duration-1000 select-none">
                  ☕
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#8ca67a]/40 backdrop-blur-md -rotate-3 z-20 shadow-sm border border-[#8ca67a]/20"></div>

                    <div className="w-48 h-56 bg-current/[0.05] border-2 border-[#8ca67a]/30 p-2 shadow-2xl -rotate-1 group-hover/photo:rotate-0 transition-transform duration-500 overflow-hidden relative">
                      <img
                        src="https://cdn.discordapp.com/attachments/1129503536531652619/1454826115007779011/IMG_4683.jpg?ex=69527fe7&is=69512e67&hm=ea16ac7718521f180320b68a41173b94ca004bf1a71e3ef00011ddaa754cad4f&"
                        alt="Temy's Profile"
                        className="w-full h-full object-cover grayscale brightness-90 group-hover/photo:grayscale-0 group-hover/photo:brightness-100 transition-all duration-700"
                      />
                      <div className="absolute inset-2 border border-white/5 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <span className="text-[11px] font-black tracking-[0.5em] bg-[#8ca67a] text-white dark:text-black px-4 py-1.5 inline-block">
                      TEMY_v2.01
                    </span>
                    <p className="mt-4 text-[10px] font-black italic opacity-60 leading-tight">
                      "Quietly crushing bugs... <br /> & dreaming of cats."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/10 dark:divide-black/10">
                <div className="p-6">
                  <span className="text-[10px] block opacity-40 mb-2 font-black uppercase">
                    TIME
                  </span>
                  <span className="text-sm font-black text-[#8ca67a]">
                    {currentTime.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] block opacity-40 mb-2 font-black uppercase">
                    LOC
                  </span>
                  <span className="text-sm font-black italic">
                    {DATA.location}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* --- Projects Section --- */}
          <div id="projects" className="grid grid-cols-1 lg:grid-cols-12">
            <section
              className={`lg:col-span-8 border-b lg:border-b-0 lg:border-r ${borderClass}`}
            >
              <div
                className={`p-8 border-b ${borderClass} flex justify-between items-center bg-[#8ca67a]/5`}
              >
                <div className="flex items-center gap-4">
                  <Sparkles size={16} className="text-[#8ca67a]" />
                  <span className="text-[11px] font-black tracking-[0.3em] uppercase underline decoration-[#8ca67a] decoration-2 underline-offset-4">
                    SELECTED WORKS
                  </span>
                </div>
                <span className="text-[10px] font-black opacity-30">
                  VOL. 01
                </span>
              </div>

              <div className="divide-y divide-white/10 dark:divide-black/10 transition-all duration-700">
                {visibleProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className={`group flex flex-col md:flex-row items-stretch hover:bg-[#8ca67a]/5 transition-all duration-500 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#8ca67a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                    ></div>

                    <div
                      className={`w-full md:w-80 h-64 md:h-auto border-b md:border-b-0 md:border-r ${borderClass} overflow-hidden relative`}
                    >
                      <img
                        src={project.image}
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <div className="flex-grow p-10 flex flex-col justify-center relative z-10">
                      <span className="text-[10px] font-black text-[#8ca67a] tracking-widest mb-3 uppercase">
                        {project.cat}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 group-hover:translate-x-4 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-black border-2 border-current/10 px-4 py-1 rounded-full group-hover:border-[#8ca67a]/50 group-hover:text-[#8ca67a] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        <div className="w-14 h-14 rounded-full border-2 border-[#8ca67a] flex items-center justify-center text-[#8ca67a]">
                          <ArrowRight size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ปรับปรุงปุ่ม View All Experiments - เอา Fill ออก */}
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group w-full p-12 text-[11px] font-black tracking-[0.6em] uppercase border-t border-white/5 hover:text-[#8ca67a] transition-all flex items-center justify-center gap-4 bg-current/[0.01] hover:bg-[#8ca67a]/5"
              >
                {showAllProjects ? (
                  <>
                    <Minus
                      size={16}
                      className="transition-transform text-[#8ca67a]"
                    />
                    <span className="underline decoration-[#8ca67a]/30 decoration-2 underline-offset-8">
                      COLLAPSE_EXPERIMENTS
                    </span>
                  </>
                ) : (
                  <>
                    <Plus
                      size={16}
                      className="group-hover:rotate-90 transition-transform text-[#8ca67a]"
                    />
                    <span className="underline decoration-[#8ca67a]/30 decoration-2 underline-offset-8">
                      VIEW_ALL_EXPERIMENTS
                    </span>
                  </>
                )}
              </button>
            </section>

            <section className="lg:col-span-4 flex flex-col">
              <div className={`p-10 border-b ${borderClass} bg-current/[0.02]`}>
                <div className="flex items-center gap-3 mb-10">
                  <Terminal size={14} className="text-[#8ca67a]" />
                  <h4 className="text-[11px] font-black tracking-widest uppercase italic">
                    TECH_STACK
                  </h4>
                </div>
                <div className="space-y-10">
                  {DATA.expertise.map((exp, idx) => (
                    <div key={idx} className="relative">
                      <span className="text-[10px] font-black opacity-30 block mb-4 tracking-tighter uppercase">
                        {exp.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-black bg-current/[0.05] border border-current/10 px-3 py-1.5 hover:text-[#8ca67a] hover:border-[#8ca67a] transition-all cursor-crosshair"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="contact-area"
                className={`p-10 border-b ${borderClass} flex-grow relative group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8ca67a]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="flex items-center gap-3 mb-10 relative z-10">
                  <MessageSquare size={14} className="text-[#8ca67a]" />
                  <h4 className="text-[11px] font-black tracking-widest uppercase italic">
                    / REACH_OUT
                  </h4>
                </div>

                <div className="space-y-2 relative z-10">
                  {socialItems.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center group/link text-base font-black py-4 border-b border-current/5 hover:text-[#8ca67a] transition-all"
                    >
                      <span className="tracking-widest">
                        {social.name.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-2 opacity-0 group-hover/link:opacity-100 transition-opacity">
                        <span className="text-[10px]">VISIT</span>
                        <ExternalLink size={14} />
                      </div>
                    </a>
                  ))}

                  {/* ปรับปรุงปุ่ม Email - เอา Fill ออก */}
                  <a
                    href={`mailto:${DATA.socials.email}`}
                    className="flex justify-between items-center group/link mt-12 border-2 border-dashed border-[#8ca67a]/30 p-8 hover:border-[#8ca67a] hover:border-solid hover:text-[#8ca67a] transition-all duration-500 relative overflow-hidden bg-current/[0.01] hover:bg-[#8ca67a]/5"
                  >
                    <div className="flex flex-col gap-1 relative z-10">
                      <span className="text-[9px] font-black tracking-[0.3em] opacity-50 uppercase">
                        SEND_AN_EMAIL
                      </span>
                      <span className="text-sm font-black tracking-wider uppercase">
                        {DATA.socials.email.toUpperCase()}
                      </span>
                    </div>
                    <div className="p-3 border border-current/10 rounded-full relative z-10 group-hover/link:border-[#8ca67a]/50">
                      <Mail
                        size={22}
                        className="group-hover/link:rotate-12 transition-transform"
                      />
                    </div>
                  </a>
                </div>
              </div>

              <div className={`p-10 border-t ${borderClass} bg-current/[0.01]`}>
                <p className="text-sm font-black leading-relaxed tracking-tight italic text-[#8ca67a] opacity-80 group-hover:opacity-100 transition-opacity">
                  "Code is the ink, the browser is my canvas. Let's make
                  something sincerely beautiful together."
                </p>
              </div>
            </section>
          </div>
        </div>

        <footer
          className={`flex flex-col md:flex-row border-t ${borderClass} bg-current/[0.03]`}
        >
          <div
            className={`p-10 border-b md:border-b-0 md:border-r ${borderClass} flex-grow`}
          >
            <span className="text-[10px] opacity-40 block mb-3 uppercase tracking-[0.3em] font-black italic underline decoration-[#8ca67a]/50">
              DESIGNED_WITH_SINCERITY
            </span>
            <span className="text-xs font-black tracking-[0.2em]">
              © 2024 TEMY STUDIO.{" "}
              <span className="text-[#8ca67a]">HANDCRAFTED.</span>
            </span>
          </div>
          <div className="p-10 flex items-center gap-10">
            <div className="flex flex-col items-end">
              <span className="text-[9px] opacity-30 font-black mb-1">
                SYSTEM_STATUS
              </span>
              <span className="text-[11px] font-black text-[#8ca67a]">
                ALL_SYSTEMS_NOMINAL
              </span>
            </div>
            <div className="w-12 h-12 border border-current/10 text-[#8ca67a] flex items-center justify-center rounded-lg rotate-12 bg-current/[0.05]">
              <Terminal size={20} />
            </div>
          </div>
        </footer>
      </div>

      {/* ปรับปรุงปุ่ม Back to Top - เอา Fill ออก */}
      <div
        className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 transform ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={backToTop}
          className={`flex items-center gap-3 px-6 py-3 border-2 border-[#8ca67a]/50 glass text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl bg-[#0A0A0A]/80 text-[#E5E5E5] hover:text-[#8ca67a] hover:border-[#8ca67a] transition-all group`}
        >
          BACK_TO_TOP
          <ArrowUp
            size={16}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
