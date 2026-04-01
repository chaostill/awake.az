import Link from "next/link"
import { Coffee } from "lucide-react"

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
		{ href: `/${locale}/services`, label: dict.services },
		{ href: `/${locale}/about`, label: dict.about },
		{ href: `/${locale}/contact`, label: dict.contact },
	]

	return (
		<nav className="sticky top-0 z-50 border-b border-[var(--awake-border)] bg-[var(--awake-espresso)]/95 backdrop-blur-md">
			<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
				{/* Logo */}
				<Link href={`/${locale}`} className="flex items-center gap-2">
					<Coffee className="h-4 w-4 text-[var(--awake-coffee)]" />
					<span className="font-[family-name:var(--font-display)] text-lg text-[var(--awake-parchment)]">
						AWAKE
					</span>
					<span className="hidden text-[10px] font-medium tracking-widest text-[var(--awake-text-muted)] uppercase sm:inline">
						Coffee Intelligence
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden items-center gap-6 md:flex">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-[13px] text-[var(--awake-cream)] transition-colors hover:text-[var(--awake-parchment)]"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Right side */}
				<div className="flex items-center gap-3">
					{/* Locale switcher */}
					<div className="flex items-center gap-0.5">
						{(["en", "az", "ru"] as const).map((l) => (
							<Link
								key={l}
								href={`/${l}`}
								className={`rounded px-1.5 py-1 text-[11px] font-medium uppercase transition-colors ${
									l === locale
										? "bg-[var(--awake-surface-2)] text-[var(--awake-parchment)]"
										: "text-[var(--awake-text-dim)] hover:text-[var(--awake-cream)]"
								}`}
							>
								{l}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}
