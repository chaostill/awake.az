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
			<div className="mx-auto max-w-7xl px-6 py-12">
				<div className="grid gap-10 md:grid-cols-4">
					{/* Brand */}
					<div className="md:col-span-1">
						<div className="flex items-center gap-2">
							<Coffee className="h-4 w-4 text-[var(--awake-coffee)]" />
							<span className="font-[family-name:var(--font-display)] text-lg text-[var(--awake-parchment)]">
								AWAKE
							</span>
						</div>
						<p className="mt-2 text-xs leading-relaxed text-[var(--awake-text-muted)]">
							Global coffee market intelligence. Production data, trade analytics, price monitoring,
							and consumption statistics compiled from authoritative international sources.
						</p>
					</div>

					{/* Navigate */}
					<div>
						<h4 className="label mb-3">{dict.nav_title}</h4>
						<ul className="space-y-2">
							{[
								["Market Overview", `/${locale}`],
								["Price Data", `/${locale}/prices`],
								["Services", `/${locale}/services`],
								["About", `/${locale}/about`],
								["Contact", `/${locale}/contact`],
							].map(([label, href]) => (
								<li key={href}>
									<Link
										href={href}
										className="text-xs text-[var(--awake-cream)] transition-colors hover:text-[var(--awake-parchment)]"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Data Sources */}
					<div>
						<h4 className="label mb-3">{dict.data_title}</h4>
						<ul className="space-y-2">
							{[
								"International Coffee Organization",
								"World Bank Pink Sheet",
								"USDA Production, Supply & Distribution",
								"FAOSTAT",
								"UN Comtrade (HS 0901)",
							].map((src) => (
								<li key={src}>
									<span className="text-xs text-[var(--awake-text-muted)]">{src}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="label mb-3">{dict.company_title}</h4>
						<ul className="space-y-2">
							<li>
								<span className="text-xs text-[var(--awake-text-muted)]">Baku, Azerbaijan</span>
							</li>
							<li>
								<a
									href="mailto:hello@awake.az"
									className="text-xs text-[var(--awake-water)] hover:underline"
								>
									hello@awake.az
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--awake-border)] pt-6 md:flex-row">
					<p className="text-[10px] text-[var(--awake-text-dim)]">{dict.copyright}</p>
					<p className="text-[10px] text-[var(--awake-text-dim)]">
						Data provided for informational purposes. Not financial advice.
					</p>
				</div>
			</div>
		</footer>
	)
}
