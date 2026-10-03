import { reasons } from "@/constants/site-content";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Headphones, Zap } from "@/components/icons";

export function WhyUsSection() {
  return (
    <section aria-labelledby="why-title" className="section section--why" id="why-trioralabs">
      <div className="section-container why-layout">
        <div className="why-narrative">
          <SectionHeading
            description="We combine product judgment, technical depth, and commercial focus—without the layers and handoffs that slow good work down."
            eyebrow="Why TrioraLabs"
            title="Senior thinking. Hands-on delivery."
            titleId="why-title"
          />
          <figure className="partner-quote">
            <span aria-hidden="true" className="partner-quote__mark">
              “
            </span>
            <blockquote>
              Technology should make the next stage of your business feel
              possible—not complicated.
            </blockquote>
            <figcaption>
              <span aria-hidden="true" className="quote-avatar">T</span>
              <span>
                <strong>The TrioraLabs approach</strong>
                <small>Product-minded partnership</small>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </figcaption>
          </figure>
        </div>
        <ul aria-label="Why work with TrioraLabs" className="reason-list">
          {reasons.map((reason, index) => (
            <li className="reason-item" key={reason.title}>
              <span aria-hidden="true" className="reason-item__icon">
                {index % 2 === 0 ? (
                  <Zap className="size-5" />
                ) : (
                  <Headphones className="size-5" />
                )}
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
              <span aria-hidden="true" className="reason-item__index">
                0{index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
