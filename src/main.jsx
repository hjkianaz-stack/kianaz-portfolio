import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import './styles.css';

const content = {
  fa: {
    nav: {
      work: 'پروژه‌ها',
      about: 'درباره من',
      contact: 'ارتباط'
    },
    hero: {
      eyebrow: 'CONTENT × AI × AUTOMATION',
      title: 'استراتژی محتوا',
      titleAccent: 'و اتوماسیون هوش مصنوعی',
      lead: 'فرایندهای محتوایی را به سیستم‌های هوشمندتر تبدیل می‌کنم.',
      description: 'ترکیبی از استراتژی محتوا، هوش مصنوعی و اتوماسیون برای ساخت راهکارهای کاربردی و قابل توسعه.',
      work: 'مشاهده پروژه‌ها',
      connect: 'ارتباط با من',
      scroll: 'برای مشاهده بیشتر اسکرول کنید'
    },
    intro: {
      kicker: '01 — پروژه‌های منتخب',
      title: <>ایده‌ها را به <span>سیستم‌های کاربردی</span> تبدیل می‌کنم.</>,
      text: 'مجموعه‌ای از پروژه‌ها در حوزه عملیات محتوا، اتوماسیون هوشمند و ساخت محصولات دیجیتال.'
    },
    projects: [
      {
        number: '01',
        title: 'سیستم کنترل کیفیت محتوای مبتنی بر AI',
        description: 'یک workflow مبتنی بر هوش مصنوعی برای خودکارسازی بررسی‌های تکراری محتوا و بهبود فرایند کنترل کیفیت.',
        tags: ['n8n', 'AI', 'Gradio'],
        tone: 'pink',
        meta: 'AI / AUTOMATION'
      },
      {
        number: '02',
        title: 'اتوماسیون تولید توضیحات محصول',
        description: 'یک workflow خودکار برای تولید و بهبود توضیحات محصولات فروشگاهی با خروجی‌های ساختاریافته مبتنی بر AI.',
        tags: ['n8n', 'LLM', 'Automation'],
        tone: 'beige',
        meta: 'AI / AUTOMATION'
      },
      {
        number: '03',
        title: 'سیستم هوشمند تحلیل محصول',
        description: 'رابطی مبتنی بر AI که اطلاعات محصول را به بینش‌های ساختاریافته و پیشنهادهای کاربردی تبدیل می‌کند.',
        tags: ['React', 'Gemini', 'AI'],
        tone: 'slate',
        meta: 'DIGITAL SYSTEM'
      },
      {
        number: '04',
        title: 'تحلیل هوشمند املاک',
        description: 'یک مفهوم RTL فارسی برای تحلیل و مقایسه فرصت‌های ملکی با استفاده از یک رابط متمرکز بر AI.',
        tags: ['React', 'AI', 'Cloudflare'],
        tone: 'pink',
        meta: 'DIGITAL SYSTEM'
      }
    ],
    services: {
      kicker: '02 — چه کاری انجام می‌دهم',
      items: [
        ['01', 'استراتژی محتوا', 'طراحی سیستم‌های محتوایی شفاف که استراتژی، SEO و اجرا را به هم متصل می‌کنند.'],
        ['02', 'AI Automation', 'طراحی workflowهای کاربردی مبتنی بر AI برای کاهش کارهای تکراری و بهبود عملیات.'],
        ['03', 'سیستم‌های محتوا', 'تبدیل قوانین و فرایندهای تحریریه به سیستم‌هایی مقیاس‌پذیر و قابل تکرار.'],
        ['04', 'AI Products', 'ساخت ابزارها و رابط‌های متمرکز بر AI بر اساس نیازهای واقعی کسب‌وکار.']
      ]
    },
    about: {
      kicker: '03 — درباره من',
      title: <>جایی کار می‌کنم که <span>محتوا، سیستم‌ها</span> و AI به هم می‌رسند.</>,
      text: 'مسیر کاری من از عملیات محتوا و SEO شروع شد و به سمت ساخت workflowهای هوشمند با AI حرکت کرد. تمرکزم روی راهکارهای کاربردی است: سیستم‌هایی که زمان ذخیره می‌کنند، فرایندها را شفاف‌تر می‌کنند و کارهای تکراری را به فرایندهایی قابل توسعه تبدیل می‌کنند.'
    },
    contact: {
      kicker: '04 — در ارتباط باشیم',
      title: <>ایده‌ای داری؟<br /><span>بیایید چیزی کاربردی بسازیم.</span></>,
      emailLabel: 'ایمیل',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: 'Content × AI × Automation'
  },

  en: {
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'CONTENT × AI × AUTOMATION',
      title: 'Content Strategist',
      titleAccent: '& AI Automation Specialist',
      lead: 'I turn content workflows into smarter systems.',
      description: 'Content strategy, AI automation, and practical digital solutions for modern teams.',
      work: 'View my work',
      connect: 'Let’s connect',
      scroll: 'Scroll to explore'
    },
    intro: {
      kicker: '01 — SELECTED WORK',
      title: <>Turning ideas into <span>useful systems.</span></>,
      text: 'A selection of projects across content operations, AI automation, and digital product concepts.'
    },
    projects: [
      {
        number: '01',
        title: 'AI Content QC',
        description: 'An AI-powered quality control workflow designed to automate repetitive editorial checks and improve content operations.',
        tags: ['n8n', 'AI', 'Gradio'],
        tone: 'pink',
        meta: 'AI / AUTOMATION'
      },
      {
        number: '02',
        title: 'AI Product Description',
        description: 'An automated workflow for generating and improving e-commerce product descriptions with structured AI outputs.',
        tags: ['n8n', 'LLM', 'Automation'],
        tone: 'beige',
        meta: 'AI / AUTOMATION'
      },
      {
        number: '03',
        title: 'Product Intelligence',
        description: 'An AI-powered interface that turns product information into structured insights and practical recommendations.',
        tags: ['React', 'Gemini', 'AI'],
        tone: 'slate',
        meta: 'DIGITAL SYSTEM'
      },
      {
        number: '04',
        title: 'Real Estate Intelligence',
        description: 'A Persian RTL concept for analyzing and comparing real-estate opportunities through a focused AI interface.',
        tags: ['React', 'AI', 'Cloudflare'],
        tone: 'pink',
        meta: 'DIGITAL SYSTEM'
      }
    ],
    services: {
      kicker: '02 — WHAT I DO',
      items: [
        ['01', 'Content Strategy', 'Building clear content systems that connect strategy, SEO, and execution.'],
        ['02', 'AI Automation', 'Designing practical AI workflows that reduce repetitive work and improve operations.'],
        ['03', 'Content Systems', 'Turning editorial rules and processes into scalable, repeatable systems.'],
        ['04', 'AI Products', 'Creating focused AI-powered tools and interfaces around real business needs.']
      ]
    },
    about: {
      kicker: '03 — ABOUT',
      title: <>I work where <span>content, systems,</span> and AI meet.</>,
      text: 'My background in content operations and SEO led me toward building smarter workflows with AI. I focus on practical solutions: systems that save time, make processes clearer, and turn repetitive work into something scalable.'
    },
    contact: {
      kicker: '04 — GET IN TOUCH',
      title: <>Have an idea?<br /><span>Let’s build something useful.</span></>,
      emailLabel: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: 'Content × AI × Automation'
  }
};

const links = {
  email: 'hello@example.com',
  linkedin: '#',
  github: '#'
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState(
    () => localStorage.getItem('portfolio-lang') || 'fa'
  );

  const t = content[lang];
  const isFa = lang === 'fa';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';

    document.title = isFa
      ? 'Kianaz — استراتژی محتوا و اتوماسیون هوش مصنوعی'
      : 'Kianaz — Content Strategist & AI Automation Specialist';

    localStorage.setItem('portfolio-lang', lang);
  }, [lang, isFa]);

  const moveVisual = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
    });
  };

  const resetVisual = () => setMouse({ x: 0, y: 0 });

  const closeMenu = () => setMenuOpen(false);

  const switchLang = () => {
    setLang(prev => prev === 'fa' ? 'en' : 'fa');
    closeMenu();
  };

  return (
    <div className={`site ${isFa ? 'is-fa' : 'is-en'}`}>

      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>

        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
        >
          KIANAZ<span>.</span>
        </a>

        <div className="nav-right">

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>

            <a href="#work" onClick={closeMenu}>
              {t.nav.work}
            </a>

            <a href="#about" onClick={closeMenu}>
              {t.nav.about}
            </a>

            <a href="#contact" onClick={closeMenu}>
              {t.nav.contact}
            </a>

          </nav>

          <button
            className="lang-switch"
            onClick={switchLang}
            aria-label="Switch language"
          >
            <span className={isFa ? 'active' : ''}>FA</span>
            <i>/</i>
            <span className={!isFa ? 'active' : ''}>EN</span>
          </button>

        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </header>

      <main id="top">

        <section className="hero">

          <div className="hero-copy">

            <div className="eyebrow">
              <span /> {t.hero.eyebrow}
            </div>

            <h1>
              {t.hero.title}
              <em>{t.hero.titleAccent}</em>
            </h1>

            <p className="hero-lead">
              {t.hero.lead}
            </p>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-actions">

              <a
                className="button button-light"
                href="#work"
              >
                {t.hero.work}
                <ArrowUpRight size={17} />
              </a>

              <a
                className="text-link"
                href="#contact"
              >
                {t.hero.connect}
                <span>←</span>
              </a>

            </div>

          </div>

          <div
            className="hero-visual-wrap"
            onMouseMove={moveVisual}
            onMouseLeave={resetVisual}
          >

            <div
              className="hero-visual"
              style={{
                '--mx': `${mouse.x * 10}px`,
                '--my': `${mouse.y * 10}px`
              }}
              aria-hidden="true"
            >

              <div className="visual-glow" />

              <div className="visual-orbit orbit-a" />

              <div className="visual-orbit orbit-b" />

              <div className="visual-line line-one" />

              <div className="visual-line line-two" />

              <div className="system-card card-content">

                <div className="card-index">
                  01
                </div>

                <div className="card-label">
                  CONTENT
                </div>

                <div className="card-sub">
                  Strategy
                </div>

              </div>

              <div className="connector connector-one">
                <i />
              </div>

              <div className="system-card card-ai">

                <div className="ai-dot-grid">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="ai-label">
                  AI SYSTEM
                </div>

                <div className="ai-status">
                  <span /> ACTIVE
                </div>

              </div>

              <div className="connector connector-two">
                <i />
              </div>

              <div className="system-card card-automation">

                <div className="card-index">
                  03
                </div>

                <div className="card-label">
                  AUTOMATION
                </div>

                <div className="card-sub">
                  Workflows
                </div>

              </div>

              <div className="floating-chip chip-one">
                INPUT
              </div>

              <div className="floating-chip chip-two">
                PROCESS
              </div>

              <div className="floating-chip chip-three">
                OUTPUT
              </div>

            </div>

          </div>

          <a
            className="scroll-cue"
            href="#work"
          >
            <ArrowDown size={15} />
            {t.hero.scroll}
          </a>

        </section>

        <section className="intro-section">

          <div className="section-kicker">
            {t.intro.kicker}
          </div>

          <div className="intro-grid">

            <h2>
              {t.intro.title}
            </h2>

            <p>
              {t.intro.text}
            </p>

          </div>

        </section>

        <section
          className="projects-section"
          id="work"
        >

          {t.projects.map((project) => (

            <a
              className={`project project-${project.tone}`}
              href="#"
              key={project.number}
            >

              <div className="project-meta">

                <span>
                  {project.number}
                </span>

                <span>
                  {project.meta}
                </span>

              </div>

              <div className="project-visual">

                <div className="project-window">

                  <div className="window-top">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="mock-layout">

                    <div className="mock-sidebar" />

                    <div className="mock-main">

                      <div className="mock-heading" />

                      <div className="mock-row">
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="mock-row short">
                        <i />
                        <i />
                      </div>

                      <div className="mock-block" />

                    </div>

                  </div>

                </div>

              </div>

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-bottom">

                  <div className="tags">

                    {project.tags.map(tag => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <span className="project-arrow">
                    <ArrowUpRight size={22} />
                  </span>

                </div>

              </div>

            </a>

          ))}

        </section>

        <section
          className="services-section"
          id="about"
        >

          <div className="section-kicker">
            {t.services.kicker}
          </div>

          <div className="services-grid">

            {t.services.items.map(([num, title, text]) => (

              <div
                className="service"
                key={num}
              >

                <span>
                  {num}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </div>

            ))}

          </div>

        </section>

        <section className="about-section">

          <div className="section-kicker">
            {t.about.kicker}
          </div>

          <div className="about-copy">

            <h2>
              {t.about.title}
            </h2>

            <p>
              {t.about.text}
            </p>

          </div>

        </section>

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-orb orb-one" />
          <div className="contact-orb orb-two" />

          <div className="section-kicker">
            {t.contact.kicker}
          </div>

          <h2>
            {t.contact.title}
          </h2>

          <a
            className="contact-email"
            href={`mailto:${links.email}`}
          >
            {links.email}
            <ArrowUpRight size={25} />
          </a>

          <div className="socials">

            <a
              href={links.linkedin}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              {t.contact.linkedin}
            </a>

            <a
              href={links.github}
              aria-label="GitHub"
            >
              <Github size={18} />
              {t.contact.github}
            </a>

            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
            >
              <Mail size={18} />
              {t.contact.emailLabel}
            </a>

          </div>

        </section>

      </main>

      <footer>

        <span>
          © 2026 Kianaz
        </span>

        <span>
          {t.footer}
        </span>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(<App />);
