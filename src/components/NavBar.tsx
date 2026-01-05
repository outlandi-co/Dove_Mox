import { useEffect, useMemo, useState } from "react";
import "./NavBar.css";
import DoveMoxie from "../images/DOVE_MOXIE.png";

type SectionId = "home" | "about" | "subscription" | "contact";

export default function NavBar() {
  const sections = useMemo<SectionId[]>(
    () => ["home", "about", "subscription", "contact"],
    []
  );

  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) {
          setActive(visible.target.id as SectionId);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.15, 0.25, 0.4, 0.55, 0.7],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="navWrap">
      <div className="navInner">
        <a href="#home" className="brand" aria-label="Go to top">
          <div className="logo">
            <img
              src={DoveMoxie}
              alt="DoveMoxie logo"
              className="logoImg"
            />
          </div>

          <div className="brandText">
            <div className="brandName">DoveMox</div>
            <div className="brandTag">From Ideation to Creation</div>
          </div>
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          <a className={active === "home" ? "active" : ""} href="#home">
            Home
          </a>
          <a className={active === "about" ? "active" : ""} href="#about">
            About
          </a>
          <a
            className={active === "subscription" ? "active" : ""}
            href="#subscription"
          >
            Subscription
          </a>
          <a className={active === "contact" ? "active" : ""} href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
