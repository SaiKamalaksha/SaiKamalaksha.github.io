import { useEffect, useState } from "react"
import resumeUrl from "./imports/Kamalaksha_Resume-1.pdf"

type Tab = "home" | "experience" | "research" | "projects"

const C = {
  bg: "#6f0010",
  bgDark: "#420008",
  bgLight: "#8a0e1d",
  border: "rgba(0,0,0,0.25)",
  borderLight: "rgba(255,255,255,0.12)",
  white: "#ffffff",
  black: "#000000",
  gold: "#f0c060",
  muted: "rgba(255,255,255,0.68)",
}

const NAV_ITEMS: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
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
      <p
        className="font-mono-label text-xs tracking-[0.25em] uppercase mb-4"
        style={{ color: C.gold }}
      >
        {label}
      </p>
      <h2
        className="font-display text-5xl lg:text-6xl mb-5"
        style={{ color: C.white }}
      >
        {title}
      </h2>
      <p className="text-base max-w-2xl" style={{ color: C.muted }}>
        {subtitle}
      </p>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 grid lg:grid-cols-[1fr_420px] min-h-[92vh]">
        <div className="flex flex-col justify-center px-10 lg:px-20 py-24">
          <p
            className="font-mono-label text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: C.gold }}
          >
            Portfolio &amp; Resume
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] mb-8"
            style={{ color: C.white }}
          >
            SaiKamalaksha Nimishakavi
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed mb-10"
            style={{ color: C.muted }}
          >
            Data Science student, AI researcher, and software builder applying
            machine learning to healthcare, biomedical research, and real-world
            systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:saikamalakshan@email.com"
              className="px-6 py-3 text-sm font-medium"
              style={{ backgroundColor: C.black, color: C.white }}
            >
              Get in Touch →
            </a>
            <a
              href={resumeUrl}
              download
              className="px-6 py-3 text-sm font-medium"
              style={{ border: `1px solid ${C.borderLight}`, color: C.white }}
            >
              Download Resume
            </a>
          </div>
        </div>
        <aside
          className="hidden lg:flex flex-col justify-end p-12"
          style={{
            borderLeft: `1px solid ${C.border}`,
            backgroundColor: C.bgDark,
          }}
        >
          <div className="space-y-5">
            {[
              { label: "University", value: "University of Illinois Chicago" },
              {
                label: "Program",
                value: "B.S. Data Science, Computer Science concentration",
              },
              { label: "Expected Graduation", value: "May 2027" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: `1px solid ${C.border}`,
                  paddingTop: "16px",
                }}
              >
                <p
                  className="font-mono-label text-xs uppercase tracking-widest mb-1"
                  style={{ color: C.muted }}
                >
                  {item.label}
                </p>
                <p className="text-sm font-medium" style={{ color: C.white }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section
        className="grid lg:grid-cols-3"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
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
            className="p-10"
            style={{ borderRight: i < 2 ? `1px solid ${C.border}` : undefined }}
          >
            <h3
              className="font-display text-2xl mb-4"
              style={{ color: C.white }}
            >
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              {card.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

function ExperienceSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeader
        label="Experience"
        title="Professional History"
        subtitle="Research, engineering, and leadership work across national laboratories, industry, and UIC."
      />
      <div style={{ borderTop: `1px solid ${C.border}` }}>
        {experiences.map((exp, i) => (
          <div key={exp.role} style={{ borderBottom: `1px solid ${C.border}` }}>
            <button
              className="w-full text-left py-7 flex items-start justify-between gap-6"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="flex gap-6">
                <span
                  className="font-mono-label text-xs mt-1"
                  style={{ color: C.gold }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="font-display text-xl mb-1"
                    style={{ color: C.white }}
                  >
                    {exp.role}
                  </p>
                  <p className="text-sm" style={{ color: C.muted }}>
                    {exp.org} <span style={{ color: C.gold }}>·</span>{" "}
                    {exp.period}{" "}
                    <span
                      className="ml-2 font-mono-label text-xs"
                      style={{ color: C.gold }}
                    >
                      {exp.type}
                    </span>
                  </p>
                </div>
              </div>
              <span className="text-xl" style={{ color: C.muted }}>
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="pl-12 pb-8">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: C.muted }}
                    >
                      <span
                        className="mt-2 shrink-0 w-1 h-1 rounded-full"
                        style={{ backgroundColor: C.gold }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20">
        <h3 className="font-display text-2xl mb-6" style={{ color: C.white }}>
          Education
        </h3>
        <div
          className="p-7"
          style={{ border: `1px solid ${C.border}`, backgroundColor: C.bgDark }}
        >
          <p className="font-display text-xl mb-2" style={{ color: C.white }}>
            B.S. Data Science, Concentration in Computer Science
          </p>
          <p className="text-sm mb-3" style={{ color: C.muted }}>
            University of Illinois Chicago · Expected May 2027 · 4.0 GPA
          </p>
          <p className="font-mono-label text-xs" style={{ color: C.gold }}>
            Minor in Mathematics · Honors College · Senior Standing · Dean’s
            List
          </p>
          <p
            className="text-sm mt-5 leading-relaxed"
            style={{ color: C.muted }}
          >
            Relevant coursework: Program Design, Discrete Mathematics,
            Object-Oriented Programming, Data Structures, Software Design,
            Computer Algorithms, Artificial Intelligence, Data Science, Database
            Systems, Applied Statistical Methods, Calculus I–III, Applied Linear
            Algebra, and Business Project Management.
          </p>
        </div>
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
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeader
        label="Research"
        title="Current Research"
        subtitle="Applied work at the intersection of AI, biomedical data, education, and mathematics."
      />
      <div className="grid lg:grid-cols-3 gap-5">
        {areas.map((area) => (
          <article
            key={area.title}
            className="p-7"
            style={{
              border: `1px solid ${C.border}`,
              backgroundColor: C.bgDark,
            }}
          >
            <h3
              className="font-display text-2xl mb-4"
              style={{ color: C.white }}
            >
              {area.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
              {area.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  const skills = [
    {
      category: "Languages",
      items: "Python, Java, C, C++, JavaScript, R, SQL",
    },
    {
      category: "Cloud & APIs",
      items: "AWS, virtual machines, databases, FastAPI, RESTful APIs",
    },
    {
      category: "Frameworks",
      items: "OLLAMA, LLM frameworks, Django, Flask, React",
    },
    {
      category: "Python Libraries",
      items: "Pandas, NumPy, scikit-learn, BeautifulSoup",
    },
  ]
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
      <SectionHeader
        label="Projects"
        title="Selected Work"
        subtitle="Tools and platforms built for student planning, fair service decisions, equipment health, and maternal support."
      />
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="p-8 flex flex-col"
            style={{
              border: `1px solid ${C.border}`,
              backgroundColor: C.bgDark,
            }}
          >
            <span
              className="font-mono-label text-xs mb-6"
              style={{ color: C.gold }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="font-display text-2xl mb-4"
              style={{ color: C.white }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm leading-relaxed flex-1 mb-6"
              style={{ color: C.muted }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-label text-xs px-2 py-1"
                  style={{ border: `1px solid ${C.border}`, color: C.gold }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-20">
        <h3 className="font-display text-2xl mb-8" style={{ color: C.white }}>
          Technical Skills
        </h3>
        <div
          className="grid lg:grid-cols-2"
          style={{
            borderTop: `1px solid ${C.border}`,
            borderLeft: `1px solid ${C.border}`,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6"
              style={{
                borderRight: `1px solid ${C.border}`,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <p
                className="font-mono-label text-xs uppercase tracking-widest mb-3"
                style={{ color: C.gold }}
              >
                {skill.category}
              </p>
              <p className="text-sm" style={{ color: C.muted }}>
                {skill.items}
              </p>
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
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", color: C.white }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-12"
        style={{
          height: "64px",
          borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
          backgroundColor: scrolled
            ? "rgba(66,0,8,0.97)"
            : "rgba(111,0,16,0.88)",
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          onClick={() => changeTab("home")}
          className="font-display text-xs lg:text-base whitespace-nowrap"
          style={{ color: C.white }}
        >
          Sai Kamalaksha Nimishakavi
        </button>
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => changeTab(item.id)}
              className="px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium"
              style={{ color: activeTab === item.id ? C.white : C.muted }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="mailto:saikamalakshan@email.com"
          className="hidden md:inline-flex px-4 py-2 text-xs font-medium"
          style={{ border: `1px solid ${C.borderLight}`, color: C.white }}
        >
          Contact
        </a>
      </nav>
      <main style={{ paddingTop: "64px" }}>
        {activeTab === "home" && <HomeSection />}
        {activeTab === "experience" && <ExperienceSection />}
        {activeTab === "research" && <ResearchSection />}
        {activeTab === "projects" && <ProjectsSection />}
      </main>
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-10 lg:px-16 py-8 gap-4"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        <p className="font-mono-label text-xs" style={{ color: C.muted }}>
          © 2026 Sai Kamalaksha Nimishakavi.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SaiKamalaksha"
            className="font-mono-label text-xs"
            style={{ color: C.muted }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saikamalaksha-nimishakavi/"
            className="font-mono-label text-xs"
            style={{ color: C.muted }}
          >
            LinkedIn
          </a>
          <a
            href={resumeUrl}
            download
            className="font-mono-label text-xs"
            style={{ color: C.muted }}
          >
            Résumé
          </a>
        </div>
      </footer>
    </div>
  )
}
