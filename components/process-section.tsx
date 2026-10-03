import { processSteps } from "@/constants/site-content";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="section section--process" id="process">
      <div className="section-container">
        <SectionHeading
          className="process-heading"
          description="A transparent, collaborative process designed to reduce risk and keep every decision connected to the outcome."
          eyebrow="How we work"
          title="From first question to sustained momentum."
          titleId="process-title"
        />
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li className="process-card" key={step.number}>
              <span className="process-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
