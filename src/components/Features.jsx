import React from 'react';
import { Fingerprint, Shield, Lock, Clock } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Native biometrics',
    desc: 'Touch ID, Face ID, and platform passkeys with graceful fallbacks — no passwords to remember.'
  },
  {
    icon: Shield,
    title: 'Zero secret exposure',
    desc: 'Keys never leave the device. We handle attestation and signature verification server-side.'
  },
  {
    icon: Lock,
    title: 'Compliance built-in',
    desc: 'SOC 2 practices by design. Audit trails and risk signals available out of the box.'
  },
  {
    icon: Clock,
    title: 'Under 1 minute setup',
    desc: 'Drop in the SDK and ship in minutes. Framework starters and copy‑paste snippets included.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for teams that ship</h2>
          <p className="mt-3 text-base text-white/70">Production-grade auth without the ceremony. Simple for devs, delightful for users.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
