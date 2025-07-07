
import React, { forwardRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className="py-12 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
