import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/caiolucasw",
    external: true,
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/caiolsds/",
    external: true,
  },
];
const Socials = () => {
  return (
    <div className="flex gap-6 justify-center">
      {socials.map((social, index) => (
        <Link
          href={social.path}
          key={index}
          target={social.external ? "_blank" : undefined}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
