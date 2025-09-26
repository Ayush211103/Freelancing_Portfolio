/*
DigitalStudioPortfolio.jsx
Single-file React component (Tailwind + Framer Motion)

How to use:
1. Create a React app (vite / create-react-app).
2. Install TailwindCSS and Framer Motion.
   npm install framer-motion
3. Add Tailwind config and include the required styles.
4. Place this file in src/ and render <DigitalStudioPortfolio /> in App.jsx.

This component is designed as a modern, minimal "Digital Studio" portfolio demo.
It contains reusable components and is fully responsive.
*/

import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import abstractAnim from "./assets/abstract.json";


function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showroom />
      <TrendingExplorer />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}


export default function DigitalStudioPortfolio() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <MainLayout />
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // wraps button + menu

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative py-6 flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <div className="text-lg font-bold">Ayush Yadav</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Digital Studio — Portfolio & E‑Com
          </div>
        </div>
      </div>

      {/* Wrap button + menu in a ref */}
      <div ref={navRef} className="relative">
        {/* Hamburger / Close Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none relative w-6 h-6"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transform transition duration-300 ease-in-out
                ${isOpen ? "rotate-45 top-2.5" : "top-0"}`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transform transition duration-300 ease-in-out
                ${isOpen ? "opacity-0" : "top-2.5"}`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transform transition duration-300 ease-in-out
                ${isOpen ? "-rotate-45 top-2.5" : "top-5"}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 shadow-md rounded-md py-4 px-6 flex flex-col gap-3 md:hidden z-50
            transition-all duration-300 ease-in-out transform
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          <a href="#showroom" className="hover:underline">Showroom</a>
          <a href="#playground" className="hover:underline">Playground</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
        <a href="#showroom" className="hover:underline">Showroom</a>
        <a href="#playground" className="hover:underline">Playground</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}


function Logo() {
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6h8v12H8z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.02"/>
      </svg>
    </div>
  )
}

function Hero() {
    return (
    <section className="w-full px-6 py-12 lg:px-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text + Button */}
        <motion.div
         initial={{ opacity: 0, x: -40 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6 }}
         className="text-center lg:text-left space-y-6"
         >
         <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
           I build digital identities —
         </h1>

         <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
           From personal portfolios to online stores. Clean, responsive, and crafted to convert visitors into clients.
         </p>
 
         {/* Buttons in same line */}
         <div className="flex gap-4 mt-8">
         <motion.a
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           href="#showroom"
           className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-500 transition"
           >
           Explore the Showroom
         </motion.a>

         <motion.a
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           href="#playground"
           className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-500 hover:text-white transition"
           >
           Try Interactive Playground
         </motion.a>
       </div>

  {/* Text below buttons */}
   <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
    Available for freelance & studio projects —{" "}
    <strong>special focus:</strong> writers, photographers, videographers, models, and small businesses.
  </div>
</motion.div>


        {/* Right Side - Card with Lottie Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(99, 102, 241, 0.6)" }} // Glow + Zoom
          className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 group"
        >
          {/* Lottie Background */}
          <Lottie
            animationData={abstractAnim}
            loop={true}
            className="absolute inset-0 w-full h-full z-0 opacity-70"
          />

          {/* Animated Gradient Background */}
          
        <div className="w-full h-full animated-gradient flex items-center justify-center">
          <div className="text-center p-6 transition-transform duration-500 group-hover:scale-105">
            <div className="text-sm text-indigo-400 font-semibold">
              Digital Studio
            </div>
            <div className="mt-3 text-2xl font-bold text-white">
              Showcase • Shop • Stories
            </div>
            <div className="mt-2 text-sm text-slate-200 opacity-90">
              A curated gallery of project outlets with live previews.
            </div>
          </div>
        </div>
        </motion.div>

      </div>
    </section>
  );
}

const projects = [
  { id: 'portfolio', title: 'Portfolio Websites', tag: 'For writers, photographers, videographers & models', image: 'portfolio' },
  { id: 'ecom', title: 'E‑Commerce Websites', tag: 'Small shops, dropshippers, and brands', image: 'shop' },
  { id: 'agency', title: 'Business / Agency', tag: 'Agency sites, landing pages, services', image: 'agency' },
  { id: 'blog', title: 'Blogging Platforms', tag: 'Personal blogs & content hubs', image: 'blog' },
  { id: 'fullstack', title: 'Custom Full‑Stack', tag: 'React, Node, Mongo — production ready', image: 'code' }
]

function Showroom() {
  return (
    <section id="showroom" className="py-12 lg:py-20 mx-auto px-4">
      <h2 className="text-2xl font-bold">Showroom</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">A gallery of outlets — click any card to see the project detail or demo.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.a whileHover={{ scale: 1.02 }} className="group block rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition" href={`#${project.id}`}>
      <div className="relative h-44 sm:h-52 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <OutletPreview type={project.image} />
        </div>
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/6 group-hover:from-black/10 transition"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{project.title}</h3>
          <div className="text-xs text-indigo-600 font-medium">View</div>
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.tag}</p>
      </div>
    </motion.a>
  )
}

