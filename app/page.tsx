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
	I'm a fresh Electrical and Computer Engineering grad. I've hacked around everything fun from <b>large-language models</b> to <b>embedded microcontrollers</b> and worked as a Summer Research Intern @ <b>UCSC (Go Slugs!)</b> and as a lab member for over a year. My dream for now is to move to magical city of San Francisco, California to kickstart my career.
	</p>
        <p>
          Over the years, I’ve become deeply entrenched in the world of <b>deep systems programming, AI research, game engine development, and cloud infrastructure</b>. Apart from intense hacking, I like consuming comics like XKCD and SMBC, reading Hacker News and Lobste.rs threads, watching conference talks and especially appreciate essays from cool people like Paul Graham, Joel Spolsky, etc.
        </p>
        <p>
          I run the <b>Arcane Systems Reading Group</b>, a collective of systems nerds who explore niche topics like compiler internals, distributed systems, low-latency systems, and performance engineering. My career goals can essentially be boiled down to producing the same influence as YEAT, Playboi Carti, and <strong>Kendrick Lamar but for computer science</strong> as a whole.
         </p>

        <h2 className="font-semibold pt-4">Current</h2>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4">
          <p>
            🚨 I am currently applying to graduate programs, and I'm <b>open to MS/PhD programs</b> (unfortunately will be requiring funding), so if you think you'd like a hardworking & passionate student on your team, please reach out!🚨
          </p>
	</div>
	<p>
	I enjoy reading up on <b>Unix-based Kernels</b> and dissecting <b>Kernel-Level anti-cheats</b>, watching conferences such as <b>CPPcon and Zig Showtime</b>, and implementing research papers like the <b>Raft protocol</b>. Hobbies currently include amateur game development, reading RFC's and learning Japanese. I'll be setting up substack and start streaming development on Twitch soon in the future.
	</p>	
	<p>
	I've also been deep diving into <b>internals of Zig programming language</b>, writing and reverse engineering a <b>linux kernel module</b> in C and Zig, and experimenting on <b>Hash Tables</b> to learn them on a deeper level. I'm trying to build a habit of reading technical books and I've been enjoying <b>Designing Data-Intensive Applications</b> by Martin Kleppmann & <b>Algorithm Design</b> by Éva Tardos. </p> 


        <h2 className="font-semibold pt-4">Things I'm learning</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Competitive programming</strong>: Particularly aiming to achieve International Grandmaster at Codeforces and compete at the International Collegiate Programming Contest (ICPC) atleast once in my life.
          </li>
          <li>
            <strong>Participate in proper Hackathons</strong>: I would like to build some real prototypes of some of my ideas without being up for 24 hours straight. I have plans to join  everything from AI hackathons to CTFs and Game Jams.
          </li>
          <li>
            <strong>Get involved in an entrepreneurial venture</strong>: I think it's more a rite of passage to experience the startup life, where I get to work on something I'm deeply passionate about with a bunch of smart people and enjoy life at the fullest. I would probably just start something of my own, maybe something realted to video-game infra tech.
          </li>
        </ul>

        <h2 className="font-semibold pt-4">Ongoing Projects</h2>
        <p>
          My projects reflect my interests in machine learning infrastructure, hardware engineering, game development, and systems-level programming. Here are some projects I’m currently working on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Memspect</b> [C, Rust, LLVM]: A cool static analysis framework for real-world C codebases. Focuses on fast and accurate memory debugging. Gained compiler internals knowledge. Started off as a final-year project and was presented at two seperate conferences.
          </li>
          <li>
            <b>ART.tv</b> [Typescript, Go]: I’ve always loved films, so it only makes sense I build a streaming platform for indie movies. Inspired by Mubi and Twitch, this is my full-stack project where I allow creators to showcase their arthouse and foreign language films while enabling me to build a real-world product.
          </li>
	  <li>
            <b>Cherenkov</b> [Rust, Go]: After participating in Andreas Kling’s Browser Jam, I decided to build a minimal, full-fledged Vim-Based web bowser. More of a toy project to understand boswer engineering, that's  pretty much it for this one.
          </li>
          <li>
            <b>Loveless</b> [Go, Zig]: A cool edge database that focuses on auto-scaling and  performance to handle massive multiplayer environments. Started building it as part of Summer of Shipping 2024 after being inspired by Tiger Beetle and Turso. 
          </li>
         <li>
            <b>Kaze 3DS</b> [Rust, Zig]: Emulators have always been a fascination for me and since most 3DS emulators struggle to run on low-end PCs, I’ve decided to build my own lightning fast 3DS emulator with portability and networked multiplayer in mind.
          </li>
          <li>
            <b>Amaterasu</b> [Typescript, C, Go]: Working on my own MMORPG in C and Go as part of the Ooga Booga Game Devs community, where a group of game devs come together to ship great games from scratch in C, while mastering the ancient art of Caveman Programming.
          </li>
         <li>
            <b>Axogig</b> [Rust, C, C++]: Building a high-performance deep learning accelerator for hackers to train their own neural nets at home without needing to rely on large-scale vendors. Started off as part of Buildspace’s Nights & Weekends Season 5 and just kept continuing to work on it.
            </li>
        </ul>
	<p>
