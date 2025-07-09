
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import { sectionsData } from './constants';
import type { SectionId, SectionData } from './types';

const App: React.FC = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('abstract');
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsNavSticky(window.scrollY > navRef.current.offsetTop);
      }

      let currentSection: SectionId = sectionsData[0].id;
      for (const section of sectionsData) {
        const element = sectionRefs.current[section.id];
        if (element && window.scrollY >= element.offsetTop - 150) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderSectionContent = (section: SectionData) => {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {section.content && (
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            {section.content.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
                {section.figures && section.figures[index] && (
                  <figure className="text-center my-8">
                    <img
                      src={section.figures[index].src}
                      alt={section.figures[index].caption}
                      className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-md border "
                    />
                    <figcaption className="mt-4 text-sm text-gray-600 italic">
                      {section.figures[index].caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        )}

        {/* {section.figures && (
          <div className="space-y-12 pt-4">
            {section.figures.map((figure, index) => (
              <figure key={index} className="text-center">
                <img src={figure.src} alt={figure.caption} className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-md border" />
                <figcaption className="mt-4 text-sm text-gray-600 italic">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
        )} */}

        {section.table && (
          <figure className="max-w-full mx-auto">
            <div className="overflow-x-auto shadow-md rounded-lg border">
              <table className="min-w-full border-collapse text-sm text-center">
                <thead className="bg-gray-100">
                  {section.table.headers.map((headerRow, rowIndex) => (
                    <tr key={rowIndex}>
                      {headerRow.map((cell, cellIndex) => {
                        if (typeof cell === 'object' && cell !== null) {
                          return (
                            <th
                              key={cellIndex}
                              colSpan={cell.colSpan}
                              rowSpan={cell.rowSpan}
                              className="border-b border-gray-300 px-4 py-3 font-medium text-gray-700"
                            >
                              {cell.content}
                            </th>
                          );
                        }
                        return (
                          <th
                            key={cellIndex}
                            className="border-b border-gray-300 px-4 py-3 font-medium text-gray-700"
                          >
                            {cell}
                          </th>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white">
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 border-b last:border-b-0 border-gray-200">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-4 py-3 ${cellIndex === 0 ? 'text-left font-medium text-gray-800' : 'text-gray-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <figcaption className="mt-4 text-sm text-gray-600 italic text-center">{section.table.caption}</figcaption>
          </figure>
        )}

        {section.references && (
           <div className="space-y-4 text-gray-700 leading-relaxed">
             <ul className="list-outside list-disc pl-5 space-y-3">
              {section.references.map((ref) => (
                <li key={ref.id} dangerouslySetInnerHTML={{ __html: ref.html }} />
              ))}
             </ul>
           </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        <div ref={navRef} className="py-6">
          <Navigation 
            sections={sectionsData} 
            isSticky={isNavSticky}
            activeSection={activeSection}
          />
        </div>

        <div className="space-y-24">
          {sectionsData.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
            >
              {renderSectionContent(section)}
            </Section>
          ))}
        </div>
      </main>

      <footer className="text-center py-12 text-gray-500">
        <p>&copy; 2024 FAST NUCES. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
