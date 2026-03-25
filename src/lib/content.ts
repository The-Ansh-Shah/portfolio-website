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
  { emoji: "💻", label: "Teaching architecture" },
  { emoji: "🏋️", label: "Working out" },
  { emoji: "🧑‍🌾", label: "Stardew Valley" },
  { emoji: "🎸", label: "Playing guitar" },
];

export const verilogSnippet = `module engineer (
  input  clk, rst_n,
  output reg [2:0] state
);
  localparam PLANNING  = 3'd0,
             CREATING  = 3'd1,
             IMPROVING = 3'd2,
             SHIPPING  = 3'd3;

  always @(posedge clk) begin
    if (!rst_n) state <= PLANNING;
    else case (state)
      PLANNING:  state <= CREATING;
      CREATING:  state <= IMPROVING;
      IMPROVING: state <= SHIPPING;
      SHIPPING:  state <= PLANNING;
    endcase
  end
endmodule`;

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
  "RISC-V",
  "Verilog",
  "Cadence Innovus",
  "Synopsys VCS",
  "Sky130 PDK",
  "C/C++",
  "Rust",
  "SystemVerilog",
  "CBMC",
  "Chisel",
  "Python",
  "ARM Thumb",
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
  incoming?: boolean;
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Apple",
    role: "SoC Design Verification Intern",
    institution: "Cupertino, CA",
    duration: "May – Aug 2026",
    bullets: [],
    incoming: true,
  },
  {
    id: 2,
    company: "SLICE Lab",
    role: "Undergraduate Researcher",
    institution: "UC Berkeley EECS",
    duration: "Apr 2025 – Present",
    bullets: [],
  },
  {
    id: 3,
    company: "CS 61C",
    role: "Undergraduate Course Staff",
    institution: "UC Berkeley",
    duration: "Aug – Dec 2025",
    bullets: [],
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
    title: "RV32I CPU & direct-mapped L1 cache",
    description: "Designed a 3-stage pipelined RV32I datapath achieving 62.4 MHz with an integrated 4KiB L1 cache. Used SystemVerilog assertions and formal verification throughout.",
    technologies: ["Verilog", "Sky130 PDK", "Cadence Innovus", "Synopsys VCS"],
    achievements: [],
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
    title: "RP2040 bootloader rootkit analysis",
    description: "Reverse-engineered the RP2040 boot sequence to demonstrate early-boot execution redirection. Modeled the boot-flow with CBMC formal verification and proposed mitigations.",
    technologies: ["C", "ARM Thumb", "Embedded Security", "CBMC"],
    achievements: [],
    date: "Fall 2025",
    github: "https://github.com/The-Ansh-Shah/DAWGkit-RP2040",
    featured: false,
    thumbnail: "/images/projects/rp2040_poster_tb.jpg",
    images: ["/images/projects/rp2040_poster_tb.jpg"],
  },
  {
    id: 3,
    title: "RISC-V neural network classifier",
    description: "Built math kernels in RISC-V assembly — ReLU, argmax, matmul — and integrated them into a digit-classification pipeline with file I/O and heap allocation.",
    technologies: ["RISC-V", "Venus Simulator", "Linear Algebra"],
    achievements: [],
    date: "Spring 2025",
    github:
      "https://github.com/The-Ansh-Shah/riscv-neural-network-classifier",
    featured: false,
    thumbnail: "/images/projects/classifier_tb.png",
    images: ["/images/projects/classifier_tb.png"],
  },
  {
    id: 4,
    title: "Treble booster circuit",
    description: "Designed a band-pass filter for treble-frequency boosting with analytically determined component specs. Simulated and verified amplification in LTSpice.",
    technologies: ["LTSpice", "Oscilloscope"],
    achievements: [],
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
  badge: string; // monogram badge text (e.g. "VL", "SV") or "lucide:IconName"
}

export interface TechStackCategory {
  title: string;
  items: TechStackItem[];
}

export const techStack: TechStackCategory[] = [
  {
    title: "Architecture",
    items: [
      { name: "RISC-V ISA", description: "Instruction set design & extensions", badge: "RV" },
      { name: "CPU Microarch", description: "Pipeline design & optimization", badge: "μA" },
      { name: "Pipelining & Caching", description: "L1/L2 hierarchy & coherence", badge: "P$" },
    ],
  },
  {
    title: "Hardware Design",
    items: [
      { name: "Verilog", description: "RTL design and simulation", badge: "VL" },
      { name: "Cadence Innovus", description: "Physical design & PnR", badge: "CI" },
      { name: "Synopsys VCS", description: "Simulation & verification", badge: "VCS" },
    ],
  },
  {
    title: "Low-Level Systems",
    items: [
      { name: "C/C++", description: "Systems & embedded programming", badge: "C" },
      { name: "Rust", description: "Safe systems programming", badge: "Rs" },
      { name: "Linux/UNIX", description: "Kernel & userspace tooling", badge: "Lx" },
    ],
  },
  {
    title: "Verification",
    items: [
      { name: "SystemVerilog", description: "Assertions & testbenches", badge: "SV" },
      { name: "Formal Methods", description: "CBMC bounded model checking", badge: "FM" },
      { name: "Python/NumPy", description: "Analysis & automation", badge: "Py" },
    ],
  },
];
