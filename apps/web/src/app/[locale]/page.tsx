import { HeroSection } from "@/components/hero-section"
import { NewsCarousel } from "@/components/news-carousel"
import { ProductionChart } from "@/components/production-chart"
import { ProductionTrendChart } from "@/components/production-trend-chart"
import { ConsumptionChart } from "@/components/consumption-chart"
import { TradeFlowChart } from "@/components/trade-flow-chart"
import { MiniPriceChart } from "@/components/mini-price-chart"
import { DirectoryPreview } from "@/components/directory-preview"
import { type Locale, getDictionary } from "@awake/internationalization"
import Link from "next/link"

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)

	return (
		<>
			{/* Institutional header with market indicators */}
			<HeroSection locale={locale} />

			{/* News carousel */}
			<NewsCarousel />

			{/* ── Market Dashboard ── */}
			<section id="production" className="py-16 md:py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-10">
						<p className="label mb-2">Market Data</p>
						<h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--awake-parchment)] md:text-3xl">
							Global Coffee Dashboard
						</h2>
						<p className="mt-2 max-w-xl text-sm text-[var(--awake-text-muted)]">
							Production, consumption, and trade statistics compiled from ICO, World Bank,
							USDA PSD, and UN Comtrade datasets.
						</p>
					</div>

					{/* Row 1: Price chart + Production trend */}
					<div className="grid gap-6 md:grid-cols-2">
						<div className="rounded-lg border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-5">
							<MiniPriceChart />
						</div>
						<div className="rounded-lg border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-5">
							<ProductionTrendChart />
						</div>
					</div>

					{/* Row 2: Top producers (wide) */}
					<div className="mt-6 rounded-lg border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-5">
						<ProductionChart />
					</div>

					{/* Row 3: Trade flows + Consumption */}
					<div id="trade" className="mt-6 grid gap-6 md:grid-cols-2">
						<div id="consumption" className="rounded-lg border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-5">
							<TradeFlowChart />
						</div>
						<div className="rounded-lg border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-5">
							<ConsumptionChart />
						</div>
					</div>

					{/* Source attribution */}
					<div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1">
						<span className="text-[10px] font-medium text-[var(--awake-text-dim)]">Sources:</span>
						{["World Bank Pink Sheet", "ICO Historical Data", "USDA PSD", "FAOSTAT", "UN Comtrade"].map((src) => (
							<span key={src} className="text-[10px] text-[var(--awake-text-dim)]">{src}</span>
						))}
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* ── Directory ── */}
			<DirectoryPreview locale={locale} />

			<div aria-hidden="true" className="coffee-divider" />

			{/* ── Services (institutional) ── */}
			<section className="py-16 md:py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-10">
						<p className="label mb-2">Services & Capabilities</p>
						<h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--awake-parchment)] md:text-3xl">
							Research & Advisory
						</h2>
					</div>

					<div className="grid gap-px overflow-hidden rounded-lg border border-[var(--awake-border)] bg-[var(--awake-border)] md:grid-cols-3">
						{[
							{
								title: "Data Intelligence",
								desc: "Custom market reports, price forecasting models, and trade flow analysis built on decades of historical data from authoritative global institutions.",
							},
							{
								title: "Technology Solutions",
								desc: "Software development, data engineering, AI integration, and cloud infrastructure. Custom platforms for market monitoring, supply chain analytics, and reporting.",
							},
							{
								title: "Strategic Advisory",
								desc: "Market entry strategy, supply chain optimization, sourcing partnerships, and regulatory compliance across 70+ producing and 140+ importing countries.",
							},
						].map((svc) => (
							<div
								key={svc.title}
								className="bg-[var(--awake-surface-1)] p-6 md:p-8"
							>
								<h3 className="mb-2 text-sm font-semibold text-[var(--awake-parchment)]">
									{svc.title}
								</h3>
								<p className="text-[13px] leading-relaxed text-[var(--awake-text-muted)]">
									{svc.desc}
								</p>
							</div>
						))}
					</div>

					<div className="mt-6">
						<Link
							href={`/${locale}/services`}
							className="text-[13px] font-medium text-[var(--awake-water)] hover:underline"
						>
							View all services &rarr;
						</Link>
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* ── About band ── */}
			<section className="py-16 md:py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-10 md:grid-cols-2">
						<div>
							<p className="label mb-2">About AWAKE</p>
							<h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--awake-parchment)] md:text-3xl">
								Coffee Intelligence for the Global Economy
							</h2>
						</div>
						<div>
							<p className="text-sm leading-relaxed text-[var(--awake-cream)]">
								AWAKE compiles and analyzes data from the International Coffee Organization, World Bank,
								USDA, FAOSTAT, and UN Comtrade to provide comprehensive market intelligence on the
								global coffee trade. Based in Baku, Azerbaijan, we serve researchers, traders, roasters,
								and policymakers worldwide.
							</p>
							<Link
								href={`/${locale}/about`}
								className="mt-4 inline-block text-[13px] font-medium text-[var(--awake-water)] hover:underline"
							>
								Read more &rarr;
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
