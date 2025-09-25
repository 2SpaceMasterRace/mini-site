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
          with a strong focus on distributed systems and machine learning systems.
          I'm currently pursuing my master's in computer science at <b>New York University</b> and did my undergrad in electrical
          and computer engineering, where I spent my time hacking around with everything fun from <b>large-language models</b> to{" "}
          <b>embedded microcontrollers</b>. I like programming in Rust, OCaml, C++, and Python.
        </p>
        <p>
         I've worked as a Summer Research Intern @ <b>UCSC (Go Slugs!)</b> and as a lab member at <a href="https://tech4good.soe.ucsc.edu/"><u> Tech4Good</u></a> for over a year. 
          I was also fortunate enough to work with <a href = "https://kcsrk.info/"><u>Prof. KC Sivaramakrishnan</u></a> at <b>Indian Institute Of Technology, Madras</b> on <a href="https://github.com/janestreet/hardcaml"> <u>Hardcaml</u></a>, Jane Street's embedded DSL for designing and testing hardware designs.
          Over the years, I’ve become deeply entrenched in the world of{" "}
          <b>
            performance engineering, low-level systems programming, AI research, and deep-learning infrastructure.{" "}
          </b>
        </p>
        <p>
          I lead the <a href = "https://github.com/Arcane-Systems-Reading-Group"><b>Arcane Systems Reading Group</b></a>, a collective of systems nerds
          who explore niche topics like compilers, databases, operating system kernels, formal methods,
          distributed systems, large-scale infrastructure, compute orchestration, and performance optimization. 
          I also write essays on deep-tech in <a href = "https://substack.com/@nanodijkstra"><u>Substack</u></a> and
          stream development on <a href = "https://discord.com/invite/BtzP3eH4R3"><u>Discord</u></a>, <a href = "https://www.twitch.tv/nanod1jkstra"><u>Twitch</u></a>,  
           and <a href = "https://www.youtube.com/@ArcaneSystemsReadingGroup"><u>Youtube</u></a>. 
          I hope to produce the same level of influence as {" "} <strong>Kanye West but for computer 
          science</strong> as a whole.

        </p>
        <p>
          Outside of my career, you can find me spending my time with my beautiful partner and cats. I like playing video games, reading literature, and
          watching films & anime. I've been trying to get good at fine dining, muay-thai, and
          math/lingustic/informatics olympiads. I try to live a simple life as much as I can, with my biggest inspiration
          being <a href = "https://kingofthehill.fandom.com/wiki/Hank_Hill"><u>Hank Hill</u></a> from King of the Hill. 
        </p>

        <h2 className="font-semibold pt-4">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I'm looking for <b>summer-2026 internships / software engineering </b>roles 🚨 <br />
            <br />
            If you'd like a dedicated, hardworking, & passionate hacker on your team, please reach out at
             <a href = "mailto:hv2241@nyu.edu"> <u>hv2241 [at] nyu [dot] edu</u></a> or any of my contacts found in the bottom of this website. 
            I am open to dropping out of my master's program if our interests coincide and we can work on cool stuff together. 
            Thank you so much for your consideration ! 

            <br />
            <br />
            <div className = " text-center"> <b> Here's a quick TL;DR of me : </b></div>
            <br />
            
            • I have an extreme bias for rapid prototyping and building quality software fast. I'm also hyper-optimistic when it comes to solving challenges and energetic when it comes to my work.
            <br />
            <br />
 
            • I enjoy cultivating deep technical competence, seek feedback constantly, and always am on the lookout to expand my skills. I also know what I don't know, and am not afraid to reach out for help.
            <br />
            <br />
 
            • I learn relatively quickly, can hit the ground running, and love debugging complex codebases. I have genuine passion for delivering outstanding results.
            <br />
            <br />
 
            • I'm a niche subset of T-shaped developer, and my operating principles were heavily inspired by <a href = "https://cdn.fastly.steamstatic.com/apps/valve/Valve_NewEmployeeHandbook.pdf"> <u>Valve's Employee Handbook</u> </a>
            and the blogs of <a href ="https://www.paulgraham.com/hwh.html"> <u>Paul Graham</u> </a> and <a href = "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/"> <u>Joel Spolsky</u></a>. 

            <br />
            <br />
          
            <div className = "text-center"><b> I also want to be honest here, so you have the full picture </b></div>
            <br />

            • I’m an international student on an F-1 visa and will require future sponsorship (H-1B). I take time to deeply understand problems,
            learn the right tools, explore different solutions, and develop a strong grasp of the codebase.

            <br />
            <br />

            • Due to my ADHD, I thrive best in environments where I’m given autonomy rather than being micromanaged, and I also need a healthy level of mentorship to stay on track and grow meaningfully.
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
          and experimenting with <b>Hash Tables</b> in Rust to understand them on a fundamental level. 
          <br/>
          <br/>
          <b>Books: </b>I've been enjoying reading <b>Database Internals</b> by Alex Petrov, <b>Operating Systems: Three Easy Pieces </b> 
          by Andrea and Remzi Arpaci-Dusseau, and <b>Introduction to Algorithms</b> by Cormen, Leiserson, Rivest, and Stein.{" "}
        </p>

        <h2 className="font-semibold pt-4">Ongoing Projects</h2>
        <p>
          I'm currently focusing on hacking around the entire machine learning stack (models, kernels, compilers, and hardware)
          and database stack (data models, storage engines, query engines, and distributed systems) from scratch. Unfortunately, my other projects
          have been on hold, including my open-source project Memspect.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Memspect</b> [C, Rust, LLVM] <a href = "https://youtu.be/aBAtV2W9BN0?si=k1ZvIVf5XKxKpTCE"><u>[Talk]</u></a> : A cool <b>static analysis framework </b> 
             for real-world C codebases that focuses on fast and accurate memory
            debugging. Gained arcane knowledge of compiler internals in the
            process. Started off as a final-year project and was presented at 
            <a href= "https://compilertech.org/"> <u>India's first compiler workshop</u></a> 
          </li>
          <li>
            <b>Tachyon</b> [Rust] : Building a mini <b>LSM-tree storage engine</b> from scratch. Core components includes
            mutable/immutable memtables, SST (sorted string table) files, write-ahead logging, and configurable compaction algorithms that are used
            in production systems
          </li>
          <li>
            <b>TinyTorch</b> [Python, CUDA] : Developing a PyTorch-inspired <b>deep learning framework </b> from scratch. Currently implementing
            automatic differentiation, GPU-accelerated tensor operations, and neural network modules with custom CUDA kernels for matrix multiplication,
            convolution, and attention mechanisms

          </li>
        </ul>
        <p>
          <strong> Future Projects</strong> include an experimental file-system
          to compete with ZFS & BTRFS, a GPU-aware scheduler for serverless
          platforms, MapReduce from scratch, context-sensitive search-engine for
          metadata & logs, tiny open-source machine learning compiler, library
          containing state-of-the-art algorithms for distributed deep learning,
          inference engine from scratch, building my own network stack for p2p
          file sharing, and custom GPU orchestrator for managing H100 clusters.
        </p>
      </div>
      <h2 className="font-semibold pt-4">Career Interests</h2>
      <p>
        I enjoy building <b>novel systems</b> and {" "}
        <b>reliable tools</b> that work seamlessly and stand the test of
        time. This was inspired by using and exploring the design of beautiful software 
        such as <b>Vim/Emacs</b>, <b>Ripgrep</b>, <b>Fish shell</b>, <b>Linear</b>, <b>SQLite</b>,
        <b> Signal</b>, <b>Graphviz</b>, <b>Blender</b>, <b>Linux Mint</b>, and many more. 
      </p>
      <p>
        My experiences have taught me to prioritize <b>ownership, autonomy, </b> and{" "}
        align myself with a  <b>strong sense of mission</b> over my work. My process for building 
        cutting-edge systems is through rigorous engineering with creative exploration.
        I strive to write simple and clean code that is incredibly well-tested, approachable,
        and thoughtful.
        <br />
        <br />

        I deeply care about my craft and often discuss various programming topics with
        senior engineers and domain experts. My engineering philosophy is heavily inspired by{" "}
       <a href = "https://tigerstyle.dev/"><b><u>TIGER_STYLE</u></b></a>,
       <a href = "https://www.youtube.com/watch?v=IroPQ150F6c"><b> <u>Andrew Kelley's Practical Data Oriented Design</u></b></a>,
        <a href = "https://matklad.github.io/2022/10/06/hard-mode-rust.html"><b> <u>Hard-Mode Rust</u></b></a>,
        and some <a href = "https://www.youtube.com/watch?v=3n17wHe5wEw"><u>elements</u></a> of <a href="https://www.youtube.com/watch?v=kZ1P8cHN3pY "> <b><u>functional programming</u></b></a>. 
        Here are some of my professional interests in greater detail:
      </p>

      <h4 className="font-semibold pt-4 text-center">
        ✦ Writing custom GPU kernels & machine learning performance engineering ✦
      </h4>
      I’ve always had a deep fascination with GPUs ever since I played Crysis 3
      as a kid. Today, I explore ways of writing my own high-performance 
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
      designing custom load-balancing algorithms to optimize serving efficiency,
      breaking the CUDA compiler, and enhancing virtual machines performance.

      <h4 className="font-semibold pt-4 text-center">
        ✦ Building scalable, fault-tolerant Infrastructure for LLM research ✦
      </h4>
      I take great pleasure in deploying on bare-metal machines and building
      tooling for infrastructure engineers. As a proud supporter of self-host
      movement, I would like to use any opportunity to learn linux virtualization, private networking, and
      cloud-native observability tools, especially pursuing experimental ventures like
      integrating WebAssembly to avoid long cold starts and over-provisioning.
      <br />
      I'm especially interested in delving one level deeper using tools like eBPF to monitor
      and mitigate excessive CPU usage, instrumenting the Linux scheduler with
      ftrace and perfetto, analyzing request latency using sampling profilers
      like gprof, trying <s>failing</s>  to configure Kubernetes for optimal
      workload performance, using pprof to optimize Go code, & add more spells under my sleeve.
      <h4 className="font-semibold pt-4 text-center">
        ✦ Hacking hardware architectures & high-performance, low-latency applications ✦
      </h4>
      Building robust low-latency hardware and applications to serve billions of
      users has always been on my career bucket list. I would actually love to put
      my EE degree to use, particularly in FPGA engineering with OCaml,
      chip floorplanning with deep reinforcement learning, and microprocessor architecture design.
      I'd like to build machine learning accelerators such as Google’s TPU and Groq's LPU, and
      consumer hardware like Apple's AirTag.
      <br />
      Above the hardware stack, I am interested in debugging kernel-level network latency spikes in containers,
      tuning garbage collectors, developing task schedulers, and implementing low-latency,
      high-throughput sampling for large language models. Other strong interests
      include orchestration engines, block storage systems, and compute services.

      <h2 className="font-semibold pt-8">Connect</h2>
      <center>
        <blockquote>
          <i>“ It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better.</i>
          <br />
          <br />
         <i> The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; </i>
          <br />
          <br />
        <i> but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat ”</i>
          <br />
          <br />
        </blockquote>
        <i> Theodore Roosevelt, 26th president of the United States of America </i>
      </center>
      <p>
        <strong>Kindness</strong> is an important value I try to practice at every opportunity I get. I'm always open to discussing career plans,
        startup ideas, or even research interests. Feel free to get in touch for
        a coffee chat through the contacts below. I particularly encourage
        students from underrepresented groups or disadvantaged backgrounds who aspire to break into systems
        to connect with me. I'll be happy to chat and help in any way I can ^-^ 
      </p>
    </>
  );
}
