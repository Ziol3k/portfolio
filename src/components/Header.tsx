import { profile } from '../data/profile';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Header({
  language,
  onLanguageChange,
}: HeaderProps) {
  const t = translations[language];

  return (
    <header className="header">
      <a href="#home" className="header-logo">
        {profile.fullName}
        <span></span>
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="#projects">{t.nav.projects}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <div className="language-switcher">
        <button
          type="button"
          className={language === 'pl' ? 'active' : ''}
          onClick={() => onLanguageChange('pl')}
          aria-pressed={language === 'pl'}
        >
          PL
        </button>

        <span>/</span>

        <button
          type="button"
          className={language === 'en' ? 'active' : ''}
          onClick={() => onLanguageChange('en')}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </header>
  );
}
