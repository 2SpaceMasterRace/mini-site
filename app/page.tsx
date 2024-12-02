import React from "react";
import { Link } from "next-view-transitions";

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hari Varsha</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {"vxsha-256".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {"nanodijkstra".split("").map((letter, index) => (
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
          Hi! I'm <b>Hari Varsha</b>, better known as vxsha-256 or nanodijkstra
          around the internet. From an early age, I’ve been captivated by
          computers, spending almost all my free time playing Pokémon MMOs,
          watching old-school noir films, and doomscrolling through internet
          forums learning random trivia in the process.
        </p>
        <p>
          I'm a fresh Electrical and Computer Engineering grad. I've hacked
          around everything fun from <b>large-language models</b> to{" "}
          <b>embedded microcontrollers</b> and worked as a Summer Research
          Intern @ <b>UCSC (Go Slugs!)</b> and as a lab member for over a year.
          I specialize in building the next-generation serverless platforms and
          machine learning systems.
        </p>
        <p>
          Over the years, I’ve become deeply entrenched in the world of{" "}
          <b>
            deep systems programming, AI research, game engine development, and
            cloud infrastructure.{" "}
          </b>
          Apart from intense development, I like consuming comics like XKCD and
          SMBC, reading Hacker News threads, and essays from cool people like
          Paul Graham & Joel Spolsky.
        </p>
        <p>
          I lead the <b>Arcane Systems Reading Group</b>, a collective of
          systems nerds who explore niche topics like compilers, operating
          systems, distributed systems, low-latency systems, and performance
          engineering. My career goals can essentially be boiled down to
          producing the same influence as YEAT, DVRST, Playboi Carti, and{" "}
          <strong>Kendrick Lamar but for computer science</strong> as a whole.
        </p>

        <h2 className="font-semibold pt-4">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I am currently applying to graduate programs for computer science
            for Fall 2025, and I'm <b>open to MS/PhD programs</b>. If you'd like
            a hardworking & passionate student on your team, please reach out to
            any of my contacts found in the bottom of this website. Thank you so
            much for your consideration ! 🚨
          </p>
        </div>
        <p>
          I'm having a great time reading source code of{" "}
          <b>Unix-based Kernels</b> and dissecting{" "}
          <b>Kernel-Level anti-cheats</b>, implementing research papers like the{" "}
          <b>Raft protocol</b> and watching conferences such as{" "}
          <b>CPPcon and Zig Showtime</b>. I plan to set up substack and start
          streaming development on Twitch soon in the future. My hobbies include
          amateur game development, reading RFCs and learning Japanese.
        </p>
        <p>
          I've also been deep diving into{" "}
          <b>internals of Zig programming language</b>, writing my own{" "}
          <b>Linux Kernel Module</b> in C and Zig, and experimenting on{" "}
          <b>Hash Tables</b> to learn them on a deeper level. I'm trying to
          build a habit of reading technical books and I've been enjoying{" "}
          <b>Designing Data-Intensive Applications</b> by Martin Kleppmann &{" "}
          <b>Algorithm Design</b> by Éva Tardos.{" "}
        </p>

        <h2 className="font-semibold pt-4">Ongoing Projects</h2>
        <p>
          My projects reflect my interests in machine learning infrastructure,
          hardware engineering, video-game development, and systems-level
          programming. Here are some projects I’m currently working on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Memspect</b> [C, Rust, LLVM]: A cool static analysis framework
            for real-world C codebases that focuses on fast and accurate memory
            debugging. Gained arcane knowledge of compiler internals in the
            process. Started off as a final-year project and was presented at
            two separate conferences.
          </li>
          <li>
            <b>ART.tv</b> [Typescript, Go]: I’ve always loved films, so it only
            makes sense that I build a streaming platform for indie movies.
            Inspired by Mubi and Twitch, this is my full-stack project where I
            enable creators to showcase their arthouse and foreign language
            films to the world.
          </li>
          <li>
            <b>Cherenkov</b> [Rust, Go]: After participating in Andreas Kling’s
            Browser Jam, I decided to build a minimal, full-fledged vim-based
            web browser. This is more of a toy project to understand browser
            engineering.
          </li>
          <li>
            <b>Loveless</b> [Go, Zig]: A cool edge database that focuses on
            auto-scaling and performance to handle massive multiplayer
            environments. Started building it as part of Summer of Shipping 2024
            after being inspired by Tiger Beetle and Turso.
          </li>
          <li>
            <b>Kaze Switch</b> [Rust, OCaml]: Emulators have always been a
            fascination of mine and unfortunately most switch emulators struggle
            to run on low-end PCs. So I’m building my own lightning fast
            Nintendo Switch emulator with portability and networked multiplayer
            in mind.
          </li>
          <li>
            <b>Terra</b> [C, Typescript]: Working on my own MMORPG as part of
            the Ooga Booga Game Devs community, where a group of game devs come
            together to ship great games from scratch, while mastering the
            ancient art of Caveman Programming.
          </li>
          <li>
            <b>Axogig</b> [Python, C++, CUDA]: Building a high-performance
            distributed training framework to train neural nets across GPU
            clusters seamlessly. Started off as a project for Buildspace’s
            Nights & Weekends Season 5 and just kept continuing to work on it.
          </li>
        </ul>
        <p>
          <strong> Future Projects</strong> include an experimental file-system
          to compete with ZFS & BTRFS, a GPU-aware scheduler for serverless
          platforms, MapReduce from scratch, context-sensitive search-engine for
          metadata & logs, tiny open-source machine learning compiler, library
          containing state-of-the-art algorithms for distributed deep learning,
          inference engine from scratch, building my own network stack for p2p
          file sharing and custom GPU orchestrator for managing H100 clusters.
        </p>
      </div>
      <h2 className="font-semibold pt-4">Career Interests</h2>
      <p>
        I enjoy <b>solving novel systems</b> problems and prefer{" "}
        <b>building reliable tools</b> that just work and stand the test of
        time. This was inspired by using actually good software that never lets
        me down and covers all of my uses such as <b>7zip, Vim, Curl, i3</b>,
        etc. I really appreciate and value good documentation, especially ones
        from <b>SpaCy, Emacs, </b> and <b>Lua.</b>
      </p>
      <p>
        My experience has allowed me to <b>prioritize ownership</b> and{" "}
        <b>autonomy</b> over my work. I deeply care about my craft and tend to
        have healthy debates over various programming topics, especially with
        senior engineers. My engineering philosophy is heavily inspired by{" "}
        <b>Andrew Kelley's Practical Data Oriented Design</b> with some elements
        of Procedural and Functional programming sprinkled in. Here are some of
        my professional interests in greater detail:
      </p>
      <h4 className="font-semibold pt-4">
        ✦ Supercomputers, Distributed Computing & Systems for Fun and Profit{" "}
      </h4>
      One of my primary interests lies in designing and building novel,
      high-performance systems for machine learning, particularly at
      supercomputing scale. As a humble systems engineer, I'd kill to work on
      interesting projects like optimizing container runtimes, implementing
      distributed file systems, and building large-scale data processing
      applications like Apache Hadoop.
      <br />
      Previous experience include exploring operating system design and HPC
      network architectures, hacking high performance storage systems such as
      Weka and Ceph, designing custom load-balancing algorithm to optimize
      serving efficiency, breaking the CUDA compiler, and performance enhancing
      virtual machines.
      <h4 className="font-semibold pt-4">
        ✦ Writing Custom GPU Kernels for Machine Learning Systems{" "}
      </h4>
      I’ve always had a deep fascination with GPUs ever since I played Crysis 3
      as a kid. Now, I explore ways of writing my own high-performance GPU/CPU
      compute kernels for fun and that led me down a rabbit hole of optimizing
      CUDA kernels for TPUs, GPUs & AWS Trainium. I'd like to see how far I can
      push modern-day GPUs by studying the performance characteristics of
      various GPU architectures and optimizing compilers to leverage their
      hardware features like tensor cores.
      <h4 className="font-semibold pt-4">
        ✦ Managing Infrastructure and Handling SEV-1 for Breakfast
      </h4>
      I take great pleasure in deploying on bare-metal machines and building
      tooling for infrastructure engineers. As a proud supporter of self-host
      movement, I have spent a good amount of time on private networking and
      cloud-native observability tools. I like being experimental with my work -
      e.g. integrating WebAssembly to avoid long cold starts and
      over-provisioning.
      <br />
      I'm not afraid to delve one level deeper using tools like eBPF to monitor
      and mitigate excessive CPU usage, instrumenting the Linux scheduler with
      ftrace and perfetto, analyzing request latency using sampling profilers
      like gprof, trying and failing to configure Kubernetes for optimal
      workload performance, using pprof to optimize Go code & maintain top
      performance across services and more spells under my sleeve.
      <h4 className="font-semibold pt-4">
        ✦ Hacking Hardware Architectures & Performance Engineering{" "}
      </h4>
      Building robust, low-latency hardware & applications to serve billions of
      users has always been a career goal of mine. I would actually love to put
      my EE degree in use particularly on ASIC chip design and developing
      microprocessor architecture. I'd seize any opportunity on tearing down ML
      accelerators such as Google’s TPU & Groq's LPU and consumer hardware like
      Apple's AirTag. <br />I also have a good amount of battle scars in
      performance and backend engineering, especially in debugging kernel-level
      network latency spikes in containers, tuning JVM Garbage collection &
      developing GPU Task Schedulers, and implementing low-latency
      high-throughput sampling for large language models. Other strong interests
      include orchestration engines, block storage systems and compute services.
      <h4 className="font-semibold pt-4">
        ✦ Crafting Interactions with Love & Creative Frontend Engineering
      </h4>
      As an interactive designer and creative front-end engineer, the web is
      just another canvas for me to create art and express stories. I am
      particularly fascinated by the challenge of delivering beautifully
      designed websites like those in Awwwards and Godly. I’m fortunate enough
      to upskill myself in various aspects of design, from typographic layouts
      to implementing complex web specs to get things done. <br />I have
      experience in building front-end infrastructure tooling and thrive in
      startupy backgrounds where ambiguity is the norm. I excel in building
      complex and gorgeous products, and have a high degree of empathy for
      user-experience, accessibility, and ownership. Taking products from 0 → 1
      and designing high-quality, joy-inducing, beautiful interfaces that make a
      real impact are my strong suits.
      <h2 className="font-semibold pt-8">Connect</h2>
      <center>
        <blockquote>
          <i>“ It takes a village to raise a child ”</i>
        </blockquote>
        <i> - African Proverb</i>
      </center>
      <p>
        Giving back to the community and{" "}
        <strong>paying kindness forward </strong> are important virtues I try to
        prioritize and practice. I'm always open to discussing any project or
        startup idea you'd want to talk about. Take a look at my socials below
        and feel free to get in touch for a coffee chat or collaboration. I'll
        be happy to chat ^-^
      </p>
    </>
  );
}
