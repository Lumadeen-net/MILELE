import React from 'react';

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent: string;
  services: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  position: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent?: React.ReactNode;
  author?: string;
  date: string;
  category: string;
  image: string;
}
