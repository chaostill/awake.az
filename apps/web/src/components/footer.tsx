import Link from "next/link"
import { Coffee } from "lucide-react"

type FooterDict = {
	brand: string
	tagline: string
	nav_title: string
	data_title: string
	company_title: string
	copyright: string
	built: string
}

export function Footer({ dict, locale }: { dict: FooterDict; locale: string }) {
	return (
		<footer className="border-t border-[var(--awake-border)] bg-[var(--awake-surface-0)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-4">
					{/* Brand */}
					<div className="md:col-span-1">
						<div className="flex items-center gap-2.5">
							<Coffee className="h-5 w-5 text-[var(--awake-coffee)]" />
							<span className="font-[family-name:var(--font-display)] text-xl text-[var(--awake-parchment)]">
								{dict.brand}
							</span>
						</div>
						<p className="mt-3 text-sm text-[var(--awake-text-muted)]">{dict.tagline}</p>
					</div>

					{/* Navigate */}
					<div>
						<h4 className="label mb-4">{dict.nav_title}</h4>
						<ul className="space-y-2.5">
							{[
								["Home", `/${locale}`],
								["Prices", `/${locale}/prices`],
								["About", `/${locale}/about`],
								["Services", `/${locale}/services`],
							].map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="text-sm text-[var(--awake-cream)] transition-colors hover:text-[var(--awake-parchment)]"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Data */}
					<div>
						<h4 className="label mb-4">{dict.data_title}</h4>
						<ul className="space-y-2.5">
							{["World Bank", "ICO", "UN Comtrade", "USDA PSD", "FAOSTAT"].map((src) => (
								<li key={src}>
									<span className="text-sm text-[var(--awake-text-muted)]">{src}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h4 className="label mb-4">{dict.company_title}</h4>
						<ul className="space-y-2.5">
							{[
								["Contact", `/${locale}/contact`],
							].map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="text-sm text-[var(--awake-cream)] transition-colors hover:text-[var(--awake-parchment)]"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--awake-border)] pt-8 md:flex-row">
					<p className="text-xs text-[var(--awake-text-dim)]">{dict.copyright}</p>
					<p className="text-xs text-[var(--awake-text-dim)]">{dict.built}</p>
				</div>
			</div>
		</footer>
	)
}
