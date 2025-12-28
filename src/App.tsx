import NavBar from "./components/NavBar";
import { useReveal } from "./hooks/useReveal";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="sectionInner">
        <h2 data-reveal>{title}</h2>
        <div className="sectionBody" data-reveal>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();

  return (
    <div className="page">
      <NavBar />

      <main>
        <section id="home" className="hero">
          <div className="heroGlow" aria-hidden="true" />
          <div className="heroInner">
            <h1 data-reveal>DoveMox</h1>
            <p className="sub" data-reveal>
              Clean UX, strong visuals, and scalable builds — from ideation to creation.
            </p>

            <div className="row" data-reveal>
              <a className="btn primary" href="#contact">
                Contact
              </a>
              <a className="btn" href="#about">
                About
              </a>
              <a className="btn" href="#subscription">
                Subscription
              </a>
            </div>

            <div className="heroCards" data-reveal>
              <div className="card">
                <h3>Design-first</h3>
                <p>Interfaces that feel intentional and easy to use.</p>
              </div>
              <div className="card">
                <h3>Build clean</h3>
                <p>Organized components, fast performance, scalable structure.</p>
              </div>
              <div className="card">
                <h3>Ship confidently</h3>
                <p>Solid foundation now — deploy-ready later.</p>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <p>
            DoveMox is a creative-tech studio vibe: design-first, code-clean, and built for growth.
            We focus on clarity, usability, and strong visual storytelling.
          </p>

          <ul className="list">
            <li>Discovery → goals, audience, success metrics</li>
            <li>UX/UI → wireframes, flows, hi-fi screens</li>
            <li>Build → components, responsiveness, performance</li>
            <li>Launch → SEO basics, deployment, iteration</li>
          </ul>
        </Section>

        <Section id="subscription" title="Subscription">
          <div className="grid">
            <div className="card">
              <h3>Starter</h3>
              <p className="price">$9/mo</p>
              <ul className="list">
                <li>Monthly updates</li>
                <li>Early access drops</li>
                <li>Email support</li>
              </ul>
              <button className="btn" type="button">
                Select
              </button>
            </div>

            <div className="card">
              <h3>Pro</h3>
              <p className="price">$29/mo</p>
              <ul className="list">
                <li>Everything in Starter</li>
                <li>Priority requests</li>
                <li>Quarterly consult</li>
              </ul>
              <button className="btn primary" type="button">
                Select
              </button>
            </div>

            <div className="card">
              <h3>Studio</h3>
              <p className="price">$99/mo</p>
              <ul className="list">
                <li>Custom support</li>
                <li>Design + dev help</li>
                <li>Brand/content guidance</li>
              </ul>
              <button className="btn" type="button">
                Select
              </button>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>

            <label>
              Message
              <textarea name="message" placeholder="What are you building?" rows={6} required />
            </label>

            <button className="btn primary" type="submit">
              Send
            </button>

            <p className="tiny">(Local-only for now. We can wire this up later.)</p>
          </form>
        </Section>
      </main>

      {/* Sticky CTA */}
      <a className="stickyCta" href="#contact" aria-label="Jump to Contact">
        Contact
      </a>

      <footer className="footer">© {new Date().getFullYear()} DoveMox</footer>
    </div>
  );
}
