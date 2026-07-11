import React from "react";

function About() {
  return (
    <section
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <h1 className="text-4xl font-bold mb-6 border-b-4 border-green-600 inline-block">
        About Me
      </h1>

      <p className="text-gray-700 text-lg leading-8 mt-6">
        Hello, I'm <span className="font-semibold">Bhuvanesh</span>, an aspiring
        <span className="text-green-600 font-semibold">
          {" "}
          AWS Cloud & DevOps Engineer
        </span>
        . I have completed my <strong>B.Tech in Computer Science &
        Engineering</strong> from <strong>Chhatrapati Shahu Ji Maharaj University,
        Kanpur</strong>. I am passionate about cloud computing, DevOps,
        automation, CI/CD pipelines, and building scalable infrastructure on AWS.
        I enjoy learning new technologies and solving real-world infrastructure
        challenges.
      </p>

      {/* Education */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Education
        </h2>

        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h3 className="font-bold text-xl">
            Bachelor of Technology (B.Tech)
          </h3>
          <p>Computer Science & Engineering</p>
          <p>Chhatrapati Shahu Ji Maharaj University, Kanpur</p>
          <p>Graduated: 2025</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">Cloud</h3>
            <p>AWS (EC2, S3, IAM, VPC, Route53, CloudFront, EFS)</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">DevOps</h3>
            <p>Docker, Kubernetes, Jenkins, Terraform</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">Version Control</h3>
            <p>Git & GitHub</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">Operating System</h3>
            <p>Linux, Bash Scripting</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">Monitoring</h3>
            <p>Prometheus, Grafana, CloudWatch</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold mb-2">Networking</h3>
            <p>TCP/IP, DNS, HTTP/HTTPS, Load Balancer, Security Groups</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Projects
        </h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>CI/CD Pipeline using Jenkins, Docker & Kubernetes.</li>
          <li>AWS Cloud Infrastructure Deployment.</li>
          <li>Monitoring Stack using Prometheus & Grafana.</li>
          <li>Static Website Hosting using AWS S3 & CloudFront.</li>
          <li>Infrastructure Automation using Terraform.</li>
        </ul>
      </div>

      {/* Career Objective */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          Career Objective
        </h2>

        <p className="text-gray-700 leading-8">
          My objective is to begin my career as an AWS Cloud & DevOps Engineer
          where I can apply my cloud computing and automation skills to build
          scalable, secure, and reliable infrastructure while continuously
          learning and contributing to innovative projects.
        </p>
      </div>
    </section>
  );
}

export default About;