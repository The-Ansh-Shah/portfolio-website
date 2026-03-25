'use client';

interface CodeBlockProps {
  code: string;
  language?: string;
}

function highlightVerilog(code: string): React.ReactNode[] {
  const lines = code.split('\n');
  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    // Simple tokenizer for Verilog
    while (remaining.length > 0) {
      // Comments
      const commentMatch = remaining.match(/^(\/\/.*)/);
      if (commentMatch) {
        tokens.push(<span key={key++} className="syntax-comment">{commentMatch[1]}</span>);
        remaining = remaining.slice(commentMatch[1].length);
        continue;
      }

      // Keywords
      const keywordMatch = remaining.match(/^(always|begin|end|if|else|case|endcase|module|endmodule|input|output|wire|reg|assign|posedge|negedge)\b/);
      if (keywordMatch) {
        tokens.push(<span key={key++} className="syntax-keyword">{keywordMatch[1]}</span>);
        remaining = remaining.slice(keywordMatch[1].length);
        continue;
      }

      // Types/states (uppercase identifiers)
      const stateMatch = remaining.match(/^([A-Z][A-Z_0-9]+)\b/);
      if (stateMatch) {
        tokens.push(<span key={key++} className="syntax-type">{stateMatch[1]}</span>);
        remaining = remaining.slice(stateMatch[1].length);
        continue;
      }

      // Numbers
      const numMatch = remaining.match(/^(\d+'[bhd][\da-fA-F_]+|\d+)/);
      if (numMatch) {
        tokens.push(<span key={key++} className="syntax-number">{numMatch[1]}</span>);
        remaining = remaining.slice(numMatch[1].length);
        continue;
      }

      // Signals/identifiers
      const idMatch = remaining.match(/^([a-z_][a-zA-Z0-9_]*)/);
      if (idMatch) {
        tokens.push(<span key={key++} className="syntax-signal">{idMatch[1]}</span>);
        remaining = remaining.slice(idMatch[1].length);
        continue;
      }

      // Operators and punctuation
      tokens.push(<span key={key++} className="syntax-operator">{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }

    return (
      <div key={lineIndex} className="leading-relaxed">
        {tokens.length > 0 ? tokens : '\u00A0'}
      </div>
    );
  });
}

export default function CodeBlock({ code, language = 'verilog' }: CodeBlockProps) {
  return (
    <div className="rounded-card bg-bg-card-alt border border-border p-5 overflow-x-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-text-muted font-mono">{language}</span>
      </div>
      <pre className="font-mono text-sm leading-relaxed">
        <code>{highlightVerilog(code)}</code>
      </pre>
    </div>
  );
}
