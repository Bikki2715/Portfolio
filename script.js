const portfolioData = {
  skills: [
    {
      title: 'SQL & Databases',
      icon: 'database',
      items: ['SQL', 'Database Design', 'Relational Databases', 'Normalization', 'Stored Procedures', 'CTAS']
    },
    {
      title: 'Python & Data Analysis',
      icon: 'code',
      items: ['Python', 'Data Cleaning', 'Exploratory Analysis', 'Pandas', 'Statistics', 'Data Wrangling']
    },
    {
      title: 'Data Visualization & BI',
      icon: 'chart',
      items: ['Power BI', 'Dashboards', 'Data Visualization', 'DAX', 'Power Query', 'Business Reporting']
    },
    {
      title: 'Excel',
      icon: 'sheet',
      items: ['Excel', 'Pivot Tables', 'Data Analysis', 'Reporting', 'Data Summarization', 'Spreadsheet Modeling']
    },
    {
      title: 'Analytics & Statistics',
      icon: 'stats',
      items: ['Trend Analysis', 'Pattern Recognition', 'Descriptive Statistics', 'Insight Generation', 'Decision Support', 'Analytical Thinking']
    },
    {
      title: 'ETL & Data Modeling',
      icon: 'transform',
      items: ['ETL', 'Data Modeling', 'Data Transformation', 'Data Integration', 'Structured Data', 'Summary Tables']
    },
    {
      title: 'Soft Skills',
      icon: 'people',
      items: ['Communication', 'Problem Solving', 'Team Collaboration', 'Documentation', 'Critical Thinking', 'Attention to Detail']
    }
  ],

  projects: [
    {
      title: 'BlinkIT Grocery Sales Data Analysis Dashboard',
      tags: ['Power BI', '8,500+ records', 'Power Query', 'DAX'],
      description: 'A business intelligence dashboard focused on sales, outlet, and product performance analysis for grocery retail data.',
      highlights: [
        'Sales, outlet, and product analysis using Power BI',
        'Data preparation using Power Query and DAX',
        'Analysis carried out across 8,500+ records'
      ],
      github: 'https://github.com/Bikki2715/blinkit_grocery_dashboard/blob/main/Blinkit%20Analysis.pptx'
    },
    {
      title: 'Netflix Movies & TV Shows Data Analysis',
      tags: ['SQL', '8,000+ titles', '16+ queries'],
      description: 'An SQL-based analysis of Netflix titles to explore market patterns across genres, release trends, country coverage, and ratings.',
      highlights: [
        'SQL analysis of 8,000+ titles',
        '16+ SQL queries covering key business dimensions',
        'Genre, rating, country, and release-trend insight generation'
      ],
      github: 'https://github.com/Bikki2715/netflix_analysis'
    },
    {
      title: 'Retail Sales Analysis SQL Project',
      tags: ['SQL', 'Retail Analytics', 'EDA', 'Business Insights'],
      description: 'A beginner-focused retail sales analysis project using SQL to clean sales data, explore customer trends, and answer business questions from transactional records.',
      highlights: [
        'Database setup and data cleaning for retail transactions',
        'Exploratory analysis of sales, categories, and customer behavior',
        'SQL queries for revenue trends, product patterns, and transaction insights'
      ],
      github: 'https://github.com/Bikki2715/sql_sales_p1'
    },
    {
      title: 'Smart Banking Management System',
      tags: ['Python', 'Flask', 'PostgreSQL', 'Web App'],
      description: 'A full-stack banking management application with customer and admin workflows for account operations, transaction handling, dashboards, and secure access control.',
      highlights: [
        'Customer features including login, deposits, transfers, and statements',
        'Admin dashboard for customer tracking, banking summaries, and system health',
        'Secure user authentication with PostgreSQL-backed transaction management'
      ],
      github: 'https://github.com/Bikki2715/Smart-Banking-Management-System'
    },
    {
      title: 'Library Management System',
      tags: ['SQL Database Design', '5+ tables', 'CRUD', 'Stored Procedures'],
      description: 'A normalized relational database for managing library records, circulation, and summary reporting with stored procedures and CRUD operations.',
      highlights: [
        'Normalized relational database design',
        '5+ tables for reliable library data organization',
        'CRUD operations and CTAS summary table support'
      ],
      github: 'https://github.com/Bikki2715/LIBRARY_DB'
    }
  ],

  certifications: [
    {
      title: 'Juno Certificate',
      detail: 'Power BI with Copilot completion',
      file: './Certificates/DATA%20ANALYSIS%20IN%20POWERBI%20WITH%20COPILOT.jpeg',
      theme: 'juno'
    },
    {
      title: 'Excelerate Internship',
      detail: 'Data Analyst certificate',
      file: './Certificates/dataanalyst%20certificate%20at%20excelerate.pdf',
      theme: 'default'
    },
    {
      title: 'Data Valley AI Automation',
      detail: 'AI automation and agent engineering certificate',
      file: './Certificates/DATAVALLEY%20AI%20AUTOMATION%20AND%20AGENT%20ENGINEERING.pdf',
      theme: 'default'
    },
    {
      title: 'EDA Workshop',
      detail: 'StepCone 2026 workshop participation',
      file: './Certificates/STEP%20CONE%202026%20EDA%20WORKSHOP.jpeg',
      theme: 'event'
    },
    {
      title: 'CodeSpark India 2025',
      detail: 'Participation certificate',
      file: './Certificates/CodeSpark_India_2025.jpeg',
      theme: 'codespark'
    },
    {
      title: 'Power BI Workshop',
      detail: 'Certificate of completion',
      file: './Certificates/POWERBI%20WORKSHOP.jpeg',
      theme: 'powerbi'
    },
    {
      title: 'StepCone 2026 Vibe with Data',
      detail: 'Event participation certificate',
      file: './Certificates/STEP%20CONE%202026%20VIBE%20WITH%20DATA.jpeg',
      theme: 'default'
    }
  ]
};

