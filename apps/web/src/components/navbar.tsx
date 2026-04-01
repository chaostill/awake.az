import Link from "next/link"
import { Coffee, Menu, X } from "lucide-react"

type NavDict = {
	home: string
	prices: string
	about: string
	services: string
	contact: string
	directory: string
	blog: string
	join: string
}

export function Navbar({ dict, locale }: { dict: NavDict; locale: string }) {
	const links = [
		{ href: `/${locale}`, label: dict.home },
		{ href: `/${locale}/prices`, label: dict.prices },
		{ href: `/${locale}/about`, label: dict.about },
		{ href: `/${locale}/services`, label: dict.services },
		{ href: `/${locale}/contact`, label: dict.contact },
	]

	return (
		<nav className="sticky top-0 z-50 border-b border-[var(--awake-border)] bg-[var(--awake-espresso)]/95 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				{/* Logo */}
				<Link href={`/${locale}`} className="flex items-center gap-2.5">
					<Coffee className="h-5 w-5 text-[var(--awake-coffee)]" />
					<span className="font-[family-name:var(--font-display)] text-xl text-[var(--awake-parchment)]">
						AWAKE
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-[var(--awake-cream)] transition-colors hover:text-[var(--awake-parchment)]"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Right side */}
				<div className="flex items-center gap-4">
					{/* Locale switcher */}
					<div className="hidden items-center gap-1 md:flex">
						{["en", "az", "ru"].map((l) => (
							<Link
								key={l}
								href={`/${l}`}
								className={`rounded px-2 py-1 text-xs font-medium uppercase transition-colors ${
									l === locale
										? "bg-[var(--awake-surface-2)] text-[var(--awake-parchment)]"
										: "text-[var(--awake-text-muted)] hover:text-[var(--awake-cream)]"
								}`}
							>
								{l}
							</Link>
						))}
					</div>

					{/* CTA */}
					<Link
						href={`/${locale}/contact`}
						className="hidden rounded-md bg-[var(--awake-coffee)] px-4 py-2 text-sm font-medium text-[var(--awake-parchment)] transition-colors hover:bg-[var(--awake-coffee)]/90 md:block"
					>
						{dict.join}
					</Link>
				</div>
			</div>
		</nav>
	)
}
