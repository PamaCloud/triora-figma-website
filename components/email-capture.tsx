"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

interface EmailCaptureProps {
  triggerLabel: string;
  subject: string;
  compact?: boolean;
}

export function EmailCapture({
  triggerLabel,
  subject,
  compact = false,
}: EmailCaptureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email");

    if (!(emailInput instanceof HTMLInputElement) || !emailInput.validity.valid) {
      setError("Enter a valid email address to continue.");
      if (emailInput instanceof HTMLInputElement) {
        emailInput.focus();
      }
      return;
    }

    setError("");
    setStatus(
      "Your email app should open with a draft. Send the message there to complete your request.",
    );
    const body = `Please contact me at ${email}.`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className={`email-capture${compact ? " email-capture--compact" : ""}`}>
      <button
        aria-expanded={isOpen}
        className={compact ? "button-link button-link--primary" : "button-link button-link--light"}
        onClick={() => {
          setIsOpen((open) => !open);
          setStatus("");
        }}
        type="button"
      >
        <span>{triggerLabel}</span>
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
      {isOpen && (
        <form className="email-capture__form" noValidate onSubmit={submit}>
          <label className="sr-only" htmlFor={`email-${subject.replaceAll(" ", "-")}`}>
            Your email address
          </label>
          <div className="email-capture__controls">
            <input
              aria-describedby={
                error
                  ? "email-capture-error"
                  : status
                    ? "email-capture-status"
                    : undefined
              }
              aria-invalid={Boolean(error)}
              autoComplete="email"
              id={`email-${subject.replaceAll(" ", "-")}`}
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
                setStatus("");
              }}
              placeholder="you@company.com"
              required
              type="email"
              value={email}
            />
            <button className="email-capture__submit" type="submit">
              Continue
            </button>
          </div>
          {error && (
            <p className="form-message form-message--error" id="email-capture-error" role="alert">
              {error}
            </p>
          )}
          {status && (
            <p className="form-message" id="email-capture-status" role="status">
              {status}{" "}
              <a href={`mailto:${site.email}`} className="form-message__link">
                Email us directly.
              </a>
            </p>
          )}
        </form>
      )}
    </div>
  );
}
