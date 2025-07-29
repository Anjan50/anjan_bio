import { portfolioData } from '@/data/portfolioData';
import { FiGithub, FiExternalLink, FiCode, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Projects() {
  const { projects } = portfolioData;

  const projectCategories = [
    { title: 'AI/ML', projects: projects['AI/ML'] },
    { title: 'Software', projects: projects.Software },
    { title: 'Network', projects: projects.Network },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Projects
          </h1>
          <div className="w-16 h-0.5 bg-foreground/20"></div>
        </div>

        {/* Project Categories */}
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h2 className="text-lg font-bold text-foreground">
              {category.title}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-colors"
                >
                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    {/* Project Title and Summary */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed text-justify">
                        {project.summary}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-foreground/70 text-justify">
                            <span className="mr-2 mt-1 text-foreground/50">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-2">
                        Challenges:
                      </h4>
                      <ul className="space-y-1">
                        {project.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start text-sm text-foreground/70 text-justify">
                            <span className="mr-2 mt-1 text-foreground/50">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3 pt-2">
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
                        >
                          <FiGithub className="w-4 h-4 text-black" />
                          <span>Code</span>
                        </Link>
                      )}
                      {project.demoLink && (
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4 text-black" />
                          <span>Demo</span>
                        </Link>
                      )}
                      {project.sourceCode && (
                        <Link
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-foreground/70 hover:text-foreground transition-colors"
                        >
                          <FiCode className="w-4 h-4 text-black" />
                          <span>Source</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Projects Summary */}
        <div className="max-w-4xl">
          <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Project Philosophy
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              Each project represents a unique exploration of technology&apos;s potential to solve real-world challenges. 
              From network protocols to blockchain applications, I approach development as a form of digital alchemy, 
              transforming ideas into functional systems that serve both technical excellence and human needs.
            </p>
          </div>
        </div>

        {/* Next Page Link */}
        <div className="flex justify-end pt-8">
          <Link
            href="/achievements"
            className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Achievements</span>
            <FiArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}