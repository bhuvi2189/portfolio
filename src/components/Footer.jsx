import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col items-center">

        <h2 className="text-2xl font-bold">Bhuvanesh</h2>

        <p className="text-gray-400 mt-2">
          AWS Cloud & DevOps Engineer
        </p>

        <div className="flex gap-8 mt-6">

          <a
            href="https://github.com/bhuvi2189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 duration-300"
          >
            <FaGithub className="text-4xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/thebhuvanesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 duration-300"
          >
            <FaLinkedin className="text-4xl" />
          </a>

        </div>

        <hr className="w-3/4 border-gray-700 my-6" />

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Bhuvanesh. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}