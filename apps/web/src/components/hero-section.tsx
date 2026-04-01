import { marketSummary } from "@/data/coffee-production"
import { latestPrices } from "@/data/coffee-prices"
import { TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"

export function HeroSection({ locale }: { locale: string }) {
	const s = marketSummary
	const { arabica, robusta, lastUpdated } = latestPrices

	return (
		<section className="border-b border-[var(--awake-border)]">
			{/* Header band */}
			<div className="bg-[var(--awake-surface-0)] py-10 md:py-14">
				<div className="mx-auto max-w-7xl px-6">
					<p className="label mb-3">International Coffee Intelligence</p>
					<h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[var(--awake-parchment)] md:text-5xl lg:text-6xl">
						Global Coffee Market Overview
					</h1>
					<p className="mt-3 max-w-2xl text-base text-[var(--awake-text-muted)] md:text-lg">
						Production statistics, trade flows, market prices, and consumption data
						for the world coffee economy. Crop year {s.cropYear}.
					</p>
				</div>
			</div>

			{/* Indicator bar */}
			<div className="bg-[var(--awake-surface-1)]">
				<div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-3 md:gap-10">
					{/* Prices */}
					<div className="flex items-center gap-3">
						<span className="label">Arabica</span>
						<span className="data-mono text-base font-semibold text-[var(--awake-parchment)]">
							${arabica.price.toFixed(2)}/kg
						</span>
						<span
							className={`data-mono flex items-center gap-0.5 text-xs font-medium ${
								arabica.change >= 0 ? "text-[var(--awake-leaf)]" : "text-[var(--awake-cherry)]"
							}`}
						>
							{arabica.change >= 0 ? (
								<TrendingUp className="h-3 w-3" />
							) : (
								<TrendingDown className="h-3 w-3" />
							)}
							{arabica.change >= 0 ? "+" : ""}
							{arabica.change.toFixed(1)}%
						</span>
					</div>

					<div className="h-4 w-px bg-[var(--awake-border)]" />

					<div className="flex items-center gap-3">
						<span className="label">Robusta</span>
						<span className="data-mono text-base font-semibold text-[var(--awake-parchment)]">
							${robusta.price.toFixed(2)}/kg
						</span>
						<span
							className={`data-mono flex items-center gap-0.5 text-xs font-medium ${
								robusta.change >= 0 ? "text-[var(--awake-leaf)]" : "text-[var(--awake-cherry)]"
							}`}
						>
							{robusta.change >= 0 ? (
								<TrendingUp className="h-3 w-3" />
							) : (
								<TrendingDown className="h-3 w-3" />
							)}
							{robusta.change >= 0 ? "+" : ""}
							{robusta.change.toFixed(1)}%
						</span>
					</div>

					<div className="hidden h-4 w-px bg-[var(--awake-border)] md:block" />

					{/* Key stats inline */}
					<div className="hidden items-center gap-6 md:flex">
						<div className="flex items-center gap-2">
							<span className="label">Production</span>
							<span className="data-mono text-sm text-[var(--awake-cream)]">{s.totalProduction}M bags</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="label">Exports</span>
							<span className="data-mono text-sm text-[var(--awake-cream)]">{s.totalExports}M bags</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="label">Trade</span>
							<span className="data-mono text-sm text-[var(--awake-cream)]">${s.tradeValue}B</span>
						</div>
					</div>

					<div className="ml-auto hidden md:block">
						<span className="text-[10px] text-[var(--awake-text-dim)]">
							Updated: {lastUpdated}
						</span>
					</div>
				</div>
			</div>

			{/* Quick nav */}
			<div className="bg-[var(--awake-espresso)]">
				<div className="mx-auto flex max-w-7xl gap-0 overflow-x-auto px-6">
					{[
						{ label: "Market Prices", href: `/${locale}/prices` },
						{ label: "Production Data", href: "#production" },
						{ label: "Trade Flows", href: "#trade" },
						{ label: "Consumption", href: "#consumption" },
						{ label: "Directory", href: "#directory" },
					].map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="flex-shrink-0 border-b-2 border-transparent px-4 py-3 text-xs font-medium text-[var(--awake-text-muted)] transition-colors hover:border-[var(--awake-coffee)] hover:text-[var(--awake-cream)]"
						>
							{item.label}
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
