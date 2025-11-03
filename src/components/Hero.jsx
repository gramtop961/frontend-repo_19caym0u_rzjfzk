import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Fingerprint, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Zap className="h-4 w-4 text-blue-400" />
          <span>Prelaunch • Developer-first</span>
        </div>

        <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
          Passwordless authentication SDK with biometric logins. Add trusted sign-in to your app in a single line of code.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#code"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            <Rocket className="h-4 w-4" />
            Get the snippet
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <Shield className="h-4 w-4 text-blue-300" />
            Why it’s trusted
          </a>
        </div>

        {/* Spline Scene */}
        <div className="relative mt-12 h-[440px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient overlays that don't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Trust mini-icons */}
        <div className="mt-10 grid grid-cols-3 items-center gap-6 text-center text-sm text-white/60 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2">
            <Fingerprint className="h-4 w-4 text-blue-300" /> Biometric-first
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4 text-blue-300" /> End-to-end encrypted
          </div>
          <div className="flex items-center justify-center gap-2">
            <Rocket className="h-4 w-4 text-blue-300" /> Production-ready
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
