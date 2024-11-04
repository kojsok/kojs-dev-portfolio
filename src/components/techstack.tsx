import { GitBranch, Code, Layers, Database, Grid, Terminal } from 'lucide-react';
import React from 'react';


const TechStack: React.FC = () => {
  return (
    <section id="about" className="relative flex flex-col items-center px-4 pt-32 pb-12 mt-0 w-full max-w-[1260px] max-md:pt-24 max-md:mt-0 max-md:max-w-full">
      <div className="relative z-20 text-center">
        <p className="text-4xl leading-tight text-indigo-100 uppercase tracking-[4px] max-md:mt-10">
          My Tech Stack
        </p>
        {/* Technology Stack */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-lg text-indigo-100 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <Code strokeWidth={1} /> HTML, CSS, JavaScript, TypeScript
          </div>
          <div className="flex items-center gap-2">
            <Layers strokeWidth={1} /> Next.js, React, Redux, React Router, Zod
          </div>
          <div className="flex items-center gap-2">
            <Database strokeWidth={1} /> Axios, React Query, REST API
          </div>
          <div className="flex items-center gap-2">
            <Grid strokeWidth={1} /> Flexbox, Grid, Mobile-first
          </div>
          <div className="flex items-center gap-2">
            <GitBranch strokeWidth={1} /> Git, Node.js, Webpack, Docker
          </div>
          <div className="flex items-center gap-2">
            <Terminal strokeWidth={1} /> Jest, React Testing Library
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
