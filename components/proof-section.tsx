import { proofPoints } from "@/constants/site-content";

export function ProofSection() {
  return (
    <section aria-label="Our approach" className="proof-section">
      <div className="proof-section__inner">
        <h2 className="proof-heading">
          A practical technology partner for ambitious teams.
        </h2>
        <ul className="proof-points">
          {proofPoints.map((point) => (
            <li className="proof-point" key={point.title}>
              <span aria-hidden="true" className="proof-point__mark">
                +
              </span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
