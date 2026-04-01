import { BarChart3, Globe, Package, Users } from "lucide-react"

type StatsDict = {
	title: string
	subtitle: string
	production: string
	production_value: string
	production_unit: string
	consumption: string
	consumption_value: string
	consumption_unit: string
	trade_value: string
	trade_value_amount: string
	trade_value_unit: string
	countries: string
	countries_value: string
	countries_unit: string
}

export function StatsSection({ dict }: { dict: StatsDict }) {
	const stats = [
		{
			icon: Package,
			label: dict.production,
			value: dict.production_value,
			unit: dict.production_unit,
		},
		{
			icon: Users,
			label: dict.consumption,
			value: dict.consumption_value,
			unit: dict.consumption_unit,
		},
		{
			icon: BarChart3,
			label: dict.trade_value,
			value: dict.trade_value_amount,
			unit: dict.trade_value_unit,
		},
		{
			icon: Globe,
			label: dict.countries,
			value: dict.countries_value,
			unit: dict.countries_unit,
		},
	]

	return (
		<section id="stats" className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--awake-parchment)] md:text-4xl">
						{dict.title}
					</h2>
					<p className="mt-4 text-[var(--awake-text-muted)]">{dict.subtitle}</p>
				</div>

				<div className="stagger-in mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="group rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-6 transition-colors hover:border-[var(--awake-border-hover)]"
						>
							<stat.icon className="mb-4 h-5 w-5 text-[var(--awake-coffee)]" />
							<p className="label">{stat.label}</p>
							<p className="data-mono mt-2 text-3xl font-bold text-[var(--awake-parchment)]">
								{stat.value}
							</p>
							<p className="mt-1 text-sm text-[var(--awake-text-muted)]">{stat.unit}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
