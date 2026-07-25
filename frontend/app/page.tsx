"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  Search, 
  FileText, 
  Database, 
  Github, 
  Megaphone, 
  Check, 
  Pause, 
  Image as ImageIcon 
} from "lucide-react";
import { CustomThemeToggler } from "@/components/theme-toggler";
import { InteractiveGridBackground } from "@/components/interactive-grid-background";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"prd" | "arch" | "backlog">("prd");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-base text-text-main font-mono selection:bg-accent selection:text-base">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-base/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-[13px] tracking-widest uppercase cursor-pointer" onClick={() => scrollTo("intent")}>
            BLUEPRINT
          </div>
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold">
            <button onClick={() => scrollTo("intent")} className="hover:text-[#E8A33D] transition-colors">Intent</button>
            <button onClick={() => scrollTo("pipelines")} className="hover:text-[#E8A33D] transition-colors">Pipelines</button>
            <Link href="/start" className="text-[#E8A33D] hover:underline underline-offset-4 decoration-2">Start Pipeline</Link>
            <CustomThemeToggler />
          </div>
        </div>
      </nav>

      <main>
        <section id="intent" className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
          {/* Interactive Blueprint Grid Background */}
          <InteractiveGridBackground />

          {/* Subtle green glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8A33D]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-6">
                The<br />Blueprint<br />
                <span className="text-[#E8A33D]">Engine</span>
              </h1>
              <p className="max-w-lg text-text-muted text-[13px] md:text-sm leading-relaxed mb-10 tracking-wide">
                Initialize an isolated workspace. Provide the core thesis. Submit your idea. Six specialized agents validate it, research the market, and produce the PRD, architecture spec, GitHub backlog, and launch copy you need to start building — the complete foundation, not a deployed app.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/start"
                  className="w-full sm:w-auto bg-[#E8A33D] text-base px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#E8A33D]/90 transition-all text-center border border-[#E8A33D]"
                >
                  Start a Pipeline
                </Link>
                <button
                  onClick={() => scrollTo("pipelines")}
                  className="w-full sm:w-auto bg-panel border border-border-subtle text-text-main px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-border-subtle transition-all text-center"
                >
                  Explore Agents
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="pipelines" className="min-h-screen py-24 px-6 border-t border-border-subtle bg-panel relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">The Engine</h2>
              <div className="text-[11px] text-text-muted uppercase tracking-widest mb-16">Coordinated Execution</div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Startup Advisor", icon: Shield, desc: "Evaluates core thesis & market risks" },
                  { name: "Market Research", icon: Search, desc: "Analyzes competitors & opportunities" },
                  { name: "Product Manager", icon: FileText, desc: "Defines features & roadmaps" },
                  { name: "Architect", icon: Database, desc: "Designs database schemas & API routes" },
                  { name: "Engineering Manager", icon: Github, desc: "Plans sprint tasks & execution blocks" },
                  { name: "Marketing", icon: Megaphone, desc: "Drafts launch copy & campaigns" }
                ].map((agent, i) => (
                  <div key={i} className="border border-border-subtle bg-base p-8 hover:border-[#E8A33D]/30 transition-colors group relative overflow-hidden">
                    <div className="w-12 h-12 border border-border-subtle flex items-center justify-center mb-6 group-hover:border-[#E8A33D]/50 transition-colors">
                      <agent.icon className="w-6 h-6 text-[#E8A33D]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[13px] font-bold uppercase tracking-widest mb-2 group-hover:text-[#E8A33D] transition-colors">{agent.name}</h3>
                    <p className="text-[11px] text-text-muted leading-relaxed">{agent.desc}</p>

                    {/* Subtle corner glow on hover */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E8A33D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 1. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-24 px-6 border-t border-border-subtle bg-base relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">How It Works</h2>
              <div className="text-[11px] text-text-muted uppercase tracking-widest mb-16">Automated Execution with Human Control</div>

              <div className="relative">
                {/* Horizontal connecting line on desktop */}
                <div className="hidden md:block absolute top-12 left-10 right-10 h-[1px] bg-border-subtle z-0" />
                {/* Vertical connecting line on mobile */}
                <div className="block md:hidden absolute left-12 top-10 bottom-10 w-[1px] bg-border-subtle z-0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                  {[
                    {
                      num: "01",
                      title: "Submit Idea",
                      desc: "Define core thesis, target market, and system parameters to seed the workspace.",
                      isGate: false,
                      tags: ["Thesis Input", "Workspace Init"]
                    },
                    {
                      num: "02",
                      title: "6 Agents Run",
                      desc: "Specialized AI agents research risks, benchmark competitors, and draft tech specs.",
                      isGate: false,
                      tags: ["Risk Analysis", "Tech Spec"]
                    },
                    {
                      num: "03",
                      title: "Human Review Gate",
                      desc: "Pipeline pauses at key checkpoints. Inspect outputs, refine requirements, or approve.",
                      isGate: true,
                      tags: ["Approval Gate", "Refinement"]
                    },
                    {
                      num: "04",
                      title: "Outputs",
                      desc: "Receive finalized PRD, architecture spec, GitHub backlog, and launch copy.",
                      isGate: false,
                      tags: ["PRD", "Arch", "Backlog", "Copy"]
                    }
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={`border p-6 md:p-8 bg-panel relative flex flex-col justify-between transition-colors ${
                        step.isGate
                          ? "border-[#E8A33D]/60 shadow-[0_0_30px_rgba(232,163,61,0.08)]"
                          : "border-border-subtle hover:border-[#E8A33D]/30"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className={`w-12 h-12 flex items-center justify-center font-bold text-[13px] tracking-widest ${
                              step.isGate
                                ? "bg-[#E8A33D] text-base border border-[#E8A33D]"
                                : "border border-border-subtle bg-base text-text-main"
                            }`}
                          >
                            {step.num}
                          </div>
                          {step.isGate && (
                            <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-[#E8A33D]/10 text-[#E8A33D] border border-[#E8A33D]/30">
                              Control Gate
                            </span>
                          )}
                        </div>

                        <h3 className={`text-[13px] font-bold uppercase tracking-widest mb-3 ${step.isGate ? "text-[#E8A33D]" : ""}`}>
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-text-muted leading-relaxed mb-6">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
                        {step.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] uppercase tracking-wider font-mono px-2 py-0.5 ${
                              step.isGate
                                ? "bg-[#E8A33D]/15 text-[#E8A33D] border border-[#E8A33D]/20"
                                : "bg-base text-text-muted border border-border-subtle"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SAMPLE OUTPUT PREVIEW SECTION */}
        <section id="sample-outputs" className="py-24 px-6 border-t border-border-subtle bg-panel relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Sample Output Preview</h2>
              <div className="text-[11px] text-text-muted uppercase tracking-widest mb-16">Real Artifact Specifications</div>

              <div className="border border-border-subtle bg-base overflow-hidden">
                {/* File Editor Style Header */}
                <div className="border-b border-border-subtle bg-panel px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-base border border-border-subtle text-[11px] font-mono text-text-main">
                      <FileText className="w-3.5 h-3.5 text-[#E8A33D]" />
                      <span>{activeTab === "prd" ? "PRD_v1.md" : activeTab === "arch" ? "ARCH_v1.md" : "BACKLOG_v1.json"}</span>
                    </div>
                  </div>

                  {/* Tabs Reusing Nav Active Link Style */}
                  <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest font-bold">
                    {[
                      { id: "prd", label: "PRD" },
                      { id: "arch", label: "Architecture Spec" },
                      { id: "backlog", label: "Backlog" }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id as "prd" | "arch" | "backlog")}
                        className={`transition-colors py-1 ${
                          activeTab === t.id
                            ? "text-[#E8A33D] underline underline-offset-4 decoration-2"
                            : "text-text-muted hover:text-text-main"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Editor Content Body - Real Rendered Preview */}
                <div className="p-6 md:p-8 font-mono text-[12px] leading-relaxed text-text-main">
                  {activeTab === "prd" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                        <div className="text-text-muted">// GENERATED BY PRODUCT MANAGER AGENT</div>
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="px-2 py-0.5 bg-panel border border-border-subtle text-text-muted">STATUS: FINALIZED</span>
                          <span className="px-2 py-0.5 bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-[#E8A33D]">VERSION 1.0</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[#E8A33D] font-bold text-base mb-2"># SYSTEM REQUIREMENT SPECIFICATION: SOCIALSPHERE</div>
                        <p className="text-text-muted leading-relaxed">
                          SocialSphere is a decentralized social platform designed for user data ownership, verifiable identity attestations, and autonomous content moderation using zero-knowledge identity assertions.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="p-4 bg-panel border border-border-subtle space-y-3">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8A33D]">1. User Stories &amp; Scope</div>
                          <div className="space-y-2 text-[11px] text-text-muted">
                            <div><strong className="text-text-main">[US-01]</strong> Authenticate via WebAuthn passkeys without passwords.</div>
                            <div><strong className="text-text-main">[US-02]</strong> Sign published content cryptographically to prevent spoofing.</div>
                            <div><strong className="text-text-main">[US-03]</strong> Trigger Human-in-the-Loop review before high-risk changes.</div>
                          </div>
                        </div>

                        <div className="p-4 bg-panel border border-border-subtle space-y-3">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8A33D]">2. Functional Acceptance Criteria</div>
                          <div className="space-y-2 text-[11px]">
                            <div className="flex items-start gap-2">
                              <span className="text-[#E8A33D] font-bold">[FR-01]</span>
                              <span className="text-text-muted">Passkey Auth with fallback magic links (&lt;200ms latency).</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-[#E8A33D] font-bold">[FR-02]</span>
                              <span className="text-text-muted">Real-Time DAG graph state persistence across agent runs.</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-[#E8A33D] font-bold">[FR-03]</span>
                              <span className="text-text-muted">Automatic pause on confidence score &lt; 0.85 for human sign-off.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "arch" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                        <div className="text-text-muted">// GENERATED BY ARCHITECT AGENT</div>
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="px-2 py-0.5 bg-panel border border-border-subtle text-text-muted">STACK: NEXT.JS 15 + FASTAPI</span>
                          <span className="px-2 py-0.5 bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-[#E8A33D]">LANGGRAPH ENGINE</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[#E8A33D] font-bold text-base mb-2"># INFRASTRUCTURE &amp; TOPOLOGY SPECIFICATION</div>
                        <p className="text-text-muted leading-relaxed">
                          Multi-tier asynchronous microservices architecture utilizing FastAPI API gateway, LangGraph stateful DAG engine, Supabase PostgreSQL, and Groq 70B LLM model inference.
                        </p>
                      </div>

                      <div className="p-5 bg-panel border border-border-subtle text-[11px] font-mono leading-relaxed space-y-2 overflow-x-auto">
                        <div className="text-text-muted">+-----------------------------------------------------------------------+</div>
                        <div className="text-[#E8A33D]">| Client Web Layer: Next.js 15 App Router (React 19, Tailwind CSS v4)   |</div>
                        <div className="text-text-muted">+-----------------------------------+-----------------------------------+</div>
                        <div className="text-text-muted pl-36">| HTTP/REST &amp; WebSockets</div>
                        <div className="text-text-muted pl-36">v</div>
                        <div className="text-text-muted">+-----------------------------------------------------------------------+</div>
                        <div className="text-[#E8A33D]">| API Gateway &amp; Orchestrator: FastAPI + LangGraph Execution Engine      |</div>
                        <div className="text-text-muted">+-----------------+-----------------+-----------------+-----------------+</div>
                        <div className="text-text-muted pl-20">|                 |                 |</div>
                        <div className="text-text-muted pl-20">v                 v                 v</div>
                        <div className="flex flex-wrap items-center gap-4 text-text-muted pt-1">
                          <div className="p-2 border border-border-subtle bg-base text-[#3FB950]">[LLM Inference (Groq 70B)]</div>
                          <div className="p-2 border border-border-subtle bg-base text-[#E8A33D]">[Vector Store (pgvector)]</div>
                          <div className="p-2 border border-border-subtle bg-base text-text-main">[State DB (PostgreSQL)]</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "backlog" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                        <div className="text-text-muted">// GENERATED BY ENGINEERING MANAGER AGENT</div>
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="px-2 py-0.5 bg-panel border border-border-subtle text-text-muted">SPRINT 01</span>
                          <span className="px-2 py-0.5 bg-[#E8A33D]/10 border border-[#E8A33D]/30 text-[#E8A33D]">5 TASKS TOTAL</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[#E8A33D] font-bold text-base mb-2"># SPRINT BACKLOG: SPRINT-01 INITIALIZATION</div>
                        <p className="text-text-muted leading-relaxed">
                          Prioritized backlog items generated automatically from PRD functional requirements and architecture dependency trees.
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          { id: "#101", title: "Setup Next.js 15 app router & Tailwind CSS v4 design tokens", priority: "P0 • High", pts: "3 pts", status: "Complete", statusColor: "text-[#3FB950] bg-[#3FB950]/10 border-[#3FB950]/30" },
                          { id: "#102", title: "Implement LangGraph state graph schema & PostgreSQL checkpointing", priority: "P0 • High", pts: "5 pts", status: "Complete", statusColor: "text-[#3FB950] bg-[#3FB950]/10 border-[#3FB950]/30" },
                          { id: "#103", title: "Configure Human Review Gate interrupt_before webhook triggers", priority: "P0 • High", pts: "5 pts", status: "In Progress", statusColor: "text-[#E8A33D] bg-[#E8A33D]/10 border-[#E8A33D]/30" },
                          { id: "#104", title: "Build real-time agent execution SSE event stream & execution graph UI", priority: "P1 • Med", pts: "3 pts", status: "Backlog", statusColor: "text-text-muted bg-panel border-border-subtle" },
                          { id: "#105", title: "Draft product launch copy, press kit, & campaign landing page assets", priority: "P1 • Med", pts: "2 pts", status: "Backlog", statusColor: "text-text-muted bg-panel border-border-subtle" }
                        ].map((item) => (
                          <div key={item.id} className="p-3 bg-panel border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="text-[#E8A33D] font-bold">{item.id}</span>
                              <span className="text-text-main text-[11px]">{item.title}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px]">
                              <span className="px-2 py-0.5 bg-base border border-border-subtle text-text-muted">{item.priority}</span>
                              <span className="px-2 py-0.5 bg-base border border-border-subtle text-text-muted">{item.pts}</span>
                              <span className={`px-2 py-0.5 border font-bold uppercase ${item.statusColor}`}>{item.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. HUMAN-IN-THE-LOOP CALLOUT SECTION */}
        <section id="human-in-the-loop" className="py-24 px-6 border-t border-b border-[#E8A33D]/20 bg-[#E8A33D]/[0.06] dark:bg-[#E8A33D]/10 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Headline & Copy */}
                <div>
                  <div className="text-[11px] text-[#E8A33D] uppercase tracking-widest font-bold mb-2">Human Control Point</div>
                  <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-[1.1] mb-6">
                    Always in Control:<br />
                    <span className="text-[#E8A33D]">Human-in-the-Loop</span>
                  </h2>
                  <p className="text-[13px] text-text-muted leading-relaxed mb-8">
                    Agents propose; you decide. Blueprint never executes without your explicit verification. Review agent recommendations, adjust parameters at key checkpoints, or redirect pipeline logic before moving forward.
                  </p>

                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border border-[#E8A33D] bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-text-main">Zero hallucinated deployments without explicit review</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border border-[#E8A33D] bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-text-main">Full inspection of intermediate agent reasoning & artifacts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border border-[#E8A33D] bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-text-main">Single-click approval or instant pipeline revision prompts</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Pipeline Paused Diagram */}
                <div className="border border-border-subtle bg-base p-6 md:p-8 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-text-muted">Pipeline Execution Trace</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-[#E8A33D] text-base border border-[#E8A33D] flex items-center gap-1.5">
                      <Pause className="w-3 h-3 fill-current" /> Awaiting Approval
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px]">
                    {/* Step 1 */}
                    <div className="flex items-center justify-between p-3 bg-panel border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3FB950]" />
                        <span className="font-bold uppercase text-text-main">01. Startup Advisor</span>
                      </div>
                      <span className="text-[10px] text-[#3FB950] font-bold uppercase">Complete</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center justify-between p-3 bg-panel border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3FB950]" />
                        <span className="font-bold uppercase text-text-main">02. Market Research</span>
                      </div>
                      <span className="text-[10px] text-[#3FB950] font-bold uppercase">Complete</span>
                    </div>

                    {/* Step 3 - Paused Checkpoint */}
                    <div className="flex items-center justify-between p-3 bg-base border-2 border-[#E8A33D]">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D] animate-ping" />
                        <span className="font-bold uppercase text-[#E8A33D]">03. Human Review Gate</span>
                      </div>
                      <span className="text-[10px] text-[#E8A33D] font-bold uppercase">PAUSED</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center justify-between p-3 bg-panel border border-border-subtle opacity-50">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-text-muted" />
                        <span className="font-bold uppercase text-text-muted">04. Product & Architecture Specs</span>
                      </div>
                      <span className="text-[10px] text-text-muted font-bold uppercase">Pending</span>
                    </div>
                  </div>

                  {/* Action Buttons Mockup */}
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <button className="w-full bg-[#E8A33D] text-base py-2.5 text-[10px] font-bold uppercase tracking-widest text-center border border-[#E8A33D] hover:bg-[#E8A33D]/90 transition-colors">
                      Approve & Continue
                    </button>
                    <button className="w-full bg-panel border border-border-subtle text-text-main py-2.5 text-[10px] font-bold uppercase tracking-widest text-center hover:bg-border-subtle transition-colors">
                      Request Revision
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. TECH STACK STRIP SECTION */}
        <section id="tech-stack" className="py-16 px-6 border-t border-border-subtle bg-base text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[11px] text-text-muted uppercase tracking-widest font-bold mb-6">BUILT ON</div>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
                {[
                  "LangGraph",
                  "Groq 70B",
                  "FastAPI",
                  "PostgreSQL",
                  "Pydantic V2"
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="border border-border-subtle bg-base text-text-muted text-[11px] font-mono uppercase tracking-wider px-5 py-2.5 hover:border-[#E8A33D] hover:text-[#E8A33D] transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}