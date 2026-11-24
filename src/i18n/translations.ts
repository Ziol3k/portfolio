export type Language = 'pl' | 'en';

export const translations = {
  pl: {
    nav: {
      projects: 'Projekty',
      about: 'O mnie',
      contact: 'Kontakt',
    },


    projectsUi: {
    filters: {
        all: 'Wszystkie',
        game: 'Gry',
        web: 'Web',
        research: 'Akademickie',
    },
    placeholder: 'Wpis roboczy',
    demoSoon: 'Demo w przygotowaniu',
    detailsSoon: 'Opis w przygotowaniu',
    openDemo: 'Uruchom demo',
    sourceCode: 'Zobacz kod',
    count: 'Widocznych projektów',
    },


    hero: {
      eyebrow: 'CIEKAWOŚĆ JEST PUNKTEM WYJŚCIA',

      titleFirst:
        'Lubię rozumieć, jak rzeczy działają.',

      titleSecond:
        'A potem budować własne.',

      description:
        'Raz jest to grafika komputerowa, innym razem aplikacja lub temat badawczy. Różne narzędzia, wspólny mianownik: ciekawość i chęć sprawdzenia pomysłu w praktyce.',

      projectsButton:
        'Zobacz, nad czym pracowałem',

      githubButton: 'Mój GitHub',

      photoPlaceholder: 'Miejsce na moje zdjęcie',
      photoLabel: 'JAN ZIOŁO',
    },

    sections: {
      projectsLabel: '01 / MOJE PROJEKTY',

      projectsTitle: 'Ślady mojej ciekawości.',

      projectsDescription:
        'Gry, aplikacje i projekty badawcze. Każdy z nich to inny problem, inne narzędzia i coś nowego, czego nauczyłem się po drodze.',

      aboutLabel: '02 / O MNIE',

      aboutTitle:
        'Nie ograniczam się do jednej dziedziny.',

      aboutDescription:
        '',
    },

    footer: 'Więcej kodu znajdziesz na moim GitHubie.',
  },

  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },


    projectsUi: {
    filters: {
        all: 'All',
        game: 'Games',
        web: 'Web',
        research: 'Academic',
    },
    placeholder: 'Draft entry',
    demoSoon: 'Demo coming soon',
    detailsSoon: 'Details coming soon',
    openDemo: 'Launch demo',
    sourceCode: 'View source',
    count: 'Visible projects',
    },


    hero: {
      eyebrow: 'CURIOSITY COMES FIRST',

      titleFirst:
        'I like figuring out how things work.',

      titleSecond:
        'Then building my own.',

      description:
        'Sometimes it is computer graphics, sometimes an application or a research topic. Different tools, one common thread: curiosity and hands-on exploration.',

      projectsButton: 'See what I have built',

      githubButton: 'My GitHub',

      photoPlaceholder: 'My photo goes here',
      photoLabel: 'JAN ZIOŁO',
    },

    sections: {
      projectsLabel: '01 / SELECTED WORK',

      projectsTitle: 'A trail of curiosity.',

      projectsDescription:
        'Games, applications and research projects. Each one brings a different challenge, different tools and something new to learn.',

      aboutLabel: '02 / ABOUT ME',

      aboutTitle:
        'I don’t stick to a single field.',

      aboutDescription:
        '',
    },

    footer: 'Find more of my code on GitHub.',
  },
};
