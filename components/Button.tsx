import React from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "neutral" | "primary" | "outline" | "ghost";
type ButtonSize = "small" | "base" | "large";

type CommonButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps = CommonButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children" | "color"
  > &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-bold whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

const sizeClasses: Record<ButtonSize, string> = {
  small: "text-lg px-4 pb-2 pt-1.5",
  base: "text-xl px-6 pb-2.5 pt-2",
  large: "text-2xl px-8 pt-2 pb-3",
};

const variantClasses: Record<ButtonVariant, string> = {
  neutral: "bg-[#333] text-white hover:bg-gray-700",
  primary:
    "text-white bg-gradient-to-r from-0% from-[#2D30DD] to-[#EF75CF] hover:to-90%",
  outline:
    "border border-white/20 text-white hover:bg-white/10 focus:ring-white/20",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

export function Button({
  variant = "neutral",
  size = "base",
  className,
  children,
  href,
  external,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export default Button;
