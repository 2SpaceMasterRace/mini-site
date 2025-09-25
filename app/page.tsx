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
          I'm currently pursuing my master's in computer science at New York University and did my undergrad in electrical
          and computer engineering, where I spent my time hacking around with everything fun from <b>large-language models</b> to{" "}
          <b>embedded microcontrollers</b>. I like programming in Rust, OCaml, C++, and Python.
        </p>
        <p>
         I've worked as a Summer Research Intern @ <b>UCSC (Go Slugs!)</b> and as a lab member at <a href="https://tech4good.soe.ucsc.edu/"> Tech4Good </a> for over a year. 
          I was also fortunate enough to work with <a href = "https://kcsrk.info/"> Prof. KC Sivaramakrishnan </a> at <b>Indian Institute Of Technology, Madras</b> on <a href="https://github.com/janestreet/hardcaml"> Hardcaml</a>, Jane Street's embedded DSL for designing and testing hardware designs.
          Over the years, I’ve become deeply entrenched in the world of{" "}
          <b>
            performance engineering, low-level systems programming, AI research, and deep-learning infrastructure.{" "}
          </b>
        </p>
        <p>
          I lead the <a href = "https://github.com/Arcane-Systems-Reading-Group"><b>Arcane Systems Reading Group</b></a>, a collective of systems nerds
          who explore niche topics like compilers, databases, operating system kernels, formal methods,
          distributed systems, large-scale infrastructure, compute orchestration, and performance optimization. 
          I also write essays on deep-tech in <a href = "https://substack.com/@nanodijkstra">Substack</a> and
          stream development on <a href = "https://discord.com/invite/BtzP3eH4R3">Discord</a>,<a href = "https://www.twitch.tv/nanod1jkstra"> Twitch </a> 
           and <a href = "https://www.youtube.com/@ArcaneSystemsReadingGroup"> Youtube</a>. 
          I hope to produce the same level of influence as {" "} <strong>Kanye West but for computer 
          science</strong> as a whole.

        </p>
        <p>
          Outside of my career, you can find me spending all my time with my beautiful wife. {" "}
          I like playing video games, reading manga and literature, and watching films, anime, tv-shows, random youtube essays, and podcasts. 
          I also plan to break into brazilian jiu-jitsu, wrestling, and muay-thai. Lately I've been trying to get good at fine dining, finance, and
          math/lingustic/informatics olympiads. I try to live a simple life as much as I can, with my biggest inspiration
          being <a href = "https://kingofthehill.fandom.com/wiki/Hank_Hill">Hank</a> from King of the Hill. 

        </p>

        <h2 className="font-semibold pt-4">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I'm looking for <b>summer-2026 internships / software engineering </b>roles 🚨 <br />
            <br />
            If you'd like a dedicated, hardworking, & passionate hacker on your team, please reach out at
             <a href = "mailto:hv2241@nyu.edu"> hv2241 [at] nyu [dot] edu</a> or any of my contacts found in the bottom of this website. 
            I am open to dropping out of my master's program if our interests coincide and we can work on cool stuff together. 
            Thank you so much for your consideration ! 

            <br />
            <br />
            <div className = " text-center"> <b> Here's a quick TL;DR of me : </b></div>
            <br />
            
            • I have an extreme bias for rapid prototyping and building quality software fast. I'm also hyper-optimistic on new techniques and energetic when it comes to my work.
            <br />
            <br />
 
            • I enjoy cultivating deep technical competence, seek feedback constantly, and always am on the lookout to expand my skills. I also know what I don't know, and am not afraid to reach out for help.
            <br />
            <br />
 
            • I learn relatively quickly, can hit the ground running, and love debugging complex codebases. I have genuine passion for delivering outstanding results.
            <br />
            <br />
 
            • I'm a niche subset of T-shaped developer, and my operating principles were heavily inspired by <a href = "https://cdn.fastly.steamstatic.com/apps/valve/Valve_NewEmployeeHandbook.pdf"> Valve's Employee Handbook </a>
            and the blogs of <a href ="https://www.paulgraham.com/hwh.html"> Paul Graham </a> and <a href = "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/"> Joel Spolsky</a>. 

            <br />
            <br />
          
            <div className = "text-center"><b> I also want to be honest here, so you have the full picture </b></div>
            <br />

            • I’m an international student on an F-1 visa and will require future sponsorship (H-1B). I take time to deeply understand problems,
            learn the right tools, explore different solutions, and develop a strong grasp of the codebase.

            <br />
            <br />

            •  Because of my ADHD, I thrive best in environments where I’m given autonomy rather than being micromanaged, and I also need a healthy level of mentorship to stay on track and grow meaningfully.
            <br />
            <br />
            • I tend to ask tons of questions and am a slow learner by nature.
            While it may take me a little longer than average to fully settle in, this allows me to maximize my long-term growth and impact. I like to build
            what’s often called “tribal knowledge”, so I can contribute effectively and help team members quickly.

          <br />
          <br />
          • In the past, I pushed myself too hard and working extremely long hours are no longer sustainable.
          That said, I’m more than committed and resilient enough to put in the hours needed when things get tough, which they always do. 

          <br />
          <br />
          Now that you know pretty much everything about me as your future team-mate and friend, we could build meaningful connection around our shared love
          for computers and building products people love :) 
        
            </p>
        </div>
       <p>
          <b>Projects: </b>I've been deep diving into <b>Distributed Serverless Engines</b> in Python, writing my own <b>Linux Kernel Modules</b> in C,
          and experimenting with <b>Hash Tables</b> in Rust to learn them on a fundamental level. 
          <br/>
          <br/>
          <b>Books: </b>I've been enjoying reading <b>Database Internals</b> by Alex Petrov, <b>Operating Systems: Three Easy Pieces </b> 
          by Andrea and Remzi Arpaci-Dusseau, and <b>Introduction to Algorithms</b> by Cormen, Leiserson, Rivest, and Stein.{" "}
        </p>

        <h2 className="font-semibold pt-4">Ongoing Projects</h2>
        <p>
          My projects reflect my interests in ai infrastructure and systems-level programming. Here are some projects I’m currently working on:
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
        I enjoy building <b>novel systems</b> and {" "}
        <b>reliable tools</b> that work seamlessly and stand the test of
        time. This was inspired by using and exploring the design of beautiful software 
        such as <b>Vim/Emacs</b>, <b>Ripgrep</b>, <b>Fish shell</b>, <b>Linear</b>, <b>SQLite</b>,
        <b> Signal</b>, <b>Graphviz</b>, <b>Blender</b>, <b>Linux Mint</b>, and much more. 
      </p>
      <p>
        My experiences have taught me to prioritize <b>ownership, autonomy, </b> and{" "}
        align myself with a  <b>strong sense of mission</b> over my work. My process for building 
        cutting-edge systems is through rigorous engineering with creative exploration.
        I strive to write simple and clean code that is incredibly well-tested, approachable,
        and thoughtful.
        <br />
        <br />

        I deeply care about my craft and tend to have disuss various programming topics with
        senior engineers and experts. My engineering philosophy is heavily inspired by{" "}
       <a href = "https://tigerstyle.dev/"><b>TIGER_STYLE</b></a>,
       <a href = "https://www.youtube.com/watch?v=IroPQ150F6c"><b> Andrew Kelley's Practical Data Oriented Design</b></a>,
        <a href = "https://matklad.github.io/2022/10/06/hard-mode-rust.html"><b> Hard-Mode Rust</b></a>,
        and some <a href = "https://www.youtube.com/watch?v=3n17wHe5wEw">elements</a> of <a href="https://www.youtube.com/watch?v=kZ1P8cHN3pY "> <b>functional programming</b></a>. 
        Here are some of my professional interests in greater detail:
      </p>

      <h4 className="font-semibold pt-4 text-center">
        ✦ Writing custom GPU kernels & GPU performance tuning  ✦
      </h4>
      I’ve always had a deep fascination with GPUs ever since I played Crysis 3
      as a kid. Now, I explore ways of writing my own high-performance 
      CUDA kernels for TPUs, GPUs & AWS Trainium. I'd like to study the
      performance characteristics of various GPU architectures and 
      optimize compilers to leverage their hardware features like tensor cores.

      <h4 className="font-semibold pt-4 text-center">
        ✦ Supercomputing-scale compute & databases for fun and profit{" "} ✦
      </h4>
      One of my primary interests lies in designing and building novel,
      high-performance systems for machine learning, particularly at
      supercomputing scale. As a humble systems engineer, I'd kill to work on
      interesting projects like optimizing container runtimes, implementing
      distributed file systems, and building query engines like Apache DataFusion.
      <br />
      I love exploring operating system design and HPC network architectures,
      hacking high performance storage systems like Weka and Ceph, 
      designing custom load-balancing algorithm to optimize serving efficiency,
      breaking the CUDA compiler, and enhancing virtual machines performance.

      <h4 className="font-semibold pt-4 text-center">
        ✦ Building Infrastructure from scratch & handling SEV-1 for breakfast ✦
      </h4>
      I take great pleasure in deploying on bare-metal machines and building
      tooling for infrastructure engineers. As a proud supporter of self-host
      movement, I would like to use any opportunity to learn private networking and
      cloud-native observability tools, especially pursuing experimental ventures like
      integrating WebAssembly to avoid long cold starts and over-provisioning.
      <br />
      I'm especially interested in delving one level deeper using tools like eBPF to monitor
      and mitigate excessive CPU usage, instrumenting the Linux scheduler with
      ftrace and perfetto, analyzing request latency using sampling profilers
      like gprof, trying <s>failing</s>  to configure Kubernetes for optimal
      workload performance, using pprof to optimize Go code & add more spells under my sleeve.
      <h4 className="font-semibold pt-4 text-center">
        ✦ Hacking hardware architectures & performance engineering{" "} ✦
      </h4>
      Building robust, low-latency hardware & applications to serve billions of
      users has always been on my career bucket list. I would actually love to put
      my EE degree in use, particularly on FPGA engineering with OCaml,
      chip floorplanning with deep reinforcement-learning, and developing microprocessor architectures.
      I'd like to tear down machine learning accelerators such as Google’s TPU and Groq's LPU, and
      consumer hardware like Apple's AirTag.
      <br />
      Above the hardware stack, I am interested in debugging kernel-level network latency spikes in containers,
      tuning garbage collectors, developing task schedulers, and implementing low-latency,
      high-throughput sampling for large language models. Other strong interests
      include orchestration engines, block storage systems, and compute services.

      <h2 className="font-semibold pt-8">Connect</h2>
      <center>
        <blockquote>
          <i>“ It takes a village to raise a child ”</i>
        </blockquote>
        <i> - African Proverb</i>
      </center>
      <p>
        <strong>Paying kindness forward </strong> is an important virtue  I try to
        prioritize and practice. I'm always open to discussing career plans,
        startup ideas, or even research interests. Feel free to get in touch for
        a coffee chat through the contacts below. I particularly encourage
        students from underrepresented groups or disadvantaged backgrounds who aspire to break into systems
        to connect with me. I'll be happy to chat and help in any way I can ^-^ 
      </p>
    </>
  );
}
