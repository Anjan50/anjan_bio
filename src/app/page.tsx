import { portfolioData } from '@/data/portfolioData';
import { FiLinkedin, FiGithub, FiTwitter, FiCode, FiArrowRight, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  const { personalInfo } = portfolioData;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="space-y-6">
            {/* Name and Title */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {personalInfo.name}
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-foreground/80">
                Software Engineer
              </h2>
              <p className="text-base text-foreground/60">
                Seeking Full-time SDE Role
              </p>
            </div>

            {/* Location and Contact */}
            <div className="space-y-2">
              <Link
                href="https://maps.google.com/?q=Raleigh,NC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-base text-foreground/70 hover:text-foreground transition-colors"
              >
                <div className="w-6 h-4 bg-foreground/10 rounded flex items-center justify-center">
                  <FiMapPin className="w-3 h-3 text-black" />
                </div>
                <span>Raleigh, NC</span>
              </Link>
              <Link
                href="mailto:adiyora@ncsu.edu"
                className="flex items-center space-x-2 text-base text-foreground/70 hover:text-foreground transition-colors"
              >
                <div className="w-6 h-4 bg-foreground/10 rounded flex items-center justify-center">
                  <FiMail className="w-3 h-3 text-black" />
                </div>
                <span>adiyora@ncsu.edu</span>
              </Link>
              <Link
                href="tel:+19195274100"
                className="flex items-center space-x-2 text-base text-foreground/70 hover:text-foreground transition-colors"
              >
                <div className="w-6 h-4 bg-foreground/10 rounded flex items-center justify-center">
                  <FiPhone className="w-3 h-3 text-black" />
                </div>
                <span>(919) 527-4100</span>
              </Link>
            </div>

            {/* Professional Summary */}
            <div className="max-w-3xl">
              <p className="text-sm leading-relaxed text-foreground/80 text-justify">
                I am a Software Engineer with a Master&apos;s in Computer Science from NC State University, 
                specializing in full-stack development and cloud technologies. My expertise spans modern 
                web frameworks, cloud infrastructure, and scalable system design. I approach software 
                development as a craft that combines technical excellence with creative problem-solving, 
                always focused on delivering user-centric solutions that drive business value.
              </p>
              <Link
              href="/thoughts"
              className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            ><span><u>What I Think?</u></span>
              <FiArrowRight className="w-4 h-4 text-black" /></Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-6 bg-foreground/10 rounded flex items-center justify-center hover:bg-foreground/20 transition-colors"
              >
                <FiLinkedin className="w-4 h-4 text-black" />
              </Link>
              <Link
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-6 bg-foreground/10 rounded flex items-center justify-center hover:bg-foreground/20 transition-colors"
              >
                <FiGithub className="w-4 h-4 text-black" />
              </Link>
              <Link
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-6 bg-foreground/10 rounded flex items-center justify-center hover:bg-foreground/20 transition-colors"
              >
                <FiTwitter className="w-4 h-4 text-black" />
              </Link>
              <Link
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-6 bg-foreground/10 rounded flex items-center justify-center hover:bg-foreground/20 transition-colors"
              >
                <FiCode className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Core Technical Skills */}
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Core Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  Full-Stack Development
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  React & Node.js
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  Spring Boot
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  AWS Cloud Services
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  Microservices Architecture
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  DevOps & CI/CD
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  Agile Methodologies
                </span>
                <span className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70">
                  Database Design
                </span>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Professional Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.about.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-foreground/10 rounded text-xs text-foreground/70"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-8">
            {/* Section Divider */}
            <div>
              <div className="w-16 h-0.5 bg-foreground/20"></div>
            </div>

            {/* Technical Philosophy */}
            <div className="max-w-3xl bg-foreground/5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Technical Philosophy
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                I believe in writing clean, maintainable code that solves real problems. My approach combines 
                modern software engineering practices with a focus on user experience and business impact. 
                I value collaboration, continuous learning, and building systems that scale. Every line of 
                code should serve a purpose and contribute to creating meaningful solutions.
              </p>
            </div>

            {/* Personal Values */}
            <div className="max-w-3xl bg-foreground/5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Personal Values
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                My spiritual practice, following the Swaminarayan path, teaches me discipline, compassion, 
                and the importance of serving others. I maintain a vegetarian lifestyle without onion or garlic, 
                which helps me stay focused and clear-minded. These values guide my approach to teamwork, 
                problem-solving, and creating technology that benefits society.
              </p>
            </div>
          </div>

          {/* Next Page Link */}
          <div className="flex justify-end pt-8">
            <Link
              href="/education"
              className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <span>Education & Skills</span>
              <FiArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
