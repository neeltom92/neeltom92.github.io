/* Portfolio UI kit — content lifted verbatim from the live site (index/contact/resume). */
window.DATA = {
  nav: [
    { name: "About", id: "about", idx: "01" },
    { name: "Projects", id: "home", idx: "02" },
    { name: "Contact", id: "contact", idx: "03" },
    { name: "Resume", id: "resume", idx: "04" },
  ],

  summary: [
    { k: "status", v: "available", ok: true },
    { k: "experience", v: "10+ years" },
    { k: "scale", v: "100M+ users" },
    { k: "domain", v: "SRE · observability" },
    { k: "focus", v: "AI infra · MCP" },
    { k: "current", v: "Life360" },
  ],

  projects: [
    { tag: "open source · MCP server", oss: true, href: "https://github.com/neeltom92",
      title: "SRE Copilot",
      desc: "AI observability assistant for root-cause analysis. Ask in plain language and it queries metrics, logs and traces across Datadog APM, Kubernetes and PagerDuty.",
      stack: ["Claude Sonnet", "LangGraph", "Datadog", "Kubernetes", "MCP"] },
    { tag: "open source · MCP server · 10+ ★", oss: true, href: "https://github.com/neeltom92",
      title: "Eagle-Eye",
      desc: "A single pane of glass for on-call engineers — unifies metrics, logs, alerts and debugging context so responders stop tab-hopping during incidents.",
      stack: ["Observability", "MCP", "Incident response", "On-call"] },
    { tag: "open source · observability", oss: true, href: "https://github.com/neeltom92/claude-code-observability",
      title: "Claude Code Observability",
      desc: "Self-hosted Grafana + OTEL stack that tracks Claude Code CLI cost and token usage — and uniquely captures skill/tool invocation analytics. Local only — no SaaS, no data leaves your machine.",
      stack: ["Grafana", "OpenTelemetry", "Prometheus", "Loki", "Docker"] },
    { tag: "capacity planning", oss: false, href: null,
      title: "Forecasting MCP",
      desc: "A capacity-planning MCP over Datadog time-series and Prophet that forecasts traffic spikes and sizes CPU, memory and HPA ahead of peak events.",
      stack: ["Prophet", "Time-series", "HPA", "Forecasting"] },
    { tag: "internal platform", oss: false, href: null,
      title: "SLICK — Streamlit One-Click",
      desc: "A vibe-coding platform on top of the existing GitOps stack for one-click deploys of AI apps. Adopted by 10+ internal teams; biggest win in Ads & Marketing.",
      stack: ["Streamlit", "GitOps", "Databricks MCP", "Function calling"] },
  ],

  roles: [
    { when: "Aug 2025 — Present", role: "Sr Software Engineer, DevOps", co: "Life360",
      desc: "Cloud Success team — CI/CD, observability and release pipelines. Built Eagle-Eye (open-sourced MCP server, 10+ stars), a Prophet-based capacity-planning MCP and the SLICK platform; evaluated 30+ AI dev tools and provisioned a dedicated EKS cluster for MCP workloads." },
    { when: "Jun 2023 — Jul 2025", role: "Sr Software Engineer, Network Operations", co: "Life360",
      desc: "Owned observability for 125+ Kubernetes services supporting 100M+ users. Replaced logging agents with Vector (6TB+/day), ran Prometheus on EKS, and led an OpenTelemetry PoC and eBPF service mapping." },
    { when: "Nov 2022 — May 2023", role: "DevOps Engineer", co: "Dview.io",
      desc: "Founding engineer at a pre-seed data platform. Built full AWS infra with Terraform/Terragrunt/Atlantis, multi-region EKS, ArgoCD GitOps and SLI/SLO frameworks." },
    { when: "May 2022 — Nov 2022", role: "DevOps Consultant", co: "Freelance",
      desc: "End-to-end cloud & Kubernetes infrastructure for startups; DevOps advisory to 5+ SaaS portfolio companies under Together Fund." },
    { when: "Apr 2021 — May 2022", role: "Site Reliability Engineer", co: "Zolve",
      desc: "Built the entire cloud + Kubernetes platform for a $210M neobank — 20+ microservices on multi-region EKS, CI/CD, GitOps and Prometheus/Grafana observability." },
    { when: "Sep 2019 — Sep 2020", role: "Site Reliability Engineer", co: "Careem (an Uber company)",
      desc: "Delivered AWS cost optimizations saving $336K/yr for Careem Pay. Migrated production from Elastic Beanstalk to EKS; 24/7 on-call." },
    { when: "Oct 2017 — Aug 2019", role: "DevOps Engineer", co: "Ola Cabs",
      desc: "Ran large-scale CI/CD on Jenkins + Mesos; migrated payment workloads AWS→Azure for ~20% infra savings." },
    { when: "May 2015 — Sep 2017", role: "Linux System Engineer", co: "Poornam Info Vision",
      desc: "Linux administration for 25+ global clients; handled security incidents — spam, spoofing and intrusion mitigation." },
  ],

  skills: [
    { h: "Languages & IaC", tags: ["Go", "Bash", "Terraform", "Terragrunt", "CloudFormation"] },
    { h: "Cloud & Kubernetes", tags: ["AWS", "Azure", "EKS", "ArgoCD", "Argo Rollouts", "KEDA", "Kyverno", "Istio", "Karpenter"] },
    { h: "Observability", tags: ["Prometheus", "Grafana", "Datadog", "New Relic", "Vector", "OpenTelemetry", "eBPF"] },
    { h: "AI Infrastructure", tags: ["MCP", "Claude", "LangGraph", "RAG", "Prophet", "Langfuse", "Streamlit"] },
  ],

  channels: [
    { k: "Email", v: "neeltom92@gmail.com", href: "mailto:neeltom92@gmail.com", ext: false },
    { k: "LinkedIn", v: "in/neel-thomas-thelly", href: "https://www.linkedin.com/in/neel-thomas-thelly-646a27131/", ext: true },
    { k: "GitHub", v: "@neeltom92", href: "https://github.com/neeltom92", ext: true },
    { k: "Medium", v: "@neeltom92", href: "https://medium.com/@neeltom92", ext: true },
    { k: "X / Twitter", v: "@NEELTHOMAS11", href: "https://twitter.com/NEELTHOMAS11", ext: true },
    { k: "Résumé", v: "view online", href: "#resume", ext: false },
  ],

  gallery: [
    { src: "../../assets/images/gallery/desk.jpg", cap: "Home setup — heads-down" },
    { src: "../../assets/images/gallery/shuttle.jpg", cap: "Space Shuttle Independence" },
    { src: "../../assets/images/gallery/astronaut.jpg", cap: "Suiting up · Space Center" },
    { src: "../../assets/images/gallery/hooverdam.jpg", cap: "Hoover Dam bypass bridge" },
    { src: "../../assets/images/gallery/grandcanyon.jpg", cap: "Grand Canyon, Arizona" },
  ],

  about: {
    intro: "Hello and welcome. I'm Neel Thomas Thelly, a senior DevOps / SRE / AIOps engineer based in Arizona, USA. With over a decade in the industry I've had the privilege of working with companies across India, the UAE and France — starting my career in web hosting and server support in Kochi, India.",
    scaled: [
      { co: "Life360", note: "Publicly traded family-safety company · 60M+ customers worldwide · San Mateo, CA" },
      { co: "Ola Cabs", note: "Mobility startup valued at $6B · Bangalore, India" },
      { co: "Careem (Uber)", note: "An Uber company · Dubai, U.A.E." },
      { co: "Scaleway", note: "2nd largest cloud provider in Europe · Paris, France" },
    ],
    built: [
      { co: "Zolve", note: "Neobank valued at $210M · US & India" },
      { co: "Arcab", note: "Mobility company · Dubai" },
      { co: "Dview", note: "Data platform — a Fivetran / HevoData alternative" },
    ],
  },
};
