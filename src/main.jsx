import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  Phone
} from 'lucide-react';

import './styles.css';


const content = {

  /* =====================================================
     PERSIAN
  ===================================================== */

  fa: {

    nav: {
      work: 'نمونه‌کارها',
      about: 'درباره من',
      contact: 'ارتباط'
    },

    hero: {
      eyebrow: 'CONTENT × AI × AUTOMATION',

      title: 'استراتژی محتوا',

      titleAccent: 'و اتوماسیون هوش مصنوعی',

      lead:
        'فرایندهای محتوا را با کمک AI سریع‌تر، دقیق‌تر و قابل‌مدیریت‌تر می‌کنم.',

      description:
        'تمرکز من روی ترکیب استراتژی محتوا، هوش مصنوعی و اتوماسیون برای ساخت راهکارهایی است که واقعاً در کار روزمره قابل استفاده باشند.',

      work: 'مشاهده نمونه‌کارها',

      connect: 'ارتباط با من',

      scroll: 'برای دیدن بیشتر اسکرول کنید'
    },


    intro: {

      kicker: '01 — نمونه‌کارهای منتخب',

      title: (
        <>
          از مسئله تا راهکار؛
          <span> سیستم‌هایی می‌سازم که کار را ساده‌تر می‌کنند.</span>
        </>
      ),

      text:
        'بخشی از پروژه‌هایی که در حوزه کنترل کیفیت محتوا، تولید محتوای محصول، اتوماسیون و ابزارهای مبتنی بر هوش مصنوعی ساخته‌ام.'
    },


    projects: [

      {
        number: '01',

        title: 'AI Content QC',

        description:
          'ابزاری برای کنترل کیفیت محتوا که فرایند بررسی مقاله را با کمک هوش مصنوعی خودکار می‌کند و مواردی مثل ساختار، خوانایی، تکرار، نگارش و الزامات محتوایی را بررسی می‌کند.',

        tags: [
          'n8n',
          'Gemini',
          'Gradio'
        ],

        tone: 'pink',

        meta: 'AI / CONTENT QC',

        link:
          'https://ai-content-qc.onrender.com/'
      },


      {
        number: '02',

        title: 'AI Product Description Generator',

        description:
          'سیستمی برای تولید و بهینه‌سازی توضیحات محصول که اطلاعات ورودی را دریافت می‌کند و با استفاده از AI، محتوای ساختاریافته و آماده استفاده تولید می‌کند.',

        tags: [
          'n8n',
          'LLM',
          'Automation'
        ],

        tone: 'beige',

        meta: 'AI / AUTOMATION',

        link:
          'https://ai-product-description-generator-hbbm.onrender.com/'
      },


      {
        number: '03',

        title: 'Product Intelligence',

        description:
          'یک نمونه مفهومی از ابزارهای مبتنی بر AI برای تبدیل اطلاعات خام محصول به داده‌های قابل استفاده و بینش‌های کاربردی.',

        tags: [
          'React',
          'Gemini',
          'AI'
        ],

        tone: 'slate',

        meta: 'AI PRODUCT',

        link: '#'
      },


      {
        number: '04',

        title: 'Real Estate Intelligence',

        description:
          'یک نمونه مفهومی برای تحلیل و مقایسه اطلاعات املاک با تمرکز بر تجربه کاربری فارسی و استفاده از قابلیت‌های هوش مصنوعی.',

        tags: [
          'React',
          'AI',
          'Cloudflare'
        ],

        tone: 'pink',

        meta: 'DIGITAL PRODUCT',

        link: '#'
      }

    ],


    services: {

      kicker: '02 — چه کاری انجام می‌دهم',

      items: [

        [
          '01',
          'استراتژی محتوا',
          'طراحی و بهینه‌سازی فرایندهای محتوا با نگاه هم‌زمان به کیفیت، SEO و نیاز واقعی کسب‌وکار.'
        ],

        [
          '02',
          'اتوماسیون با AI',
          'تبدیل کارهای تکراری و زمان‌بر به workflowهای خودکار با استفاده از هوش مصنوعی و ابزارهای اتوماسیون.'
        ],

        [
          '03',
          'سیستم‌های محتوایی',
          'تبدیل دستورالعمل‌ها و فرایندهای محتوایی به سیستم‌هایی منظم، قابل‌اندازه‌گیری و قابل توسعه.'
        ],

        [
          '04',
          'ابزارهای مبتنی بر AI',
          'ساخت ابزارهای کاربردی با AI برای حل مسئله‌های مشخص در محتوا، بازاریابی و عملیات.'
        ]

      ]
    },


    about: {

      kicker: '03 — درباره من',

      title: (
        <>
          تجربه محتوا را با
          <span> ساختن سیستم‌های بهتر </span>
          ترکیب می‌کنم.
        </>
      ),

      text:
        'مسیر حرفه‌ای من از تولید و مدیریت محتوا و SEO شروع شد و به سمت طراحی سیستم‌های هوشمند و اتوماسیون با AI ادامه پیدا کرد. امروز تمرکزم روی پیدا کردن بخش‌های تکراری و زمان‌بر فرایندها و تبدیل آن‌ها به راهکارهایی است که اجرای کار را سریع‌تر، منظم‌تر و قابل‌توسعه‌تر می‌کنند.'
    },


    contact: {

      kicker: '04 — در ارتباط باشیم',

      title: (
        <>
          پروژه‌ای در ذهن داری؟
          <br />
          <span>بیایید راهکارش را بسازیم.</span>
        </>
      ),

      emailLabel: 'ایمیل',

      phoneLabel: 'شماره تماس',

      linkedin: 'LinkedIn',

      github: 'GitHub'
    },


    footer:
      'Content × AI × Automation'
  },


  /* =====================================================
     ENGLISH
  ===================================================== */

  en: {

    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact'
    },


    hero: {

      eyebrow:
        'CONTENT × AI × AUTOMATION',

      title:
        'Content Strategist',

      titleAccent:
        '& AI Automation Specialist',

      lead:
        'I turn content workflows into smarter, more efficient systems.',

      description:
        'I combine content strategy, AI, and automation to build practical solutions that make everyday workflows faster and easier to manage.',

      work:
        'View my work',

      connect:
        'Let’s connect',

      scroll:
        'Scroll to explore'
    },


    intro: {

      kicker:
        '01 — SELECTED WORK',

      title: (
        <>
          From problems to practical solutions;
          <span> I build systems that make work simpler.</span>
        </>
      ),

      text:
        'A selection of projects across content quality control, product content automation, AI workflows, and digital product concepts.'
    },


    projects: [

      {
        number: '01',

        title:
          'AI Content QC',

        description:
          'An AI-powered content quality control tool that automates editorial checks across structure, readability, repetition, writing quality, and content requirements.',

        tags: [
          'n8n',
          'Gemini',
          'Gradio'
        ],

        tone:
          'pink',

        meta:
          'AI / CONTENT QC',

        link:
          'https://ai-content-qc.onrender.com/'
      },


      {
        number: '02',

        title:
          'AI Product Description Generator',

        description:
          'An AI-powered workflow for generating and improving product descriptions from structured inputs, turning product data into ready-to-use content.',

        tags: [
          'n8n',
          'LLM',
          'Automation'
        ],

        tone:
          'beige',

        meta:
          'AI / AUTOMATION',

        link:
          'https://ai-product-description-generator-hbbm.onrender.com/'
      },


      {
        number: '03',

        title:
          'Product Intelligence',

        description:
          'A concept for AI-powered product tools that turn raw product information into structured insights and useful recommendations.',

        tags: [
          'React',
          'Gemini',
          'AI'
        ],

        tone:
          'slate',

        meta:
          'AI PRODUCT',

        link:
          '#'
      },


      {
        number: '04',

        title:
          'Real Estate Intelligence',

        description:
          'A Persian RTL concept for analyzing and comparing real-estate information through a focused AI-powered interface.',

        tags: [
          'React',
          'AI',
          'Cloudflare'
        ],

        tone:
          'pink',

        meta:
          'DIGITAL PRODUCT',

        link:
          '#'
      }

    ],


    services: {

      kicker:
        '02 — WHAT I DO',

      items: [

        [
          '01',
          'Content Strategy',
          'Designing and improving content workflows with a focus on quality, SEO, and real business needs.'
        ],

        [
          '02',
          'AI Automation',
          'Turning repetitive and time-consuming tasks into automated workflows using AI and automation tools.'
        ],

        [
          '03',
          'Content Systems',
          'Turning editorial guidelines and processes into structured, measurable, and scalable systems.'
        ],

        [
          '04',
          'AI Products',
          'Building practical AI-powered tools around specific problems in content, marketing, and operations.'
        ]

      ]
    },


    about: {

      kicker:
        '03 — ABOUT',

      title: (
        <>
          Combining content experience with
          <span> better systems.</span>
        </>
      ),

      text:
        'My professional background started in content operations and SEO before moving toward AI-powered systems and automation. Today, I focus on identifying repetitive and time-consuming parts of workflows and turning them into practical solutions that make work faster, clearer, and more scalable.'
    },


    contact: {

      kicker:
        '04 — GET IN TOUCH',

      title: (
        <>
          Have a project in mind?
          <br />
          <span>Let’s build the solution.</span>
        </>
      ),

      emailLabel:
        'Email',

      phoneLabel:
        'Phone',

      linkedin:
        'LinkedIn',

      github:
        'GitHub'
    },


    footer:
      'Content × AI × Automation'
  }

};


