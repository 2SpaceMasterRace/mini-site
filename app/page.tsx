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
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae dapibus augue. Nulla a tincidunt dui. Duis eu tristique dui. Cras nec arcu ac dui laoreet luctus. Ut viverra sit amet arcu sit amet ornare. Vestibulum efficitur diam consectetur condimentum interdum. Aliquam tellus odio, sodales vitae massa nec, ultricies pulvinar lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at condimentum ex. Curabitur cursus, leo sed pulvinar dapibus, est est euismod dolor, ac ultricies lectus ex ut massa. In ornare, risus ac faucibus scelerisque, augue sapien sollicitudin sem, vel mattis risus risus in orci. Donec in nisl arcu. Maecenas eu maximus diam, at consequat ante. Donec faucibus ex leo, venenatis mattis lacus volutpat eleifend.
        </p>
        <p>
         Nam ut convallis est. Duis dapibus orci malesuada, fringilla enim convallis, posuere ante. Nulla in nisl vitae est interdum scelerisque id id turpis. Aenean faucibus ligula id eleifend ornare. Curabitur laoreet, erat in gravida auctor, nulla risus ornare orci, sed volutpat magna elit id ipsum. Morbi eleifend suscipit nisl blandit sagittis. Aenean leo eros, ultricies et pulvinar vel, malesuada et elit. Suspendisse sem justo, finibus vitae vestibulum vitae, efficitur non augue. Phasellus luctus pharetra leo vel tempor. Morbi vel consequat neque, eget consectetur metus. Maecenas lorem lorem, placerat maximus facilisis ac, laoreet ac elit. Sed ut vulputate felis. Ut sodales mi a augue interdum facilisis.
        </p>
        <p>
          Generated 2 paragraphs, 224 words, 1497 bytes of Lorem Ipsum
        </p>
      </div>
    </>
  );
}
