import { caseStudies } from "@/constants/site-content";
import { ButtonLink } from "@/components/button-link";
import { EmptyState } from "@/components/empty-state";
import { ImageWithLoading } from "@/components/image-with-loading";
import { SectionHeading } from "@/components/section-heading";

export function PortfolioSection() {
  return (
    <section aria-labelledby="portfolio-title" className="section section--portfolio" id="portfolio">
      <div className="section-container">
        <div className="section-heading-row">
          <SectionHeading
            className="section-heading--wide"
            description="A selection of product, platform, commerce, mobile, and growth work shaped around measurable goals."
            eyebrow="Selected work"
            title="Products that move the business forward."
            titleId="portfolio-title"
          />
          <ButtonLink href="#contact" variant="secondary">
            View Portfolio
          </ButtonLink>
        </div>
        {caseStudies.length > 0 ? (
          <ul className="portfolio-grid">
            {caseStudies.map((project) => (
              <li className="portfolio-card" key={project.title}>
                <ImageWithLoading
                  alt={project.alt}
                  className={
                    project.featured
                      ? "portfolio-image portfolio-image--featured"
                      : "portfolio-image portfolio-image--compact"
                  }
                  sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 44vw, 90vw"
                  src={project.image}
                />
                <div className="portfolio-card__body">
                  <div className="portfolio-card__meta">
                    <span className="eyebrow">{project.category}</span>
                    <span className="portfolio-metric">{project.metric}</span>
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            description="New projects are on the way. Get in touch to talk about what we could build together."
            title="No projects to show just yet"
          />
        )}
      </div>
    </section>
  );
}