/* =====================================================
   LINKS
===================================================== */

const links = {

  email:
    'hjkianaz@gmail.com',

  phone:
    '09038192167',

  linkedin:
    '#',

  github:
    '#'

};


/* =====================================================
   APP
===================================================== */

function App() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [mouse, setMouse] =
    useState({
      x: 0,
      y: 0
    });

  const [lang, setLang] =
    useState(
      () =>
        localStorage.getItem('portfolio-lang') || 'fa'
    );


  const t =
    content[lang];

  const isFa =
    lang === 'fa';


  /* =====================================================
     SCROLL
  ===================================================== */

  useEffect(() => {

    const onScroll = () =>
      setScrolled(window.scrollY > 30);

    window.addEventListener(
      'scroll',
      onScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      );

  }, []);


  /* =====================================================
     LANGUAGE
  ===================================================== */

  useEffect(() => {

    document.documentElement.lang =
      lang;

    document.documentElement.dir =
      isFa ? 'rtl' : 'ltr';


    document.title =
      isFa
        ? 'Kianaz — استراتژی محتوا و اتوماسیون هوش مصنوعی'
        : 'Kianaz — Content Strategist & AI Automation Specialist';


    localStorage.setItem(
      'portfolio-lang',
      lang
    );

  }, [
    lang,
    isFa
  ]);


  /* =====================================================
     HERO INTERACTION
  ===================================================== */

  const moveVisual = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();


    setMouse({

      x:
        (
          (e.clientX - rect.left) /
          rect.width -
          0.5
        ) * 2,

      y:
        (
          (e.clientY - rect.top) /
          rect.height -
          0.5
        ) * 2

    });

  };


  const resetVisual = () =>
    setMouse({
      x: 0,
      y: 0
    });


  const closeMenu = () =>
    setMenuOpen(false);


  const switchLang = () => {

    setLang(
      prev =>
        prev === 'fa'
          ? 'en'
          : 'fa'
    );

    closeMenu();

  };


  /* =====================================================
     RENDER
  ===================================================== */

  return (

    <div
      className={
        `site ${
          isFa
            ? 'is-fa'
            : 'is-en'
        }`
      }
    >


      {/* =========================
          NAV
      ========================= */}

      <header
        className={
          `nav ${
            scrolled
              ? 'nav-scrolled'
              : ''
          }`
        }
      >

        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
        >
          KIANAZ<span>.</span>
        </a>


        <div className="nav-right">

          <nav
            className={
              `nav-links ${
                menuOpen
                  ? 'open'
                  : ''
              }`
            }
          >

            <a
              href="#work"
              onClick={closeMenu}
            >
              {t.nav.work}
            </a>


            <a
              href="#about"
              onClick={closeMenu}
            >
              {t.nav.about}
            </a>


            <a
              href="#contact"
              onClick={closeMenu}
            >
              {t.nav.contact}
            </a>

          </nav>


          <button
            className="lang-switch"
            onClick={switchLang}
            aria-label="Switch language"
          >

            <span
              className={
                isFa
                  ? 'active'
                  : ''
              }
            >
              FA
            </span>

            <i>/</i>

            <span
              className={
                !isFa
                  ? 'active'
                  : ''
              }
            >
              EN
            </span>

          </button>

        </div>


        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >

          {
            menuOpen
              ? <X size={22} />
              : <Menu size={22} />
          }

        </button>

      </header>


      <main id="top">


        {/* =========================
            HERO
        ========================= */}

        <section className="hero">

          <div className="hero-copy">

            <div className="eyebrow">

              <span />

              {t.hero.eyebrow}

            </div>


            <h1>

              {t.hero.title}

              <em>
                {t.hero.titleAccent}
              </em>

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

                <ArrowUpRight
                  size={17}
                />

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


          {/* =========================
              HERO VISUAL
          ========================= */}

          <div
            className="hero-visual-wrap"
            onMouseMove={moveVisual}
            onMouseLeave={resetVisual}
          >

            <div
              className="hero-visual"
              style={{
                '--mx':
                  `${mouse.x * 10}px`,
                '--my':
                  `${mouse.y * 10}px`
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

                  <span />

                  ACTIVE

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

            <ArrowDown
              size={15}
            />

            {t.hero.scroll}

          </a>

        </section>


        {/* =========================
            INTRO
        ========================= */}

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


        {/* =========================
            PROJECTS
        ========================= */}

        <section
          className="projects-section"
          id="work"
        >

          {t.projects.map(
            (project) => (

              <a
                className={
                  `project project-${project.tone}`
                }

                href={project.link}

                key={project.number}

                target={
                  project.link !== '#'
                    ? '_blank'
                    : undefined
                }

                rel={
                  project.link !== '#'
                    ? 'noopener noreferrer'
                    : undefined
                }
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

                      {project.tags.map(
                        tag => (

                          <span
                            key={tag}
                          >
                            {tag}
                          </span>

                        )
                      )}

                    </div>


                    <span className="project-arrow">

                      <ArrowUpRight
                        size={22}
                      />

                    </span>

                  </div>

                </div>

              </a>

            )
          )}

        </section>


        {/* =========================
            SERVICES
        ========================= */}

        <section
          className="services-section"
          id="about"
        >

          <div className="section-kicker">
            {t.services.kicker}
          </div>


          <div className="services-grid">

            {t.services.items.map(
              ([num, title, text]) => (

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

              )
            )}

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

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


        {/* =========================
            CONTACT
        ========================= */}

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


          {/* EMAIL */}

          <a
            className="contact-email"
            href={`mailto:${links.email}`}
          >

            <Mail size={22} />

            {links.email}

            <ArrowUpRight
              size={25}
            />

          </a>


          {/* PHONE */}

          <a
            className="contact-email"
            href={`tel:${links.phone}`}
          >

            <Phone size={22} />

            {links.phone}

            <ArrowUpRight
              size={25}
            />

          </a>


          <div className="socials">


            <a
              href={links.linkedin}
              aria-label="LinkedIn"
            >

              <Linkedin
                size={18}
              />

              {t.contact.linkedin}

            </a>


            <a
              href={links.github}
              aria-label="GitHub"
            >

              <Github
                size={18}
              />

              {t.contact.github}

            </a>


            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
            >

              <Mail
                size={18}
              />

              {t.contact.emailLabel}

            </a>


            <a
              href={`tel:${links.phone}`}
              aria-label="Phone"
            >

              <Phone
                size={18}
              />

              {t.contact.phoneLabel}

            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

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
).render(
  <App />
);
