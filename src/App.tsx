import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { profile } from './data/profile';
import { translations } from './i18n/translations';
import type { Language } from './i18n/translations';

import './App.css';

function App() {
  const [language, setLanguage] =
    useState<Language>('pl');

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="app">
      <div className="container">
        <Header
          language={language}
          onLanguageChange={setLanguage}
        />

        <main>
          <Hero language={language} />

          <Projects language={language} />

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
