import React from 'react';

interface ExperienceCardProps {
  logo: string;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ logo, title, description }) => {
  return (
    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-6 pt-1 pb-6 rounded-3xl max-md:pl-5 max-md:mt-4 max-md:max-w-full">
        <div className="flex relative flex-col px-14 pt-12 pb-6 w-full rounded-none min-h-[168px] max-md:px-5 max-md:max-w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/65933f59d8ed6b7c27a486bb2143025f0123c7b94067794afd251bbd8f06374a?placeholderIfAbsent=true&apiKey=c687a0b9d8324d0290cb353cef7469d8" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-wrap gap-8 items-center">
            <img src={logo} alt={title} className="object-contain shrink-0 self-stretch my-auto aspect-[1.05] w-[103px]" />
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[358px]">
              <h3 className="text-2xl font-bold tracking-tight leading-none text-white">
                {title}
              </h3>
              <p className="mt-3 text-base font-medium leading-5 text-slate-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;