import { courses } from "@/constants/site-content";
import { EmailCapture } from "@/components/email-capture";
import { SectionHeading } from "@/components/section-heading";

export function AcademySection() {
  return (
    <section aria-labelledby="academy-title" className="section section--academy" id="training">
      <div className="section-container">
        <div className="section-heading-row academy-heading-row">
          <div>
            <div className="academy-status">
              <span aria-hidden="true" />
              Launching Soon
            </div>
            <SectionHeading
              description="Practical, mentor-led technology training built around real tools, real workflows, and industry-ready project experience."
              eyebrow="Professional academy"
              title="Learn the skills teams hire for."
              titleId="academy-title"
            />
          </div>
          <EmailCapture
            compact
            subject="TrioraLabs Academy waitlist"
            triggerLabel="Join the waitlist"
          />
        </div>
        <ul className="course-grid">
          {courses.map((course) => (
            <li className="course-card" key={course.number}>
              <span>{course.number}</span>
              <h3>{course.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
