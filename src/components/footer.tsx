import React from 'react';
import Link from 'next/link';
import {  Github, Mail, Send } from "lucide-react";
import { Button } from './ui/button';

const socialIcons = [
  { Icon: Github, label: "GitHub", href: "https://github.com/kojsok" },
  { Icon: Mail, label: "Email", href: "mailto:pmbiclub@gmail.com" },
  { Icon: Send, label: "Telegram", href: "https://t.me/artempmbi" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col  bottom-5 left-0 right-0 justify-center items-center gap-4 mb-5">
      <div className="flex flex-row gap-4 justify-center">
        {socialIcons.map((social, index) => (
          <Link key={index} href={social.href} target="_blank" passHref>
            <Button
              // as="a"
              aria-label={social.label}
              className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full transition-transform transform hover:scale-105"
              rel="noopener noreferrer"
            >
              <social.Icon className="w-6 h-6 text-white" />
            </Button>
          </Link>
        ))}
      </div>
      
      <p className="flex justify-center items-center self-stretch my-auto text-sm leading-loose text-white">
         Copyright ©{new Date().getFullYear()} KOJS
      </p>
    </footer>
  );
};

export default Footer;