function OutletPreview({ type = 'portfolio' }) {
  // Simple SVG previews per outlet
  return (
    <div className="w-40 h-28 sm:w-48 sm:h-32 rounded-md overflow-hidden transform transition group-hover:scale-105">
      {type === 'portfolio' && (
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="60" rx="6" fill="#EEF2FF" />
            <rect x="6" y="8" width="78" height="8" rx="2" fill="#C7D2FE" />
            <rect x="6" y="24" width="56" height="4" rx="2" fill="#E0E7FF" />
            <circle cx="74" cy="36" r="11" fill="#C7D2FE" />
          </svg>
        </div>
      )}

      {type === 'shop' && (
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="60" rx="6" fill="#EEF2FF" />
            <rect x="8" y="10" width="74" height="12" rx="3" fill="#C7D2FE" />
            <rect x="12" y="28" width="28" height="22" rx="3" fill="#fff" stroke="#DDD6FE" />
            <rect x="44" y="28" width="34" height="22" rx="3" fill="#fff" stroke="#DDD6FE" />
          </svg>
        </div>
      )}

      {type === 'agency' && (
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="60" rx="6" fill="#F0F9FF" />
            <rect x="8" y="10" width="22" height="40" rx="2" fill="#CFFAFE" />
            <rect x="34" y="10" width="48" height="18" rx="2" fill="#E0F2FE" />
            <rect x="34" y="32" width="48" height="18" rx="2" fill="#EFF6FF" />
          </svg>
        </div>
      )}

      {type === 'blog' && (
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="60" rx="6" fill="#FFF7ED" />
            <rect x="8" y="12" width="74" height="8" rx="2" fill="#FFD8A8" />
            <rect x="8" y="28" width="56" height="4" rx="2" fill="#FFEAC6" />
            <rect x="8" y="36" width="32" height="10" rx="2" fill="#fff" stroke="#FDE68A" />
          </svg>
        </div>
      )}

      {type === 'code' && (
        <div className="w-full h-full bg-white/60 flex items-center justify-center">
          <svg width="90" height="60" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="60" rx="6" fill="#F8FAFC" />
            <rect x="10" y="10" width="70" height="10" rx="2" fill="#E6EEF8" />
            <rect x="10" y="26" width="28" height="6" rx="2" fill="#E6EEF8" />
            <rect x="40" y="26" width="30" height="6" rx="2" fill="#EAF2FF" />
            <rect x="10" y="38" width="14" height="6" rx="2" fill="#CFE0FF" />
          </svg>
        </div>
      )}
    </div>
  )
}


