import { useEffect, useState } from "react";
import "./SplashScreen.css";

type Props = {
  onDone: () => void;
};

export default function SplashScreen({ onDone }: Props) {
  const [fadeOut, setFadeOut] = useState(false);

  const finish = () => {
    setFadeOut(true);
    window.setTimeout(onDone, 300); // MUST match CSS transition
  };

  useEffect(() => {
    // ⏱️ reveal early instead of waiting full animation
    const revealTime = 1500; // adjust: 1200–1800 sweet spot
    const timer = setTimeout(finish, revealTime);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`splash ${fadeOut ? "fadeOut" : ""}`}>
      <video
        className="splashVideo"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        {/* ✅ correct MIME type */}
        <source src="/splash/Dove_Moxie.webm" type="video/webm" />
      </video>

      <button
        className="splashSkip"
        onClick={finish}
        type="button"
        aria-label="Skip intro"
      >
        Skip
      </button>
    </div>
  );
}
