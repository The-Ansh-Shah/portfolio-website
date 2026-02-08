// Personal and professional content extracted from resume

export const personalInfo = {
  name: "Ansh Shah",
  email: "ansh_shah@berkeley.edu",
  phone: "(408) 207-8992",
  location: "Berkeley, CA",
  linkedin: "https://linkedin.com/in/ansh-shah-eecs",
  github: "https://github.com/The-Ansh-Shah",
};

export const typewriterTexts = [
  "Incoming Silicon Product Engineering Intern @ Intel",
  "EECS @ UC Berkeley",
  "Computer Architecture Engineer",
  "RISC-V CPU Designer",
  "ASIC Design Enthusiast",
  "Hardware + Software",
  "Systems Builder",
];

export const bio = [
  "I'm an Electrical Engineering and Computer Science student at UC Berkeley (GPA 3.953) with a passion for computer architecture and hardware-software systems. As a member of HKN (top 25% of EECS students), I organize networking events and tutor 400+ students in circuits and computer architecture.",

  "My work spans both research and teaching. At the SLICE Lab, I develop processor tracing frameworks for performance profiling using Rust, while as Course Staff for CS 61C, I support 600+ students learning computer architecture and RISC-V assembly.",

  "I specialize in CPU design, ASIC implementation, and embedded systems security. My projects include designing a 62.4 MHz RISC-V CPU with cache optimization, analyzing bootloader security vulnerabilities, and implementing neural networks in RISC-V assembly. I'm passionate about building efficient, secure systems at the hardware-software interface.",
];

export interface Experience {
  id: number;
  company: string;
  role: string;
  institution: string;
  duration: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "SLICE Lab",
    role: "Undergraduate Researcher",
    institution: "UC Berkeley EECS",
    duration: "Apr. 2025 – Present",
    bullets: [
      "Creating processor tracing framework for minimal-overhead performance profiling with delta encoding support",
      "Simulating lossless compression techniques (Huffman, Delta-of-Delta, RLE) to compress trace data",
      "Programmed decode and compression simulations in Rust; analyzed results using baremetal IDE",
    ],
  },
  {
    id: 2,
    company: "CS 61C",
    role: "Undergraduate Course Staff",
    institution: "UC Berkeley",
    duration: "Aug. 2025 – Dec. 2025",
    bullets: [
      "Supported 600+ students in Berkeley's largest computer architecture and digital logic course",
      "Held Office Hours, Discussion Mini-Lectures, and debugging sessions (CGDB, Valgrind)",
      "Created exam walk-throughs to explain challenging concepts and supported video creation",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  date: string;
  github?: string;
  demo?: string;
  website?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RV32I CPU and Direct-Mapped L1 Cache",
    description: "3-stage pipelined RISC-V CPU with optimized cache system",
    technologies: ["Verilog", "Sky130 PDK", "Cadence Innovus", "Synopsys VCS"],
    achievements: [
      "Designed 3-stage pipelined RV32I datapath achieving 62.4 MHz",
      "Integrated 4KiB L1-Cache using 1KiB SRAMs, reducing area",
      "Developed Cache FSM with Dirty Flag, reducing cycles by 36%",
      "Used SystemVerilog Assertions for verification",
    ],
    date: "Fall 2025",
    github: "https://github.com/The-Ansh-Shah",
    featured: true,
  },
  {
    id: 2,
    title: "RP2040 Bootloader Rootkit Analysis",
    description: "Embedded security research on boot sequence exploitation",
    technologies: ["C", "ARM Thumb", "Embedded Security", "CBMC"],
    achievements: [
      "Contributed to PoC early-boot execution redirection via watchdog",
      "Achieved code persistence by modifying second-stage bootloader",
      "Modeled boot-flow using CBMC formal verification",
      "Designed mitigation strategy for secure-boot robustness",
    ],
    date: "Fall 2025",
    github: "https://github.com/The-Ansh-Shah",
    featured: true,
  },
  {
    id: 3,
    title: "RISC-V Neural Network Classifier",
    description: "Low-level ML implementation in RISC-V assembly",
    technologies: ["RISC-V", "Venus Simulator", "Linear Algebra"],
    achievements: [
      "Implemented math kernels in RISC-V assembly (ReLU, argmax, matmul)",
      "Integrated kernels into digit-classification pipeline",
      "Developed file I/O with heap allocation and error handling",
    ],
    date: "Spring 2025",
    github: "https://github.com/The-Ansh-Shah",
    featured: true,
  },
  {
    id: 4,
    title: "Treble Booster Circuit",
    description: "Analog filter design for guitar amplification",
    technologies: ["LTSpice", "Oscilloscope", "Network Analyzer"],
    achievements: [
      "Designed band-pass filter as treble-frequency booster",
      "Analytically determined component specs for corner frequencies",
      "Simulated and verified amplification using test equipment",
    ],
    date: "Spring 2025",
    featured: true,
  },
];

export interface SkillCategory {
  [key: string]: string[];
}

export const skills: SkillCategory = {
  architecture: [
    "RISC-V ISA",
    "CPU Microarchitecture",
    "Pipelining & Caching",
    "GPU Architecture",
    "Memory Hierarchies",
    "Digital Design",
  ],
  hardware_design: [
    "Verilog",
    "Chisel",
    "CMOS Design",
    "ASIC Flow",
    "Synopsys VCS",
    "Cadence Innovus",
    "LTSpice",
  ],
  low_level_systems: [
    "C/C++",
    "Rust",
    "ARM Thumb",
    "Embedded Systems",
    "RP2040/STM32/ESP32",
    "Linux/UNIX",
    "Operating Systems",
  ],
  verification: [
    "SystemVerilog",
    "Formal Methods (CBMC)",
    "GDB/Valgrind",
    "Oscilloscopes",
    "Network Analyzers",
    "Python/Numpy",
  ],
};
