import React from 'react';
import { Mail, Shield, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black pb-16 pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Vanish</h3>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Passwordless authentication that fades into the background —
              secure, beautiful, and incredibly fast.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Shield className="h-4 w-4 text-blue-300" />
                SOC 2 in progress
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-blue-300" />
                Encrypted at rest & in transit
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-medium text-white/80">Get early access</h4>
              <p className="mt-1 text-sm text-white/60">We’re onboarding design partners. Join the waitlist.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex w-full items-center gap-2"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-black/60 py-3 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Vanish, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Security</a>
            <a href="#" className="hover:text-white/80">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
