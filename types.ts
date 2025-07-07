
export type SectionId = 'abstract' | 'architectures' | 'results' | 'conclusion' | 'references';

export interface FigureData {
  src: string;
  caption: string;
}

export type TableHeaderCell = string | { content: string; colSpan?: number; rowSpan?: number };

export type TableRow = (string | number)[];

export interface TableData {
  headers: TableHeaderCell[][];
  rows: TableRow[];
  caption:string;
}

export interface ReferenceItem {
  id: string;
  html: string;
}

export interface ComparisonItem {
  label: string;
  type: 'video' | 'image';
  src: string;
}

export interface SectionData {
  id: SectionId;
  title: string;
  content?: string[];
  figures?: FigureData[];
  table?: TableData;
  references?: ReferenceItem[];
}
