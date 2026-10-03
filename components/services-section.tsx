import { services } from "@/constants/site-content";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/icons";

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="section section--services" id="services">
      <div className="section-container">
        <div className="section-heading-row">
          <SectionHeading
            className="section-heading--wide"
            description="From the first product decision to infrastructure and demand generation, our teams work as one."
            eyebrow="What we do"
            title="One partner. Every digital capability."
            titleId="services-title"
          />
          <p aria-label={`${services.length} focused services`} className="services-count">
            <span>{String(services.length).padStart(2, "0")}</span>
            focused services
          </p>
        </div>
        <ul className="service-grid">
          {services.map((service, index) => (
            <li className="service-card" key={service.title}>
              <div className="service-card__top">
                <span aria-hidden="true" className="service-card__icon">
                  <ServiceIcon className="size-5" name={service.icon} />
                </span>
                <span className="service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
