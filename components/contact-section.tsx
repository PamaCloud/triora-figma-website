import { EmailCapture } from "@/components/email-capture";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="contact-kicker">Let’s build what’s next</p>
            <h2 className="font-display text-46 font-semibold tracking-tight md:text-52" id="contact-title">
              Have a business challenge worth solving?
            </h2>
            <p>
              Tell us where you want to go. We’ll help you shape the clearest,
              most valuable path to get there.
            </p>
          </div>
          <div className="contact-action">
            <EmailCapture
              subject="Start a TrioraLabs project"
              triggerLabel="Start a conversation"
            />
            <p>We’ll respond within 1–2 business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