function TrendingExplorer() {
  return (
    <section id="playground" className="py-12 lg:py-20 mx-auto px-4">
      <h2 className="text-2xl font-bold">Trending Explorer</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Browse trending memes, reels, songs, and news in one interactive demo.
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrendingDemo />
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
            <h4 className="font-semibold">Categories</h4>
            <TrendingControls />
          </div>

          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
            <h4 className="font-semibold">Examples</h4>
            <ul className="mt-3 text-sm text-slate-500 dark:text-slate-300 space-y-2">
              <li>Memes: Funny trending posts</li>
              <li>Reels: Short viral videos</li>
              <li>Songs: Top charts & playlists</li>
              <li>News: Hot headlines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrendingDemo() {
  const [category, setCategory] = useState("memes")

  const sampleData = {
    memes: [
      { id: 1, img: "https://i.imgur.com/xyz123.jpg", title: "Funny Meme 1" },
      { id: 2, img: "https://i.imgur.com/abc456.jpg", title: "Funny Meme 2" },
    ],
    reels: [
      { id: 1, video: "", title: "Viral Reel" }
    ],
    songs: [
      { id: 1, name: "Top Song 1", url: "#" },
      { id: 2, name: "Top Song 2", url: "#" }
    ],
    news: [
      { id: 1, headline: "Breaking: Something Big Happened", link: "#" },
      { id: 2, headline: "Tech: New Framework Released", link: "#" }
    ]
  }

  return (
    <div className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">Trending Preview</div>
          <div className="text-sm text-slate-400">Select a category to explore</div>
        </div>
        <div className="flex items-center gap-3">
          {["memes", "reels", "songs", "news"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-md border ${category === cat ? "bg-indigo-600 text-white" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category === "memes" &&
          sampleData.memes.map((m) => (
            <div key={m.id} className="p-3 rounded-md border">
              <img src={m.img} alt={m.title} className="rounded-md" />
              <div className="mt-2 text-sm">{m.title}</div>
            </div>
          ))}

        {category === "reels" &&
          sampleData.reels.map((r) => (
            <div key={r.id} className="p-3 rounded-md border">
              <iframe
                src={r.video}
                title={r.title}
                className="w-full h-48 rounded-md"
                allowFullScreen
              />
              <div className="mt-2 text-sm">{r.title}</div>
            </div>
          ))}

        {category === "songs" &&
          sampleData.songs.map((s) => (
            <div key={s.id} className="p-3 rounded-md border flex justify-between">
              <span>{s.name}</span>
              <a href={s.url} className="text-indigo-600 text-sm">Play</a>
            </div>
          ))}

        {category === "news" &&
          sampleData.news.map((n) => (
            <div key={n.id} className="p-3 rounded-md border">
              <a href={n.link} target="_blank" className="text-sm text-indigo-600">{n.headline}</a>
            </div>
          ))}
      </div>
    </div>
  )
}

function TrendingControls() {
  return (
    <div className="mt-3 text-sm text-slate-500 dark:text-slate-300">
      <div className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-600 rounded-full" /> Memes</div>
      <div className="flex items-center gap-2 mt-2"><div className="w-2 h-2 bg-purple-600 rounded-full" /> Reels</div>
      <div className="flex items-center gap-2 mt-2"><div className="w-2 h-2 bg-green-600 rounded-full" /> Songs</div>
      <div className="flex items-center gap-2 mt-2"><div className="w-2 h-2 bg-red-600 rounded-full" /> News</div>
    </div>
  )
}


function About() {
  return (
    <section id="about" className="py-12 lg:py-20 mx-auto px-4">
      <h2 className="text-2xl font-bold">About Me</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-slate-600 dark:text-slate-300">I’m a web developer who designs and builds modern digital identities — clean full‑stack applications, portfolios for creatives and conversion-focused e‑commerce sites for sellers. I love minimal design, fast performance, and code that’s easy to maintain.</p>

          <Timeline />
        </div>

        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
          <h4 className="font-semibold">Skills</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>HTML, CSS, Tailwind, JavaScript, React</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Responsive UI, Accessibility, Performance</li>
            <li>Design systems & component-driven development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const items = [
    { year: '2021', title: 'Started building small portfolio sites', desc: 'Worked with writers and photographers for personal portfolio setups.' },
    { year: '2022', title: 'Launched e‑commerce templates', desc: 'Built lightweight stores optimized for conversions.' },
    { year: '2024', title: 'Full‑stack projects', desc: 'End-to-end apps with React + Node + Mongo.' }
  ]

  return (
    <div className="mt-6">
      <div className="space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-10 text-xs text-indigo-600 font-bold">{it.year}</div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Services() {
  const services = [
    { title: 'Full‑Stack Applications', desc: 'From prototypes to production-ready apps.' },
    { title: 'E‑Commerce Development', desc: 'Shop setup, payments, product pages and SEO.' },
    { title: 'Portfolio Website Development', desc: 'Custom, fast, and beautiful portfolios for creatives.' }
  ]

  return (
    <section id="services" className="py-12 lg:py-20 mx-auto px-4">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div className="w-12 h-12 rounded-md flex items-center justify-center bg-indigo-50 dark:bg-indigo-900">
              {/* icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12h18" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17h18" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// function Testimonials() {
//   const samples = [
//     { name: 'Maya · Photographer', quote: 'Transformed my portfolio — clients increased within weeks.' },
//     { name: 'Rohan · Shop Owner', quote: 'The store was fast and simple to manage. Sales rose 30%.' }
//   ]

//   return (
//     <section className="py-12 lg:py-20 mx-auto px-4">
//       <h2 className="text-2xl font-bold">Testimonials</h2>
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {samples.map((t, i) => (
//           <div key={i} className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
//             <div className="text-slate-500 dark:text-slate-300">“{t.quote}”</div>
//             <div className="mt-4 font-semibold">{t.name}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-20 mx-auto px-4">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Let’s talk about your project. Tell me a little about what you need.</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid grid-cols-1 gap-3">
            <input className="px-3 py-2 rounded-md border" placeholder="Your name" />
            <input className="px-3 py-2 rounded-md border" placeholder="Email" />
            <textarea className="px-3 py-2 rounded-md border" rows="5" placeholder="Message" />
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send message</button>
              <div className="text-sm text-slate-500">Or email: <strong>ayush211103@gmail.com</strong></div>
            </div>
          </div>
        </form>

        <div className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
          <h4 className="font-semibold">Connect</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a href="https://www.linkedin.com/in/ayush-yadav-990090316/" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/Ayush211103" Target="blank" className="hover:underline">GitHub</a>
            <a href="https://www.instagram.com/1yus.8/" Target="blank" className="hover:underline">Instagram</a>
            <div className="mt-4 text-xs text-slate-400">Available for freelancing and collaborative projects. Response within 2–3 business days.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 text-sm text-slate-500 dark:text-slate-400 mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Ayush Yadav — Digital Studio</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}
