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
  const [lang, setLang] = useState('en');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  // Detecta idioma inicial e persiste escolhas
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (saved === 'en' || saved === 'pt') {
      setLang(saved);
    } else {
      const navLang = typeof navigator !== 'undefined' ? navigator.language : 'en';
      if (navLang.toLowerCase().startsWith('pt')) setLang('pt');
    }
  }, []);
  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch (_) { /* ignore */ }
  }, [lang]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const resumeUrl = 'Rudieri_Resume_2025.pdf';

  const projects = [
    { title: 'Spades Masters', img: spadesMasters, role: 'Unity Developer', desc: { en: 'Engineered scalable gameplay, responsive UI and live-ops integration for a high-traffic mobile card title; focused on performance, device parity, analytics hooks and smooth multiplayer flow.', pt: 'Criação de sistemas escaláveis, UI responsiva e integração de live ops em um jogo mobile de cartas de alto tráfego; foco em performance, paridade entre dispositivos, métricas e experiência multiplayer fluida.' }, link: 'https://apps.apple.com/in/app/spades-masters-card-game/id1370702757' },
    { title: 'No Dead Ends', img: noDeadEnds, role: 'Lead Designer & Developer', desc: { en: 'Atmospheric horror investigation built around systemic traversal, layered environmental storytelling and tension pacing; leading design and technical direction toward a polished Steam release.', pt: 'Investigação de horror atmosférico com travessia sistêmica, narrativa ambiental em camadas e controle de tensão; liderando design e direção técnica para um lançamento refinado na Steam.' }, link: 'https://store.steampowered.com/app/2808870/No_Dead_Ends/' },
    { title: 'Gin Rummy Masters', img: ginRummy, role: 'Unity Developer', desc: { en: 'Implemented authoritative multiplayer flow, matchmaking, ranking logic and adaptive UI; optimized memory and network usage for a large concurrent player base across diverse mobile devices.', pt: 'Fluxo multiplayer autoritativo, matchmaking, ranking e UI adaptativa; otimizações de memória e rede para grande número de jogadores simultâneos em diferentes dispositivos.' }, link: 'https://play.google.com/store/apps/details?id=com.yallaplay.ginrummy&hl=en' },
    { title: 'Soul Shifter', img: soulShifter, role: 'Lead Designer & Developer', desc: { en: 'Directed console & PC launch pipeline, built combat and movement systems, performed deep profiling; ensured cross-platform stability, certification compliance and player-focused technical polish.', pt: 'Pipeline de lançamento para consoles e PC, construção de sistemas de combate e movimento, profiling detalhado; garantia de estabilidade multiplataforma, conformidade e polimento voltado ao jogador.' }, link: 'https://www.xbox.com/en-US/games/store/soul-shifter/9NCZK59MPF6H' },
    { title: 'Coming Home', img: comingHome, role: 'Unreal Engine Developer', desc: { en: 'Immersive first-person horror prototype emphasizing mood, pacing, diegetic narrative clues and spatial tension using tailored lighting, sound triggers and level scripting in Unreal Engine.', pt: 'Protótipo de horror em primeira pessoa focado em atmosfera, ritmo, pistas diegéticas e tensão espacial usando iluminação, disparos de áudio e scripting de níveis no Unreal.' }, link: 'https://rudieri.itch.io/coming-home' },
    { title: 'Dash & Swing', img: dashSwing, role: 'Lead Designer & Developer', desc: { en: 'Precision platformer with dash and grapple mechanics; iterated on feedback loops, momentum flow and difficulty ramp to ship a responsive indie movement-focused experience on Steam.', pt: 'Plataforma de precisão com dash e gancho; iterações em loops de feedback, sensação de momentum e curva de dificuldade para entregar experiência de movimento responsiva na Steam.' }, link: 'https://store.steampowered.com/app/2363780/Dash__Swing/' },
    { title: 'Take a Shot', img: takeAShot, role: 'Prototype Developer', desc: { en: 'Hybrid card horror prototype exploring escalating risk-reward, tension curves and probabilistic outcomes; rapid Unity iteration using modular event architecture for future content expansion.', pt: 'Protótipo híbrido de cartas e horror explorando risco/recompensa crescente, curvas de tensão e resultados probabilísticos; iteração rápida em Unity com arquitetura modular de eventos.' }, link: 'https://innominatumdigital.itch.io/take-a-shot' },
    { title: 'LostFound Co.', img: lostFound, role: 'Prototype Developer', desc: { en: 'Narrative 3D adventure blending emotional exploration, light puzzle chains and environmental discovery; built tooling for quick scenario scripting and delivery of paced story beats.', pt: 'Aventura narrativa 3D que mistura exploração emocional, puzzles leves em sequência e descoberta ambiental; ferramentas internas para roteirização rápida e ritmo de história consistente.' }, link: 'https://rudieri.itch.io/lostfound-co' },
    { title: 'The Fall', img: theFall, role: 'Prototype Developer', desc: { en: 'Hypercasual mobile prototype delivering snappy core loop, minimal friction onboarding and tuned session length; refined touch feedback and progression for retention and monetization readiness.', pt: 'Protótipo hypercasual com loop ágil, onboarding sem atrito e duração de sessão ajustada; feedback tátil e progressão otimizados para retenção e futura monetização.' }, link: 'https://innominatumdigital.itch.io/the-fall' },
    { title: 'The Builder', img: theBuilder, role: 'Prototype Developer', desc: { en: 'Fast WebGL stacking prototype with readable physics feedback, progressive challenge curves and instant restart flow; optimized for lightweight deployment and rapid iteration cycles.', pt: 'Protótipo WebGL de empilhamento com física legível, desafio progressivo e reinício instantâneo; otimizado para deploy leve e ciclos rápidos de iteração.' }, link: 'https://rudieri.itch.io/the-builder' }
  ];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          title={lang === 'en' ? 'Toggle Theme' : 'Alternar Tema'}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-200'}`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button
          onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
          title={lang === 'en' ? 'Change Language' : 'Mudar Idioma'}
          className={`px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-colors ${darkMode ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-indigo-500 hover:bg-indigo-400 text-white'}`}
        >
          {lang === 'en' ? 'PT' : 'EN'}
        </button>
      </div>

      <header className="bg-gradient-to-r from-indigo-600 to-teal-400 text-white p-8">
        <div className="max-w-5xl mx-auto flex items-center gap-6 flex-wrap">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold">Rudieri Bauer</h1>
            <p className="mt-2 text-lg">{lang === 'en' ? 'Game Developer — Unity & C# | Unreal | Mobile · PC · Console' : 'Desenvolvedor de Jogos — Unity & C# | Unreal | Mobile · PC · Console'}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/rudieri-bauer/" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Rudieri34" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://rudieri.itch.io" className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">Itch.io</a>
              <a href={resumeUrl} className="px-3 py-1 bg-white/20 rounded-md" target="_blank" rel="noopener noreferrer">{lang === 'en' ? 'Download Resume' : 'Baixar Currículo'}</a>
            </div>
          </div>

          <div className="w-40 h-40 bg-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm opacity-80">{lang === 'en' ? 'Joinville, Brazil' : 'Joinville, Brasil'}</div>
              <div className="mt-2 font-mono">+55 55 99922-3797</div>
              <div className="text-xs mt-1 opacity-80">rudierib@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6 space-y-20">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <h2 className="text-2xl font-bold mb-3">{lang === 'en' ? 'About' : 'Sobre'}</h2>
          <p className="leading-relaxed">
            {lang === 'en'
              ? 'I’m a Game Developer with over four years of professional experience building games in Unity and Unreal Engine across multiple platforms. My focus spans gameplay systems, UI, optimization, and storytelling-driven design, blending creativity with technical expertise to craft immersive experiences.'
              : 'Sou um desenvolvedor de jogos com mais de quatro anos de experiência criando títulos em Unity e Unreal para múltiplas plataformas. Atuo em gameplay, UI, otimização e design guiado por narrativa, unindo criatividade e rigor técnico para experiências realmente imersivas.'}
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold mb-6">{lang === 'en' ? 'Featured Projects' : 'Projetos em Destaque'}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.article
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (custom) => ({
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.1 * custom, ease: "linear" }
                    })
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: darkMode
                      ? "0px 0px 20px #4F46E5"
                      : "0px 0px 20px #6366F1",
                    transition: { duration: 0.15 }
                  }}
                  className={`cursor-pointer ${darkMode ? "bg-gray-800" : "bg-white"
                    } rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[300px]`}
                >
                  <div className="h-[180px] w-full overflow-hidden flex-shrink-0">
                    <img
                      src={p.img}
                      alt={`${p.title} thumbnail`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold truncate">{p.title}</h3>
                      <div className="text-sm text-gray-500">{p.role}</div>
                    </div>
                    <p className="mt-3 text-sm text-ellipsis overflow-hidden line-clamp-4 leading-relaxed">
                      {p.desc[lang]}
                    </p>
                  </div>
                </motion.article>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="grid md:grid-cols-2 gap-6">
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow`}>
            <h3 className="font-bold text-lg mb-3">{lang === 'en' ? 'Core Skills' : 'Principais Competências'}</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>Unity3D (C#)</li>
              <li>Unreal Engine (C++)</li>
              <li>{lang === 'en' ? 'Gameplay Programming' : 'Programação de Gameplay'}</li>
              <li>{lang === 'en' ? 'Game Design & Balancing' : 'Game Design & Balanceamento'}</li>
              <li>{lang === 'en' ? 'AI & Systems Design' : 'Design de IA & Sistemas'}</li>
              <li>{lang === 'en' ? 'Optimization & Profiling' : 'Otimização & Profiling'}</li>
              <li>{lang === 'en' ? 'Cross-Platform Development' : 'Desenvolvimento Multiplataforma'}</li>
              <li>{lang === 'en' ? 'Team Leadership' : 'Liderança de Equipe'}</li>
            </ul>
          </div>

          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow`}>
            <h3 className="font-bold text-lg mb-3">{lang === 'en' ? 'Contact' : 'Contato'}</h3>
            <p className="text-sm">{lang === 'en' ? 'I’m available for full-time and freelance roles. Open to remote or hybrid collaboration.' : 'Disponível para posições full-time e freelance; aberto a colaboração remota ou híbrida.'}</p>
            <div className="mt-4 text-sm">
              <div><strong>{lang === 'en' ? 'Email' : 'Email'}:</strong> rudierib@gmail.com</div>
              <div className="mt-1"><strong>{lang === 'en' ? 'Phone' : 'Telefone'}:</strong> +55 55 99922-3797</div>
              <div className="mt-1"><strong>{lang === 'en' ? 'Location' : 'Localização'}:</strong> {lang === 'en' ? 'Joinville, Brazil' : 'Joinville, Brasil'}</div>
            </div>
            <div className="mt-4">
              <a href="mailto:rudierib@gmail.com" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">{lang === 'en' ? 'Email Me' : 'Enviar e-mail'}</a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8">
        {lang === 'en' ? 'Built with ❤️ — Portfolio Developed for showcases. Hosted on GitHub Pages.' : 'Feito com ❤️ — Portfólio para demonstração. Hospedado no GitHub Pages.'}
      </footer>
    </div>
  );
}

