import type { Language } from '../i18n/translations';

export type ProjectCategory =
  | 'game'
  | 'web'
  | 'research'
  | 'graphics';

export interface Project {
  id: string;
  category: ProjectCategory;
  layout: 'wide' | 'narrow';
  theme: 'violet' | 'lime' | 'dark' | 'pink';
  symbol: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'cpp-game',
    category: 'game',
    layout: 'wide',
    theme: 'violet',
    symbol: '◈',
    title: {
      pl: 'Gra C++ / OpenGL',
      en: 'C++ / OpenGL Game',
    },
    description: {
      pl: 'Projekt gry wykorzystującej OpenGL. Wkrótce pojawią się informacje o mechanice, implementacji i możliwościach uruchomienia jej w przeglądarce.',
      en: 'A game built using OpenGL. Details about its mechanics, implementation and browser compatibility will be added later.',
    },
    technologies: ['C++', 'OpenGL'],
  },
  {
    id: 'csharp-game',
    category: 'game',
    layout: 'narrow',
    theme: 'lime',
    symbol: '✳',
    title: {
      pl: 'Gra desktopowa C#',
      en: 'C# Desktop Game',
    },
    description: {
      pl: 'Gra napisana w C# z wykorzystaniem technologii desktopowych. Docelowo chciałbym udostępnić także wersję interaktywną.',
      en: 'A game developed in C# using desktop technologies. An interactive version is planned for the future.',
    },
    technologies: ['C#', '.NET', 'Desktop'],
  },
  {
    id: 'master-thesis',
    category: 'research',
    layout: 'narrow',
    theme: 'dark',
    symbol: '⌘',
    title: {
      pl: 'Projekt magisterski',
      en: "Master's Thesis Project",
    },
    description: {
      pl: 'Projekt zrealizowany w ramach pracy magisterskiej. Tutaj opiszę jego cel, metodykę, zastosowane rozwiązania i rezultaty.',
      en: 'A project developed as part of my master’s thesis. Its goals, methodology, technical solutions and results will be presented here.',
    },
    technologies: ['Academic', 'Research'],
  },
  {
    id: 'web-project-1',
    category: 'web',
    layout: 'wide',
    theme: 'pink',
    symbol: '</>',
    title: {
      pl: 'Aplikacja webowa #1',
      en: 'Web Application #1',
    },
    description: {
      pl: 'Miejsce na jedną z moich aplikacji internetowych. Uzupełnię technologie, funkcjonalności i link do działającego projektu.',
      en: 'A placeholder for one of my web applications. Technologies, features and a live demo will be added later.',
    },
    technologies: ['Web', 'Frontend'],
  },
  {
    id: 'web-project-2',
    category: 'web',
    layout: 'wide',
    theme: 'violet',
    symbol: '{ }',
    title: {
      pl: 'Aplikacja webowa #2',
      en: 'Web Application #2',
    },
    description: {
      pl: 'Kolejny projekt internetowy. Tutaj pojawi się jego opis, architektura oraz możliwość przetestowania aplikacji.',
      en: 'Another web project. Its description, architecture and interactive demo will appear here.',
    },
    technologies: ['Web', 'Application'],
  },
  {
    id: 'mosaic-generator',
    category: 'graphics',
    layout: 'narrow',
    theme: 'pink',
    symbol: '◉',
    title: {
      pl: 'Generator mozaiki 2D',
      en: '2D Mosaic Generator',
    },
    description: {
      pl: 'Interaktywny generator mozaik napisany w C++ z wykorzystaniem OpenCV. Prześlij własne zdjęcie i zobacz, jak algorytm przekształca je w kompozycję z półprzezroczystych okręgów.',
      en: 'An interactive mosaic generator built with C++ and OpenCV. Upload your own photo and watch the algorithm transform it into a composition of translucent circles.',
    },
    technologies: [
      'C++',
      'OpenCV',
      'Image Processing',
      'Docker',
      'FastAPI',
    ],
    githubUrl:
      'https://github.com/Ziol3k/Zaawansowana-Grafika-Komputerowa',
    demoUrl: '#mosaic-demo',
  },
];
