
import React from 'react';
import type { ComparisonItem } from '../types';
import VideoPlayer from './VideoPlayer';

interface ComparisonGridProps {
  items: ComparisonItem[];
  layout?: '2x3' | '1x3';
}

const ComparisonGrid: React.FC<ComparisonGridProps> = ({ items, layout = '1x3' }) => {
  const gridClasses = {
    '1x3': 'grid-cols-1 md:grid-cols-3 gap-4',
    '2x3': 'grid-cols-2 md:grid-cols-3 gap-4',
  };

  return (
    <div className={`grid ${gridClasses[layout]}`}>
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div className="absolute top-2 left-2 z-10 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded">
            {item.label}
          </div>
          {item.type === 'video' ? (
            <VideoPlayer src={item.src} />
          ) : (
            <img src={item.src} alt={item.label} className="w-full h-auto rounded-lg shadow-md" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ComparisonGrid;
