import Image from "next/image";
import Link from "next/link";

interface AuthShellProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footer: React.ReactNode;
  quote: { text: string; author: string };
}

export default function AuthShell({
  children,
  title,
  subtitle,
  footer,
  quote,
}: AuthShellProps) {
  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-[1.05fr_1fr]">
      {/* Left — image */}
      <aside className="relative hidden lg:block overflow-hidden bg-[#2c2420]">
        <Image
          src="/auth.png"
          alt="Curated gift box"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2420]/90 via-[#2c2420]/25 to-transparent" />

        <div className="relative flex h-full flex-col justify-between p-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-white/90 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 text-[10px] font-semibold tracking-[0.2em]">
              B
            </span>
            <span className="text-sm font-medium tracking-[0.22em] uppercase">
              Box &amp; tale
            </span>
          </Link>

          <figure className="max-w-md">
            <blockquote className="text-2xl leading-snug font-light tracking-wide text-white">
              {quote.text}
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">
              {quote.author}
            </figcaption>
          </figure>
        </div>
      </aside>

      {/* Right — form */}
      <section className="flex items-center justify-center bg-[#faf8f2] px-6 py-14 sm:px-10">
        <div className="w-full max-w-[26rem]">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2.5 text-[#2c2420] lg:hidden"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d8cfc5] text-[10px] font-semibold tracking-[0.2em]">
              B
            </span>
            <span className="text-sm font-medium tracking-[0.22em] uppercase">
              Box &amp; tale
            </span>
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-light tracking-wide text-[#2c2420]">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#8a7560]">
              {subtitle}
            </p>
          </header>

          {children}

          <div className="mt-8 text-center text-sm text-[#8a7560]">{footer}</div>
        </div>
      </section>
    </div>
  );
}