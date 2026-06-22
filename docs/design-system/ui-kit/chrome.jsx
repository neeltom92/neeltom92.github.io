/* Portfolio UI kit — shared chrome: Atmosphere, Nav, Footer, SectionTitle. */
const { StatusDot } = window.CodeworksStatusPageDesignSystem_666a0c;

function Atmosphere() {
  return (
    <React.Fragment>
      <div className="fx-grain" aria-hidden="true"></div>
      <div className="fx-scan" aria-hidden="true"></div>
      <div className="fx-glow" aria-hidden="true"></div>
    </React.Fragment>
  );
}

function Nav({ route, go }) {
  return (
    <header className="kit-nav">
      <div className="kit-nav__in">
        <a className="kit-nav__brand" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>
          <StatusDot size={8} /> neel<span style={{ color: "var(--muted)" }}>.thelly</span>
        </a>
        <nav className="kit-nav__links" aria-label="primary">
          {window.DATA.nav.map((it) => (
            <a key={it.idx} className={"kit-nav__link" + (route === it.id ? " is-active" : "")}
               href={"#" + it.id} onClick={(e) => { e.preventDefault(); go(it.id); }}>
              <span className="kit-nav__idx">{it.idx}</span>{it.name}
            </a>
          ))}
        </nav>
        <a className="kit-nav__cta" href="#contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Get in touch ↗</a>
      </div>
    </header>
  );
}

function Footer({ go }) {
  const year = new Date().getFullYear();
  return (
    <footer className="kit-foot">
      <div className="kit-foot__in">
        <div className="kit-foot__brand">
          <span className="kit-foot__big">NEEL THOMAS THELLY</span>
          <span className="kit-foot__tag">// reliable systems — now with AI in the loop</span>
        </div>
        <div className="kit-foot__grid">
          <div className="kit-foot__col">
            <span className="kit-foot__k">elsewhere</span>
            <a href="https://github.com/neeltom92" target="_blank" rel="noopener">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/neel-thomas-thelly-646a27131/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href="https://medium.com/@neeltom92" target="_blank" rel="noopener">Medium ↗</a>
            <a href="https://twitter.com/NEELTHOMAS11" target="_blank" rel="noopener">X / Twitter ↗</a>
          </div>
          <div className="kit-foot__col">
            <span className="kit-foot__k">direct</span>
            <a href="mailto:neeltom92@gmail.com">neeltom92@gmail.com</a>
            <span className="kit-foot__loc">Mesa, AZ · remote</span>
            <span className="kit-foot__loc"><span className="kit-foot__live"></span> available for work</span>
          </div>
        </div>
        <div className="kit-foot__base">
          <span>© {year} Neel Thomas Thelly</span>
          <span>built with Astro · deployed on Cloudflare</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Atmosphere, Nav, Footer });
