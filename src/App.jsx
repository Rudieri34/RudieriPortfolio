import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import comingHome from './assets/thumbnails/coming-home.png';
import takeAShot from './assets/thumbnails/take-a-shot.png';
import lostFound from './assets/thumbnails/lostfound-co.png';
import theFall from './assets/thumbnails/the-fall.png';
import theBuilder from './assets/thumbnails/the-builder.png';
import spadesMasters from './assets/thumbnails/spades-masters.png';
import ginRummy from './assets/thumbnails/gin-rummy-masters.png';
import soulShifter from './assets/thumbnails/soul-shifter.png';
import dashSwing from './assets/thumbnails/dash-swing.png';
import noDeadEnds from './assets/thumbnails/no-dead-ends.png';

export default function RudieriPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const resumeUrl = 'Rudieri_Resume_2025.pdf';

  const projects = [
    { title: 'Spades Masters', img: spadesMasters, role: 'Unity Developer', desc: 'Developed core gameplay systems, implemented responsive UI, and integrated live-ops features. Focused on optimizing performance and ensuring smooth cross-platform delivery.', link: 'https://apps.apple.com/in/app/spades-masters-card-game/id1370702757' },
    { title: 'No Dead Ends', img: noDeadEnds, role: 'Lead Designer & Developer', desc: 'Designed and built an atmospheric horror-investigation game emphasizing creative traversal, exploration, and environmental storytelling. To be released on Steam.', link: 'https://store.steampowered.com/app/2808870/No_Dead_Ends/' },
    { title: 'Gin Rummy Masters', img: ginRummy, role: 'Unity Developer', desc: 'Implemented and optimized multiplayer gameplay systems, networking, and UI for a large-scale mobile card game with live player engagement.', link: 'https://play.google.com/store/apps/details?id=com.yallaplay.ginrummy&hl=en' },
    { title: 'Soul Shifter', img: soulShifter, role: 'Lead Designer & Developer', desc: 'Created core gameplay mechanics and managed console/PC release pipelines using Unity C#. Focused on technical polish, performance profiling, and cross-platform compatibility.', link: 'https://www.xbox.com/en-US/games/store/soul-shifter/9NCZK59MPF6H' },
    { title: 'Coming Home', img: comingHome, role: 'Unreal Engine Developer', desc: 'Developed a first-person horror experience in Unreal Engine with a strong focus on atmosphere, pacing, and immersive narrative design.', link: 'https://rudieri.itch.io/coming-home' },
    { title: 'Dash & Swing', img: dashSwing, role: 'Lead Designer & Developer', desc: 'Built a high-precision platformer centered on dynamic movement and grappling mechanics. Designed and released independently on Steam.', link: 'https://store.steampowered.com/app/2363780/Dash__Swing/' },
    { title: 'Take a Shot', img: takeAShot, role: 'Prototype Developer', desc: 'Created a Unity-based card and horror hybrid emphasizing tension and player risk-reward decisions.', link: 'https://innominatumdigital.itch.io/take-a-shot' },
    { title: 'LostFound Co.', img: lostFound, role: 'Prototype Developer', desc: 'Developed a narrative-driven 3D adventure prototype exploring emotional storytelling through exploration and puzzle-solving mechanics. ', link: 'https://rudieri.itch.io/lostfound-co' },
    { title: 'The Fall', img: theFall, role: 'Prototype Developer', desc: 'Produced a hypercasual Unity prototype focused on quick, addictive gameplay loops and smooth user experience on mobile platforms.', link: 'https://innominatumdigital.itch.io/the-fall' },
    { title: 'The Builder', img: theBuilder, role: 'Prototype Developer', desc: 'Developed a fast-paced WebGL stacking prototype challenging players to construct stable towers with simple, satisfying controls. Designed for rapid prototyping and iteration.', link: 'https://rudieri.itch.io/the-builder' }
  ];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        title="Toggle Theme"
        className={`fixed top-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'}`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <header className="bg-gradient-to-r from-indigo-600 to-teal-400 text-white p-8">
        <div className="max-w-5xl mx-auto flex items-center gap-6 flex-wrap">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold">Rudieri Bauer</h1>
            <p className="mt-2 text-lg">Game Developer — Unity & C# | Unreal | Mobile · PC · Console</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/rudieri-bauer/" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Rudieri34" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://rudieri.itch.io" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">Itch.io</a>
              <a href={resumeUrl} className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </div>

          <div className="w-40 h-40 bg-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm opacity-80">Joinville, Brazil</div>
              <div className="mt-2 font-mono">+55 55 99922-3797</div>
              <div className="text-xs mt-1 opacity-80">rudierib@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6 space-y-20">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <p className="leading-relaxed">
            I’m a Game Developer with over four years of professional experience building games in Unity and Unreal Engine across multiple platforms. My focus spans gameplay systems, UI, optimization, and storytelling-driven design — blending creativity with technical expertise to craft immersive experiences.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.article
                  whileHover={{
                    scale: 1.05,
                    boxShadow: darkMode
                      ? "0px 0px 20px #4F46E5"
                      : "0px 0px 20px #6366F1",
                  }}
                  className={`cursor-pointer ${darkMode ? "bg-gray-800" : "bg-white"
                    } rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-indigo-500/30`}
                >
                  <img
                    src={p.img}
                    alt={`${p.title} thumbnail`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <div className="text-sm text-gray-500">{p.role}</div>
                    <p className="mt-3 text-sm">{p.desc}</p>
                  </div>
                </motion.article>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="grid md:grid-cols-2 gap-6">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow`}>
            <h3 className="font-bold text-lg mb-3">Core Skills</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>Unity3D (C#)</li>
              <li>Unreal Engine (C++)</li>
              <li>Gameplay Programming</li>
              <li>Game Design & Balancing</li>
              <li>AI & Systems Design</li>
              <li>Optimization & Profiling</li>
              <li>Cross-Platform Development</li>
              <li>Team Leadership</li>
            </ul>
          </div>

          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow`}>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm">I’m available for full-time and freelance roles. Open to remote or hybrid collaboration.</p>
            <div className="mt-4 text-sm">
              <div><strong>Email:</strong> rudierib@gmail.com</div>
              <div className="mt-1"><strong>Phone:</strong> +55 55 99922-3797</div>
              <div className="mt-1"><strong>Location:</strong> Joinville, Brazil</div>
            </div>
            <div className="mt-4">
              <a href="mailto:rudierib@gmail.com" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">Email Me</a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8">
        Built with ❤️ — Portfolio Developed for showcases. Hosted on GitHub Pages.
      </footer>
    </div>
  );
}

