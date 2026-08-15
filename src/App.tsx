import { useEffect, useState } from "react"
import resumeUrl from "./imports/Kamalaksha_Resume-1.pdf"

type Tab = "home" | "experience" | "research" | "projects" | "education"

const C = {
  bg: "#ede1db",
  bgDark: "#f1e8e5",
  bgLight: "#f8f4f2",
  border: "rgba(42, 42, 42, 0.12)",
  borderLight: "rgba(42, 42, 42, 0.2)",
  white: "#ffffff",
  black: "#1d1d1d",
  accent: "#2d8bb8",
  muted: "rgba(34, 34, 34, 0.74)",
  cream: "#f7f1ef",
  sky: "#DDE4ED",
  sky2: "#CCDBE9",
  sky3: "#B4C9DD",
  peach: "#F1B3A1",
}

const NAV_ITEMS: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
]

const experiences = [
  {
    role: "Research Aide",
    org: "Argonne National Laboratory",
    period: "May 2026 – Present",
    type: "Research",
    bullets: [
      "Research biological datasets with Stanford Biomni, an AI biomedical agent.",
      "Build machine-learning pipelines on virtual machines using multiple OLLAMA frameworks for downstream analysis.",
      "Set up Biomni with Argonne ALCF endpoints and argo-proxy models spanning more than 30 LLM frameworks.",
      "Analyze how protein metabolites affect lung cancer patient survival times using Python libraries.",
    ],
  },
  {
    role: "Data Science Research Intern",
    org: "University of Illinois Chicago",
    period: "June 2026 – Present",
    type: "Research",
    bullets: [
      "Analyze engineering-student self-efficacy and identity survey data; clean and code quantitative and qualitative responses with Python.",
      "Conduct descriptive statistics, correlations, and cross-tabulations in the context of engineering education literature.",
      "Build a framework based on the analysis to support an LLM that generates robust samples of potential student designs.",
      "Contribute to two papers targeted for publication by the end of August.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "EzMedTech.AI",
    period: "December 2025 – April 2026",
    type: "Internship",
    bullets: [
      "Helped develop FastAPI backends for hospital EHR systems.",
      "Developed and evaluated AI models for healthcare voice automation and scalable deployment.",
    ],
  },
  {
    role: "Undergraduate Researcher, MURL",
    org: "University of Illinois Chicago",
    period: "August 2025 – December 2025",
    type: "Research",
    bullets: [
      "Studied the Riemann Hypothesis through equivalent formulations in number theory and complex analysis at the MSCS Undergraduate Research Laboratory.",
      "Conducted computational experiments to identify numerical patterns connected to zeta-function behavior.",
    ],
  },
  {
    role: "Leadership",
    org: "UIC and Community Initiatives",
    period: "Ongoing",
    type: "Leadership",
    bullets: [
      "President, UIC Hack4Impact Chapter.",
      "President, UIC National Organization for Business and Engineering (NOBE) Chapter.",
      "Research Lead, Aurora University Labor Market Discrimination Study with Dr. Caleb Lewis.",
      "Led Innowave Development, providing web services for local businesses with more than six web pages built.",
    ],
  },
]

const projects = [
  {
    name: "FlameMap",
    description:

    "University course-dependency visualization tool that lets students choose a major and view every course required to graduate, including prerequisite connections. Scraped nearly 4,000 courses and 300 degrees.",
    stack: ["Web Development", "Data Scraping", "Visualization"],
  },
  {
    name: "FairFix",
    description:
      "Vehicle-maintenance decision-support tool that recommends services and estimates fair repair pricing across dealerships and independent shops. Placed 3rd out of 20+ teams at SparkHacks 2026.",
    stack: ["Data Analysis", "Decision Support", "Web Development"],
  },
  {
    name: "CATSense",
    description:
      "Machine-health copilot for CAT heavy equipment that detects damage using image and audio analysis, produces structured inspection reports, and links repair recommendations to the official parts catalog.",
    stack: ["AWS Rekognition", "ElevenLabs", "RAG"],
  },
  {
    name: "MamaCare",
    description:
      "Web and mobile platform with a shared Python/FastAPI backend connecting pregnant mothers in real time, including a custom pipeline for family-friendly jobs and prenatal-safe groceries.",
    stack: ["Python", "FastAPI", "Web Development"],
  },
]

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-14">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="home-grid">
        <div className="hero-copy-block">
          <p className="eyebrow">Portfolio &amp; Resume</p>
          <h1 className="hero-title">SaiKamalaksha Nimishakavi</h1>
          <p className="lead">
            Data Science student, AI researcher, and software builder applying
            machine learning to healthcare, biomedical research, and real-world
            systems.
          </p>
          <div className="cta-row">
            <a href="mailto:saikamalakshan@email.com" className="primary-button">
              Get in Touch →
            </a>
            <a href={resumeUrl} download="SaiKamalaksha-Nimishakavi-Resume.pdf" className="secondary-button">
              Download Resume
            </a>
          </div>
        </div>

      </section>

      <section className="home-about-shell">
        <div className="home-about-header">
          <p className="section-label">About</p>
          <h2 className="home-about-title">Who I am</h2>
        </div>

        <div className="home-about-grid">
          <div className="home-about-copy">
            <p>
              I am SaiKamalaksha Nimishakavi, a Data Science student at the
              University of Illinois Chicago with a focus on computational
              research, machine learning, and applied AI. My work centers on
              translating complex technical ideas into systems that are useful,
              interpretable, and impactful.
            </p>
            <p>
              I have worked in biomedical AI, engineering education research,
              and software development, with a growing emphasis on healthcare and
              decision-support tools. I enjoy building prototypes that connect
              research questions to practical products and measurable outcomes.
            </p>
          </div>

          <aside className="home-interests-panel">
            <h3 className="home-interests-title">Interests</h3>
            <ul className="home-interests-list">
              <li>Machine learning and AI systems</li>
              <li>Biomedical and health data analysis</li>
              <li>Data-driven research workflows</li>
              <li>Applied software engineering</li>
              <li>Engineering education and student impact</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="info-strip">
        {[
          {
            title: "Focus",
            body: "Machine learning, AI agents, biomedical data, and engineering education research.",
          },
          {
            title: "Technical Foundation",
            body: "Python, Java, C, C++, JavaScript, R, SQL, AWS, FastAPI, and RESTful APIs.",
          },
          {
            title: "Leadership",
            body: "President of UIC Hack4Impact and NOBE, with experience leading research and web-service initiatives.",
          },
        ].map((card, i) => (
          <div
            key={card.title}
            className="info-card"
            style={{ borderRight: i < 2 ? `1px solid ${C.border}` : undefined }}
          >
            <h3 className="info-card-title">{card.title}</h3>
            <p className="info-card-body">{card.body}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

function ExperienceSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="content-shell">
      <SectionHeader
        label="Experience"
        title="Professional History"
        subtitle="Research, engineering, and leadership work across national laboratories, industry, and UIC."
      />
      <div className="timeline-shell">
        {experiences.map((exp, i) => (
          <div key={exp.role} className="timeline-item">
            <button className="timeline-button" onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="timeline-main">
                <span className="timeline-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="timeline-role">{exp.role}</p>
                  <p className="timeline-meta">
                    {exp.org} <span className="dot">·</span> {exp.period}{" "}
                    <span className="timeline-type">{exp.type}</span>
                  </p>
                </div>
              </div>
              <span className="timeline-toggle">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="timeline-details">
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  )
}

function ResearchSection() {
  const areas = [
    {
      title: "Biomedical AI",
      body: "Using Stanford Biomni, ALCF endpoints, and LLM frameworks to investigate biological datasets and lung cancer survival outcomes.",
    },
    {
      title: "Engineering Education",
      body: "Analyzing survey data on student self-efficacy and identity, and developing an LLM-supported framework for student-design samples.",
    },
    {
      title: "Mathematics Research",
      body: "Explored the Riemann Hypothesis through number theory, complex analysis, and computational experiments at the MURL.",
    },
  ]
  return (
    <section className="content-shell">
      <SectionHeader
        label="Research"
        title="Current Research"
        subtitle="Applied work at the intersection of AI, biomedical data, education, and mathematics."
      />
      <div className="research-grid">
        {areas.map((area) => (
          <article key={area.title} className="research-card">
            <h3 className="research-title">{area.title}</h3>
            <p className="research-body">{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="content-shell">
      <SectionHeader
        label="Projects"
        title="Selected Work"
        subtitle="Tools and platforms built for student planning, fair service decisions, equipment health, and maternal support."
      />
      <div className="project-grid">
        {projects.map((project, i) => (
          <article key={project.name} className="project-card">
            <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-body">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  const skills = [
    { category: "Languages", items: "Python, Java, C, C++, JavaScript, R, SQL" },
    { category: "Cloud & APIs", items: "AWS, virtual machines, databases, FastAPI, RESTful APIs" },
    { category: "Frameworks", items: "OLLAMA, LLM frameworks, Django, Flask, React" },
    { category: "Python Libraries", items: "Pandas, NumPy, scikit-learn, BeautifulSoup" },
  ]
  return (
    <section className="content-shell">
      <SectionHeader
        label="Education"
        title="Academic Background"
        subtitle="My studies at the University of Illinois Chicago and the technical tools that support my work."
      />
      <div className="education-card">
        <p className="education-degree">B.S. Data Science, Concentration in Computer Science</p>
        <p className="education-meta">University of Illinois Chicago · Expected May 2027 · 4.0 GPA</p>
        <p className="education-tagline">Minor in Mathematics · Honors College · Senior Standing · Dean’s List</p>
        <p className="education-detail">
          Relevant coursework: Program Design, Discrete Mathematics, Object-Oriented Programming, Data Structures, Software Design, Computer Algorithms, Artificial Intelligence, Data Science, Database Systems, Applied Statistical Methods, Calculus I–III, Applied Linear Algebra, and Business Project Management.
        </p>
      </div>
      <div className="skill-panel">
        <h3 className="skill-title">Technical Skills</h3>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-item">
              <p className="skill-label">{skill.category}</p>
              <p className="skill-body">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  const changeTab = (tab: Tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className="page-shell"
      style={{ backgroundColor: C.bg, minHeight: "100vh", color: C.black }}
    >
      <nav
        className="top-nav"
        style={{
          borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
          background: scrolled ? "rgba(237, 225, 219, 0.9)" : "rgba(237, 225, 219, 0.75)",
        }}
      >
        <button onClick={() => changeTab("home")} className="nav-brand">
          SaiKamalaksha Nimishakavi
        </button>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => changeTab(item.id)}
              className="nav-item"
              style={{ color: activeTab === item.id ? C.black : C.muted }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a href="mailto:saikamalakshan@email.com" className="nav-cta">
          Contact
        </a>
      </nav>

      <main className="main-shell" style={{ paddingTop: "64px" }}>
        {activeTab === "home" && <HomeSection />}
        {activeTab === "experience" && <ExperienceSection />}
        {activeTab === "research" && <ResearchSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "education" && <EducationSection />}
      </main>

      <footer className="site-footer">
        <p className="footer-text">© 2026 SaiKamalaksha Nimishakavi.</p>
        <div className="footer-links">
          <a href="https://github.com/SaiKamalaksha">GitHub</a>
          <a href="https://www.linkedin.com/in/saikamalaksha-nimishakavi/">LinkedIn</a>
          <a href={resumeUrl} download="SaiKamalaksha-Nimishakavi-Resume.pdf">Résumé</a>
        </div>
      </footer>
    </div>
  )
}
