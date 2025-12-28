"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
  MapPin,
  Terminal,
  Globe,
  Sparkles,
  ArrowUp,
  MessageSquare,
  Youtube,
  Instagram,
  X,
  Send,
  Loader2,
  Camera,
  Coffee,
  Music,
  Book,
  Heart,
  Layout,
  Code,
  ImageIcon,
  Gamepad2,
  Activity,
  Users,
  Briefcase,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";

/**
 * --- BACKGROUND ANIMATION COMPONENTS ---
 */
type Fly = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  flickerDuration: number;
  opacity: number;
};

const Fireflies = () => {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const newFlies = Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 15,
      flickerDuration: Math.random() * 6 + 4,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setFlies(newFlies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flies.map((fly) => (
        <div
          key={fly.id}
          className="absolute rounded-full bg-[#8ca67a] blur-[2px]"
          style={{
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            opacity: fly.opacity,
            animation: `float ${fly.duration}s infinite ease-in-out ${fly.delay}s, flicker ${fly.flickerDuration}s infinite ease-in-out`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -40px); }
          66% { transform: translate(-20px, -20px); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.4; }
        }
        @keyframes zzz-float {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
        }
        @keyframes cat-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

/**
 * --- HELPER COMPONENTS ---
 */
type ImageWithLoaderProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  imgClassName = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    // If the image already finished loading (cache or fast load), ensure we update state
    if (img) {
      if (img.complete) {
        if (img.naturalWidth && img.naturalHeight) {
          setIsLoaded(true);
        } else {
          setHasError(true);
        }
        return;
      }
    }

    // fallback: if neither load nor error fires (e.g., blocked), mark as error after timeout
    const t = setTimeout(() => {
      if (!imgRef.current?.complete) {
        setHasError(true);
      }
    }, 10000);

    return () => clearTimeout(t);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };
  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className} bg-white/[0.03]`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] animate-pulse">
          <Loader2
            className="text-[#8ca67a] animate-spin opacity-20"
            size={24}
          />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/[0.05] text-white/20">
          <ImageIcon size={32} strokeWidth={1} />
          <span className="text-[9px] mt-2 font-black tracking-widest uppercase">
            Load_Failed
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className={`${imgClassName} transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

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
    github: "https://github.com/ymetdev",
    youtube: "https://www.youtube.com/@temymaichobloei",
    instagram: "https://www.instagram.com/teymm_/",
    email: "temgoodboi@gmail.com",
  },
  interests: [
    { name: "Project Management", icon: <Briefcase size={14} /> },
    { name: "Indie Development", icon: <Sparkles size={14} /> },
    { name: "System Thinking", icon: <Terminal size={14} /> },
    { name: "Team Collaboration", icon: <Users size={14} /> },
  ],
  hobbies: [
    {
      name: "Gaming",
      desc: "Strategy, teamwork, and the joy of competing",
      icon: <Gamepad2 size={16} />,
    },
    {
      name: "Music Making",
      desc: "Turning emotions into sound",
      icon: <Music size={16} />,
    },
    {
      name: "Learning New Stuff Online",
      desc: "Falling into endless curiosity",
      icon: <Globe size={16} />,
    },
    {
      name: "Working Out",
      desc: "Recharging through movement",
      icon: <Activity size={16} />,
    },
  ],
  expertise: [
    {
      category: "Frontend",
      tools: ["React", "TypeScript", "Tailwind", "Figma"],
    },
    { category: "Backend", tools: ["Node.js", "Go", "PostgreSQL", "Redis"] },
    { category: "Tools", tools: ["Docker", "Git", "Rust", "AWS"] },
  ],
  projects: [
    {
      id: 1,
      title: "Sabi Dashboard",
      cat: "Web Experience",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Go"],
      link: "https://example.com",
      description:
        "A minimal administrative dashboard designed for focus and speed. Built with high-performance Go backend and a responsive React frontend, featuring real-time data streaming and a customizable organic UI system.",
    },
    {
      id: 2,
      title: "Matcha API",
      cat: "Backend System",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      tech: ["Node", "Redis"],
      link: "https://example.com",
      description:
        "A fast, scalable RESTful API service tailored for modern web apps. It handles massive concurrent requests using Redis for efficient caching, ensuring sub-millisecond response times for global users.",
    },
    {
      id: 3,
      title: "Forest CLI",
      cat: "Developer Tool",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000",
      tech: ["Rust"],
      link: "https://example.com",
      description:
        "A command-line interface tool built in Rust for managing local development environments. Focused on memory safety and extreme execution speed, Forest simplifies complex deployment pipelines into single commands.",
    },
    {
      id: 4,
      title: "Neon Shader Lab",
      cat: "Experimental UI",
      image:
        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
      tech: ["Three.js", "GLSL"],
      link: "https://example.com",
      description:
        "Exploring the boundaries of web graphics through custom GLSL shaders. This lab features interactive 3D elements that react to sound and touch, creating an immersive digital art experience.",
    },
    {
      id: 5,
      title: "Zen Pomodoro",
      cat: "Mini Tool",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
      tech: ["Next.js", "Framer"],
      link: "https://example.com",
      description:
        "A productivity timer that emphasizes silence and calm. Designed with soft animations and low-contrast colors to reduce eye strain, helping developers maintain their flow state without distractions.",
    },
    {
      id: 6,
      title: "Crypto Viz v0.1",
      cat: "Data Visualization",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
      tech: ["D3.js", "WebSockets"],
      link: "https://example.com",
      description:
        "Real-time cryptocurrency market analysis visualization. Uses WebSockets for live data feeds and D3.js to render complex financial charts, providing a clear bird's-eye view of market trends.",
    },
    {
      id: 7,
      title: "Audio Mesh",
      cat: "Sound Design",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
      tech: ["WebAudio", "Canvas"],
      link: "https://example.com",
      description:
        "An experimental soundboard that converts browser interactions into generative music. Each click and hover contributes to a unique, evolving soundscape, blending audio synthesis with canvas visuals.",
    },
  ],
  playlist: [
    {
      title: "About You",
      artist: "The 1975",
      url: "/music/about-you.mp3",
      cover: "https://api.sepsakon.com/uploads/1751104473025-The197501.jpg",
    },
    {
      title: "Fallingforyou",
      artist: "The 1975",
      url: "/music/falling-for-you.mp3",
      cover: "https://i.scdn.co/image/ab67616d0000b2733110d217dcb5935a3a7eae40",
    },
  ],
};

