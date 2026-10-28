"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const overPhoto = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  // the bar is clear over the home hero's sky and turns to slate glass once it leaves it
  useEffect(() => {
    if (!overPhoto) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 48));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [overPhoto]);

  const isActive = (href: string) =>
    pathname === href || pathname === `${href}/` || pathname.startsWith(`${href}/`);

  return (
    <header className="nav" data-over={overPhoto && !scrolled ? "true" : "false"}>
      <div className="container nav__inner">
        <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav__link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
