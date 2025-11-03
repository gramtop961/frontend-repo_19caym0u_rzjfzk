import React, { useState } from 'react';
import { Code, Copy } from 'lucide-react';

const snippets = {
  javascript: `// 1-line drop-in
import { auth } from '@vanishdev/sdk';

auth.login({ method: 'biometric' });`,
  python: `# 1-line verification (server)
from vanish import verify

session = verify(token)`,
  curl: `# cURL example
curl -X POST https://api.vanish.dev/verify \\
  -H 'Authorization: Bearer <token>'`
};

const languages = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
  { key: 'curl', label: 'cURL' }
];

const CodeSnippets = () => {
  const [active, setActive] = useState('javascript');

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippets[active]);
    } catch (e) {
      // noop
    }
  };

  return (
    <section id="code" className="relative w-full bg-black py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Add auth in one line</h2>
          <p className="mt-3 text-base text-white/70">Use our lightweight SDK or call the API directly. Start with a single line and scale when you need to.</p>
        </div>

        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-blue-300" />
              <span className="text-sm text-white/80">Quick start</span>
            </div>
            <div className="flex items-center gap-2">
              {languages.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setActive(l.key)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${
                    active === l.key
                      ? 'bg-blue-500 text-white shadow shadow-blue-500/25'
                      : 'border border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={onCopy}
                className="ml-2 inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
              >
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </div>
          </div>

          <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-white/90">
            <code>{snippets[active]}</code>
          </pre>
        </div>

        <div className="mt-6 text-center text-sm text-white/60">
          Works with React, Next.js, Node, Python, Go, and more.
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;
