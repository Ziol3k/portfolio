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

interface DetailCard {
  number: string;
  title: string;
  description: string;
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

const minigolfCopy = {
  pl: {
    featuresTitle: 'Co znajduje się w grze?',
    features: [
      {
        number: '01',
        title: 'Dwa poziomy',
        description:
          'Dwa tory o różnych wymiarach. Drugi poziom zawiera obracający się wiatrak, który utrudnia trafienie do dołka.',
      },
      {
        number: '02',
        title: 'Fizyka piłki',
        description:
          'Ruch piłki uwzględnia grawitację, tarcie, odbicia od ścian i kolizje z łopatkami wiatraka.',
      },
      {
        number: '03',
        title: 'Kamera i HUD',
        description:
          'Kamera śledząca piłkę, opcjonalna kamera swobodna oraz interfejs pokazujący liczbę uderzeń.',
      },
    ],
    controlsTitle: 'Jak sterować?',
    controls: [
      {
        number: '01',
        title: 'Mysz',
        description:
          'Ruch myszą obraca kierunek celowania. Przytrzymaj lewy przycisk i przeciągnij w górę, aby zwiększyć siłę. Puść przycisk, żeby uderzyć.',
      },
      {
        number: '02',
        title: 'Strzałki ↑ / ↓',
        description:
          'Zmieniają kąt wybicia piłki, kiedy piłka jest zatrzymana.',
      },
      {
        number: '03',
        title: 'C oraz 1 / 2',
        description:
          'Klawisz C przełącza kamerę swobodną, a klawisze 1 i 2 umożliwiają wybór poziomu.',
      },
    ],
    statusTitle: 'Wersja przeglądarkowa w przygotowaniu',
    statusDescription:
      'Minigolf działa obecnie jako natywna aplikacja C++ z OpenSceneGraph. Badamy możliwość uruchomienia oryginalnego projektu w przeglądarce bez przepisywania gry na inny silnik.',
  },
  en: {
    featuresTitle: 'What is inside the game?',
    features: [
      {
        number: '01',
        title: 'Two levels',
        description:
          'Two courses with different dimensions. The second level includes a rotating windmill that makes reaching the hole more challenging.',
      },
      {
        number: '02',
        title: 'Ball physics',
        description:
          'Ball movement includes gravity, friction, wall bounces and collisions with the windmill blades.',
      },
      {
        number: '03',
        title: 'Camera and HUD',
        description:
          'A ball-following camera, an optional free camera and an interface that displays the stroke count.',
      },
    ],
    controlsTitle: 'How to play?',
    controls: [
      {
        number: '01',
        title: 'Mouse',
        description:
          'Move the mouse to aim. Hold the left button and drag upwards to increase power. Release the button to shoot.',
      },
      {
        number: '02',
        title: 'Arrow keys ↑ / ↓',
        description:
          'Adjust the launch angle while the ball is stopped.',
      },
      {
        number: '03',
        title: 'C and 1 / 2',
        description:
          'Press C to toggle the free camera, and use 1 or 2 to select a level.',
      },
    ],
    statusTitle: 'Browser version in development',
    statusDescription:
      'Minigolf currently runs as a native C++ application using OpenSceneGraph. We are exploring options to run the original project in a browser without rewriting the game in another engine.',
  },
};

function DetailCards({ cards }: { cards: DetailCard[] }) {
  return (
    <div className="project-details__steps">
      {cards.map((card) => (
        <div
          key={card.number}
          className="project-details__step"
        >
          <strong>{card.number}</strong>

          <h4>{card.title}</h4>

          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectDetails({
  project,
  language,
  onClose,
}: ProjectDetailsProps) {
  const t = copy[language];
  const minigolf = minigolfCopy[language];

  const category =
    translations[language].projectsUi.filters[project.category];

  const isMosaic = project.id === 'mosaic-generator';
  const isMinigolf = project.id === 'minigolf-3d';

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

            <DetailCards cards={t.steps} />
          </div>

          <MosaicDemo language={language} />
        </>
      ) : isMinigolf ? (
        <>
          <div className="project-details__workflow">
            <span className="project-details__eyebrow">
              02 / {minigolf.featuresTitle}
            </span>

            <h3>{minigolf.featuresTitle}</h3>

            <DetailCards cards={minigolf.features} />
          </div>

          <div className="project-details__workflow">
            <span className="project-details__eyebrow">
              03 / {minigolf.controlsTitle}
            </span>

            <h3>{minigolf.controlsTitle}</h3>

            <DetailCards cards={minigolf.controls} />
          </div>

          <div className="project-details__coming">
            <span aria-hidden="true">⛳</span>

            <h3>{minigolf.statusTitle}</h3>

            <p>{minigolf.statusDescription}</p>
          </div>
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
