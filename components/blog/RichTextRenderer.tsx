import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImageWithDimensions } from "@/sanity/imageUrl";
import { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  types: {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    image: ({ value }: any) => {
      /* eslint-enable @typescript-eslint/no-explicit-any */
      if (!value?.asset?._ref) return null;
      const imageUrl = urlForImageWithDimensions(value, 1200, 800)
        .quality(90)
        .url();

      return (
        <figure className="my-8 blog-image-breakout">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    h2: ({ children, value }: any) => {
      const text =
        value?.children?.map((child: any) => child.text || "").join("") || "";
      /* eslint-enable @typescript-eslint/no-explicit-any */
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return (
        <h2
          id={id}
          className="mt-8 mb-4 text-3xl font-bold font-bricolage text-gray-900"
        >
          {children}
        </h2>
      );
    },
    /* eslint-disable @typescript-eslint/no-explicit-any */
    h3: ({ children, value }: any) => {
      const text =
        value?.children?.map((child: any) => child.text || "").join("") || "";
      /* eslint-enable @typescript-eslint/no-explicit-any */
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return (
        <h3
          id={id}
          className="mt-6 mb-3 text-2xl font-bold font-bricolage text-gray-900"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mt-5 mb-2 text-xl font-bold font-bricolage text-gray-900">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-xl leading-6 tracking-[-0.6px] text-gray-700 font-semibold">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <div className="my-8 border-l-4 border-[#492BDA] bg-purple-50 pl-6 py-5 italic text-xl text-gray-800 font-semibold rounded-r-lg">
        {children}
      </div>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-xl leading-6 tracking-[-0.6px] text-gray-700 font-semibold">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-xl leading-6 tracking-[-0.6px] text-gray-700 font-semibold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="pl-2">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sm text-[#492BDA]">
        {children}
      </code>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string; blank?: boolean };
      children?: React.ReactNode;
    }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;

      return (
        <a
          href={value?.href || "#"}
          target={target}
          rel={rel}
          className="blog-link-neutral font-medium"
        >
          {children}
        </a>
      );
    },
  },
};

interface RichTextRendererProps {
  value: PortableTextBlock[];
}

export default function RichTextRenderer({ value }: RichTextRendererProps) {
  if (!value || !Array.isArray(value)) return null;

  return <PortableText value={value} components={components} />;
}
