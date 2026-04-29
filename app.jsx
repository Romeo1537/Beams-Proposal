// Beams 30-60-90 — horizontal scene deck.
// Five full-bleed kitchen scenes with crossfade + Ken Burns + animated text reveals.
// Navigation: arrow keys, scroll wheel, swipe, click arrows, click dots.
const { useEffect, useState, useRef, useCallback } = React;

const SCENES = [
  {
    id: 'hero',
    img: 'assets/kitchen.jpg',
    label: 'Intro',
    type: 'hero',
  },
  {
    id: 'days-1-30',
    img: 'assets/beam-1.jpg',
    label: 'Days 1—30',
    type: 'phase',
    phaseLabel: 'Days 1—30',
    headingParts: [{ text: 'Understand the ' }, { text: 'plumbing.', accent: true }],
    bullets: [
      'Shadow every stage of the delivery pipeline: from signed contract through builder assignment, materials ordering, milestone approvals, and project close. Map the real process, not the documented one.',
      'Identify the top three operational pain points by frequency and severity. Start building the case for what to fix first.',
      'Audit current tools and systems. Understand what data exists, where it lives, and what is being tracked versus what should be.',
    ],
    metrics: [
      { value: '100%', label: 'Pipeline stages shadowed' },
      { value: 'Top 3', label: 'Pain points identified' },
    ],
  },
  {
    id: 'days-30-60',
    img: 'assets/beam-2.jpg',
    label: 'Days 30—60',
    type: 'phase',
    phaseLabel: 'Days 30—60',
    headingParts: [{ text: 'Set the ' }, { text: 'pattern.', accent: true }],
    bullets: [
      'Redesign and ship the highest-priority process fix. Not on paper: live, tested, and adopted. Get buy-in from the team and make it stick.',
      'Take ownership of builder onboarding end to end. Streamline the pipeline from vetting through first project assignment. Become the person builders call.',
      'Build early warning indicators for live projects: delays, milestone slippage, coordination breakdowns. Surface problems before they reach the customer.',
      'Establish a regular operational cadence with cross-functional teams: sales handoff reviews, builder check-ins, project health reporting.',
    ],
    metrics: [
      { value: '1+', label: 'Process shipped live' },
      { value: 'Owned', label: 'Builder onboarding pipeline' },
    ],
  },
  {
    id: 'days-60-90',
    img: 'assets/beam-3.jpg',
    label: 'Days 60—90',
    type: 'phase',
    phaseLabel: 'Days 60—90',
    headingParts: [{ text: 'Open the ' }, { text: 'drawer.', accent: true }],
    bullets: [
      'Processes built in month two are running smoothly and scaling. Iterate based on what the data and builder feedback are telling you.',
      'Root-cause analysis is embedded as a discipline, not a reaction. When something breaks, the system learns. Patterns get fixed, not symptoms.',
      'Operational reporting gives leadership a clear view of project health, builder performance, and delivery quality. Data wins.',
    ],
    metrics: [
      { value: 'Scalable', label: 'Processes running' },
      { value: 'Embedded', label: 'Root-cause discipline' },
    ],
  },
  {
    id: 'experience',
    img: 'assets/beam-4.jpg',
    label: 'Why me',
    type: 'final',
  },
];

const EXP_CARDS = [
  {
    org: 'The Honourable Artillery Company',
    title: 'Assistant Operations Manager',
    body: 'End-to-end event delivery across spaces from 40 to 2,000 capacity. Built an AI-augmented operations system from scratch using Notion and Claude that the team now uses as its default operating system.',
  },
  {
    org: 'Systems Builder',
    title: 'AI-Native Workflow Design',
    body: 'Maintain a full Claude Code workflow for daily planning, automation, and document production. Built a structured job search pipeline with a 100-point scoring system, automated document generation, and live tracking.',
  },
  {
    org: 'Family Catering Business',
    title: 'Multi-Team Delivery Under Pressure',
    body: 'Coordinated independent contractors, suppliers, and staff across live client events where requirements shifted hour by hour. Owned the handoffs, ran the cadence, and solved problems on the floor before they reached the client — the same operational muscle Beams needs to keep builders and projects on track.',
  },
];

