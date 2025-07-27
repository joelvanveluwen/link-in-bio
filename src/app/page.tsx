"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import linkedinIcon from "@/assets/linkedin.png";
import githubIcon from "@/assets/github.png";
import instagramIcon from "@/assets/instagram.png";
import headshotImage from "@/assets/joel-headshot-cuphead.png";

export default function HomePage() {
  const [gradientPosition, setGradientPosition] = useState(0);

  // Slow, fluid gradient animation
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 0.5) % 360);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const workLinks = [
    {
      title: "Linkedin Profile",
      url: "https://www.linkedin.com/in/joelvanveluwen/",
    },
    { title: "GitHub Profile", url: "https://github.com/joelvanveluwen" },
    { title: "Email", url: "mailto:joel.vanveluwen@gmail.com" },
  ];

  const creativeLinks = [
    {
      title: "Drone Photography",
      url: "https://www.instagram.com/vanveluwen/",
    },
    { title: "Print Store", url: "/print-store" },
  ];

  const otherLinks = [
    {
      title: "Editor for TLDR Data Newsletter, sign up here",
      url: "https://tldr.tech/data",
    },
    { title: "Microblog", url: "/microblog" },
  ];

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "32px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "32px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "16px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    textAlign: "center" as const,
    color: "#1f2937",
    fontWeight: "300",
    textDecoration: "none",
    marginBottom: "12px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const profileImageStyle = {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    marginBottom: "24px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    objectFit: "cover" as const,
  };

  const containerStyle = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background: `linear-gradient(${gradientPosition}deg, #3b82f6, #60a5fa, #93c5fd, #ffffff)`,
  };

  const socialIconStyle = {
    width: "32px",
    height: "32px",
    margin: "0 16px",
    transition: "all 0.3s ease",
    filter:
      "brightness(0) saturate(100%) invert(27%) sepia(13%) saturate(610%) hue-rotate(169deg) brightness(95%) contrast(89%)",
    opacity: 0.8,
  };

  const footerStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '14px',
    textAlign: 'center' as const,
    fontFamily: '"Bitcount Prop Single", system-ui',
  };

  const footerLinkStyle = {
    color: "rgba(255, 255, 255, 0.95)",
    textDecoration: "underline",
  };

  return (
  <div style={containerStyle}>
      {/* Main Card */}
      <div style={cardStyle}>
        {/* Profile Image */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={headshotImage}
            alt="Joel Van Veluwen"
            width={96}
            height={96}
            style={profileImageStyle}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "400",
            color: "#111827",
            textAlign: "center",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          Joel Van Veluwen
        </h1>

        {/* Bio */}
        <p
          style={{
            color: "#374151",
            textAlign: "center",
            fontSize: "18px",
            marginBottom: "32px",
            lineHeight: "1.6",
            fontWeight: "300",
          }}
        >
          Data Leader building AI agents to wrangle metrics into decisions.
        </p>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <a
            href="https://www.instagram.com/vanveluwen/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", margin: "0 16px" }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1.2)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(1347%) hue-rotate(201deg) brightness(97%) contrast(86%)";
                img.style.opacity = "1";
              }
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(27%) sepia(13%) saturate(610%) hue-rotate(169deg) brightness(95%) contrast(89%)";
                img.style.opacity = "0.8";
              }
            }}
          >
            <Image
              src={instagramIcon}
              alt="Instagram"
              width={32}
              height={32}
              style={socialIconStyle}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joelvanveluwen/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", margin: "0 16px" }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1.2)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(1347%) hue-rotate(201deg) brightness(97%) contrast(86%)";
                img.style.opacity = "1";
              }
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(27%) sepia(13%) saturate(610%) hue-rotate(169deg) brightness(95%) contrast(89%)";
                img.style.opacity = "0.8";
              }
            }}
          >
            <Image
              src={linkedinIcon}
              alt="LinkedIn"
              width={32}
              height={32}
              style={socialIconStyle}
            />
          </a>
          <a
            href="https://github.com/joelvanveluwen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", margin: "0 16px" }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1.2)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(1347%) hue-rotate(201deg) brightness(97%) contrast(86%)";
                img.style.opacity = "1";
              }
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.transform = "scale(1)";
                img.style.filter =
                  "brightness(0) saturate(100%) invert(27%) sepia(13%) saturate(610%) hue-rotate(169deg) brightness(95%) contrast(89%)";
                img.style.opacity = "0.8";
              }
            }}
          >
            <Image
              src={githubIcon}
              alt="GitHub"
              width={32}
              height={32}
              style={socialIconStyle}
            />
          </a>
        </div>

        {/* Work Section */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#111827",
              textAlign: "center",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Work
          </h2>
          <div>
            {workLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{...buttonStyle, textTransform: "uppercase"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Creative Section */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#111827",
              textAlign: "center",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Creative
          </h2>
          <div>
            {creativeLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{...buttonStyle, textTransform: "uppercase"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#111827",
              textAlign: "center",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Other
          </h2>
          <div>
            {otherLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{...buttonStyle, textTransform: "uppercase"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <p style={{ 
          fontFamily: '"Bitcount Prop Single", system-ui',
          fontWeight: '400',
        }}>
          🛠️ by Joel, helped by Robots, to the tunes of{" "}
          <a
            href="https://open.spotify.com/playlist/3NNewboKoq32me4F27biPi?si=ab474ed191344f44"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            Civil War Ext
          </a>
        </p>
      </div>
    </div>
  );
}