function getSkillIcon(type) {
  const icons = {
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 4-4 16"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V9"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20v-11"/></svg>',
    sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h8l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M15 4v5h5"/><path d="M8 12h8M8 16h8"/></svg>',
    stats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18"/><path d="M7 14l3-3 3 2 5-7"/><path d="M16 6h5v5"/></svg>',
    transform: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7h8v10H8z"/><path d="M4 12h4M16 12h4M12 4v4M12 16v4"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M4 18c1.2-2.4 3.2-3.6 5-3.6s3.8 1.2 5 3.6"/><path d="M17 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm3 9c-.7-1.6-2.2-2.7-4-2.7"/></svg>'
  };

  return icons[type] || icons.database;
}

const skillsContainer = document.getElementById('skillsContainer');
if (skillsContainer) {
  skillsContainer.innerHTML = portfolioData.skills.map((skill) => `
    <div class="skill-group reveal">
      <h4>
        <span class="skill-icon">${getSkillIcon(skill.icon)}</span>
        ${skill.title}
      </h4>
      <div class="skill-list">
        ${skill.items.map((item) => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

const projectsContainer = document.getElementById('projectsContainer');
if (projectsContainer) {
  projectsContainer.innerHTML = portfolioData.projects.map((project) => `
    <article class="card project-card reveal">
      <div class="project-top">
        <h4>${project.title}</h4>
        <div class="techs">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <p>${project.description}</p>
      <ul>
        ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="project-actions">
        ${project.github ? `<a class="github-button" href="${project.github}" target="_blank" rel="noreferrer">Link</a>` : ''}
      </div>
    </article>
  `).join('');
}

const certificationsContainer = document.getElementById('certificationsContainer');
if (certificationsContainer) {
  certificationsContainer.innerHTML = portfolioData.certifications.map((cert) => `
    <article class="card cert-card reveal ${cert.theme || 'default'}">
      ${cert.theme === 'event' ? `
        <div class="event-preview" aria-hidden="true">
          <div class="event-topline">EDA WORKSHOP</div>
          <div class="event-paper">
            <span>Participation</span>
            <strong>Certificate</strong>
          </div>
        </div>
      ` : cert.theme === 'juno' ? `
        <div class="juno-preview" aria-hidden="true">
          <div class="juno-brand">JUNO</div>
          <div class="juno-line"></div>
          <div class="juno-title-block">
            <div class="juno-title">CERTIFICATE</div>
            <div class="juno-subtitle">OF COMPLETION</div>
          </div>
          <div class="juno-person">Bikki Dhanalakshmi</div>
          <div class="juno-course">Data Analysis in Power BI with Co-pilot</div>
          <div class="juno-signature">Tarun Matta</div>
          <div class="juno-role">Founder</div>
        </div>
      ` : cert.theme === 'codespark' ? `
        <div class="codespark-preview" aria-hidden="true">
          <img class="cert-image" src="./Certificates/CodeSpark_India_2025.jpeg" alt="CodeSpark India 2025 certificate" />
        </div>
      ` : cert.theme === 'powerbi' ? `
        <div class="powerbi-preview" aria-hidden="true">
          <div class="powerbi-title">PowerBI<br>Workshop</div>
          <div class="powerbi-badge">
            <div class="powerbi-icon">BI</div>
            <div class="powerbi-verified">Verified</div>
          </div>
          <div class="powerbi-date">March 16th, 2025<br>Issued on:</div>
        </div>
      ` : `
        <div class="cert-thumb" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 3.5h7l5 5V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z"/>
            <path d="M14 3.5v5h5"/>
            <path d="M8 13h8M8 17h8"/>
          </svg>
        </div>
      `}
      <h4>${cert.title}</h4>
      <p class="light-text">${cert.detail}</p>
      <a class="cert-button" href="${cert.file}" target="_blank" rel="noopener noreferrer">View certificate</a>
    </article>
  `).join('');

  document.querySelectorAll('.cert-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const certUrl = button.getAttribute('href');
      if (!certUrl) return;
      event.preventDefault();
      window.open(certUrl, '_blank', 'noopener,noreferrer');
    });
  });
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.topbar');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.getElementById('contactForm');
const successNote = document.getElementById('successNote');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${fullName || 'Potential Recruiter'}`);
    const body = encodeURIComponent(
      `Name: ${fullName || 'Not provided'}\nEmail: ${emailAddress || 'Not provided'}\n\nMessage:\n${message || 'No message provided.'}`
    );
    const cc = emailAddress ? `&cc=${encodeURIComponent(emailAddress)}` : '';

    if (successNote) {
      successNote.classList.add('visible');
    }

    window.location.href = `mailto:dhanalakshmibikki475@gmail.com?subject=${subject}&body=${body}${cc}`;
    contactForm.reset();
  });
}

const downloadResumeBtn = document.getElementById('downloadResumeBtn');
if (downloadResumeBtn) {
  downloadResumeBtn.addEventListener('click', () => {
    const resumeUrl = './Bikki Dhanalakshmi_Data Analyst.docx';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bikki_Dhanalakshmi_Data_Analyst.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});
