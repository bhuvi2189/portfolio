import React from "react";
import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 pb-10 min-h-screen flex items-center"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">

          {/* Left Section */}
          <div className="md:w-1/2">

            <p className="text-lg md:text-xl text-gray-500">
              👋 Welcome to My Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-3">
              Hi, I'm <span className="text-blue-600">Bhuvanesh</span>
            </h1>

            <div className="flex flex-wrap text-2xl md:text-3xl font-semibold mt-5">
              <span>I am a&nbsp;</span>

              <span className="text-green-600">
                <Typewriter
                  options={{
                    strings: [
                      "AWS Cloud Engineer",
                      "DevOps Engineer",
                      "Cloud Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-justify">
              I am an aspiring <strong>AWS Cloud & DevOps Engineer</strong> with
              a Bachelor's degree in{" "}
              <strong>Computer Science & Engineering</strong> from{" "}
              <strong>Chhatrapati Shahu Ji Maharaj University, Kanpur</strong>.
              Passionate about AWS Cloud, Linux, Docker, Kubernetes, Jenkins,
              Terraform, CI/CD Automation, Infrastructure as Code and
              Monitoring. I enjoy building secure, scalable and highly available
              cloud solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://drive.google.com/uc?export=download&id=1HB0AePIhYlaTtZ6rcBcyl7q_eXn3N8lJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl duration-300"
              >
                📄 Download Resume
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg duration-300"
              >
                Contact Me
              </a>

            </div>


            {/* Social Links */}
            <div className="mt-10">

              <h2 className="font-bold text-lg mb-4">
                Connect With Me
              </h2>

              <div className="flex gap-6">

                <a
                  href="https://github.com/bhuvi2189"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-4xl hover:text-gray-700 hover:scale-110 duration-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/thebhuvanesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-4xl text-blue-600 hover:scale-110 duration-300" />
                </a>

              </div>

            </div>


            {/* Tech Stack */}
            <div className="mt-10">

              <h2 className="font-bold text-lg mb-4">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-6">

                <FaAws
                  className="text-5xl text-orange-500 hover:scale-110 duration-300"
                  title="AWS"
                />

                <FaLinux
                  className="text-5xl hover:scale-110 duration-300"
                  title="Linux"
                />

                <SiDocker
                  className="text-5xl text-blue-500 hover:scale-110 duration-300"
                  title="Docker"
                />

                <SiKubernetes
                  className="text-5xl text-blue-700 hover:scale-110 duration-300"
                  title="Kubernetes"
                />

                <SiTerraform
                  className="text-5xl text-purple-600 hover:scale-110 duration-300"
                  title="Terraform"
                />

                <SiJenkins
                  className="text-5xl text-red-500 hover:scale-110 duration-300"
                  title="Jenkins"
                />

              </div>

            </div>

          </div>


          {/* Right Section */}
          <div className="md:w-1/2 flex justify-center">

            <img
              src="/homeimg.jpeg"
              alt="Bhuvanesh"
             className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full object-cover object-top border-4 border-blue-600 shadow-2xl hover:scale-105 duration-300"
            />

          </div>

        </div>
      </section>

      <hr />
    </>
  );
}