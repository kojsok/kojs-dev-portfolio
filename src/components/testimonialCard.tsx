import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, position, avatar }) => {
  return (
    <article className="flex overflow-hidden flex-col grow justify-center px-16 py-px rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col py-12 w-full min-h-[300px] max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21404ae6bf1136248f4b9e9fabba12b343d2db695ab6d845a3bd2bd0a477ca46?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-cover absolute inset-0 size-full" />
        <p className="relative text-xl tracking-normal leading-8 text-white max-md:mr-0 max-md:max-w-full">
          {content}
        </p>
        <div className="flex relative gap-2.5 items-center self-start mt-8">
          <img src={avatar} alt={author} className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px]" />
          <div className="flex flex-col self-stretch my-auto min-w-[240px]">
            <strong className="text-lg font-semibold tracking-normal leading-snug text-white">{author}</strong>
            <span className="text-sm tracking-normal text-slate-300">{position}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;