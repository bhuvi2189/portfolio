import React from "react";
import { FaGithub, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "AWS CI/CD Pipeline (2048 Game)",
      icon: <FaAws className="text-7xl text-orange-500" />,
      description:
        "CI/CD pipeline for deploying the Dockerized 2048 game on AWS using Jenkins, Docker and GitHub.",
      tech: ["AWS", "Docker", "Jenkins", "GitHub"],
      github:
        "https://github.com/bhuvi2189/CICD-Pipeline-for-the-2048",
    },

    {
      id: 2,
      title: "Projectile45 DevOps Pipeline",
      icon: <SiJenkins className="text-7xl text-red-500" />,
      description:
        "Complete DevOps pipeline using GitHub, Jenkins, Docker and Kubernetes with automatic deployment.",
      tech: ["Jenkins", "Docker", "Kubernetes"],
      github:
        "https://github.com/bhuvi2189/projectile45-devops",
    },

    {
      id: 3,
      title: "Production Kubernetes Monitoring",
      icon: <SiGrafana className="text-7xl text-orange-500" />,
      description:
        "Production-grade monitoring stack using Prometheus & Grafana on Kubernetes.",
      tech: ["Prometheus", "Grafana", "Kubernetes"],
      github:
        "https://github.com/bhuvi2189/production-k8s-monitoring-prometheus-grafana",
    },

    {
      id: 4,
      title: "DevOps Zomato Project",
      icon: <SiDocker className="text-7xl text-blue-500" />,
      description:
        "End-to-End DevOps project using Jenkins, Docker, Kubernetes and ArgoCD.",
      tech: ["Docker", "Kubernetes", "Jenkins"],
      github:
        "https://github.com/bhuvi2189/DevOps-Zomato-Project",
    },

    {
      id: 5,
      title: "AWS EC2 Docker Deployment",
      icon: <FaAws className="text-7xl text-orange-500" />,
      description:
        "Containerized catering web application deployed on AWS EC2 using Docker.",
      tech: ["AWS", "Docker", "EC2"],
      github:
        "https://github.com/bhuvi2189/wedcaters-ec2-docker-deployment",
    },

    {
      id: 6,
      title: "Kubernetes Deployment Strategies",
      icon: <SiKubernetes className="text-7xl text-blue-600" />,
      description:
        "Hands-on Kubernetes project demonstrating Rolling Update, Canary, Blue-Green and Recreate deployments.",
      tech: ["Kubernetes"],
      github:
        "https://github.com/bhuvi2189/kubernetes-deployment-strategies",
    },

    {
      id: 7,
      title: "React App on Kubernetes",
      icon: <SiDocker className="text-7xl text-blue-500" />,
      description:
        "Containerized React application deployed on Kubernetes with multi-node cluster.",
      tech: ["React", "Docker", "Kubernetes"],
      github:
        "https://github.com/bhuvi2189/event-register-form",
    },

    {
      id: 8,
      title: "Infrastructure as Code",
      icon: <SiTerraform className="text-7xl text-purple-600" />,
      description:
        "Provisioning cloud infrastructure using Terraform and AWS best practices.",
      tech: ["Terraform", "AWS"],
      github: "https://github.com/bhuvi2189",
    },

    {
      id: 9,
      title: "Prometheus Monitoring",
      icon: (
        <div className="flex gap-4">
          <SiPrometheus className="text-6xl text-orange-600" />
          <SiGrafana className="text-6xl text-yellow-500" />
        </div>
      ),
      description:
        "Cluster monitoring and dashboards using Prometheus and Grafana.",
      tech: ["Prometheus", "Grafana"],
      github:
        "https://github.com/bhuvi2189/production-k8s-monitoring-prometheus-grafana",
    },
  ];

  return (
    <section
      id="portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
         Projects
        </h1>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          A collection of my AWS Cloud, DevOps and Kubernetes projects built
          using modern cloud technologies and automation tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

        {projects.map((project) => (

          <div
            key={project.id}
            className="rounded-2xl shadow-lg border hover:shadow-2xl hover:-translate-y-3 duration-300 p-6"
          >

            <div className="flex justify-center mb-6">
              {project.icon}
            </div>

            <h2 className="text-2xl font-bold text-center">
              {project.title}
            </h2>

            <p className="text-gray-600 text-center mt-4">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-5">

              {project.tech.map((item, index) => (

                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

            <div className="flex justify-center gap-4 mt-7">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg duration-300"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg duration-300"
              >
                <FaExternalLinkAlt />
                View
              </a>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}