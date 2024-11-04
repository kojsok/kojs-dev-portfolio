import React from 'react';

interface ApproachPhaseProps {
  number: number;
  title: string;
  description: string;
}

const ApproachPhase: React.FC<ApproachPhaseProps> = ({ number, title, description }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:w-full">
      <div className="flex overflow-hidden flex-col justify-center self-stretch px-7 py-12 my-auto rounded-3xl max-md:px-5 max-md:py-8 max-md:mt-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center max-w-full w-[278px]">
            <div className="self-stretch px-5 py-3 text-base font-semibold tracking-tight leading-tight text-violet-300 rounded-xl">
              P<span className="font-bold text-violet-300">hase {number}</span>
            </div>
            <h3 className="mt-3.5 text-3xl font-bold tracking-tight leading-9 text-center text-white">
              {title}
            </h3>
          </div>
          <p className="mt-5 text-base leading-6 text-center text-indigo-100">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ApproachPhase;