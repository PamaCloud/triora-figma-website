import { ArrowUpRight, Sparkles } from "lucide-react";
import { ImageWithLoading } from "@/components/image-with-loading";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { assets } from "@/constants/assets";

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="section section--about" id="about">
      <div className="section-container about-layout">
        <div className="about-visual-wrap">
          <ImageWithLoading
            alt="The TrioraLabs team collaborating around a product strategy"
            className="about-image"
            sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 88vw, 90vw"
            src={assets.about}
          />
          <div className="about-stamp">
            <Sparkles aria-hidden="true" className="size-4" />
            <span>Strategy + craft</span>
          </div>
          <div className="about-image-caption">
            <span className="about-image-caption__dot" />
            Aligned from day one
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="About TrioraLabs"
            title="Your strategic technology partner—not just another vendor."
            titleId="about-title"
          />
          <p>
            TrioraLabs helps leaders turn opportunity into dependable digital
            products. We ask the business questions first, translate complexity
            into a clear plan, and bring the right mix of design, engineering,
            cloud, and growth expertise to deliver it.
          </p>
          <ul className="about-values">
            <li>
              <span aria-hidden="true">01</span>
              Clear decisions
            </li>
            <li>
              <span aria-hidden="true">02</span>
              Senior ownership
            </li>
            <li>
              <span aria-hidden="true">03</span>
              Measurable value
            </li>
          </ul>
          <a className="text-link" href={`mailto:${site.email}?subject=Meet%20TrioraLabs`}>
            Meet TrioraLabs
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
