import React from "react";
import { Link } from "next-view-transitions";

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hari Varsha</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {"Hey, I'm Hari Varsha V".split("").map((letter, index) => (
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
          {"you can call me nanodijkstra :)".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
            {letter === " " ? "\u00A0" : letter}
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
          Thanks for visiting my <tt>about_me.md</tt> ! I'm a kernel-grade computer systems engineer and researcher
          with a strong focus on databases, distributed systems, and machine learning systems.
          I'm currently pursuing my masters in computer science at New York University and did my undergrad in electrical
          and computer engineering, where I spent my time hacking around with everything fun from <b>large-language models</b> to{" "}
          <b>embedded microcontrollers</b>. I like programming in Rust, OCaml, C++, and Python.
        </p>
        <p>
         I've worked as a Summer Research Intern @ <b>UCSC (Go Slugs!)</b> and as a lab member at <a href="https://tech4good.soe.ucsc.edu/"> Tech4Good </a> for over a year. 
          I was also fortunate enough to work with <a href = "https://kcsrk.info/"> Prof. KC Sivaramakrishnan </a> at <b>Indian Institute Of Technology, Madras</b> on <a href="https://github.com/janestreet/hardcaml"> Hardcaml </a>, Jane Street's embedded DSL for designing and testing hardware designs
        . Over the years, I’ve become deeply entrenched in the world of{" "}
          <b>
            performance engineering, low-level systems programming, AI research, and deep-learning infrastructure.{" "}
          </b>
        </p>
        <p>
          I lead the <a href = "https://github.com/Arcane-Systems-Reading-Group"><b>Arcane Systems Reading Group</b></a>, a collective of systems nerds
          who explore niche topics like compilers, databases, operating system kernels, formal methods,
          distributed systems, large-scale infrastructure, compute orchestration and performance optimization. 
          I also write essays on deep-tech in <a href = "https://substack.com/@nanodijkstra">Substack</a> and
          stream development on <a href = "https://discord.com/invite/BtzP3eH4R3">Discord</a>,<a href = "https://www.twitch.tv/nanod1jkstra"> Twitch </a> 
           and <a href = "https://www.youtube.com/@ArcaneSystemsReadingGroup"> Youtube</a>. 
          My career goals can essentially be boiled down to producing the same influence as {" "} <strong>Kanye West but for computer 
          science</strong> as a whole.

        </p>
        <p>
          Outside of my career, you can find me spending all my time with my beautiful wife. {" "}
          I like playing video games, reading manga and literature, and watching films, anime, tv-shows, random youtube essays, and podcasts. 
          I also plan to break into brazilian jiu-jitsu, wrestling and muay-thai. Lately I've been trying to get good at fine dining, finance and
          math/lingustic/informatics olympiads. I try to live a simple life as much as I can, with my biggest inspiration
          being <a href = "https://kingofthehill.fandom.com/wiki/Hank_Hill">Hank</a> from King of the Hill. 

        </p>

        <h2 className="font-semibold pt-4">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I am looking for <b>summer-2026 internships / software engineering</b> roles 🚨 <br />
            <br />
            I am open to dropping out of my masters program if our interests co-incide and your work is super interesting.
            If you'd like an old-school dedicated, hardworking & passionate hacker on your team, 
            please reach out to any of my contacts found in the bottom of this website. <br />
            <br /> 


            I'm an international student on F-1 visa & I will need sponsorship (H1-B), but please still get in touch with me if you think you'd like to add 
            some personality to your team ( promise to still make huge impacts to your mission :) ). I am not afraid to get my hands dirty and put in the time 
            to be good at my craft, and I love working with people with more expierince than me (I desire to be creative in ways i can nuke prod). 
            Thank you so much for your consideration ! 
            </p>
        </div>
        <p>
          I'm having a great time reading source code of{" "}
          <b>Unix-based Kernels</b> and dissecting{" "}
          <b>Kernel-Level anti-cheats</b>, implementing research papers like the{" "}
          <b>Raft protocol</b> and watching conferences such as{" "}
          <b>CPPcon and Zig Showtime</b>. 
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
            <b>Loveless</b> [Go, Zig]: A cool edge database that focuses on
            auto-scaling and performance to handle massive multiplayer
            environments. Started building it as part of Summer of Shipping 2024
            after being inspired by Tiger Beetle and Turso.
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
        me down and covers all of my uses such as <b>steam, </b>,
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
      <h4 className="font-semibold pt-4 text-center">
        ✦ Supercomputers, Distributed Computing & Systems for Fun and Profit{" "} ✦
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
      <h4 className="font-semibold pt-4 text-center">
        ✦ Writing Custom GPU Kernels for Machine Learning Systems{" "} ✦
      </h4>
      I’ve always had a deep fascination with GPUs ever since I played Crysis 3
      as a kid. Now, I explore ways of writing my own high-performance GPU/CPU
      compute kernels for fun and that led me down a rabbit hole of optimizing
      CUDA kernels for TPUs, GPUs & AWS Trainium. I'd like to see how far I can
      push modern-day GPUs by studying the performance characteristics of
      various GPU architectures and optimizing compilers to leverage their
      hardware features like tensor cores.
      <h4 className="font-semibold pt-4 text-center">
        ✦ Managing Infrastructure and Handling SEV-1 for Breakfast ✦
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
      <h4 className="font-semibold pt-4 text-center">
        ✦ Hacking Hardware Architectures & Performance Engineering{" "} ✦
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
