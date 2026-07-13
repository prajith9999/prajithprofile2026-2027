import { images } from './images';

export const prefooterHeadline = {
  label: 'Philosophy',
  text: 'For successful growth, trustworthy people are needed — then automatically, life will be ',
  highlight: 'CI/CD',
  punctuation: '.',
};

export const insightCards = [
  {
    id: 1,
    label: 'People',
    title: 'Trustworthy teams are the foundation of every successful delivery.',
    meta: 'Culture · Growth',
    icon: 'users',
    image: images.partnership,
    gradient: 'linear-gradient(145deg, #0071e3 0%, #2997ff 55%, #64b5f6 100%)',
    tone: 'dark',
  },
  {
    id: 2,
    label: 'Automation',
    title: 'When pipelines are reliable, life naturally moves at CI/CD speed.',
    meta: 'DevOps · Pipelines',
    icon: 'cog',
    image: images.computerTroubleshooting,
    gradient: 'linear-gradient(145deg, #6d28d9 0%, #8b5cf6 55%, #c4b5fd 100%)',
    tone: 'dark',
  },
  {
    id: 3,
    label: 'Delivery',
    title: 'Grow with discipline — ship secure systems people can depend on.',
    meta: 'Enterprise · Cloud',
    icon: 'rocket',
    image: images.omegaRedClock,
    gradient: 'linear-gradient(145deg, #3a3a3c 0%, #636366 55%, #86868b 100%)',
    tone: 'dark',
  },
];
