'use client';

interface CodeBlockProps {
  code: string;
}

function highlightVerilog(code: string): React.ReactNode[] {
  const lines = code.split('\n');
  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    while (remaining.length > 0) {
      // Comments
      const commentMatch = remaining.match(/^(\/\/.*)/);
      if (commentMatch) {
        tokens.push(<span key={key++} className="syntax-comment">{commentMatch[1]}</span>);
        remaining = remaining.slice(commentMatch[1].length);
        continue;
      }

      // Keywords
      const keywordMatch = remaining.match(/^(always|begin|end|if|else|case|endcase|module|endmodule|input|output|wire|reg|assign|posedge|negedge|localparam)\b/);
      if (keywordMatch) {
        tokens.push(<span key={key++} className="syntax-keyword">{keywordMatch[1]}</span>);
        remaining = remaining.slice(keywordMatch[1].length);
        continue;
      }

      // All other text — default gray
      const defaultMatch = remaining.match(/^([a-zA-Z_][a-zA-Z0-9_']*|\d+'[bhd][\da-fA-F_]+|\d+|[^\s]|\s+)/);
      if (defaultMatch) {
        tokens.push(<span key={key++} className="syntax-default">{defaultMatch[1]}</span>);
        remaining = remaining.slice(defaultMatch[1].length);
        continue;
      }

      tokens.push(<span key={key++} className="syntax-default">{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }

    return (
      <div key={lineIndex} className="leading-[1.75]">
        {tokens.length > 0 ? tokens : '\u00A0'}
      </div>
    );
  });
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="rounded-code bg-bg-code border border-bg-code-border overflow-hidden">
      {/* macOS traffic lights + filename */}
      <div className="flex items-center px-4 pt-3 pb-2">
        <div className="flex gap-[7px]">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="flex-1 text-center text-[10px] font-mono text-text-code-cm">ansh_shah.v</span>
        <div className="w-[52px]" /> {/* spacer to center filename */}
      </div>

      {/* Code with bottom fade */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: '155px',
          maskImage: 'linear-gradient(to bottom, black 45%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent 95%)',
        }}
      >
        <pre className="font-mono text-[10.5px] px-4 pb-4 text-text-code">
          <code>{highlightVerilog(code)}</code>
        </pre>
      </div>
    </div>
  );
}
