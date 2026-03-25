export const personalInfo = {
  name: "Ansh Shah",
  email: "ansh_shah@berkeley.edu",
  phone: "(408) 207-8992",
  location: "Berkeley, CA",
  linkedin: "https://linkedin.com/in/ansh-shah-eecs",
  github: "https://github.com/The-Ansh-Shah",
};

export const heroTagline = "Building at the intersection of silicon and systems.";

export const identityTagline =
  "Hardware-software systems engineer. I design CPUs, break bootloaders, and teach computer architecture to 600 students.";

export const whatDrivesMe =
  "Building efficient, secure systems at the transistor level.";

export const bio = [
  "I'm an Electrical Engineering and Computer Science student at UC Berkeley (GPA 3.953) with a passion for computer architecture and hardware-software systems. My work spans research at the SLICE Lab, where I develop processor tracing frameworks in Rust, and teaching as Course Staff for CS 61C, supporting 600+ students in computer architecture. I specialize in CPU design, ASIC implementation, and embedded systems security.",
];

export const hobbies = [
  { emoji: "🎸", label: "Guitar" },
  { emoji: "🏃", label: "Running" },
  { emoji: "📐", label: "Teaching math" },
];

export const verilogSnippet = `always @(posedge clk) begin
  if (rst) begin
    state <= IDLE;
    dirty <= 1'b0;
  end else case (state)
    IDLE:    if (req) state <= TAG_CHECK;
    TAG_CHECK: state <= hit ? DONE : WRITEBACK;
    WRITEBACK: if (mem_ready) state <= FILL;
  endcase
end`;

export const readingList = [
  {
    title: "RISC-V Spec: Unprivileged ISA Manual",
    source: "riscv.org",
    url: "https://riscv.org/technical/specifications/",
  },
  {
    title: "SiFive U74 Core Complex Manual",
    source: "sifive.com",
    url: "https://www.sifive.com/documentation",
  },
  {
    title: "Apple M4 Microarchitecture Deep Dive",
    source: "chipsandcheese.com",
    url: "https://chipsandcheese.com",
  },
  {
    title: "A New Golden Age for Computer Architecture",
    source: "Hennessy & Patterson",
    url: "https://cacm.acm.org/magazines/2019/2/234352",
  },
  {
    title: "CBMC: Bounded Model Checking for Software",
    source: "cmu.edu",
    url: "https://www.cs.cmu.edu/~modelcheck/cbmc/",
  },
];

export const marqueeTools = [
  "Verilog",
  "Cadence Innovus",
  "Synopsys VCS",
  "RISC-V",
  "Rust",
  "C/C++",
  "GDB",
  "LTSpice",
  "Sky130 PDK",
  "SystemVerilog",
  "Chisel",
  "Python",
];

export const beyondTheLab = [
  {
    title: "HKN (Eta Kappa Nu)",
    description:
      "Treasurer & Industrial Relations — organizing career fairs, networking events, and weekly tutoring for 400+ students.",
    label: "Leadership",
  },
  {
    title: "3Blue1Brown Event",
    description:
      "Hosted Grant Sanderson at International House — 300+ students.",
    label: "Events",
  },
  {
    title: "CS 61C Teaching",
    description:
      "Supported 600+ students in Berkeley's largest architecture course.",
    label: "Teaching",
  },
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
  thumbnail?: string;
  images?: string[];
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
    github: "https://github.com/The-Ansh-Shah/rv32i-cpu-and-cache",
    featured: true,
    thumbnail: "/images/projects/cpu_par_tb.png",
    images: [
      "/images/projects/cpu_par_tb.png",
      "/images/projects/cpu_datapath.jpg",
      "/images/projects/cache_fsm.jpg",
    ],
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
    github: "https://github.com/The-Ansh-Shah/DAWGkit-RP2040",
    featured: false,
    thumbnail: "/images/projects/rp2040_poster_tb.jpg",
    images: ["/images/projects/rp2040_poster_tb.jpg"],
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
    github:
      "https://github.com/The-Ansh-Shah/riscv-neural-network-classifier",
    featured: false,
    thumbnail: "/images/projects/classifier_tb.png",
    images: ["/images/projects/classifier_tb.png"],
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
    featured: false,
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

// Detailed tech stack with descriptions for TechCard grid
export interface TechStackItem {
  name: string;
  description: string;
  icon: string; // lucide-react icon name
}

export interface TechStackCategory {
  title: string;
  icon: string;
  items: TechStackItem[];
}

export const techStack: TechStackCategory[] = [
  {
    title: "Architecture",
    icon: "Cpu",
    items: [
      { name: "RISC-V ISA", description: "Instruction set design & extensions", icon: "Cpu" },
      { name: "CPU Microarch", description: "Pipeline design & optimization", icon: "Cpu" },
      { name: "Caching", description: "L1/L2 hierarchy & coherence", icon: "Cpu" },
      { name: "GPU Architecture", description: "Parallel compute fundamentals", icon: "Cpu" },
      { name: "Memory Hierarchies", description: "SRAM, DRAM, virtual memory", icon: "Cpu" },
    ],
  },
  {
    title: "Hardware Design",
    icon: "Layers",
    items: [
      { name: "Verilog", description: "RTL design and simulation", icon: "Layers" },
      { name: "Chisel", description: "Scala-based hardware generation", icon: "Layers" },
      { name: "ASIC Flow", description: "Synthesis to place & route", icon: "Layers" },
      { name: "Synopsys VCS", description: "Simulation & verification", icon: "Layers" },
      { name: "Cadence Innovus", description: "Physical design & PnR", icon: "Layers" },
      { name: "LTSpice", description: "Analog circuit simulation", icon: "Layers" },
    ],
  },
  {
    title: "Low-Level Systems",
    icon: "Terminal",
    items: [
      { name: "C/C++", description: "Systems & embedded programming", icon: "Terminal" },
      { name: "Rust", description: "Safe systems programming", icon: "Terminal" },
      { name: "ARM Thumb", description: "Embedded ISA & bootloaders", icon: "Terminal" },
      { name: "Embedded Systems", description: "RP2040, STM32, ESP32", icon: "Terminal" },
      { name: "Linux/UNIX", description: "Kernel & userspace tooling", icon: "Terminal" },
    ],
  },
  {
    title: "Verification & Test",
    icon: "CheckCircle",
    items: [
      { name: "SystemVerilog", description: "Assertions & testbenches", icon: "CheckCircle" },
      { name: "Formal Methods", description: "CBMC bounded model checking", icon: "CheckCircle" },
      { name: "GDB/Valgrind", description: "Debugging & profiling", icon: "CheckCircle" },
      { name: "Test Equipment", description: "Oscilloscopes & network analyzers", icon: "CheckCircle" },
      { name: "Python/Numpy", description: "Analysis & automation", icon: "CheckCircle" },
    ],
  },
];
