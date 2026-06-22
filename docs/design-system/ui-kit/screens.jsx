/* Portfolio UI kit — Contact + Resume + About screens. */
const {
  Button: CButton, Eyebrow: CEyebrow, StatusDot: CDot,
  ReadoutPanel: CPanel, Channel: CChannel, Chip: CChip,
} = window.CodeworksStatusPageDesignSystem_666a0c;

function Contact({ go }) {
  const D = window.DATA;
  return (
    <section className="kit-contact">
      <div className="wrap">
        <div className="kit-contact__grid">
          <div>
            <CEyebrow className="reveal">Contact · channels</CEyebrow>
            <h1 className="kit-contact__title reveal" data-d="1">Let's talk<br />reliability</h1>
            <p className="kit-sec__intro reveal" data-d="2">
              Open to senior SRE, platform and AI-infrastructure roles. Email is the
              fastest way to reach me; I'm also around on the channels below.
            </p>
            <p className="kit-contact__live"><CDot size={8} /> available · usually replies within a day · Mesa, AZ · remote</p>
            <div className="kit-btn-row" style={{ marginTop: "2rem" }}>
              <CButton variant="primary" href="mailto:neeltom92@gmail.com">Email me</CButton>
              <CButton href="https://www.linkedin.com/in/neel-thomas-thelly-646a27131/" target="_blank" rel="noopener">Connect on LinkedIn ↗</CButton>
              <CButton href="#resume" onClick={(e) => { e.preventDefault(); go("resume"); }}>↓ Download résumé</CButton>
            </div>
          </div>
          <CPanel title="reach me">
            {D.channels.map((c, i) => (
              <CChannel key={c.k} label={c.k} value={c.v}
                href={c.href.startsWith("#") ? "#" : c.href}
                external={c.ext}
                onClick={c.href === "#resume" ? (e) => { e.preventDefault(); go("resume"); } : undefined}
                last={i === D.channels.length - 1} />
            ))}
          </CPanel>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const D = window.DATA;
  return (
    <section className="kit-resume">
      <div className="wrap">
        <CEyebrow className="reveal">Document · curriculum vitae</CEyebrow>
        <h1 className="kit-sec__title reveal" data-d="1" style={{ marginBottom: "1.6rem" }}>Résumé</h1>
        <div className="kit-resume__grid">
          <div>
            <div className="kit-btn-row" style={{ marginBottom: "1.1rem" }}>
              <CButton variant="primary" href="#">↓ Download PDF</CButton>
              <CButton href="#">Open raw ↗</CButton>
            </div>
            <div className="kit-resume__frame">
              <div className="kit-resume__doc">
                <span className="kit-resume__docnote">résumé.pdf</span>
                <p>The résumé PDF ships with the live site but isn't bundled into this UI&nbsp;kit. This frame stands in for the embedded document viewer.</p>
                <CDot pulse={false} size={7} />
              </div>
            </div>
          </div>
          <aside aria-label="photo gallery">
            <CEyebrow>Off-duty · field notes</CEyebrow>
            <h2 className="kit-sec__title" style={{ fontSize: "clamp(1.5rem,3.5vw,2.1rem)", marginBottom: "0.5rem" }}>Beyond the terminal</h2>
            <p style={{ color: "var(--ink-2)", fontSize: "0.96rem", margin: 0 }}>
              When I'm not keeping systems up: building, chasing rockets, and exploring the American Southwest.
            </p>
            <div className="kit-gallery">
              {D.gallery.map((g) => (
                <figure key={g.src}>
                  <a href={g.src} target="_blank" rel="noopener"><img src={g.src} alt={g.cap} loading="lazy" /></a>
                  <figcaption>{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function About() {
  const A = window.DATA.about;
  return (
    <section className="kit-prose-page">
      <div className="wrap kit-prose">
        <CEyebrow>Profile · about</CEyebrow>
        <h1 className="kit-prose__h1">About</h1>
        <p>{A.intro}</p>
        <h2>Helped scale</h2>
        <ul>
          {A.scaled.map((x) => <li key={x.co}><strong>{x.co}</strong> — {x.note}</li>)}
        </ul>
        <h2>Built from scratch</h2>
        <ul>
          {A.built.map((x) => <li key={x.co}><strong>{x.co}</strong> — {x.note}</li>)}
        </ul>
        <p>Also advised a number of SaaS portfolio companies affiliated with Together Fund. Thanks for visiting — feel free to reach out with any questions.</p>
      </div>
    </section>
  );
}

Object.assign(window, { Contact, Resume, About });
