export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'Delivered an impressive website with a clean design and smooth functionality. Demonstrated strong technical skills, creativity, and great attention to detail throughout the project.',
    author: 'Project Client',
    role: 'E-Commerce Platform',
  },
  {
    id: '2',
    quote:
      'Exceptional problem solver with deep technical expertise. Developed our custom inventory and management platform ahead of schedule with zero major bugs. Highly recommended!',
    author: 'Business Owner',
    role: 'Retail Operations Manager',
  },
  {
    id: '3',
    quote:
      'A pleasure to collaborate with! Transformed our rough concept into a high-converting, blazing-fast web application with outstanding user experience and flawless mobile responsiveness.',
    author: 'Startup Founder',
    role: 'Tech Entrepreneur',
  },
];
