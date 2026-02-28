"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedSection from "@/components/AnimatedSection";
import TechBadge from "@/components/TechBadge";
import EngagementCard from "@/components/EngagementCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import TypewriterText from "@/components/TypewriterText";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  {ssr: false}
);

const techStack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Modern PaaS",
  "PostgreSQL",
  "Redis",
  "MarTech",
  ".Net",
  "Kotlin",
  "Flutter",
  "React-Native",
  "Stripe"
];

const engagements = [
  {
    title: "Engineering Team Scale-up",
    challenge:
      "Nascent telehealth company lacked engineering rigor, needed to balance cleanup from a rushed launch with necessary features",
    solution:
      "Established ways of working, PR review process, QA, robust asynchronous processing, and software delivery process",
    impact:
      "Company scaled to 8-figure ARR, 100% engineer retention, and sustained quality at scale",
  },
  {
    title: "Immersive Digital Experience",
    challenge:
      "Deliver an immersive app blending video transitions, animated backgrounds, and headless CMS—on a tight runway",
    solution:
      "Built end-to-end with Contentful, Cognito auth, and custom full-screen video transitions with animated color swirl backgrounds",
    impact:
      "Launched on time, bug-free, with smooth visual polish that delighted users",
  },
  {
    title: "Marketing Technology",
    challenge:
      "Healthcare company needed accurate conversion tracking while navigating strict privacy and compliance requirements",
    solution:
      "Implemented server-side tracking infrastructure, bypassing client-side limitations and ensuring HIPAA-compliant data flow",
    impact:
      "Full-funnel attribution visibility, improved ad spend efficiency, and zero compliance incidents",
  },
];

const testimonials = [
  {
    quote:
      "Lucas joined us when we were a scrappy team of three engineers with big ambitions but no real process. Within six months, he'd helped us build out a robust CI/CD pipeline, establish code review practices that actually stuck, and architect a system that could handle 10x our traffic. More importantly, he mentored our junior devs in a way that made them genuinely better engineers. When he eventually rolled off, we had a team that could stand on its own.",
    name: "Jane Smith",
    role: "CTO",
    company: "TechCorp",
  },
  {
    quote:
      "When Lucas came on board, we had a product held together by duct tape and caffeine. He didn't just write software, he built the foundation that let us scale without losing our velocity or culture. The processes he put in place meant we never lost a single engineer to burnout or frustration, even as we grew to 8-figure ARR. I've worked with a lot of technical leaders, but Lucas is the rare one who can see both the architecture and the people.",
    name: "Michael Chen",
    role: "CEO",
    company: "StartupCo",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "GrowthLabs",
  },
];

export default function Home() {
  return (
    <>
      <ParticleBackground/>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
            <TypewriterText
              text="Technical Leadership, Software Craftsmanship"
              className="text-glow-cyan"
            />
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10">
            Kinetic Codes helps startups and scale-ups build reliable systems and
            high-performing engineering teams.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-neon-cyan text-background font-bold rounded-lg hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all"
            >
              Get in Touch
            </a>
            <a
              href="https://cal.com/lucas-gray-zyglbi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neon-magenta/20 text-neon-magenta font-bold rounded-lg hover:bg-neon-magenta/40 transition-all duration-150"
            >
              Book My Calendar
            </a>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection
          className="py-24 px-6 bg-white text-background border-y border-gray-300 shadow-[inset_0_15px_20px_-15px_rgba(0,0,0,0.35),inset_0_-15px_20px_-15px_rgba(0,0,0,0.35)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:hidden">
              About Me
            </h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-12 md:justify-center mb-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center md:mt-24">
                <div className="w-56 h-56 relative rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/lucas-color-pop.jpg"
                    alt="Lucas Gray"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="-mt-6 rounded overflow-hidden shadow-md border border-red-700 relative z-10 scale-90">
                  <div className="bg-red-600 px-3 py-0.5">
                    <p className="text-white text-[8px] font-bold tracking-wider uppercase">Hello, my name is</p>
                  </div>
                  <div className="bg-white px-3 py-1.5">
                    <p className="text-sm font-bold text-gray-800">Lucas Gray</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="hidden md:block text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
                <p className="text-lg text-background/70 leading-relaxed mb-6">
                  With almost 20 years building software products and leading engineering
                  teams, I bring deep technical expertise and practical leadership to
                  complex challenges. I specialize in system architecture, team building,
                  and 0-to-1 scaling.
                </p>
                <p className="text-lg text-background/70 leading-relaxed mb-6">
                  I work as a player-coach team lead, fractional principal engineer, or technical advisor—embedded
                  with your team for as long as you need.
                </p>
                <p className="text-lg text-background/70 leading-relaxed">
                  Based in Madison, WI 🦡
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {techStack.map((tech, index) => (
                <TechBadge key={tech} name={tech} index={index}/>
              ))}
            </div>

            <p className="text-center">
              <a
                href="https://lucasegray.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 hover:underline transition-all"
              >
                See my personal projects →
              </a>
            </p>
          </div>
        </AnimatedSection>

        {/* Engagements Section */}
        <AnimatedSection
          className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Engagement Examples
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              A sampling of challenges I&apos;ve helped teams solve
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagements.map((engagement, index) => (
                <EngagementCard key={engagement.title} {...engagement} index={index}/>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Kinetic Section */}
        <AnimatedSection
          className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 border-y border-cyan-800 shadow-[0_15px_20px_-15px_rgba(0,0,0,0.35)]">
          {/* Hexagon pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                <path
                  d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 100L0 84L0 50L28 34L56 50L56 84L28 100Z"
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.5)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neon-cyan">
              Why Kinetic?
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Always in motion. Building systems that anticipate change. Every ounce of
              energy directed towards the right solve, the first time.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-neon-cyan border-t border-cyan-700/50 pt-6 mt-6">
              That&apos;s the kinetic way.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <div className="bg-white">
          <AnimatedSection
            className="py-24 px-6 text-background border-y border-gray-300 shadow-[inset_0_-15px_20px_-15px_rgba(0,0,0,0.35)]">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What People Say
            </h2>
            <p className="text-background/70 text-center mb-12">
              From clients and colleagues I&apos;ve worked with
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} {...testimonial} index={index}/>
              ))}
            </div>
          </div>
        </AnimatedSection>
        </div>

        {/* Contact Section */}
        <AnimatedSection id="contact"
                         className="py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Let&apos;s Talk
            </h2>
            <p className="text-muted text-center mb-12">
              Have a challenge? Let&apos;s discuss how I can help.
            </p>
            <ContactForm/>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="py-16 px-6 bg-black/30 border-t border-cyan-900/50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Kinetic.codes. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="mailto:hello@kinetic.codes"
                className="text-neon-cyan/70 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all"
              >
                Email
              </a>
              <a
                href="https://github.com/lucasgray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan/70 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-gray-6169403/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan/70 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://lucasegray.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan/70 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all"
              >
                Blog
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
