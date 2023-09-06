import projects from "../../../Data/projects.json";

const Project = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-purple-900 mb-[0.5cm]">PROJECTS</h3>
      <div className="flex flex-col space-y-5">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="text-md">{project.description}</p>
              <p className="text-sm opacity-60">{project.techStack}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
