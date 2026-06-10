import Image, { type StaticImageData } from "next/image";
import githubIcon from "@/assets/github.png";
import instagramIcon from "@/assets/instagram.png";
import linkedinIcon from "@/assets/linkedin.png";
import headshotImage from "@/assets/joel-headshot-cuphead.png";

type TextLink = {
  title: string;
  url: string;
  note?: string;
  icon?: StaticImageData | "x";
};

const socialLinks: TextLink[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/vanveluwen/",
    icon: instagramIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/joelvanveluwen/",
    icon: linkedinIcon,
  },
  {
    title: "X",
    url: "https://x.com/vanveluwen",
    icon: "x",
  },
];

const workLinks: TextLink[] = [
  {
    title: "Hurdle",
    note: "Know what to do next",
    url: "https://www.hurdle.ai/",
  },
  {
    title: "LinkedIn",
    note: "Profile",
    url: "https://www.linkedin.com/in/joelvanveluwen/",
  },
  {
    title: "Talk stuff",
    note: "joel.vanveluwen@gmail.com",
    url: "mailto:joel.vanveluwen@gmail.com",
  },
  {
    title: "Talk AI and Sales",
    note: "joel@hurdle.ai",
    url: "mailto:joel@hurdle.ai",
  },
  {
    title: "GitHub personal",
    note: "github.com/vanveluwen",
    url: "https://github.com/vanveluwen",
    icon: githubIcon,
  },
  {
    title: "GitHub work",
    note: "github.com/joelvanveluwen",
    url: "https://github.com/joelvanveluwen",
    icon: githubIcon,
  },
];

const otherLinks: TextLink[] = [
  {
    title: "Drone Photography",
    note: "Ooo pretty photos from the sky",
    url: "https://www.instagram.com/vanveluwen/",
  },
  {
    title: "TLDR Data Newsletter",
    note: "Editor",
    url: "https://tldr.tech/data",
  },
];

function externalTarget(url: string) {
  return url.startsWith("http") ? "_blank" : undefined;
}

function externalRel(url: string) {
  return url.startsWith("http") ? "noopener noreferrer" : undefined;
}

function Icon({ icon, title }: Pick<TextLink, "icon" | "title">) {
  if (!icon) {
    return null;
  }

  if (icon === "x") {
    return (
      <span className="social-mark" aria-hidden="true">
        X
      </span>
    );
  }

  return (
    <Image
      className="link-icon"
      src={icon}
      alt=""
      width={18}
      height={18}
      aria-hidden="true"
    />
  );
}

function LinkRow({ link }: { link: TextLink }) {
  return (
    <a
      className="link-row"
      href={link.url}
      target={externalTarget(link.url)}
      rel={externalRel(link.url)}
    >
      <span className="link-title">
        <Icon icon={link.icon} title={link.title} />
        <strong>{link.title}</strong>
      </span>
      {link.note ? <span className="link-note">{link.note}</span> : null}
    </a>
  );
}

function Section({ title, links }: { title: string; links: TextLink[] }) {
  return (
    <section className="link-section" aria-labelledby={`${title}-heading`}>
      <h2 id={`${title}-heading`}>{title}</h2>
      <div className="link-stack">
        {links.map((link) => (
          <LinkRow key={`${title}-${link.title}`} link={link} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <aside className="bio-column" aria-label="Joel Van Veluwen links">
        <header className="intro">
          <Image
            className="avatar"
            src={headshotImage}
            alt="Joel Van Veluwen"
            width={72}
            height={72}
            priority
          />
          <h1 className="name">
            Joel <strong>Van Veluwen</strong>
          </h1>
          <p className="headline">
            Building <strong>Hurdle</strong> to help sales people make better
            decisions with data
          </p>
          <nav className="socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target={externalTarget(link.url)}
                rel={externalRel(link.url)}
                aria-label={link.title}
              >
                <Icon icon={link.icon} title={link.title} />
              </a>
            ))}
          </nav>
        </header>

        <Section title="Work" links={workLinks} />
        <Section title="Other" links={otherLinks} />

        <footer>
          by Joel, helped by Robots
        </footer>
      </aside>
    </main>
  );
}
