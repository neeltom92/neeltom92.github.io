/* Portfolio UI kit — Home screen: hero + projects + experience + skills + closing. */
const {
  Button: HButton, Eyebrow: HEyebrow, StatusDot: HDot, ReadoutPanel: HPanel,
  ProjectCard: HProject, TimelineItem: HTimeline, SkillCard: HSkill,
} = window.CodeworksStatusPageDesignSystem_666a0c;

function Home({ go }) {
  const D = window.DATA;
  return (
    <React.Fragment>
      {/* HERO */}
      <section className="kit-hero">
        <div className="wrap">
          <div className="kit-hero__top reveal">
            <span className="kit-hero__live"><HDot size={8} /> all systems operational</span>
            <span className="kit-hero__sep">/</span>
            <span>open to senior SRE · platform · AI-infra roles</span>
            <span className="kit-hero__right">Mesa, AZ · remote · 2015 → now</span>
          </div>

          <div className="kit-hero__grid">
            <div>
              <h1 className="kit-hero__name reveal" data-d="1">
                <span>Neel</span><span>Thomas</span><span className="accent">Thelly</span>
              </h1>
              <p className="kit-hero__role reveal" data-d="2"><b>devops</b> <span className="tick">·</span> <b>sre</b> <span className="tick">·</span> <b>aiops</b> engineer</p>
              <p className="kit-hero__sub reveal" data-d="3">
                I keep large-scale, cloud-native systems reliable — and I'm now putting
                LLMs to work inside production SRE workflows through MCP and AIOps.
              </p>
              <div className="kit-btn-row reveal" data-d="4">
                <HButton variant="primary" href="#resume" onClick={(e) => { e.preventDefault(); go("resume"); }}>View résumé</HButton>
                <HButton href="#resume" onClick={(e) => { e.preventDefault(); go("resume"); }}>↓ Download PDF</HButton>
                <HButton href="https://github.com/neeltom92" target="_blank" rel="noopener">GitHub ↗</HButton>
                <HButton href="https://www.linkedin.com/in/neel-thomas-thelly-646a27131/" target="_blank" rel="noopener">LinkedIn ↗</HButton>
              </div>
            </div>
            <aside aria-label="profile summary" className="reveal" data-d="4">
              <HPanel title="service summary" rows={D.summary} />
            </aside>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="kit-sec">
        <div className="wrap">
          <HEyebrow className="reveal">Components · AI-Core / AIOps</HEyebrow>
          <h2 className="kit-sec__title reveal" data-d="1">Putting LLMs to work in production SRE workflows</h2>
          <p className="kit-sec__intro reveal" data-d="2">
            Tools I built at Life360 to drive AI adoption across infrastructure —
            Eagle-Eye is open-sourced as an MCP server with growing community traction.
          </p>
          <div className="kit-proj-grid reveal" data-d="2">
            {D.projects.map((p, i) => (
              <HProject key={p.title} index={i + 1} tag={p.tag} oss={p.oss}
                title={p.title} desc={p.desc} stack={p.stack} href={p.href || undefined}
                style={i === D.projects.length - 1 && D.projects.length % 2 === 1 ? { gridColumn: "1 / -1" } : null} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="kit-sec">
        <div className="wrap">
          <HEyebrow className="reveal">Uptime history · career log</HEyebrow>
          <h2 className="kit-sec__title reveal" data-d="1">A decade keeping systems up</h2>
          <div className="kit-tl reveal" data-d="2">
            {D.roles.map((r, i) => (
              <HTimeline key={r.when} when={r.when} role={r.role} co={r.co}
                current={i < 2} last={i === D.roles.length - 1}>
                {r.desc}
              </HTimeline>
            ))}
          </div>
          <p className="kit-tl__legend">▮ operational — every role shipped and stayed up.</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="kit-sec">
        <div className="wrap">
          <HEyebrow className="reveal">Monitored systems · toolchain</HEyebrow>
          <h2 className="kit-sec__title reveal" data-d="1">Skills</h2>
          <div className="kit-skills reveal" data-d="2">
            {D.skills.map((g) => <HSkill key={g.h} heading={g.h} items={g.tags} />)}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="kit-cta">
        <div className="wrap">
          <HEyebrow className="reveal" style={{ justifyContent: "center" }}>Get in touch</HEyebrow>
          <h2 className="kit-cta__title reveal" data-d="1">Reliable systems —<br /><span className="accent">now with AI in the loop.</span></h2>
          <p className="reveal" data-d="2">Open to senior SRE, platform and AI-infrastructure roles. Email is the fastest way to reach me.</p>
          <div className="kit-btn-row kit-btn-row--center reveal" data-d="3">
            <HButton variant="primary" href="mailto:neeltom92@gmail.com">neeltom92@gmail.com</HButton>
            <HButton href="#resume" onClick={(e) => { e.preventDefault(); go("resume"); }}>View résumé</HButton>
            <HButton href="https://github.com/neeltom92" target="_blank" rel="noopener">GitHub ↗</HButton>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { Home });
