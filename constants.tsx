
import React from 'react';
import { PracticeArea, NavLink, Testimonial, BlogPost } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    icon: '⚖️',
    description: 'Strategic advisory for businesses of all sizes, from startups to multinationals.',
    fullContent: 'Our corporate law practice provides comprehensive legal support for business formation, governance, and restructuring. We navigate complex regulatory landscapes in Kenya to ensure your business remains compliant and competitive.',
    services: ['Business Incorporation', 'Mergers & Acquisitions', 'Governance Audits', 'Venture Capital Advisory']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Conveyancing',
    icon: '🏢',
    description: 'Expert guidance in property acquisition, leasing, and development in Nairobi.',
    fullContent: 'Navigating the Kenyan real estate market requires precision. We handle high-value property transactions, title processing, and construction agreements with meticulous attention to detail.',
    services: ['Property Transfers', 'Lease Agreements', 'Financing Documentation', 'Zoning & Compliance']
  },
  {
    id: 'litigation',
    title: 'Litigation & Dispute Resolution',
    icon: '🏛️',
    description: 'Robust representation in civil and commercial courts across Kenya.',
    fullContent: 'When disputes arise, MILELE offers tactical litigation services. We prioritize mediation and arbitration where possible but are prepared for vigorous advocacy in the High Court and appellate levels.',
    services: ['Commercial Disputes', 'Civil Litigation', 'Arbitration', 'Employment Disputes']
  },
  {
    id: 'family-law',
    title: 'Family & Succession Law',
    icon: '📜',
    description: 'Compassionate and professional legal support for personal matters.',
    fullContent: 'We provide discreet and authoritative counsel on matters involving estates, wills, probate, and matrimonial disputes, ensuring your family legacy is protected.',
    services: ['Estate Planning', 'Wills & Probate', 'Divorce & Custody', 'Adoption Law']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Samuel Okoth',
    position: 'CEO, Westlands Logistics',
    content: 'MILELE has been our primary legal counsel for five years. Their integrity and deep knowledge of Kenyan commercial law are unmatched.'
  },
  {
    name: 'Sarah Mwangi',
    position: 'Director, Urban Heights Dev',
    content: 'Their conveyancing team is efficient and precise. They managed our recent commercial project with extreme professionalism.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'New Compliance Requirements for Kenyan SMEs',
    excerpt: 'Stay updated on the recent changes in the Companies Act and how it affects your reporting...',
    fullContent: (
      <>
        <p>The landscape of corporate compliance in Kenya is evolving rapidly. With recent amendments to the Companies Act, SMEs now face a new tier of reporting requirements designed to increase transparency and accountability.</p>
        <h3 className="text-2xl font-serif text-navy mt-8 mb-4">Key Changes in the Companies Act</h3>
        <p>One of the most significant changes involves the mandatory disclosure of beneficial ownership. Companies must now maintain a comprehensive register of beneficial owners and file this information with the Registrar of Companies.</p>
        <p className="mt-4">Furthermore, financial reporting standards have been updated to align more closely with international best practices. SMEs meeting specific revenue thresholds are now required to undergo statutory audits and publish their financials within tighter deadlines.</p>
        <h3 className="text-2xl font-serif text-navy mt-8 mb-4">What This Means for Your Business</h3>
        <p>Failure to comply with these new regulations can lead to substantial fines, director liability, and even deregistration. It is imperative that SMEs review their current compliance frameworks and engage legal counsel to ensure all new requirements are met.</p>
      </>
    ),
    author: 'David Njoroge, Partner - Corporate Law',
    date: 'Oct 12, 2023',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Navigating Land Ownership in Nairobi',
    excerpt: 'A comprehensive guide to understanding the sectional properties act and title registration...',
    fullContent: (
      <>
        <p>Acquiring real estate in Nairobi remains a lucrative but complex undertaking. The introduction of the Sectional Properties Act has streamlined the ownership of apartments and office spaces, but navigating the transition process requires careful legal strategy.</p>
        <h3 className="text-2xl font-serif text-navy mt-8 mb-4">The Sectional Properties Act Explained</h3>
        <p>The Act mandates the conversion of long-term leases into sectional titles, providing unit owners with an independent title deed rather than a share in a management company. This creates stronger property rights and simplifies the transfer and mortgaging of specific units.</p>
        <h3 className="text-2xl font-serif text-navy mt-8 mb-4">Steps for Title Conversion</h3>
        <p>Developers and management companies must initiate the conversion process by submitting detailed architectural plans and existing lease documents to the Ministry of Lands. We advise unit owners to proactively engage their management boards to ensure this process is completed before the statutory deadlines.</p>
      </>
    ),
    author: 'Sarah Ochieng, Senior Associate - Real Estate',
    date: 'Sep 28, 2023',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  }
];
