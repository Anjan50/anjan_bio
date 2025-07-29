import { portfolioData } from '@/data/portfolioData';
import { FiMapPin, FiCalendar, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Professional Experience
          </h1>
          <div className="w-16 h-0.5 bg-foreground/20"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative bg-foreground/5 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              {/* Company and Role */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <FiBriefcase className="w-4 h-4 text-black" />
                  <h2 className="text-lg font-bold text-foreground">
                    {exp.company}
                  </h2>
                </div>
                <h3 className="text-base font-semibold text-foreground/80">
                  {exp.role}
                </h3>
              </div>

              {/* Duration and Location */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-foreground/70">
                  <FiCalendar className="w-4 h-4 mr-2 text-black" />
                  <span className="text-base">{exp.duration}</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <FiMapPin className="w-4 h-4 mr-2 text-black" />
                  <span className="text-base">{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  Key Contributions:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start text-sm text-foreground/70 text-justify">
                      <span className="mr-2 mt-1 text-foreground/50">•</span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="max-w-4xl">
          <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Professional Journey
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              My professional path has been a continuous evolution from academic research to industry applications. 
              Each role has contributed to my understanding of scalable systems, user experience, and the delicate 
              balance between innovation and reliability. I approach each challenge as an opportunity to weave 
              technology into meaningful solutions that serve both users and business objectives.
            </p>
          </div>
        </div>

        {/* Next Page Link */}
        <div className="flex justify-end pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Projects</span>
            <FiArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}