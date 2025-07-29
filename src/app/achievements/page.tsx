import { portfolioData } from '@/data/portfolioData';
import { FiAward, FiExternalLink, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import Link from 'next/link';

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Achievements & Certifications
          </h1>
          <div className="w-16 h-0.5 bg-foreground/20"></div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">
            Professional Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FiBookOpen className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-foreground/60 font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">
            Professional Achievements
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FiAward className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                      {achievement.text}
                    </p>
                    {achievement.link && (
                      <Link
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-sm text-foreground/60 hover:text-foreground transition-colors mt-3"
                      >
                        <FiExternalLink className="w-4 h-4 text-black" />
                        <span>View Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Summary */}
        <div className="max-w-4xl">
          <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Recognition & Learning Philosophy
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              These achievements and certifications represent milestones in my journey of continuous learning and growth. 
              Each recognition serves as a reminder that excellence is not a destination but a path of persistent effort, 
              curiosity, and the willingness to push beyond conventional boundaries. The Google certifications validate 
              my technical competencies while demonstrating adaptability to evolving technology landscapes.
            </p>
          </div>
        </div>

        {/* Next Page Link */}
        <div className="flex justify-end pt-8">
          <Link
            href="/thoughts"
            className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Know What I Think</span>
            <FiArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}