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
        graphics: 'Grafika',
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


    mosaic: {
      eyebrow: 'INTERAKTYWNY PROJEKT / C++ + OPENCV',
      title: 'Twoje zdjęcie. Moja mozaika.',
      description:
        'Wgraj fotografię i zobacz, jak mój algorytm C++ przekształca ją w mozaikę z półprzezroczystych okręgów.',
      upload: 'Wybierz zdjęcie',
      generate: 'Generuj mozaikę',
      generating: 'Trwa przetwarzanie...',
      original: 'Oryginał',
      result: 'Wynik',
      empty: 'Tutaj pojawi się wygenerowana mozaika.',
      download: 'Pobierz PNG',
      invalidFile: 'Wybierz plik JPG lub PNG.',
      tooLarge: 'Plik nie może przekraczać 8 MB.',
      error: 'Nie udało się wygenerować mozaiki.',
      imageAlt: 'Wygenerowana mozaika',
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
        graphics: 'Graphics',
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


    mosaic: {
      eyebrow: 'INTERACTIVE PROJECT / C++ + OPENCV',
      title: 'Your photo. My mosaic.',
      description:
        'Upload a photo and see how my C++ algorithm transforms it into a mosaic made of translucent circles.',
      upload: 'Choose an image',
      generate: 'Generate mosaic',
      generating: 'Processing...',
      original: 'Original',
      result: 'Result',
      empty: 'Your generated mosaic will appear here.',
      download: 'Download PNG',
      invalidFile: 'Choose a JPG or PNG image.',
      tooLarge: 'The file must not exceed 8 MB.',
      error: 'Failed to generate the mosaic.',
      imageAlt: 'Generated mosaic',
    },


    footer: 'Find more of my code on GitHub.',
  },
};
