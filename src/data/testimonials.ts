export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  gender: 'male' | 'female';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DeFi Innovations',
    content: 'Outstanding blockchain development skills. Delivered a complex DeFi protocol ahead of schedule with exceptional code quality.',
    rating: 5.0,
    gender: 'male'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'AI Ventures',
    content: 'The machine learning models developed exceeded our expectations. Highly recommend for any AI project.',
    rating: 5.0,
    gender: 'female'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Founder',
    company: 'CryptoStart',
    content: 'Exceptional smart contract development and security practices. Our NFT marketplace is robust and scalable.',
    rating: 4.5,
    gender: 'male'
  },
  {
    id: 4,
    name: 'Emily Zhang',
    role: 'Tech Lead',
    company: 'Neural Networks Inc',
    content: 'Impressive deep learning expertise. The computer vision API integration was seamless and performant.',
    rating: 5.0,
    gender: 'female'
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'CEO',
    company: 'Blockchain Solutions',
    content: 'Professional, reliable, and technically brilliant. The cross-chain bridge works flawlessly.',
    rating: 4.5,
    gender: 'male'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Director of Engineering',
    company: 'AI Systems',
    content: 'Top-tier NLP implementation. The sentiment analysis tool is accurate and fast.',
    rating: 5.0,
    gender: 'female'
  },
  {
    id: 7,
    name: 'Robert Kim',
    role: 'Lead Developer',
    company: 'Smart Contracts Co',
    content: 'Expert-level Solidity development. The DAO governance platform is secure and feature-rich.',
    rating: 4.5,
    gender: 'male'
  },
  {
    id: 8,
    name: 'Amanda Foster',
    role: 'VP of Technology',
    company: 'Machine Learning Labs',
    content: 'Excellent AI integration skills. The recommendation engine significantly improved our conversion rates.',
    rating: 5.0,
    gender: 'female'
  },
  {
    id: 9,
    name: 'Christopher Lee',
    role: 'Project Manager',
    company: 'Web3 Collective',
    content: 'Outstanding work on our DEX. Great communication and technical expertise throughout the project.',
    rating: 5.0,
    gender: 'male'
  },
  {
    id: 10,
    name: 'Maria Garcia',
    role: 'CTO',
    company: 'AI Innovation Hub',
    content: 'The speech recognition system works perfectly. Impressive handling of multi-language support.',
    rating: 4.5,
    gender: 'female'
  },
  {
    id: 11,
    name: 'Thomas Brown',
    role: 'Blockchain Architect',
    company: 'Crypto Innovations',
    content: 'Professional and knowledgeable. The Layer 2 solution improved our transaction throughput significantly.',
    rating: 5.0,
    gender: 'male'
  },
  {
    id: 12,
    name: 'Jennifer Martinez',
    role: 'AI Research Lead',
    company: 'Deep Learning Corp',
    content: 'Exceptional work on our predictive analytics platform. The models are accurate and well-optimized.',
    rating: 5.0,
    gender: 'female'
  }
];
