export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of DeFi: Layer 2 Scaling Solutions',
    excerpt: 'Exploring how Layer 2 solutions are revolutionizing decentralized finance with faster transactions and lower fees.',
    content: 'Layer 2 scaling solutions represent a paradigm shift in blockchain technology. By moving transactions off the main chain while maintaining security guarantees, we can achieve significantly higher throughput and lower costs...',
    date: '2024-10-15',
    category: 'Blockchain',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Building Production-Ready AI Models',
    excerpt: 'Best practices for deploying machine learning models that scale and perform reliably in production environments.',
    content: 'Deploying AI models to production requires careful consideration of scalability, monitoring, and performance optimization. Here are the key strategies I\'ve learned from building production ML systems...',
    date: '2024-10-10',
    category: 'AI',
    readTime: '10 min read'
  },
  {
    id: 3,
    title: 'Smart Contract Security: Common Vulnerabilities',
    excerpt: 'A deep dive into the most common smart contract vulnerabilities and how to prevent them in your Solidity code.',
    content: 'Security is paramount in smart contract development. This guide covers reentrancy attacks, integer overflow, front-running, and other critical vulnerabilities every blockchain developer should understand...',
    date: '2024-10-05',
    category: 'Blockchain',
    readTime: '12 min read'
  },
  {
    id: 4,
    title: 'Transformer Models: Understanding Self-Attention',
    excerpt: 'Breaking down the self-attention mechanism that powers modern NLP models like GPT and BERT.',
    content: 'The transformer architecture revolutionized natural language processing. At its core is the self-attention mechanism, which allows models to weigh the importance of different words in a sequence...',
    date: '2024-09-28',
    category: 'AI',
    readTime: '15 min read'
  }
];
