import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'AI Content QC',
    description: 'An AI-powered quality control workflow designed to automate repetitive editorial checks and improve content operations.',
    tags: ['n8n', 'AI', 'Gradio'],
    tone: 'pink',
    href: '#'
  },
  {
    number: '02',
    title: 'AI Product Description',
    description: 'An automated workflow for generating and improving e-commerce product descriptions with structured AI outputs.',
    tags: ['n8n', 'LLM', 'Automation'],
    tone: 'beige',
    href: '#'
  },
  {
    number: '03',
    title: 'Product Intelligence',
    description: 'An AI-powered interface that turns product information into structured insights and practical recommendations.',
    tags: ['React', 'Gemini', 'AI'],
    tone: 'slate',
    href: '#'
  },
  {
    number: '04',
    title: 'Real Estate Intelligence',
    description: 'A Persian RTL concept for analyzing and comparing real-estate opportunities through a focused AI interface.',
    tags: ['React', 'AI', 'Cloudflare'],
    tone: 'pink',
    href: '#'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const moveVisual = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
    });
  };

  const resetVisual = () => setMouse({ x: 0, y: 0 });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu}>KIANAZ<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span /> CONTENT × AI × AUTOMATION</div>
            <h1>
              Content Strategist
              <em>&amp; AI Automation Specialist</em>
            </h1>
            <p className="hero-lead">I turn content workflows into smarter systems.</p>
            <p className="hero-description">
              Content strategy, AI automation, and practical digital solutions for modern teams.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">View my work <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#contact">Let’s connect <span>→</span></a>
            </div>
          </div>

          <div className="hero-visual-wrap" onMouseMove={moveVisual} onMouseLeave={resetVisual}>
            <div
              className="hero-visual"
              style={{ '--mx': `${mouse.x * 10}px`, '--my': `${mouse.y * 10}px` }}
              aria-hidden="true"
            >
              <div className="visual-glow" />
              <div className="visual-orbit orbit-a" />
              <div className="visual-orbit orbit-b" />
              <div className="visual-line line-one" />
              <div className="visual-line line-two" />

              <div className="system-card card-content">
                <div className="card-index">01</div>
                <div className="card-label">CONTENT</div>
                <div className="card-sub">Strategy</div>
              </div>

              <div className="connector connector-one"><i /></div>

              <div className="system-card card-ai">
                <div className="ai-dot-grid">
                  <i /><i /><i /><i /><i /><i /><i /><i /><i />
                </div>
                <div className="ai-label">AI SYSTEM</div>
                <div className="ai-status"><span /> ACTIVE</div>
              </div>

              <div className="connector connector-two"><i /></div>

              <div className="system-card card-automation">
                <div className="card-index">03</div>
                <div className="card-label">AUTOMATION</div>
                <div className="card-sub">Workflows</div>
              </div>

              <div className="floating-chip chip-one">INPUT</div>
              <div className="floating-chip chip-two">PROCESS</div>
              <div className="floating-chip chip-three">OUTPUT</div>
            </div>
          </div>

          <a className="scroll-cue" href="#work"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="intro-section">
          <div className="section-kicker">01 — SELECTED WORK</div>
          <div className="intro-grid">
            <h2>Turning ideas into <span>useful systems.</span></h2>
            <p>
              A selection of projects across content operations, AI automation, and digital product concepts.
            </p>
          </div>
        </section>

        <section className="projects-section" id="work">
          {projects.map((project, index) => (
            <a className={`project project-${project.tone}`} href={project.href} key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{index % 2 === 0 ? 'AI / AUTOMATION' : 'DIGITAL SYSTEM'}</span>
              </div>
              <div className="project-visual">
                <div className="project-window">
                  <div className="window-top"><i /><i /><i /></div>
                  <div className="mock-layout">
                    <div className="mock-sidebar" />
                    <div className="mock-main">
                      <div className="mock-heading" />
                      <div className="mock-row"><i /><i /><i /></div>
                      <div className="mock-row short"><i /><i /></div>
                      <div className="mock-block" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-arrow"><ArrowUpRight size={22} /></span>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="services-section" id="about">
          <div className="section-kicker">02 — WHAT I DO</div>
          <div className="services-grid">
            {[
              ['01', 'Content Strategy', 'Building clear content systems that connect strategy, SEO, and execution.'],
              ['02', 'AI Automation', 'Designing practical AI workflows that reduce repetitive work and improve operations.'],
              ['03', 'Content Systems', 'Turning editorial rules and processes into scalable, repeatable systems.'],
              ['04', 'AI Products', 'Creating focused AI-powered tools and interfaces around real business needs.']
            ].map(([num, title, text]) => (
              <div className="service" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="section-kicker">03 — ABOUT</div>
          <div className="about-copy">
            <h2>I work where <span>content, systems,</span> and AI meet.</h2>
            <p>
              My background in content operations and SEO led me toward building smarter workflows with AI.
              I focus on practical solutions: systems that save time, make processes clearer, and turn repetitive work into something scalable.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb orb-one" />
          <div className="contact-orb orb-two" />
          <div className="section-kicker">04 — GET IN TOUCH</div>
          <h2>Have an idea?<br /><span>Let’s build something useful.</span></h2>
          <a className="contact-email" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={25} /></a>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
            <a href="#" aria-label="GitHub"><Github size={18} /> GitHub</a>
            <a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /> Email</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Kianaz</span>
        <span>Content × AI × Automation</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
