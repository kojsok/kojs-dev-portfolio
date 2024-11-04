import React from 'react';

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35f1b84987136eb3d450f7889fe62f6263880cdd724ae39af4a96c60e2b16f73?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6f1d500b72d49e6363b2ec1f2c4202c56e7d3a5faa6f6db0bad2e78545ff1eb?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d57a5dddbc20b5724aaf5d5af0c8da49333f6e13904e50569abdd36b0271978?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "GitHub" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5f0dd05abd2a66a4a8a6930cc5c12756a0ab1ac346282aa6b50fc643852adc1?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Instagram" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/686781ab914a2e24f0423cad3ea7a6d6335a8f1e2755f8781bd969483261652c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Facebook" }
];

const Footer: React.FC = () => {
  return (
    <footer className="flex relative flex-wrap gap-10 justify-between items-center self-stretch mt-32 w-full max-md:mt-10 max-md:max-w-full">
      <p className="self-stretch my-auto text-sm leading-loose text-white">
        Copyright ©{new Date().getFullYear()} Adrian Hajdin
      </p>
      <nav className="flex gap-4 justify-between items-center self-stretch my-auto min-w-[240px] w-[264px]">
        {socialIcons.map((icon, index) => (
          <a key={index} href="#" aria-label={icon.alt}>
            <img src={icon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;