import { portfolioData } from '@/data/portfolioData';
import { FiBookOpen, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Thoughts() {
  const { thoughts } = portfolioData;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {thoughts.title}
          </h1>
          <div className="w-16 h-0.5 bg-foreground/20"></div>
        </div>

        {/* Thoughts Sections */}
        <div className="space-y-6">
          {thoughts.sections.map((section, index) => (
            <div
              key={index}
              className="bg-foreground/5 rounded-lg p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FiBookOpen className="w-5 h-5 text-black" />
                <h2 className="text-lg font-bold text-foreground">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-3">
                {section.content.map((paragraph, paraIndex) => (
                  <p
                    key={paraIndex}
                    className="text-sm text-foreground/70 leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Thoughts Summary */}
        <div className="max-w-3xl">
          <div className="bg-foreground/5 rounded-lg p-6 border border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Reflection Philosophy
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              These thoughts represent my ongoing dialogue with technology, philosophy, and the human condition. 
              They are not static beliefs but evolving perspectives that grow with experience and contemplation. 
              In the intersection of code and consciousness, I find both questions and answers that shape my 
              approach to both technology and life.
            </p>
          </div>
        </div>

        {/* Home Page Link */}
        <div className="flex justify-end pt-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Home Page</span>
            <FiArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}