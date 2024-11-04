import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, link }) => {
  return (
    <article className="flex flex-col w-[calc(50% - 10px)] max-md:w-full">
      <div className="flex overflow-hidden flex-col px-6 py-9 w-full rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:bg-white/20">
        <div className="flex overflow-hidden flex-col rounded-2xl bg-slate-900 max-md:max-w-full">
          <div className="flex relative flex-col px-12 pt-8 w-full min-h-[330px] max-md:px-5 max-md:max-w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d1c92b786e6e7f001f9bbf788361fa443d2013b7e0cc3e2510e32a856e4081c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-cover absolute inset-0 size-full opacity-20" />
            <img src={image} alt={title} className="object-contain w-full rounded-xl aspect-[1.55] max-md:max-w-full" />
          </div>
        </div>
        <h3 className="mt-9 mr-6 text-3xl font-bold tracking-tighter leading-none text-white max-md:mr-2.5 max-md:max-w-full">
          {title}
        </h3>
        <p className="mt-5 text-xl leading-7 text-slate-300 max-md:max-w-full">
          {description}
        </p>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-6 w-full text-xl font-medium tracking-tight leading-tight text-violet-300 max-md:max-w-full">
          <img src={technologies} alt="Technologies used" className="object-contain gap-0 self-stretch my-auto aspect-[4.67] w-[234px]" />
          <a href={link} className="flex gap-2.5 items-center self-stretch my-auto transition-colors hover:text-violet-400">
            Check Live Site
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/516305b0c3269afc3225a9fc0661f6081e03fe452c60eea59e1e48be0bcbf3e6?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;



// import React from 'react';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string;
//   link: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, link }) => {
//   return (
//     <article className="flex flex-col w-[calc(50% - 10px)] max-md:w-full">
//       <div className="flex overflow-hidden flex-col px-6 py-9 w-full rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
//         <div className="flex overflow-hidden flex-col rounded-2xl bg-slate-900 max-md:max-w-full">
//           <div className="flex relative flex-col px-12 pt-8 w-full min-h-[330px] max-md:px-5 max-md:max-w-full">
//             <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d1c92b786e6e7f001f9bbf788361fa443d2013b7e0cc3e2510e32a856e4081c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-cover absolute inset-0 size-full" />
//             <img src={image} alt={title} className="object-contain w-full rounded-xl aspect-[1.55] max-md:max-w-full" />
//           </div>
//         </div>
//         <h3 className="mt-9 mr-6 text-3xl font-bold tracking-tighter leading-none text-white max-md:mr-2.5 max-md:max-w-full">
//           {title}
//         </h3>
//         <p className="mt-5 text-xl leading-7 text-slate-300 max-md:max-w-full">
//           {description}
//         </p>
//         <div className="flex flex-wrap gap-10 justify-between items-center mt-6 w-full text-xl font-medium tracking-tight leading-tight text-violet-300 max-md:max-w-full">
//           <img src={technologies} alt="Technologies used" className="object-contain gap-0 self-stretch my-auto aspect-[4.67] w-[234px]" />
//           <a href={link} className="flex gap-2.5 items-center self-stretch my-auto">
//             Check Live Site
//             <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/516305b0c3269afc3225a9fc0661f6081e03fe452c60eea59e1e48be0bcbf3e6?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[11px]" />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProjectCard;