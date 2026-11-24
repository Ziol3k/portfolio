import { useState } from 'react';

import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

interface ProjectsProps {
  language: Language;
}

type ProjectFilter = 'all' | ProjectCategory;

const filters: ProjectFilter[] = [
  'all',
  'game',
  'graphics',
  'web',
  'research',
];

export function Projects({ language }: ProjectsProps) {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>('all');

  const t = translations[language];
  const ui = t.projectsUi;

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const filtered = activeFilter !== 'all';

  return (
    <section id="projects" className="projects-showcase">
      <div className="projects-heading">
        <div>
          <p className="section-eyebrow">
            {t.sections.projectsLabel}
          </p>

          <h2>{t.sections.projectsTitle}</h2>

          <p className="projects-description">
            {t.sections.projectsDescription}
          </p>
        </div>

        <span className="projects-total">
          {String(projects.length).padStart(2, '0')} / PROJECTS
        </span>
      </div>

      <div className="projects-toolbar">
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={
                activeFilter === filter ? 'active' : ''
              }
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {ui.filters[filter]}
            </button>
          ))}
        </div>

        <span className="projects-visible-count">
          {ui.count}: {visibleProjects.length}
        </span>
      </div>

      <div
        className={[
          'projects-gallery',
          filtered ? 'projects-gallery--filtered' : '',
          visibleProjects.length === 1
            ? 'projects-gallery--single'
            : '',
        ].join(' ')}
      >
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className={[
              'project-tile',
              `project-tile--${project.theme}`,
              `project-tile--${project.layout}`,
            ].join(' ')}
          >
            <div className="project-tile__top">
              <span>
                {String(index + 1).padStart(2, '0')}
                {' / '}
                {ui.filters[project.category]}
              </span>

              <span className="project-tile__badge">
                {ui.placeholder}
              </span>
            </div>

            <div
              className="project-tile__art"
              aria-hidden="true"
            >
              <span className="project-tile__symbol">
                {project.symbol}
              </span>
            </div>

            <div className="project-tile__content">
              <h3>{project.title[language]}</h3>

              <p>{project.description[language]}</p>

              <div className="project-tile__tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-tile__footer">
                {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target={
                    project.demoUrl.startsWith('#')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    project.demoUrl.startsWith('#')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                >
                  {ui.openDemo} ↗
                </a>

                ) : (
                  <span>
                    {project.category === 'research'
                      ? ui.detailsSoon
                      : ui.demoSoon}
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ui.sourceCode} ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
