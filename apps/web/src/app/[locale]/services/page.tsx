import { type Locale, getDictionary } from "@awake/internationalization"
import { BarChart3, Code, Brain, Cloud, Shield } from "lucide-react"
import Link from "next/link"

type Props = { params: Promise<{ locale: string }> }

export default async function ServicesPage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)
	const d = dict.services_page

	const services = [
		{ icon: BarChart3, title: d.data_intelligence_title, desc: d.data_intelligence_desc },
		{ icon: Code, title: d.software_title, desc: d.software_desc },
		{ icon: Brain, title: d.ai_title, desc: d.ai_desc },
		{ icon: Cloud, title: d.infrastructure_title, desc: d.infrastructure_desc },
		{ icon: Shield, title: d.consulting_title, desc: d.consulting_desc },
	]

	return (
		<>
			{/* Hero */}
			<section className="py-20 md:py-28">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl">
						<h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--awake-parchment)] md:text-6xl">
							{d.title}
						</h1>
						<p className="mt-4 text-xl text-[var(--awake-text-muted)]">{d.subtitle}</p>
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* Services Grid */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="stagger-in grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{services.map((svc) => (
							<div
								key={svc.title}
								className="group rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-8 transition-colors hover:border-[var(--awake-border-hover)]"
							>
								<svc.icon className="mb-4 h-6 w-6 text-[var(--awake-coffee)]" />
								<h3 className="mb-3 text-lg font-semibold text-[var(--awake-parchment)]">
									{svc.title}
								</h3>
								<p className="text-sm leading-relaxed text-[var(--awake-text-muted)]">
									{svc.desc}
								</p>
							</div>
						))}
					</div>

					<div className="mt-16 text-center">
						<Link
							href={`/${locale}/contact`}
							className="inline-flex h-12 items-center rounded-md bg-[var(--awake-coffee)] px-8 text-sm font-semibold text-[var(--awake-parchment)] transition-colors hover:bg-[var(--awake-coffee)]/90"
						>
							{d.cta}
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
