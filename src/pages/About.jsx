
function About() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React.js',
    'Python',
    'Database Management',
    'Problem Solving'
  ]

  return (
    <section className="section-container inner-page">
      <p className="eyebrow">01 / ABOUT ME</p>

      <h1 className="page-title">
        A little about <span>my journey.</span>
      </h1>

      <div className="about-grid">
        <div>
          <h2>Who I Am</h2>
          <p>
            My name is Rommel Jacob Andrade. I am an aspiring
            developer interested in technology, web development,
            and creating solutions to real-world problems.
          </p>
          <p>
            I enjoy learning new skills, exploring ideas, and
            improving my abilities through hands-on projects.
          </p>
        </div>

        <div className="about-card">
          <p className="eyebrow">MY INTERESTS</p>
          <h2>Technology.<br />Creativity.<br />Growth.</h2>
          <p>Always learning. Always improving.</p>
        </div>
      </div>

      <div className="skills-section">
        <p className="eyebrow">MY SKILLS</p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
              <span>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