export default function App() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // --- MUSIC PLAYER STATES ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const [volume, setVolume] = useState(0.01);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Modal States
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof DATA.projects)[number] | null
  >(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // set initial time on client mount to avoid SSR/CSR mismatch
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);
      setShowBackToTop(scrollPos > 400);
    };

    const attemptPlay = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Autoplay blocked by browser policy.");
          });
      }
    };

    attemptPlay();

    window.addEventListener("scroll", handleScroll);

    const startOnInteraction = () => {
      attemptPlay();
      window.removeEventListener("click", startOnInteraction);
    };
    window.addEventListener("click", startOnInteraction);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", startOnInteraction);
    };
  }, []);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, currentTrackIndex]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current
        ?.play()
        .catch((err) => console.log("Playback blocked", err));
    }
    setIsPlaying(!isPlaying);
  };

  const advanceTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % DATA.playlist.length);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const nextTrack = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    advanceTrack();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadMore = () => {
    if (visibleCount >= DATA.projects.length) {
      setVisibleCount(3);
      scrollToSection("projects");
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, DATA.projects.length));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsContactModalOpen(false);
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const visibleProjects = DATA.projects.slice(0, visibleCount);
  const currentTrack = DATA.playlist[currentTrackIndex];

  const socialItems = [
    { name: "Github", url: DATA.socials.github, icon: <Github size={14} /> },
    { name: "Youtube", url: DATA.socials.youtube, icon: <Youtube size={14} /> },
    {
      name: "Instagram",
      url: DATA.socials.instagram,
      icon: <Instagram size={14} />,
    },
  ];

  return (
    <div
      id="home"
      className="min-h-screen font-mono transition-colors duration-700 bg-[#0A0A0A] text-[#E5E5E5] relative selection:bg-[#8ca67a]/40 overflow-x-hidden"
    >
      <audio ref={audioRef} src={currentTrack.url} onEnded={advanceTrack} />

      {/* --- BACKGROUND ELEMENTS --- */}
      <Fireflies />

      {/* Glow Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 bg-emerald-900"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 bg-lime-900"></div>
      </div>

      {/* Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-[999]"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto border-x border-white/10 min-h-screen relative z-10 shadow-2xl bg-inherit">
        {/* --- HEADER --- */}
        <header
          className={`flex border-b border-white/10 sticky top-0 z-[100] transition-all duration-300 ${
            isScrolled
              ? "bg-[#0A0A0A]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-0"
              : "bg-[#0A0A0A]/80 py-1 md:py-2"
          } backdrop-blur-md`}
        >
          <div
            onClick={() => backToTop()}
            className="p-4 md:p-6 border-r border-white/10 flex-shrink-0 font-black tracking-tighter text-xl md:text-2xl group cursor-pointer"
          >
            <span className="group-hover:text-[#8ca67a] transition-colors">
              {DATA.name}
            </span>
          </div>
          <div className="flex-grow flex items-center px-4 md:px-8 overflow-x-auto no-scrollbar text-left">
            <nav className="flex gap-6 md:gap-10 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-black">
              <button
                onClick={() => backToTop()}
                className="hover:text-[#8ca67a] transition-all relative group whitespace-nowrap"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="opacity-40 hover:opacity-100 hover:text-[#8ca67a] transition-all whitespace-nowrap relative group"
              >
                WORKS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact-area")}
                className="opacity-40 hover:opacity-100 hover:text-[#8ca67a] transition-all whitespace-nowrap relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8ca67a] transition-all group-hover:w-full"></span>
              </button>
            </nav>
          </div>
          <div className="p-4 md:p-6 hidden md:block"></div>
        </header>

        <main className="relative overflow-hidden text-left">
          {/* --- Hero Section --- */}
          <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
            <div className="lg:col-span-8 p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-20 h-1 bg-[#8ca67a]"></div>
              <div className="relative z-10 text-left">
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="px-3 md:px-4 py-1.5 rounded-full border border-[#8ca67a] text-[#8ca67a] text-[10px] md:text-[11px] font-black tracking-widest flex items-center gap-2 bg-[#8ca67a]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8ca67a] animate-ping"></span>
                    {DATA.status}
                  </div>
                </div>
                <h1 className="text-4xl md:text-8xl font-black tracking-tight leading-[1.1] md:leading-[0.9] mb-8 md:mb-12">
                  Simplicity <br />
                  <span className="text-[#8ca67a] italic font-light drop-shadow-sm">
                    Defined
                  </span>{" "}
                  by <br />
                  Code.
                </h1>
                <p className="text-base md:text-xl max-w-xl leading-relaxed opacity-80 border-l-4 border-[#8ca67a]/30 pl-6 italic">
                  {DATA.bio}
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col bg-white/[0.01]">
              <div className="p-8 md:p-10 border-b border-white/10 flex-grow flex flex-col justify-center items-center relative overflow-hidden group/photo">
                {/* --- EMOJIS WITH HOVER FIX --- */}
                <div className="absolute top-6 right-6 text-2xl opacity-20 grayscale group-hover/photo:opacity-100 group-hover/photo:grayscale-0 group-hover/photo:scale-125 transition-all duration-500 ease-out select-none">
                  ✨
                </div>
                <div className="absolute bottom-10 left-6 text-xl opacity-10 grayscale group-hover/photo:opacity-100 group-hover/photo:grayscale-0 group-hover/photo:scale-125 transition-all duration-500 ease-out select-none">
                  ☕
                </div>

                {/* --- SLEEPING CAT WIDGET --- */}
                <div className="absolute bottom-4 right-6 pointer-events-none z-20 flex flex-col items-center group-hover/photo:scale-110 transition-transform duration-700">
                  <div className="relative">
                    {/* Floating Zzz effect */}
                    <div className="absolute -top-6 -right-2 text-[10px] font-black text-[#8ca67a] tracking-[0.3em] animate-[zzz-float_3s_infinite] opacity-0">
                      Zzz...
                    </div>
                    <div className="absolute -top-4 -right-1 text-[8px] font-black text-[#8ca67a] tracking-[0.3em] animate-[zzz-float_3s_infinite_1.5s] opacity-0">
                      Zzz...
                    </div>

                    {/* Orange and White Cat Image */}
                    <div className="w-20 md:w-24 shadow-2xl animate-[cat-breathe_4s_infinite_ease-in-out]">
                      <img
                        src="https://cdn.discordapp.com/attachments/1129503536531652619/1454881325944275128/660735a244b9dc7a.png?ex=6952b352&is=695161d2&hm=34a77e92e601eb77458eff3861e463ed7f2fbde6c5054967c35ddcda29b53cc0&"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#8ca67a]/40 backdrop-blur-md -rotate-3 z-20 shadow-sm border border-[#8ca67a]/20"></div>
                    <div className="w-40 h-48 md:w-48 md:h-56 border-2 border-[#8ca67a]/30 p-2 shadow-2xl -rotate-1 lg:group-hover/photo:rotate-0 transition-transform duration-500 overflow-hidden relative">
                      <ImageWithLoader
                        src="image/temypic.jpg"
                        alt="Temy's Profile"
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover grayscale-0 brightness-100 lg:grayscale lg:brightness-90 lg:group-hover/photo:grayscale-0 lg:group-hover/photo:brightness-100"
                      />
                      <div className="absolute inset-2 border border-white/5 pointer-events-none"></div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-8 text-center">
                    <span className="text-[12px] font-black tracking-[0.5em] bg-[#8ca67a] text-black px-4 py-1.5 inline-block text-center">
                      TEMY_v2.01
                    </span>
                    <p className="mt-4 text-[10px] md:text-[11px] font-black italic opacity-70 leading-tight">
                      "Quietly crushing bugs... <br /> & dreaming of cats."
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-4 md:p-6 text-center text-white">
                  <span className="text-[10px] md:text-[11px] block opacity-50 mb-2 font-black uppercase tracking-tight">
                    TIME
                  </span>
                  <span className="text-xs md:text-sm font-black text-[#8ca67a]">
                    {currentTime
                      ? currentTime.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })
                      : "--:--:--"}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center text-white">
                  <span className="text-[10px] md:text-[11px] block opacity-50 mb-2 font-black uppercase tracking-tight">
                    LOC
                  </span>
                  <span className="text-xs md:text-sm font-black italic">
                    {DATA.location}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* --- STUDIO LOGS --- */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-white/[0.01]">
            <div className="md:col-span-4 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <div className="flex items-center gap-3 mb-8 text-left">
                <Heart size={14} className="text-[#8ca67a]" />
                <h3 className="text-[12px] font-black tracking-[0.3em] uppercase italic text-white/90">
                  / INTERESTS
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 text-left">
                {DATA.interests.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 group cursor-default text-white/50 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg border border-white/5 bg-white/[0.03] flex items-center justify-center text-[#8ca67a]">
                      {item.icon}
                    </div>
                    <span className="text-[13px] font-bold uppercase tracking-wider text-left">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 p-8 md:p-10 relative overflow-hidden text-left">
              <div className="flex items-center gap-3 mb-8 relative z-10 text-left">
                <Sparkles size={14} className="text-[#8ca67a]" />
                <h3 className="text-[12px] font-black tracking-[0.3em] uppercase italic text-white/90">
                  / STUDIO_HOBBIES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative z-10 text-left">
                {DATA.hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-6 border border-white/5 bg-white/[0.02] lg:hover:border-[#8ca67a]/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3 text-left">
                      <span className="text-[#8ca67a]">{hobby.icon}</span>
                      <span className="text-[14px] font-black uppercase tracking-tight text-white/90">
                        {hobby.name}
                      </span>
                    </div>
                    <p className="text-[12px] opacity-50 italic lg:group-hover:opacity-80 transition-opacity font-bold text-white/70 text-left">
                      "{hobby.desc}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Projects Section --- */}
          <div
            id="projects"
            className="grid grid-cols-1 lg:grid-cols-12 text-left"
          >
            <section className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-white/10 text-left">
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-[#8ca67a]/5">
                <div className="flex items-center gap-4 text-left">
                  <Sparkles size={16} className="text-[#8ca67a]" />
                  <span className="text-[12px] font-black tracking-[0.3em] uppercase underline decoration-[#8ca67a] decoration-2 underline-offset-4 text-white/90 text-left">
                    SELECTED WORKS
                  </span>
                </div>
              </div>
              <div className="divide-y divide-white/10 text-left">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group flex flex-col md:flex-row items-stretch lg:hover:bg-[#8ca67a]/5 active:bg-[#8ca67a]/10 active:scale-[0.99] transition-all duration-300 relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r lg:from-[#8ca67a]/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-full md:w-80 h-56 md:h-auto border-b md:border-b-0 md:border-r border-white/10 overflow-hidden relative bg-black/20 text-left">
                      <ImageWithLoader
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full text-left"
                        imgClassName="w-full h-full object-cover grayscale-0 brightness-90 lg:grayscale lg:brightness-75 lg:group-hover:grayscale-0 lg:group-hover:brightness-100 lg:group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-grow p-8 md:p-10 flex flex-col justify-center relative z-10 text-left">
                      <span className="text-[10px] md:text-[11px] font-black text-[#8ca67a] tracking-widest mb-3 uppercase">
                        {project.cat}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 lg:group-hover:translate-x-4 transition-transform duration-500 text-white/90 text-left">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 md:gap-3 text-left">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] md:text-[11px] font-black border border-white/20 md:border-2 px-3 md:px-4 py-1 rounded-full text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-2 transition-all">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#8ca67a] md:border-2 flex items-center justify-center text-[#8ca67a] shadow-lg">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleLoadMore}
                className="group w-full p-10 md:p-12 text-[12px] font-black tracking-[0.6em] uppercase border-t border-white/5 hover:text-[#8ca67a] active:bg-[#8ca67a]/5 transition-all flex items-center justify-center gap-4 bg-white/[0.01]"
              >
                {visibleCount >= DATA.projects.length ? (
                  <>
                    <Minus size={16} />
                    <span className="underline decoration-[#8ca67a]/30 decoration-2 underline-offset-8">
                      COLLAPSE
                    </span>
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    <span className="underline decoration-[#8ca67a]/30 decoration-2 underline-offset-8">
                      VIEW_MORE
                    </span>
                  </>
                )}
              </button>
            </section>
            <section className="lg:col-span-4 flex flex-col text-left">
              <div className="p-8 md:p-10 border-b border-white/10 bg-white/[0.02] text-left">
                <div className="flex items-center gap-3 mb-10 text-left">
                  <Terminal size={16} className="text-[#8ca67a]" />
                  <h4 className="text-[12px] font-black tracking-widest uppercase italic text-white/90">
                    TECH_STACK
                  </h4>
                </div>
                <div className="space-y-10 md:y-12 text-left">
                  {DATA.expertise.map((exp) => (
                    <div key={exp.category} className="relative text-left">
                      <span className="text-[13px] font-black opacity-60 block mb-5 uppercase text-white/70">
                        {exp.category}
                      </span>
                      <div className="flex flex-wrap gap-2 text-left">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[13px] md:text-[14px] font-bold bg-white/[0.05] border border-white/10 px-3 md:px-3.5 py-1.5 md:py-2 text-white/90"
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
                className="p-8 md:p-10 border-b border-white/10 flex-grow relative group overflow-hidden text-left"
              >
                <div className="flex items-center gap-3 mb-10 relative z-10 text-left">
                  <MessageSquare size={16} className="text-[#8ca67a]" />
                  <h4 className="text-[12px] font-black tracking-widest uppercase italic text-white/90 text-left">
                    / REACH_OUT
                  </h4>
                </div>
                <div className="space-y-3 relative z-10 text-left">
                  {socialItems.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center group/link text-sm md:text-base font-black py-4 border-b border-white/5 hover:text-[#8ca67a] active:pl-2 transition-all"
                    >
                      <div className="flex items-center gap-3 text-left">
                        <span className="text-[#8ca67a]">{social.icon}</span>
                        <span className="tracking-widest uppercase text-white/80 group-hover/link:text-white">
                          {social.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 lg:group-hover/link:opacity-100 transition-opacity">
                        <span className="text-[11px] text-white">VISIT</span>
                        <ExternalLink size={14} className="text-white" />
                      </div>
                    </a>
                  ))}
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full flex justify-between items-center group/link mt-8 md:mt-12 border-2 border-dashed border-[#8ca67a]/30 p-6 md:p-8 hover:border-solid hover:text-[#8ca67a] active:bg-[#8ca67a]/5 transition-all bg-white/[0.01] text-left"
                  >
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-[10px] font-black tracking-[0.3em] opacity-60 uppercase text-white/70 text-left">
                        SEND_EMAIL
                      </span>
                      <span className="text-xs md:text-sm font-black tracking-wider uppercase truncate max-w-[180px] md:max-w-none text-white/90 text-left">
                        {DATA.socials.email}
                      </span>
                    </div>
                    <div className="p-2 md:p-3 border border-current/10 rounded-full text-white/70">
                      <Mail size={20} />
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="flex flex-col md:flex-row border-t border-white/10 bg-white/[0.03] text-left">
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex-grow text-left">
            <span className="text-[11px] opacity-50 block mb-3 uppercase tracking-[0.3em] font-black italic underline decoration-[#8ca67a]/50 text-white/40 text-left">
              DESIGNED_WITH_SINCERITY
            </span>
            <span className="text-[13px] font-black tracking-[0.2em] text-white/40 text-left">
              © 2024 TEMY STUDIO.{" "}
              <span className="text-[#8ca67a]">HANDCRAFTED.</span>
            </span>
          </div>
          <div className="p-8 md:p-10 flex items-center">
            <div className="w-12 h-12 border border-white/10 text-[#8ca67a] flex items-center justify-center rounded-lg rotate-12 bg-white/[0.05]">
              <Terminal size={20} />
            </div>
          </div>
        </footer>
      </div>

      {/* --- VINYL PLAYER WIDGET --- */}
      <div
        className={`fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] transition-all duration-700 ease-out ${
          isPlayerExpanded
            ? "translate-x-0"
            : "-translate-x-4 md:-translate-x-6"
        }`}
      >
        <div className="relative group text-left">
          {isPlayerExpanded && (
            <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 bg-[#0A0A0A]/95 backdrop-blur-md border border-white/10 p-4 pr-10 whitespace-nowrap animate-in slide-in-from-left-4 duration-500 shadow-2xl text-left">
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border-l border-b border-white/10 rotate-45"></div>
              <p className="text-[10px] font-black text-[#8ca67a] tracking-[0.3em] uppercase mb-1 text-left">
                NOW_PLAYING
              </p>
              <p className="text-[13px] font-black text-white/90 text-left">
                {currentTrack.title}
              </p>
              <p className="text-[11px] font-bold text-white/30 italic uppercase mb-3 text-left">
                {currentTrack.artist}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/5 text-left">
                {volume === 0 ? (
                  <VolumeX size={12} className="text-white/20 text-left" />
                ) : (
                  <Volume2 size={12} className="text-[#8ca67a] text-left" />
                )}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-24 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8ca67a] text-left"
                />
              </div>
            </div>
          )}

          <div
            className={`relative w-16 h-16 md:w-20 md:h-20 bg-black rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/5 p-1 transition-transform cursor-pointer ${
              isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
            }`}
            onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-10 text-left"></div>
            <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden text-left">
              <div className="absolute inset-[15%] rounded-full border border-white/[0.03] z-[5] text-left"></div>
              <div className="w-[50%] h-[50%] rounded-full border-2 border-black z-20 overflow-hidden bg-[#8ca67a] shadow-lg text-left text-white">
                <img
                  src={currentTrack.cover}
                  alt="Cover"
                  className="w-full h-full object-cover text-left"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#0A0A0A] rounded-full z-30 shadow-inner border border-white/10 text-left"></div>
            </div>
          </div>

          <div
            className={`absolute -top-12 left-0 flex items-center gap-2 transition-all duration-500 ${
              isPlayerExpanded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[#0A0A0A]/90 border border-white/10 flex items-center justify-center text-[#8ca67a] hover:border-[#8ca67a] transition-all text-left"
            >
              {isPlaying ? (
                <Pause size={16} fill="currentColor" className="text-left" />
              ) : (
                <Play
                  size={16}
                  fill="currentColor"
                  className="ml-1 text-left"
                />
              )}
            </button>
            <button
              onClick={nextTrack}
              className="w-10 h-10 rounded-full bg-[#0A0A0A]/90 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#8ca67a] transition-all text-left"
            >
              <SkipForward size={16} className="text-left" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-[#0A0A0A]/95 backdrop-blur-sm animate-in fade-in duration-300 text-left">
          <div className="relative w-full max-w-xl bg-[#0F0F0F] border border-white/10 p-6 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh] text-left text-white">
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-white/30 hover:text-[#8ca67a] transition-colors text-left"
            >
              <X size={24} className="text-left" />
            </button>
            {isSubmitted ? (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-[#8ca67a]/10 border border-[#8ca67a] rounded-full flex items-center justify-center mx-auto mb-8 text-[#8ca67a]">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase text-white">
                  MESSAGE RECEIVED.
                </h3>
                <p className="text-[#8ca67a] italic font-bold">
                  Thank you for reaching out.
                </p>
              </div>
            ) : (
              <div className="space-y-6 text-left">
                <div className="mb-4 text-left">
                  <h3 className="text-[11px] font-black tracking-[0.5em] text-[#8ca67a] uppercase mb-2 italic text-left">
                    / NEW_MESSAGE
                  </h3>
                  <p className="text-lg font-light text-white/80 text-left">
                    Tell me about your next ideas.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 text-white text-left"
                >
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#8ca67a] outline-none text-sm font-bold text-left"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#8ca67a] outline-none text-sm font-bold text-left"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-transparent border-2 border-dashed border-white/10 p-4 focus:border-[#8ca67a] outline-none text-sm font-bold resize-none text-left"
                  ></textarea>
                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 border-2 border-[#8ca67a] text-[#8ca67a] font-black uppercase hover:bg-[#8ca67a] hover:text-black transition-all flex items-center justify-center gap-4 group disabled:opacity-50 text-left"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin text-left" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="text-left" />
                        SEND_MESSAGE
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-8 bg-[#0A0A0A]/95 backdrop-blur-md animate-in fade-in duration-300 text-left">
          <div className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/10 shadow-2xl overflow-y-auto max-h-[95vh] md:max-h-[90vh] no-scrollbar rounded-lg md:rounded-none text-left">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-40 p-2 md:p-3 bg-[#0A0A0A]/70 border border-white/10 rounded-full text-white/70 hover:text-[#8ca67a] active:scale-90 transition-all text-left"
            >
              <X size={24} className="text-left" />
            </button>
            <div className="flex flex-col text-left">
              <div className="w-full h-56 md:h-96 overflow-hidden relative border-b border-white/10 bg-black/20 text-left text-white">
                <ImageWithLoader
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full text-left"
                  imgClassName="w-full h-full object-cover text-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent text-left"></div>
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-12 pr-6 text-white text-left">
                  <span className="text-[9px] md:text-[11px] font-black text-[#8ca67a] tracking-[0.3em] uppercase mb-1 md:mb-2 block italic text-white/90 text-left">
                    / PROJECT_ARCHIVE
                  </span>
                  <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight text-white text-left">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 p-6 md:p-12 text-white/80 text-left">
                <div className="lg:col-span-8 space-y-6 md:space-y-8 text-left">
                  <div className="space-y-3 md:space-y-4 text-left">
                    <h3 className="text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase text-white/30 italic flex items-center gap-2 text-left">
                      <Layout size={14} strokeWidth={1.5} /> DESCRIPTION
                    </h3>
                    <p className="text-base leading-relaxed font-medium text-left">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="pt-6 md:pt-8 border-t border-white/5 text-left text-white">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-6 md:px-8 py-3 md:py-4 border-2 border-[#8ca67a] text-[#8ca67a] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-[#8ca67a] hover:text-black active:scale-[0.98] transition-all group text-left"
                    >
                      VISIT_LIVE_PROJECT
                      <ExternalLink
                        size={18}
                        className="hidden md:block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-left text-white"
                      />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-8 md:space-y-10 text-left">
                  <div className="space-y-4 text-left">
                    <h3 className="text-[11px] md:text-[12px] font-black tracking-[0.3em] uppercase text-white/30 italic flex items-center gap-2 text-left">
                      <Code size={14} strokeWidth={1.5} /> STACK
                    </h3>
                    <div className="flex flex-wrap gap-2 text-left">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 border border-[#8ca67a]/20 bg-[#8ca67a]/5 text-[#8ca67a] text-[10px] md:text-xs font-bold rounded uppercase text-left"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 md:p-6 border-l-2 border-[#8ca67a]/30 bg-white/5 text-left">
                    <span className="text-[9px] md:text-[10px] font-black opacity-30 block mb-1 md:mb-2 uppercase tracking-widest text-white/70 text-left">
                      STATUS
                    </span>
                    <span className="text-[10px] md:text-xs font-black flex items-center gap-2 text-[#8ca67a] text-left">
                      <span className="w-1.5 h-1.5 bg-[#8ca67a] rounded-full animate-pulse text-left"></span>
                      DEPLOYED_SUCCESSFULLY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      <div
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={backToTop}
          className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border-2 border-[#8ca67a]/50 backdrop-blur-md text-[10px] md:text-[11px] font-black tracking-widest uppercase bg-[#0A0A0A]/80 text-[#E5E5E5] hover:text-[#8ca67a] hover:border-[#8ca67a] transition-all active:scale-90 shadow-2xl text-left"
        >
          TOP
          <ArrowUp size={16} className="text-left" />
        </button>
      </div>
    </div>
  );
}
