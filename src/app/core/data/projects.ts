import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Millet Bidirectional Typing',
    description: 'Implementing bidirectional type checking for the Millet programming language.',
    category: 'Programming Languages',
    technologies: ['OCaml', 'Type Systems', 'Compilers'],
    githubUrl: 'https://github.com/LukaSveigl/millet',
    featured: true,
  },

  {
    title: 'CHIP-8 Emulator',
    description: 'CHIP-8 emulator with instruction decoding, rendering, and input handling.',
    category: 'Systems',
    technologies: ['C', 'Raylib', 'Emulation'],
    githubUrl: 'https://github.com/LukaSveigl/chip-8-emu',
    featured: true,
  },

  {
    title: 'C Utility Library',
    description:
      'Personal low-level C library implementing allocators, vectors, and string builders.',
    category: 'Systems',
    technologies: ['C', 'Memory Management'],
    githubUrl: 'https://github.com/LukaSveigl/svcxtend',
    featured: false,
  },

  {
    title: 'Koi-Koi Counter',
    description: 'A web app for counting points in the Koi-Koi card game.',
    category: 'Web development',
    technologies: ['Angular, TypeScript', 'Web Development'],
    githubUrl: 'https://github.com/LukaSveigl/koi-koi-counter',
    liveUrl: 'https://LukaSveigl.github.io/koi-koi-counter',
    featured: false,
  },

  {
    title: 'LmdOc',
    description: 'A simple OCaml implementation of Lambda Calculus.',
    category: 'Programming Languages',
    technologies: ['OCaml', 'Lambda Calculus'],
    githubUrl: 'https://github.com/LukaSveigl/lmdoc',
    featured: true,
  },

  {
    title: 'PINS - Java Bytecode',
    description: 'An implementation of the PINS programming language targeting Java bytecode.',
    category: 'Programming Languages',
    technologies: ['Java', 'Compilers', 'Programming Languages'],
    githubUrl: 'https://github.com/LukaSveigl/PINS-JavaBytecode-Compiler',
    featured: true,
  },
];
