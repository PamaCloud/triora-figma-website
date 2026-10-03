import { ArrowRight, ArrowUpRight, Zap } from "@/components/icons";
import { ImageWithLoading } from "@/components/image-with-loading";
import { assets } from "@/constants/assets";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <div className="hero-section__inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span aria-hidden="true" className="hero-kicker__dot" />
            Technology built around your business
          </p>
          <h1 className="font-display text-hero font-semibold tracking-tight text-ink" id="hero-title">
            Building Digital Products{" "}
            <span className="text-wine">That Drive Growth</span>
          </h1>
          <p className="hero-description">
            TrioraLabs helps businesses build modern websites, web applications,
            mobile apps, cloud infrastructure, and high-performance digital
            marketing campaigns.
          </p>
          <div className="hero-actions">
            <a className="button-link button-link--primary" href="#contact">
              Get Started
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a className="text-link" href="#portfolio">
              View Portfolio
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="hero-assurances">
            <span>Trusted delivery</span>
            <span>Clear communication</span>
            <span>Measurable outcomes</span>
          </div>
        </div>

        <div className="hero-visual">
          <ImageWithLoading
            alt="A bright, modern workspace with a digital product dashboard"
            className="hero-image"
            priority
            sizes="(min-width: 64rem) 45vw, (min-width: 48rem) 88vw, 88vw"
            src={assets.hero}
          />
          <div className="launch-card">
            <div className="launch-card__top">
              <span className="launch-card__icon">
                <Zap aria-hidden="true" className="size-4" />
              </span>
              <span className="launch-card__status">On track</span>
            </div>
            <p className="launch-card__label">Launch readiness</p>
            <div
              aria-label="84 percent launch readiness"
              className="launch-progress"
              role="img"
            >
              <span />
            </div>
            <div className="launch-card__bottom">
              <span>Production release</span>
              <strong>84%</strong>
            </div>
          </div>
          <span aria-hidden="true" className="hero-orbit hero-orbit--one" />
          <span aria-hidden="true" className="hero-orbit hero-orbit--two" />
        </div>
      </div>
    </section>
  );
}
