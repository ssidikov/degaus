"use client";

import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";

interface Heading {
  id: string;
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5";
}

interface TableOfContentsProps {
  body: PortableTextBlock[];
}

// Extract headings from Portable Text body
function extractHeadings(body: PortableTextBlock[]): Heading[] {
  const headings: Heading[] = [];

  body.forEach((block) => {
    if (
      block._type === "block" &&
      (block.style === "h1" ||
        block.style === "h2" ||
        block.style === "h3" ||
        block.style === "h4" ||
        block.style === "h5")
    ) {
      const children = block.children as unknown as { text?: string }[];
      const text = children.map((child) => child.text || "").join("");

      if (text) {
        // Create ID from text (same method used in RichTextRenderer)
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        headings.push({
          id,
          text,
          level: block.style as "h1" | "h2" | "h3" | "h4" | "h5",
        });
      }
    }
  });

  return headings;
}

// Get indentation based on heading level
function getIndentation(level: string): string {
  const indentMap: Record<string, string> = {
    h1: "pl-2",
    h2: "pl-4",
    h3: "pl-6",
    h4: "pl-8",
    h5: "pl-10",
  };
  return indentMap[level] || "pl-3";
}

export default function TableOfContents({ body }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(body);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" },
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="text-sm font-semibold text-gray-900 mb-4">On this page</p>
      <ul className="space-y-2 border-l-2 border-gray-200">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`block w-full text-left text-sm transition-colors ${getIndentation(
                level,
              )} ${
                activeId === id
                  ? "text-gray-900 font-medium border-l-2 border-gray-900 -ml-[2px]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
