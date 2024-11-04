import React from 'react';
import ExperienceCard from './experienceCard';


const experiences = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6459caf6d84185121474bf4d55efd4c71eb3b990b5067468c8bda1d812c0ca35?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
    title: "Mobile App Dev - JSM Tech",
    description: "Designed and developed mobile app for both iOS & Android platforms using React Native."
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0b39e09089daa5a4d65f93e633c98c7c731410aec1892326c913a93f7d0296e?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
    title: "Freelance App Dev Project",
    description: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores."
  }
];

const Experience: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col self-stretch px-20 py-16 mt-28 w-full bg-slate-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-5xl font-bold tracking-tighter leading-none text-center text-violet-300 max-md:text-4xl">
        My <span className="text-violet-300">work experince</span>
      </h2>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;