import { useEffect, useRef, useState } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectDetails } from './components/ProjectDetails';

import { projects } from './data/projects';
import { profile } from './data/profile';
import { translations } from './i18n/translations';
import type { Language } from './i18n/translations';

import './App.css';

function App() {
  const [language, setLanguage] = useState<Language>('pl');
  const [selectedProjectId, setSelectedProjectId] =
    useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!selectedProjectId) return;

    const frame = requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedProjectId]);

  function handleSelectProject(projectId: string) {
    if (projectId === selectedProjectId) {
      detailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    setSelectedProjectId(projectId);
  }

  function handleCloseDetails() {
    setSelectedProjectId(null);

    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  return (
    <div className="app">
      <div className="container">
        <Header
          language={language}
          onLanguageChange={setLanguage}
        />

        <main>
          <Hero language={language} />

          <Projects
            language={language}
            selectedProjectId={selectedProjectId}
            onSelectProject={handleSelectProject}
          />

          {selectedProject && (
            <div ref={detailsRef} className="project-details-anchor">
              <ProjectDetails
                key={selectedProject.id}
                project={selectedProject}
                language={language}
                onClose={handleCloseDetails}
              />
            </div>
          )}

          <section id="about" className="content-section">
            <p className="section-eyebrow">
              {t.sections.aboutLabel}
            </p>

            <h2>{t.sections.aboutTitle}</h2>

            <p>{t.sections.aboutDescription}</p>
          </section>
        </main>

        <footer id="contact" className="footer">
          <p>{t.footer}</p>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
