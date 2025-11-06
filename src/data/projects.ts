export interface Project {
  id: number;
  title: string;
  category: 'blockchain' | 'ai';
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DeFi Lending Protocol',
    category: 'blockchain',
    description: 'A decentralized lending platform built on Ethereum with automated market making and yield farming capabilities.',
    technologies: ['Solidity', 'Ethers.js', 'React', 'Hardhat'],
    github: 'https://github.com/zaplin0/Ethers.js-DApp',
    demo: 'https://blog.logrocket.com/building-dapp-ethers-js',
    image: '../assets/projects/1.jpg'
  },
  {
    id: 2,
    title: 'AI Trading Bot',
    category: 'ai',
    description: 'Machine learning-powered cryptocurrency trading bot with sentiment analysis and real-time market prediction.',
    technologies: ['Python', 'TensorFlow', 'WebSocket', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'ai-trading'
  },
  {
    id: 3,
    title: 'NFT Marketplace',
    category: 'blockchain',
    description: 'Full-featured NFT marketplace with minting, trading, and auction functionality on Polygon network.',
    technologies: ['Solidity', 'Next.js', 'IPFS', 'Web3.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'nft-marketplace'
  },
  {
    id: 4,
    title: 'Neural Style Transfer',
    category: 'ai',
    description: 'Advanced neural network for artistic style transfer with real-time processing capabilities.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'neural-style'
  },
  {
    id: 5,
    title: 'DAO Governance Platform',
    category: 'blockchain',
    description: 'Decentralized autonomous organization platform with voting, proposals, and treasury management.',
    technologies: ['Rust', 'Solana', 'TypeScript', 'Anchor'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'dao-platform'
  },
  {
    id: 6,
    title: 'Computer Vision API',
    category: 'ai',
    description: 'RESTful API for object detection, facial recognition, and image classification powered by deep learning.',
    technologies: ['Python', 'TensorFlow', 'Docker', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'vision-api'
  },
  {
    id: 7,
    title: 'Cross-Chain Bridge',
    category: 'blockchain',
    description: 'Secure cross-chain bridge enabling asset transfers between Ethereum and BSC networks.',
    technologies: ['Solidity', 'Vyper', 'Node.js', 'Web3.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bridge'
  },
  {
    id: 8,
    title: 'NLP Sentiment Analyzer',
    category: 'ai',
    description: 'Natural language processing tool for sentiment analysis on social media and news articles.',
    technologies: ['Python', 'BERT', 'FastAPI', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'nlp-sentiment'
  },
  {
    id: 9,
    title: 'Smart Contract Auditor',
    category: 'blockchain',
    description: 'Automated smart contract security auditing tool with vulnerability detection and reporting.',
    technologies: ['Python', 'Solidity', 'Slither', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'auditor'
  },
  {
    id: 10,
    title: 'AI Code Assistant',
    category: 'ai',
    description: 'Intelligent code completion and suggestion tool powered by transformer models.',
    technologies: ['Python', 'GPT', 'VS Code API', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'code-assistant'
  },
  {
    id: 11,
    title: 'Blockchain Explorer',
    category: 'blockchain',
    description: 'Real-time blockchain explorer with transaction tracking and analytics dashboard.',
    technologies: ['TypeScript', 'Next.js', 'GraphQL', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'explorer'
  },
  {
    id: 12,
    title: 'Recommendation Engine',
    category: 'ai',
    description: 'Collaborative filtering recommendation system for e-commerce platforms.',
    technologies: ['Python', 'Scikit-learn', 'Redis', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'recommendation'
  },
  {
    id: 13,
    title: 'Decentralized Exchange',
    category: 'blockchain',
    description: 'Automated market maker DEX with liquidity pools and yield farming.',
    technologies: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'dex'
  },
  {
    id: 14,
    title: 'Speech Recognition System',
    category: 'ai',
    description: 'Real-time speech-to-text system with multi-language support.',
    technologies: ['Python', 'Whisper', 'FastAPI', 'WebRTC'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'speech'
  },
  {
    id: 15,
    title: 'Token Vesting Platform',
    category: 'blockchain',
    description: 'Smart contract-based token vesting with customizable schedules and cliff periods.',
    technologies: ['Solidity', 'Foundry', 'Next.js', 'Web3.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'vesting'
  },
  {
    id: 16,
    title: 'Generative AI Art',
    category: 'ai',
    description: 'Text-to-image generation platform using stable diffusion models.',
    technologies: ['Python', 'Stable Diffusion', 'React', 'AWS S3'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'ai-art'
  },
  {
    id: 17,
    title: 'Layer 2 Scaling Solution',
    category: 'blockchain',
    description: 'Optimistic rollup implementation for Ethereum scaling with fraud proofs.',
    technologies: ['Go', 'Solidity', 'Geth', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'layer2'
  },
  {
    id: 18,
    title: 'Predictive Analytics',
    category: 'ai',
    description: 'Time series forecasting system for financial markets and business metrics.',
    technologies: ['Python', 'LSTM', 'Prophet', 'Streamlit'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'predictive'
  },
  {
    id: 19,
    title: 'Staking Protocol',
    category: 'blockchain',
    description: 'Proof-of-stake validator and delegation system with reward distribution.',
    technologies: ['Rust', 'Substrate', 'Polkadot', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'staking'
  },
  {
    id: 20,
    title: 'Anomaly Detection System',
    category: 'ai',
    description: 'Real-time anomaly detection for cybersecurity and fraud prevention.',
    technologies: ['Python', 'Isolation Forest', 'Kafka', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'anomaly'
  },
];
