import React from 'react';
import { Link } from 'next-view-transitions';

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hari Varsha</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'vxsha-256'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'nanodijkstra'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-gray-800 space-y-4 leading-snug">
        <p>
          Hi! I'm Hari Varsha, better known as vxsha-256 or nanodijkstra around the internet. From an early age, I’ve been captivated by computers, spending almost all my free time playing Pokemon MMOs, cracking old-school video games, and perusing through internet forums learning random trivia in the process.
        </p>
        <p>
          Over the years, I’ve become deeply entrenched in the world of <b>deep systems programming, AI research, game engine development, and cloud infrastructure</b>. Apart from intense hacking, I like consuming comics like XKCD and SMBC, reading Hacker News and Lobste.rs threads, and especially appreciate essays from cool people like Paul Graham, Jeff Atwood, Joel Spolsky, etc.
        </p>
        <p>
          I run the <b>Arcane Systems Reading Group</b>, a collective of systems enthusiasts who explore niche topics like compiler internals, distributed systems, low-latency systems, and performance engineering. I am <b>currently applying to graduate programs</b>, and I'm open to <b>MS/PhD programs</b> (unfortunately will be requiring funding), so if you think you'd like an intense & passionate student on your team, please reach out!
        </p>
        <h2 className="font-semibold">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I'll be presenting Memspect at the first edition of <strong>Innovations In Compiler Technology (IICT)</strong> in Bangalore, India! 🚨
          </p>
        </div>
        <h2 className="font-semibold pt-4">Things I'm getting good at</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Competitive programming</strong>, particularly aiming for International Grandmaster at Codeforces and compete at the International Collegiate Programming Contest (ICPC).
          </li>
          <li>
            <strong>Participate in proper Hackathons</strong>, and build some actually cool prototypes. I'd like to try out everything from AI hackathons to programming contests like CTFs.
          </li>
          <li>
            <strong>Start/Get involved in an entrepreneurial venture</strong> on something I'm deeply passionate about. I'd probably start with video-game infra tech (probably will start my YCombinator/Founder mode arc soon).
          </li>
        </ul>

        <h2 className="font-semibold pt-4">Ongoing Projects</h2>
        <p>
          My projects reflect my interests in machine learning infrastructure, hardware engineering, game development, and systems-level programming. Here are some projects I’m currently working on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Memspect</b> [C, Go, LLVM]: A cool static analysis framework for real-world C codebases. Focuses on fast and accurate memory debugging. Gained compiler internals knowledge. Started off as a final-year project and was presented at two conferences.
          </li>
          <li>
            <b>ART.tv</b> [Typescript, Go]: I’ve always loved films, so it only makes sense I build a streaming platform for indie movies. Inspired by Mubi and Twitch, this is my full-stack project where I allow creators to showcase their arthouse and foreign language films and allow me to build a real-world product.
          </li>
          <li>
            <b>Kaze 3DS</b> [Rust, Zig]: Emulators have always been a fascination for me, and since all 3DS emulators struggle to run on low-end PCs, I’ve decided to build my own blazingly fast 3DS emulator with portability and networked multiplayer in mind.
          </li>
          <li>
            <b>Cherenkov</b> [Rust, Go]: After participating in Andreas Kling’s Browser Jam, I decided to build a minimal, full-fledged Vim web browser.
          </li>
          <li>
            <b>Amaterasu</b> [Typescript, C, Go]: Working on my own MMORPG in C and Go as part of the Ooga Booga Game Devs community, where a group of game devs come together to ship great games from scratch in C, while mastering the ancient art of Caveman Programming.
          </li>
          <li>
            <b>Loveless</b> [Rust, Zig]: A cool edge database focused on scaling performance to handle massive multiplayer environments. Started building it as part of Summer of Shipping 2024 after being inspired by Tiger Beetle and Turso. 
          </li>
          <li>
            <b>Axogig</b> [Rust, C, C++]: Building a high-performance deep learning accelerator for hackers to train their own neural nets at home without needing to rely on large-scale vendors as part of Buildspace’s Nights & Weekends Season 5.
            </li>
        </ul>
      </div>
    </>
  );
}

