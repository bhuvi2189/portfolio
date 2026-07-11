import React from "react";

export default function Portfolio() {
  const cardItems = [
    {
      id: 1,
      icon: "devicon-amazonwebservices-plain-wordmark colored",
      name: "AWS",
    },
    {
      id: 2,
      icon: "devicon-linux-plain colored",
      name: "Linux",
    },
    {
      id: 3,
      icon: "devicon-docker-plain colored",
      name: "Docker",
    },
    {
      id: 4,
      icon: "devicon-kubernetes-plain colored",
      name: "Kubernetes",
    },
    {
      id: 5,
      icon: "devicon-jenkins-line colored",
      name: "Jenkins",
    },
    {
      id: 6,
      icon: "devicon-terraform-plain colored",
      name: "Terraform",
    },
    {
      id: 7,
      icon: "devicon-git-plain colored",
      name: "Git",
    },
    {
      id: 8,
      icon: "devicon-github-original colored",
      name: "GitHub",
    },
    {
      id: 9,
      icon: "devicon-bash-plain colored",
      name: "Bash",
    },
    {
      id: 10,
      icon: "devicon-prometheus-original colored",
      name: "Prometheus",
    },
    {
      id: 11,
      icon: "devicon-grafana-original colored",
      name: "Grafana",
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Skills & Technologies</h1>

      <p className="text-gray-600 mb-8">
        I have hands-on experience with AWS Cloud and DevOps tools through
        projects and continuous learning.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {cardItems.map(({ id, icon, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 hover:scale-105 hover:shadow-2xl duration-300"
          >
            <i className={`${icon} text-7xl`}></i>

            <h2 className="mt-4 text-lg font-semibold">{name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}