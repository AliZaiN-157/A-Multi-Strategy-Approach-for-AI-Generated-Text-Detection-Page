
import React from 'react';
import type { SectionData, SectionId } from '../types';

interface NavigationProps {
  sections: Pick<SectionData, 'id' | 'title'>[];
  isSticky: boolean;
  activeSection: SectionId;
}

const Navigation: React.FC<NavigationProps> = ({ sections, isSticky, activeSection }) => {
  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust for sticky nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navClasses = `
    transition-all duration-300 ease-in-out z-50
    ${isSticky ? 'fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-md' : 'relative bg-transparent'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-2 md:space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-900'
                  }
                `}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
