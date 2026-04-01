import { BarChart3, Code, Brain, Cloud } from "lucide-react"
import Link from "next/link"

type ServicesDict = {
	title: string
	subtitle: string
	data_title: string
	data_desc: string
	tech_title: string
	tech_desc: string
	consulting_title: string
	consulting_desc: string
	storage_title: string
	storage_desc: string
}

export function ServicesPreview({ dict, locale }: { dict: ServicesDict; locale: string }) {
	const services = [
		{ icon: BarChart3, title: dict.data_title, desc: dict.data_desc },
		{ icon: Code, title: dict.tech_title, desc: dict.tech_desc },
		{ icon: Brain, title: dict.consulting_title, desc: dict.consulting_desc },
		{ icon: Cloud, title: dict.storage_title, desc: dict.storage_desc },
	]

	return (
		<section id="services" className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--awake-parchment)] md:text-4xl">
						{dict.title}
					</h2>
					<p className="mt-4 text-[var(--awake-text-muted)]">{dict.subtitle}</p>
				</div>

				<div className="stagger-in mt-14 grid gap-6 md:grid-cols-2">
					{services.map((svc) => (
						<div
							key={svc.title}
							className="group rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-8 transition-colors hover:border-[var(--awake-border-hover)]"
						>
							<svc.icon className="mb-4 h-6 w-6 text-[var(--awake-coffee)]" />
							<h3 className="mb-2 text-lg font-semibold text-[var(--awake-parchment)]">
								{svc.title}
							</h3>
							<p className="text-sm leading-relaxed text-[var(--awake-text-muted)]">
								{svc.desc}
							</p>
						</div>
					))}
				</div>

				<div className="mt-10 text-center">
					<Link
						href={`/${locale}/services`}
						className="inline-flex h-10 items-center rounded-md border border-[var(--awake-border)] px-6 text-sm font-medium text-[var(--awake-cream)] transition-colors hover:border-[var(--awake-border-hover)] hover:bg-[var(--awake-surface-1)]"
					>
						View All Services
					</Link>
				</div>
			</div>
		</section>
	)
}
