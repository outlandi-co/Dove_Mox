import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo">DM</div>
          <div>
            <h1 className="title">DoveMox</h1>
            <p className="tagline">From Ideation to Creation</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main" id="home">
        <section className="hero">
          <h2 className="heroTitle">Build something clean. Ship it fast.</h2>
          <p className="heroText">
            DoveMox is a modern web build in Vite + React + TypeScript. We’ll
            evolve this into a full site (pages, styling, and deployment-ready).
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="#contact">Contact</a>
            <a className="btn" href="#work">View Work</a>
          </div>
        </section>

        <section className="section" id="services">
          <h3>Services</h3>
          <div className="grid">
            <div className="card">
              <h4>Web Design</h4>
              <p>UX/UI-focused layouts that feel premium and intentional.</p>
            </div>
            <div className="card">
              <h4>Development</h4>
              <p>React builds that are clean, scalable, and easy to maintain.</p>
            </div>
            <div className="card">
              <h4>Branding</h4>
              <p>Visual identity systems that match your voice and mission.</p>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <h3>Work</h3>
          <p className="muted">
            We can add project cards + images here next.
          </p>
        </section>

        <section className="section" id="contact">
          <h3>Contact</h3>
          <p className="muted">Add your form + email here.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DoveMox</p>
      </footer>
    </div>
  );
}
