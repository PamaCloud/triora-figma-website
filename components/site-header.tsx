"use client";

import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { navigationLinks } from "@/constants/site-content";
import { Brand } from "@/components/brand";
import { ArrowUpRight, Menu, X } from "@/components/icons";

export function SiteHeader() {
  const menu = useMobileMenu();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand />
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navigationLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Start a project
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menu.isOpen}
          aria-label={menu.isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={menu.toggle}
          type="button"
        >
          {menu.isOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
          <span>{menu.isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <nav
        aria-hidden={!menu.isOpen}
        aria-label="Mobile navigation"
        className={`mobile-nav-panel${menu.isOpen ? " is-open" : ""}`}
        id="mobile-navigation"
      >
        {navigationLinks.map((link) => (
          <a
            className="mobile-nav-link"
            href={link.href}
            key={link.href}
            onClick={menu.close}
            tabIndex={menu.isOpen ? 0 : -1}
          >
            {link.label}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        ))}
      </nav>
    </header>
  );
}
