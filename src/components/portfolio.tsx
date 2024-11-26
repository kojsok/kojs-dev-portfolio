import React from 'react';
import ProjectCard from './projectcard';

const projects = [
  {
    title: "Website for RekrutAI headhunter company",
    description: "Explore the cutting-edge website developed for RekrutAI, a leading headhunter company.",
    image: "/Porfolio_rekrutai.jpg",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "Dashboard for CryptoCurrency Exchange companies",
    description: "The project was developed for the cryptocurrency market, allowing you to forecast your wallet based on current prices.",
    image: "/Porfolio_crypto.jpg",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "Dashboard for Call Center",
    description: "The project was developed for a call center, allows interaction between the operator and the client and also keeps notes on calls and statistics",
    image: "/Porfolio_callCenter.jpg",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "3D Solar System Planets to Explore",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "/Portfolio_earth.png",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "Yoom - Video Conferencing App",
    description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    image: "/Portfolio_Yoom.png",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "AI Image SaaS - Canva Application",
    description: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    image: "/Portfolio_Canva.png",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  },
  {
    title: "Animated Apple Iphone 3D Website",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    image: "/Portfolio_3D.png",
    technologies: "/Portfolio_stack_3D.png",
    link: "#"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="mt-24 w-full max-w-[1242px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-bold tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
        A small selection of{" "}
        <span className="text-violet-300">recent projects</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;




// import React from 'react';
// import ProjectCard from './projectcard';


// const projects = [
//   {
//     title: "3D Solar System Planets to Explore",
//     description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2faf936eac009c981a8b29df4952ec00a7541c59cda615727af75f37282ad2a7?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     technologies: "https://cdn.builder.io/api/v1/image/assets/TEMP/72ce8a144d2de98243c06307b77a54a5fcc622e0dde2b3307be1877dc70edb8b?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     link: "#"
//   },
//   {
//     title: "Yoom - Video Conferencing App",
//     description: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0553c67da8fb0501d6809dbbcdfdfdc147a8d2ebba17218729dedc277fcbbe7e?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     technologies: "https://cdn.builder.io/api/v1/image/assets/TEMP/1632a0b89cf7fafc17075f728917da57b53f9991771b12321346f0d73860e57c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     link: "#"
//   },
//   {
//     title: "AI Image SaaS - Canva Application",
//     description: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/659ca6e8f5db777e4361fca5e3c5bbc4f69887ee682b4d851e79ad372d0f0a59?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     technologies: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c9faabe42bc6b70d5380699a0246d559c1d53d46209718b9d024bd40abb840b?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     link: "#"
//   },
//   {
//     title: "Animated Apple Iphone 3D Website",
//     description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/be46ff0dfcdb992be2cb1436332d3999b826e5a891f34f77edc6477c6f9de7e8?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     technologies: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3a30410d147db57239e39bd9a369c6a619cb25ae9cdb14a8a3fa5c20cc5c46c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8",
//     link: "#"
//   }
// ];

// const Portfolio: React.FC = () => {
//   return (
//     <section className="mt-24 w-full max-w-[1242px] max-md:mt-10 max-md:max-w-full">
//       <h2 className="text-5xl font-bold tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
//         A small selection of{" "}
//         <span className="text-violet-300">recent projects</span>
//       </h2>
//       <div className="mt-12 flex flex-wrap gap-5 justify-between">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;