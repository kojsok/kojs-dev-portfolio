import React from 'react';
import ApproachPhase from './approachPhase';


const phases = [
  { number: 1, title: "Planning & Research", description: "I start by understanding your goals and researching your industry to create a tailored strategy." },
  { number: 2, title: "Development & Progress Update", description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way." },
  { number: 3, title: "Testing & Deployment", description: "Rigorous testing ensures a flawless product. Once approved, I handle the deployment process for a smooth launch." }
];

const Approach: React.FC = () => {
  return (
    <section className="mt-16 w-full max-w-[1277px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold tracking-tighter leading-none text-center text-violet-300 max-md:text-4xl">
        My<span className="text-violet-300"> approach</span>
      </h2>
      <div className="flex gap-5 mt-11 max-md:flex-col max-md:mt-10">
        {phases.map((phase) => (
          <ApproachPhase key={phase.number} {...phase} />
        ))}
      </div>
    </section>
  );
};

export default Approach;