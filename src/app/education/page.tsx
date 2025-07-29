import { portfolioData } from '@/data/portfolioData';
import { FiMapPin, FiCalendar, FiAward, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Education() {
  const { education, skills } = portfolioData;

  const skillCategories = [
    { title: 'Languages', skills: skills.Languages },
    { title: 'Frontend Development', skills: skills['Frontend Development'] },
    { title: 'Backend & Cloud', skills: skills['Backend & Cloud'] },
    { title: 'Network & Infrastructure', skills: skills['Network & Infrastructure'] },
    { title: 'Data & Analytics', skills: skills['Data & Analytics'] },
    { title: 'DevOps & Tools', skills: skills['DevOps & Tools'] },
    { title: 'Security & Protocols', skills: skills['Security & Protocols'] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Education & Skills
          </h1>
          <div className="w-16 h-0.5 bg-foreground/20"></div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">
            Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                {/* School and Degree */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {edu.school}
                  </h3>
                  <h4 className="text-base font-semibold text-foreground/80">
                    {edu.degree}
                  </h4>
                </div>

                {/* Duration and Location */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-foreground/70">
                    <FiCalendar className="w-4 h-4 mr-2 text-black" />
                    <span className="text-base">{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <FiMapPin className="w-4 h-4 mr-2 text-black" />
                    <span className="text-base">{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center text-foreground/70">
                      <FiAward className="w-4 h-4 mr-2 text-black" />
                      <span className="text-base">{edu.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Course Tags */}
                <div className="mb-4">
                  <h5 className="text-base font-semibold text-foreground mb-2">
                    Key Courses:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {edu.courseTags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <div>
                    <h5 className="text-base font-semibold text-foreground mb-2">
                      Highlights:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">
            Skills & Technologies
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-foreground/5 rounded-lg p-4 border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-base font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl">
          <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Technical Philosophy
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              My technical journey spans from foundational programming languages to cutting-edge cloud technologies. 
              I believe in the harmony of full-stack development, where frontend artistry meets backend robustness, 
              all orchestrated through DevOps practices and cloud-native architectures. Each technology is a tool 
              in the grand symphony of digital creation.
            </p>
          </div>
        </div>

        {/* Next Page Link */}
        <div className="flex justify-end pt-8">
          <Link
            href="/experience"
            className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Experience</span>
            <FiArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}