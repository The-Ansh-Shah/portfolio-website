// Structured resume data for the interactive resume page

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  location: string;
  startDate: string;
  endDate: string;
  honors: string[];
  relevantCoursework: string[];
}

export interface ResumeExperience {
  id: number;
  role: string;
  organization: string;
  department?: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies: string[];
}

export interface ResumeProject {
  id: number;
  title: string;
  date: string;
  description: string;
  bullets: string[];
  technologies: string[];
  github?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  tagline: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  education: Education[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: SkillGroup[];
}

export const resumeData: ResumeData = {
  name: "Ansh Shah",
  tagline: "Computer Architecture & EECS @ UC Berkeley",
  email: "ansh_shah@berkeley.edu",
  location: "Berkeley, CA",
  linkedin: "https://linkedin.com/in/ansh-shah-eecs",
  github: "https://github.com/The-Ansh-Shah",
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. Electrical Engineering & Computer Science",
      gpa: "3.953 / 4.0",
      location: "Berkeley, CA",
      startDate: "Aug 2023",
      endDate: "May 2027",
      honors: [
        "Eta Kappa Nu (HKN) — EECS Honor Society (Top 25%)",
        "Industrial Relations Head — organizing career fairs and networking events",
        "Weekly tutoring and review sessions for 400+ students",
      ],
      relevantCoursework: [
        "Digital Integrated Circuits (ASIC)",
        "Computer Architecture",
        "Microelectronic Devices & Circuits",
        "Embedded & Cyber-Physical Systems",
        "Signals and Systems",
        "Operating Systems",
        "Formal Methods",
      ],
    },
  ],
  experience: [
    {
      id: 1,
      role: "Undergraduate Researcher",
      organization: "SLICE Lab",
      department: "UC Berkeley EECS",
      location: "Berkeley, CA",
      startDate: "Apr 2025",
      endDate: "Present",
      bullets: [
        "Creating processor tracing framework for minimal-overhead performance profiling with delta encoding support",
        "Simulating lossless compression techniques (Huffman, Delta-of-Delta, RLE) to compress trace data",
        "Programmed decode and compression simulations in Rust; analyzed results using baremetal IDE",
      ],
      technologies: ["Rust", "Processor Tracing", "Compression Algorithms"],
    },
    {
      id: 2,
      role: "Undergraduate Course Staff",
      organization: "CS 61C",
      department: "UC Berkeley",
      location: "Berkeley, CA",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      bullets: [
        "Supported 600+ students in Berkeley's largest computer architecture and digital logic course",
        "Held Office Hours, Discussion Mini-Lectures, and debugging sessions (CGDB, Valgrind)",
        "Created exam walk-throughs to explain challenging concepts and supported video creation",
      ],
      technologies: ["RISC-V", "C", "GDB", "Valgrind"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "RV32I CPU and Direct-Mapped L1 Cache",
      date: "Fall 2025",
      description: "3-stage pipelined RISC-V CPU with optimized cache system",
      bullets: [
        "Designed 3-stage pipelined RV32I datapath achieving 62.4 MHz",
        "Integrated 4KiB L1-Cache using 1KiB SRAMs, reducing area",
        "Developed Cache FSM with Dirty Flag, reducing cycles by 36%",
        "Used SystemVerilog Assertions for verification",
      ],
      technologies: ["Verilog", "Sky130 PDK", "Cadence Innovus", "Synopsys VCS"],
      github: "https://github.com/The-Ansh-Shah/rv32i-cpu-and-cache",
    },
    {
      id: 2,
      title: "RP2040 Bootloader Rootkit Analysis",
      date: "Fall 2025",
      description: "Embedded security research on boot sequence exploitation",
      bullets: [
        "Contributed to PoC early-boot execution redirection via watchdog",
        "Achieved code persistence by modifying second-stage bootloader",
        "Modeled boot-flow using CBMC formal verification",
        "Designed mitigation strategy for secure-boot robustness",
      ],
      technologies: ["C", "ARM Thumb", "Embedded Security", "CBMC"],
      github: "https://github.com/The-Ansh-Shah/DAWGkit-RP2040",
    },
    {
      id: 3,
      title: "RISC-V Neural Network Classifier",
      date: "Spring 2025",
      description: "Low-level ML implementation in RISC-V assembly",
      bullets: [
        "Implemented math kernels in RISC-V assembly (ReLU, argmax, matmul)",
        "Integrated kernels into digit-classification pipeline",
        "Developed file I/O with heap allocation and error handling",
      ],
      technologies: ["RISC-V", "Venus Simulator", "Linear Algebra"],
      github: "https://github.com/The-Ansh-Shah/riscv-neural-network-classifier",
    },
    {
      id: 4,
      title: "Treble Booster Circuit",
      date: "Spring 2025",
      description: "Analog filter design for guitar amplification",
      bullets: [
        "Designed band-pass filter as treble-frequency booster",
        "Analytically determined component specs for corner frequencies",
        "Simulated and verified amplification using test equipment",
      ],
      technologies: ["LTSpice", "Oscilloscope", "Network Analyzer"],
    },
  ],
  skills: [
    {
      category: "Architecture",
      icon: "Cpu",
      skills: ["RISC-V ISA", "CPU Microarchitecture", "Pipelining & Caching", "GPU Architecture", "Memory Hierarchies", "Digital Design"],
    },
    {
      category: "Hardware Design",
      icon: "Layers",
      skills: ["Verilog", "Chisel", "CMOS Design", "ASIC Flow", "Synopsys VCS", "Cadence Innovus", "LTSpice"],
    },
    {
      category: "Low-Level Systems",
      icon: "Terminal",
      skills: ["C/C++", "Rust", "ARM Thumb", "Embedded Systems", "RP2040/STM32/ESP32", "Linux/UNIX", "Operating Systems"],
    },
    {
      category: "Verification",
      icon: "CheckCircle",
      skills: ["SystemVerilog", "Formal Methods (CBMC)", "GDB/Valgrind", "Oscilloscopes", "Network Analyzers", "Python/Numpy"],
    },
  ],
};