<strong> Future Projects</strong> include an optimized container runtime, experimental file-system to compete with ZFS & BTRFS, a GPU-aware scheduler for serverless platforms, MapReduce from scratch, tiny open-source machine learning compiler, petabyte-scale geo-distributed storage system, search engine for metadata & logs, distributed computing framework for fun and profit, inference engine from scratch, libary containing state-of-the-art algorithms for distributed deep learning and building my own network stack and such for p2p file sharing with minimal latency.
	</p>
      </div>
        <h2 className="font-semibold pt-4">Career Interests</h2>
	<p>
	I enjoy <b>solving novel systems</b> problems and prefer <b>building reliable tools</b> that just works and stands the test of time. This was inspired by using actually good software that never lets me down and covers all of my uses such as <b>7zip, Vim, Curl, i3</b>, etc. I also appreciate and value good documentation, especially ones from <b>Spacy, Emacs, </b> and <b>Lua.</b>
	</p>
	<p>
	My experience has allowed me to <b>prioritize ownership</b> and <b>autonomy</b> over my work. I deeply care about my craft and tend to have healthy debates over various programming topics, especially with senior engineers. My engineering philosophy is heavily inspired by <b>Andrew Kelley's Practical Data Oriented Design</b> with some elements of Procedural and Functional programming sprinkled in. Here are some of my professional interests in greater detail:
	</p>
        <h4 className="font-semibold pt-4">Anything with Supercomputers & Distributed Systems </h4>
	One of my primary interests lies in making supercomputers more efficient. I'm pumped to gain hands-on experience in building systems that distribute training across massive GPU clusters. I'm also captivated by the challenges of scaling the training stack and beaking down distributed storage systems such as Weka and Ceph. I'll lbe experimentin more with Consensus algorithms and etcd too.
        
	<h4 className="font-semibold pt-4">Custom GPU Kernels for Machine Learning </h4>
	I’ve always had a deep fascination with GPUs ever since I played Crysis 3 as a kid. Now, I explore ways of writing my own high-performance GPU/CPU compute kernels out for fun and that led me down a rabbit hole of optimizing CUDA kernels for TPUs, GPUs & AWS Trainium. I'd like to see how far I can push modern day GPUs by studying the performance characteristics of various GPU architectures and optimizing the compiler to leverage their features like tensor cores.

	<h4 className="font-semibold pt-4">Creative Frontend Engineering & Interaction Design </h4>
As an interactive designer and creative front-end engineer, the web is just another canvas for me to create art and express stories. I am particularly fascinated by the challenge of delivering beautifully designed websites like those in Awwwards or Godly that are also fine-tuned for performance. I embace micro-frontends and keeping things simple like how Frontend Masters and Excalidraw does it. I consider them to be a masterclass in front-end engineering after learning more about them.


	<h4 className="font-semibold pt-4">Large-scale Backend Engineering & Low-latency Applications </h4>
I tend to see Backend engineering in terms of data  so it only makes sense I like building and maintaining high-performance, low-latency streaming engines. One of my key interests is pushing the boundaries of what modern cloud computing can achieve with tools like WebAssembly and programming models like Distributed Async Await. 

	<h4 className="font-semibold pt-4">High-Performance Serverless Platforms & ML Infrastructure </h4>
	I'm deeply interested in the intersection of bare-metal infrastructure engineering and machine learning with a particular emphasis on the software side of things. As a proud supporter of self-hosting and managing dedicated servers, I have a bit of experience with private networking and cloud-native observability tools. I have a unhealthy interest with  High Frequency & Compute Trading Platforms and am just fascinated with orchestration engines, block storage systems and schedulers. 


<h2 className="font-semibold pt-4">Connect</h2>
<center>
    <blockquote>
        <i>" It takes a village to raise a child "</i>
    </blockquote>
        <i>  - African Proverb</i>
</center>
<p>
I wouldn't be here if not for the people I've met directly and indirectly in my life. Giving back to the community and <strong>paying kindness forward </strong> are extremely important virtues I try to prioritize. I'm always open to discussing any project or idea you'd want to talk about. You can also find me at these socials:
</p>

<li>                                                                                                                                                  

    <strong>Cal:</strong> <a href="https://cal.com/nanodijkstra">cal.com/nanodijkstra</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Substack:</strong> <a href="https://nanodijkstra.substack.com/">nanodijkstra.substack.com</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Codeforces:</strong> <a href="https://codeforces.com/profile/vxsha-256">codeforces.com/profile/vxsha-256</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Atcoder:</strong> <a href="https://atcoder.jp/users/vxsha256">atcoder.jp/users/vxsha256</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Spoj:</strong> <a href="https://www.spoj.com/users/vxsha256/">spoj.com/users/vxsha256</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>LeetCode:</strong> <a href="https://leetcode.com/u/vxsha-256/">leetcode.com/u/vxsha-256</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Twitch:</strong> <a href="https://www.twitch.tv/nanod1jkstra">twitch.tv/nanod1jkstra</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>YouTube:</strong> <a href="https://www.youtube.com/@SystemsReadingGroup">youtube.com/@SystemsReadingGroup</a>                                                              </li>

<li>                                                                                                                                                  

    <strong>Are.na:</strong> <a href="https://www.are.na/hari-varsha/all">are.na/hari-varsha/all</a>                                                              </li>

        </>
  );
}