function HeroPanel({ go }) {
  return (
    <div className="panel">
      <div className="reveal reveal-d1">
        <div className="pill">
          <span className="dot"/>
          <span>Operations Associate · Beams</span>
        </div>
      </div>
      <h1 className="hero-h reveal reveal-d2">
        Building systems<br/>that scale.
      </h1>
      <p className="scene-sub reveal reveal-d3">
        A 90-day impact plan for Beams, walked through one room at a time —
        from someone who builds operational infrastructure from scratch.
      </p>
      <div className="reveal reveal-d4">
        <button className="btn-primary" onClick={() => go(1)}>
          <span>Step inside</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function PhasePanel({ scene }) {
  return (
    <div className="panel">
      <div className="reveal reveal-d1">
        <div className="phase-label">
          <span className="dot"/>
          <span>{scene.phaseLabel}</span>
        </div>
      </div>
      <h2 className="scene-h reveal reveal-d2">
        {scene.headingParts.map((p, i) =>
          p.accent ? <span key={i} className="accent">{p.text}</span> : <span key={i}>{p.text}</span>
        )}
      </h2>
      <ul className="bullets">
        {scene.bullets.map((b, i) => (
          <li key={i} className={`bullet reveal reveal-d${i+3}`}>
            <span className="bullet-icon"/>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="metrics reveal reveal-d7">
        {scene.metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalPanel() {
  return (
    <div className="final-inner">
      <h2 className="exp-h reveal reveal-d1">Why <span className="accent">me.</span></h2>
      <div className="exp-grid">
        {EXP_CARDS.map((c, i) => (
          <div key={i} className={`exp-card reveal reveal-d${i+2}`}>
            <div className="exp-card-org">{c.org}</div>
            <div className="exp-card-title">{c.title}</div>
            <div className="exp-card-body">{c.body}</div>
          </div>
        ))}
      </div>
      <div className="footer-block reveal reveal-d5">
        <div className="footer-row">
          <div>
            <div className="footer-name">Romeo Lam</div>
            <div className="footer-role">Operations Associate · Beams</div>
          </div>
          <div className="footer-buttons">
            <a className="btn-outline" href="mailto:romeo.lam556@gmail.com">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2.5 4.5l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Email</span>
            </a>
            <a className="btn-outline" href="#" onClick={(e)=>e.preventDefault()}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.5 5.5h2v8h-2v-8zM4.5 2.2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM7 5.5h1.9v1.1h.03c.27-.5.92-1.05 1.9-1.05 2.03 0 2.4 1.34 2.4 3.07v4.38h-2v-3.88c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.02-1.5 2.06v3.95H7V5.5z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="easter-egg">
          “Nothing that you ever do with all your heart is done in vain.”
        </div>
      </div>
    </div>
  );
}

function App() {
  const [active, setActive] = useState(0);
  const lockRef = useRef(false);
  const touchY = useRef(null);
  const touchX = useRef(null);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= SCENES.length) return;
    if (lockRef.current) return;
    lockRef.current = true;
    setActive(idx);
    // hash sync
    if (history.replaceState) history.replaceState(null, '', '#' + SCENES[idx].id);
    setTimeout(() => { lockRef.current = false; }, 750);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault(); next();
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault(); prev();
      } else if (e.key === 'Home') { goTo(0); }
        else if (e.key === 'End') { goTo(SCENES.length - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, goTo]);

  // Wheel — debounced
  useEffect(() => {
    let lastTrigger = 0;
    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastTrigger < 800) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 12) return;
      lastTrigger = now;
      if (delta > 0) next(); else prev();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  // Touch
  useEffect(() => {
    const onStart = (e) => {
      touchY.current = e.touches[0].clientY;
      touchX.current = e.touches[0].clientX;
    };
    const onEnd = (e) => {
      if (touchY.current == null) return;
      const dy = e.changedTouches[0].clientY - touchY.current;
      const dx = e.changedTouches[0].clientX - touchX.current;
      const absY = Math.abs(dy), absX = Math.abs(dx);
      if (Math.max(absY, absX) < 50) return;
      // Vertical swipe up or horizontal swipe left → next
      if (absY > absX) {
        if (dy < 0) next(); else prev();
      } else {
        if (dx < 0) next(); else prev();
      }
      touchY.current = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [next, prev]);

  // Hash on load
  useEffect(() => {
    const h = window.location.hash.replace('#', '');
    const idx = SCENES.findIndex(s => s.id === h);
    if (idx > 0) setActive(idx);
  }, []);

  const progressPct = ((active) / (SCENES.length - 1)) * 100;

  return (
    <>
      {/* Stage with all scenes layered */}
      <div className="stage">
        {SCENES.map((s, i) => (
          <div
            key={s.id}
            className={`scene ${active === i ? 'active' : ''}`}
            data-final={s.type === 'final' ? 'true' : undefined}
          >
            <div className="scene-img" style={{ backgroundImage: `url('${s.img}')` }}/>
            <div className="scene-scrim"/>
            <div className={`scene-content ${s.type === 'final' ? 'final-content' : ''}`}>
              <div className="scene-inner">
                {s.type === 'hero' && <HeroPanel go={goTo}/>}
                {s.type === 'phase' && <PhasePanel scene={s}/>}
                {s.type === 'final' && <FinalPanel/>}
              </div>
            </div>
          </div>
        ))}
        <div className="vignette"/>
        <div className="grain"/>
      </div>

      {/* Progress + nav */}
      <div className="progress-rail">
        <div className="progress-fill" style={{ width: `${progressPct}%` }}/>
      </div>

      <nav className="nav">
        <div className="nav-brand">Romeo Lam <span className="dot">·</span> Beams</div>
        <div className="nav-counter">
          <span className="now">{String(active + 1).padStart(2, '0')}</span>
          <span> / {String(SCENES.length).padStart(2, '0')}</span>
        </div>
      </nav>

      {/* Side dots */}
      <div className="scene-dots" aria-hidden="false">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            className={`scene-dot ${active === i ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={s.label}
          >
            <span className="scene-dot-label">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow prev" onClick={prev} disabled={active === 0} aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="arrow next" onClick={next} disabled={active === SCENES.length - 1} aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Hint */}
      <div className="hint">
        <div className="keys">
          <span className="key">←</span>
          <span className="key">→</span>
        </div>
        <span>or scroll · swipe</span>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
