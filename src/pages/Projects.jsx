
function Projects() {
  const projects = [
    {
      number: '01',
      name: 'Personal Portfolio',
      category: 'WEB DEVELOPMENT',
      description:
        'A personal website showcasing my background, skills, and work.',
      tech: 'React / CSS / JavaScript'
    },
    {
      number: '02',
      name: 'Management System',
      category: 'SYSTEM DEVELOPMENT',
      description:
        'A sample information management system designed to organize records and improve workflows.',
      tech: 'HTML / CSS / JavaScript'
    },
    {
      number: '03',
      name: 'Digital Showcase',
      category: 'CREATIVE DEVELOPMENT',
      description:
        'A digital platform presenting ideas, content, and creative work.',
      tech: 'React / CSS'
    }
  ]

  return (
    <section className="section-container inner-page">
      <p className="eyebrow">02 / SELECTED WORK</p>

      <h1 className="page-title">
        Things I've <span>worked on.</span>
      </h1>

      <p className="section-intro">
        A collection of sample projects and development concepts.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">
              {project.number}
            </span>

            <div className="project-info">
              <p className="eyebrow">{project.category}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <span className="project-tech">{project.tech}</span>
            </div>

            <span className="project-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
