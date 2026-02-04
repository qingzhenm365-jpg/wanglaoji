export interface TimelineNode {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  themeColor: string;
  details: NodeDetails;
  icon: string;
}

export interface NodeDetails {
  fullDescription: string;
  quote?: string;
  tags?: string[];
  features?: { title: string; desc: string; icon: string }[];
  location?: string;
  characters?: string[];
  items?: string[];
  theme?: string;
}

export type ViewState = 'timeline' | 'characters' | 'about';
