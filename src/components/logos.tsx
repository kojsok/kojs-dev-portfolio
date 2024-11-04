import React from 'react';

const logos = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/398a8115847cfb7c9fe496865b54d1e3e5cd459d98580a58cf39f62b3877377f?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Company Logo 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69988379060131f1ac7cb73c1e478405d261bd486c93ef82287aaabdf1e222c?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Company Logo 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad2a1964bd7b39a3bc68af289938dc74f8fbd9e0f628b8dafe8c238fac9b96c3?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Company Logo 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2a75a6179a126b30d08a916e1518894478a1fb8863ca619af7361239c6696c8?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Company Logo 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3db385b8b97a30c008492ede8705fb361c35cbafaec5d9c687041fedc19aa390?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8", alt: "Company Logo 5" }
];

const Logos: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center mt-16 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} className="object-contain shrink-0 self-stretch my-auto" />
      ))}
    </div>
  );
};

export default Logos;