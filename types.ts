export interface NavItem {
  label: string;
  href: string;
}

export interface UniverseItem {
  title: string;
  description: string;
  type: 'concept' | 'character';
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'brain' | 'cpu' | 'bot';
  features: string[];
}

export interface TrainingPackage {
  title: string;
  target: string;
  description: string;
  includes: string[];
}

export interface ArchiveItem {
  id: number;
  title: string;
  type: 'image' | 'text';
  src?: string;
  content?: string;
}