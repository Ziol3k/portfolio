import type { Project } from '../data/projects';
import { MosaicDemo } from '../features/mosaic/MosaicDemo';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

import './ProjectDetails.css';

interface ProjectDetailsProps {
  project: Project;
  language: Language;
  onClose: () => void;
}

const copy = {
  pl: {
    eyebrow: 'WYBRANY PROJEKT',
    back: 'Wróć do projektów',
    about: 'O projekcie',
    technologies: 'Wykorzystane technologie',
    source: 'Zobacz kod źródłowy ↗',
    how: 'Jak działa generator?',
    steps: [
      {
        number: '01',
        title: 'Wybierz zdjęcie',
        description:
          'Prześlij własny obraz JPG lub PNG do generatora.',
      },
      {
        number: '02',
        title: 'Przetwarzanie C++',
        description:
          'API uruchamia oryginalny algorytm C++ wykorzystujący OpenCV.',
      },
      {
        number: '03',
        title: 'Pobierz mozaikę',
        description:
          'Zobacz wygenerowany obraz i pobierz wynik w formacie PNG.',
      },
    ],
    coming: 'Interaktywne demo w przygotowaniu',
    comingDescription:
      'Tutaj pojawi się możliwość przetestowania projektu. Już teraz możesz zapoznać się z jego opisem i technologiami.',
  },
  en: {
    eyebrow: 'SELECTED PROJECT',
    back: 'Back to projects',
    about: 'About the project',
    technologies: 'Technologies used',
    source: 'View source code ↗',
    how: 'How does the generator work?',
    steps: [
      {
        number: '01',
        title: 'Choose an image',
        description:
          'Upload your own JPG or PNG image to the generator.',
      },
      {
        number: '02',
        title: 'C++ processing',
        description:
          'The API runs the original C++ algorithm powered by OpenCV.',
      },
      {
        number: '03',
        title: 'Download the mosaic',
        description:
          'Preview the generated image and download the PNG result.',
      },
    ],
    coming: 'Interactive demo coming soon',
    comingDescription:
      'An interactive version will appear here. For now, you can explore the project description and technologies.',
  },
};

export function ProjectDetails({
  project,
  language,
  onClose,
}: ProjectDetailsProps) {
  const t = copy[language];
  const category =
    translations[language].projectsUi.filters[project.category];

  const isMosaic = project.id === 'mosaic-generator';

  return (
    <section
      id="project-details"
      className="project-details"
      aria-labelledby="project-details-title"
    >
      <div className="project-details__top">
        <span className="project-details__eyebrow">
          ✳ {t.eyebrow} / {category}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="project-details__close"
        >
          <span aria-hidden="true">←</span>
          {t.back}
        </button>
      </div>

      <div className="project-details__hero">
        <div className="project-details__intro">
          <h2 id="project-details-title">
            {project.title[language]}
          </h2>

          <p className="project-details__lead">
            {project.description[language]}
          </p>

          <div className="project-details__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-details__github"
            >
              {t.source}
            </a>
          )}
        </div>

        <div
          className={[
            'project-details__cover',
            `project-details__cover--${project.theme}`,
          ].join(' ')}
          aria-hidden="true"
        >
          <span>{project.symbol}</span>
        </div>
      </div>

      <div className="project-details__about">
        <div>
          <span className="project-details__eyebrow">
            01 / {t.about}
          </span>

          <h3>{t.about}</h3>
        </div>

        <div>
          <p>{project.description[language]}</p>

          <h4>{t.technologies}</h4>

          <div className="project-details__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {isMosaic ? (
        <>
          <div className="project-details__workflow">
            <span className="project-details__eyebrow">
              02 / {t.how}
            </span>

            <h3>{t.how}</h3>

            <div className="project-details__steps">
              {t.steps.map((step) => (
                <div
                  key={step.number}
                  className="project-details__step"
                >
                  <strong>{step.number}</strong>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <MosaicDemo language={language} />
        </>
      ) : (
        <div className="project-details__coming">
          <span aria-hidden="true">✳</span>
          <h3>{t.coming}</h3>
          <p>{t.comingDescription}</p>
        </div>
      )}

      <div className="project-details__bottom">
        <button
          type="button"
          onClick={onClose}
          className="project-details__close"
        >
          ← {t.back}
        </button>
      </div>
    </section>
  );
}
