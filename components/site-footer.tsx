import { Brand } from "@/components/brand";
import { navigationLinks } from "@/constants/site-content";
import { site } from "@/lib/site";

const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Web Applications", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Support", href: "#services" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "Upcoming Courses", href: "#training" },
      { label: "Industry Projects", href: "#training" },
      { label: "Join the Waitlist", href: "#training" },
      { label: "Training Enquiries", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand footer />
            <p>{site.description}</p>
            <a className="footer-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="footer-availability">Remote · Available worldwide</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            <div className="footer-group">
              <h2>Navigate</h2>
              {navigationLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            {footerGroups.map((group) => (
              <div className="footer-group" key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <a href={link.href} key={`${group.title}-${link.label}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-legal">
          <p>© {new Date().getFullYear()} TrioraLabs. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
