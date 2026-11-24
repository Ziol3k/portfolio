import { profile } from '../data/profile';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="status-dot" />
          {t.eyebrow}
        </div>

        <h1 className="hero-title">
          {t.titleFirst}
          <br />
          <span>{t.titleSecond}</span>
        </h1>

        <p className="hero-description">
          {t.description}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            {t.projectsButton}
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            {t.githubButton}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="portrait-card">
        <div className="portrait-image">
          {profile.photoUrl ? (
            <img
              src={profile.photoUrl}
              alt={profile.fullName}
            />
          ) : (
            <div className="portrait-placeholder">
              <span className="placeholder-symbol">✳</span>
              <p>{t.photoPlaceholder}</p>
            </div>
          )}
        </div>

        <div className="portrait-info">
          <div>
            <span className="portrait-label">
              {t.photoLabel}
            </span>
            <strong>{profile.fullName}</strong>
          </div>

          <span className="portrait-star">✦</span>
        </div>
      </div>
    </section>
  );
}
